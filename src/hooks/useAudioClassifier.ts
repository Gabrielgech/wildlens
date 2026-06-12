import { useCallback } from 'react'
import { FAUNA } from '../data/species'
import type { Species } from '../types'

export interface MatchResult {
  species: Species
  confidence: number
  reasoning: string
  suggestManualSelection?: boolean
}

function getDominantIndex(data: Uint8Array) {
  let max = 0
  let index = 0
  for (let i = 0; i < data.length; i += 1) {
    if (data[i] > max) {
      max = data[i]
      index = i
    }
  }
  return index
}

function getAverage(data: Uint8Array) {
  if (!data.length) return 0
  let sum = 0
  for (let i = 0; i < data.length; i += 1) sum += data[i]
  return sum / data.length
}

function getHighFreqRatio(data: Uint8Array) {
  const threshold = Math.floor(data.length * 0.25)
  let highSum = 0
  let total = 0
  for (let i = 0; i < data.length; i += 1) {
    total += data[i]
    if (i >= threshold) {
      highSum += data[i]
    }
  }
  return total ? highSum / total : 0
}

function getRhythmScore(data: Uint8Array) {
  const pulses = []
  let average = getAverage(data)
  for (let i = 1; i < data.length; i += 1) {
    if (data[i] > average * 1.2 && data[i - 1] <= average * 1.2) {
      pulses.push(i)
    }
  }
  return pulses.length / Math.max(1, data.length / 50)
}

function pickSpecies(candidates: string[]) {
  const found: Species[] = []
  for (const label of candidates) {
    const match = FAUNA.find(species =>
      species.commonName?.toLowerCase().includes(label.toLowerCase()) ||
      species.scientificName?.toLowerCase().includes(label.toLowerCase())
    )
    if (match && !found.includes(match)) {
      found.push(match)
    }
  }
  return found
}

function chooseByCategory(category: string, count = 3) {
  const list = FAUNA.filter(species => species.category === category)
  return list.slice(0, count)
}

export function useAudioClassifier() {
  const analyzeAudio = useCallback((frequencyData: Uint8Array, duration: number): MatchResult[] => {
    if (!frequencyData || frequencyData.length === 0) {
      const fallback = chooseByCategory('bird', 3)
      return fallback.map((species, i) => ({
        species,
        confidence: 40 - i * 8,
        reasoning: 'Sin datos de audio. Usando especies por defecto.',
        suggestManualSelection: true
      }))
    }

    let maxVal = 0, maxIdx = 0
    for (let i = 0; i < frequencyData.length; i++) {
      if (frequencyData[i] > maxVal) { maxVal = frequencyData[i]; maxIdx = i }
    }
    const freqHz = maxIdx * (44100 / 2) / frequencyData.length

    const results: MatchResult[] = []

    if (freqHz > 8000) {
      const cands = FAUNA.filter(s => s.category === 'insect' || s.commonName?.toLowerCase().includes('rana') || s.commonName?.toLowerCase().includes('lithobates'))
      cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 60 - i*5, reasoning: 'Frecuencia alta (Insectos/Ranas)' }))
    } else if (freqHz >= 3000 && freqHz <= 8000) {
      const cands = pickSpecies(['Ara', 'Ramphastos', 'guacamaya', 'tucán'])
      cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 70 - i*5, reasoning: 'Frecuencia media-alta (Aves pequeñas)' }))
    } else if (freqHz >= 1000 && freqHz < 3000) {
      const cands = pickSpecies(['Phoenicopterus', 'Meleagris', 'pavo', 'flamenco'])
      cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 75 - i*5, reasoning: 'Frecuencia media (Aves medianas)' }))
    } else if (freqHz >= 300 && freqHz < 1000) {
      const cands = pickSpecies(['Amazona', 'Nasua narica', 'coatí'])
      cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 65 - i*5, reasoning: 'Frecuencia baja (Aves grandes/Coatí)' }))
    } else if (freqHz >= 80 && freqHz < 300) {
      const cands = pickSpecies(['tapir', 'peccary', 'howler', 'mono', 'pecari'])
      cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 60 - i*5, reasoning: 'Frecuencia muy baja (Mamíferos medianos)' }))
    } else {
      const cands = pickSpecies(['jaguar', 'puma'])
      cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 40 - i*5, reasoning: 'Frecuencia extremadamente baja (Mamífero grande)' }))
    }

    if (results.length === 0) {
       const fallback = chooseByCategory('bird', 3)
       fallback.forEach((species, i) => results.push({ species, confidence: 30 - i*5, reasoning: 'Fallback' }))
    }

    return results.slice(0, 3).map(r => ({ ...r, suggestManualSelection: r.confidence < 50 }))
  }, [])

  return { analyzeAudio }
}

