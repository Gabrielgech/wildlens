import { useCallback, useEffect, useRef, useState } from 'react'

const CATEGORY_FREQUENCIES: Record<string, number> = {
  birds: 880,
  fauna: 880,
  mammals: 220,
  reptiles: 110
}

function getToneProps(soundType: string, category: string) {
  const normalizedCategory = (category || '').toLowerCase()
  const baseFrequency = CATEGORY_FREQUENCIES[normalizedCategory] ?? 440

  switch (soundType) {
    case 'alert':
      return { type: 'sawtooth' as OscillatorType, frequency: 660, duration: 0.95 }
    case 'mating':
      return { type: 'sine' as OscillatorType, frequency: baseFrequency, duration: 1.5 }
    case 'juvenile':
      return { type: 'sine' as OscillatorType, frequency: baseFrequency * 1.5, duration: 1 }
    default:
      return {
        type: 'sine' as OscillatorType,
        frequency: normalizedCategory === 'birds' || normalizedCategory === 'fauna' ? 880 : normalizedCategory === 'mammals' ? 220 : normalizedCategory === 'reptiles' ? 110 : 440,
        duration: normalizedCategory === 'birds' || normalizedCategory === 'fauna' ? 1.5 : normalizedCategory === 'mammals' ? 2 : normalizedCategory === 'reptiles' ? 1 : 1
      }
  }
}

export function useSoundPlayer() {
  const contextRef = useRef<AudioContext | null>(null)
  const oscillatorRef = useRef<OscillatorNode | null>(null)
  const modulationRef = useRef<OscillatorNode | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSoundType, setCurrentSoundType] = useState<string | null>(null)

  const stopSound = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (modulationRef.current) {
      modulationRef.current.stop()
      modulationRef.current.disconnect()
      modulationRef.current = null
    }
    if (oscillatorRef.current) {
      oscillatorRef.current.stop()
      oscillatorRef.current.disconnect()
      oscillatorRef.current = null
    }
    if (gainRef.current) {
      gainRef.current.disconnect()
      gainRef.current = null
    }
    setIsPlaying(false)
    setCurrentSoundType(null)
  }, [])

  const playSound = useCallback((soundType: string, speciesCategory: string) => {
    if (isPlaying && currentSoundType === soundType) {
      stopSound()
      return
    }

    stopSound()

    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
    const audioContext = contextRef.current ?? new AudioContextClass()
    contextRef.current = audioContext

    const gainNode = audioContext.createGain()
    gainNode.gain.setValueAtTime(0.001, audioContext.currentTime)
    gainNode.connect(audioContext.destination)

    const oscillator = audioContext.createOscillator()
    const { type, frequency, duration } = getToneProps(soundType, speciesCategory)
    oscillator.type = type
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)
    oscillator.connect(gainNode)

    if (soundType === 'mating') {
      const modulator = audioContext.createOscillator()
      const modGain = audioContext.createGain()
      modulator.frequency.setValueAtTime(3, audioContext.currentTime)
      modGain.gain.setValueAtTime(12, audioContext.currentTime)
      modulator.connect(modGain)
      modGain.connect(oscillator.frequency)
      modulator.start()
      modulationRef.current = modulator
    }

    oscillator.start()
    gainNode.gain.exponentialRampToValueAtTime(0.3, audioContext.currentTime + 0.05)

    if (soundType === 'alert') {
      const pulseDuration = 0.3
      const ramp = 0.03
      const pulseGap = 0.05
      const startTime = audioContext.currentTime

      for (let i = 0; i < 3; i += 1) {
        const pulseStart = startTime + i * (pulseDuration + pulseGap)
        gainNode.gain.setValueAtTime(0.001, pulseStart)
        gainNode.gain.exponentialRampToValueAtTime(0.25, pulseStart + ramp)
        gainNode.gain.setValueAtTime(0.25, pulseStart + pulseDuration - ramp)
        gainNode.gain.exponentialRampToValueAtTime(0.001, pulseStart + pulseDuration)
      }
      timeoutRef.current = window.setTimeout(stopSound, Math.round((pulseDuration * 3 + pulseGap * 2) * 1000))
    } else {
      const endTime = audioContext.currentTime + duration
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + 0.05)
      gainNode.gain.exponentialRampToValueAtTime(0.0001, endTime)
      timeoutRef.current = window.setTimeout(stopSound, Math.round((duration + 0.05) * 1000))
    }

    gainRef.current = gainNode
    oscillatorRef.current = oscillator
    setIsPlaying(true)
    setCurrentSoundType(soundType)
  }, [currentSoundType, isPlaying, stopSound])

  useEffect(() => {
    return () => stopSound()
  }, [stopSound])

  return {
    playSound,
    stopSound,
    isPlaying,
    currentSoundType
  }
}
