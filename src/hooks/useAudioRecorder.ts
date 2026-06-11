import { useEffect, useRef, useState } from 'react'

export function useAudioRecorder() {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<BlobPart[]>([])
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const dataArrayRef = useRef<Uint8Array | null>(null)
  const animationRef = useRef<number | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const [hasPermission, setHasPermission] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [audioBase64, setAudioBase64] = useState<string | null>(null)
  const [audioDuration, setAudioDuration] = useState(0)
  const [frequencyData, setFrequencyData] = useState<Uint8Array | null>(null)
  const [error, setError] = useState<string | null>(null)
  const durationRef = useRef(0)
  const maxDuration = 10
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      stopRecording()
    }
  }, [])

  function updateVisualization() {
    const analyser = analyserRef.current
    const dataArray = dataArrayRef.current
    if (analyser && dataArray) {
      // @ts-ignore
      analyser.getByteFrequencyData(dataArray)
      setFrequencyData(new Uint8Array(dataArray))
      animationRef.current = requestAnimationFrame(updateVisualization)
    }
  }

  async function startRecording() {
    setError(null)
    setAudioBlob(null)
    setAudioBase64(null)
    setAudioDuration(0)
    durationRef.current = 0
    setFrequencyData(null)

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      setHasPermission(true)
      audioChunksRef.current = []
      const recorder = new MediaRecorder(stream)
      mediaRecorderRef.current = recorder

      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      const source = audioContextRef.current.createMediaStreamSource(stream)
      analyserRef.current = audioContextRef.current.createAnalyser()
      analyserRef.current.fftSize = 2048
      source.connect(analyserRef.current)
      dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount) as Uint8Array
      updateVisualization()

      recorder.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      recorder.onstop = async () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' })
        setAudioBlob(blob)
        const reader = new FileReader()
        reader.onloadend = () => {
          setAudioBase64(reader.result as string)
        }
        reader.readAsDataURL(blob)
      }

      recorder.start()
      setIsRecording(true)

      intervalRef.current = window.setInterval(() => {
        durationRef.current += 1
        setAudioDuration(durationRef.current)
        if (durationRef.current >= maxDuration) {
          stopRecording()
        }
      }, 1000)
    } catch (err: any) {
      setError(err?.message || 'Permiso de micrófono denegado o no disponible.')
      setHasPermission(false)
    }
  }

  function stopRecording() {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop()
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => undefined)
      audioContextRef.current = null
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsRecording(false)
  }

  return {
    startRecording,
    stopRecording,
    isRecording,
    audioBlob,
    audioBase64,
    audioDuration,
    frequencyData,
    hasPermission,
    error
  }
}
