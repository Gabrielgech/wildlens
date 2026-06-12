import { useCallback } from 'react'
import { FAUNA } from '../data/species'
import type { Species } from '../types'

export interface MatchResult {
  species: Species
  confidence: number
  reasoning: string
  suggestManualSelection?: boolean
}

function getAverage(data: Uint8Array) {
  if (!data.length) return 0
  let sum = 0
  for (let i = 0; i < data.length; i += 1) sum += data[i]
  return sum / data.length
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

    const avgAmplitude = getAverage(frequencyData)

    if (avgAmplitude < 10) {
      const fallback = chooseByCategory('bird', 3)
      return fallback.map((species, i) => ({
        species,
        confidence: 20 - i * 5,
        reasoning: 'Sonido muy bajo. Imposible identificar claramente.',
        suggestManualSelection: true
      }))
    }

    // Find top 3 frequency peaks
    const peaks: { index: number, val: number }[] = []
    for (let i = 0; i < frequencyData.length; i++) {
      peaks.push({ index: i, val: frequencyData[i] })
    }
    peaks.sort((a, b) => b.val - a.val)
    const topPeaks = peaks.slice(0, 3)

    const dominantHz = topPeaks[0].index * (44100 / 2) / frequencyData.length

    const results: MatchResult[] = []

    // Very short sound (<2s) + high amplitude
    if (duration > 0 && duration < 2 && avgAmplitude > 50) {
      const cands = pickSpecies(['mono', 'howler', 'guacamaya', 'pavo'])
      cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 80 - i*5, reasoning: 'Llamado corto y fuerte (Alerta)' }))
    } 
    // Long continuous sound (>5s)
    else if (duration > 5) {
      const cands = pickSpecies(['rana', 'insecto', 'cigarra', 'tree frog'])
      if (cands.length === 0) cands.push(...chooseByCategory('insect', 2), ...chooseByCategory('amphibian', 1))
      cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 65 - i*5, reasoning: 'Sonido continuo (Ambiente/Insectos/Anfibios)' }))
    }
    // Jaguar check (low frequency + high amplitude)
    else if (dominantHz < 150 && avgAmplitude > 70) {
      const cands = pickSpecies(['jaguar', 'puma', 'tapir', 'pecari'])
      cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 85 - i*5, reasoning: 'Baja frecuencia y alta intensidad (Mamífero grande)' }))
    }
    else {
      // General frequency check
      if (dominantHz > 8000) {
        const cands = FAUNA.filter(s => s.category === 'insect' || s.commonName?.toLowerCase().includes('rana'))
        cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 60 - i*5, reasoning: 'Frecuencia alta (Insectos/Ranas)' }))
      } else if (dominantHz >= 3000 && dominantHz <= 8000) {
        const cands = pickSpecies(['Ara', 'Ramphastos', 'guacamaya', 'tucán'])
        cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 70 - i*5, reasoning: 'Frecuencia media-alta (Aves pequeñas)' }))
      } else if (dominantHz >= 1000 && dominantHz < 3000) {
        const cands = pickSpecies(['Phoenicopterus', 'Meleagris', 'pavo', 'flamenco'])
        cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 75 - i*5, reasoning: 'Frecuencia media (Aves medianas)' }))
      } else if (dominantHz >= 300 && dominantHz < 1000) {
        const cands = pickSpecies(['Amazona', 'Nasua narica', 'coatí'])
        cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 65 - i*5, reasoning: 'Frecuencia baja (Aves grandes/Coatí)' }))
      } else {
        const cands = pickSpecies(['tapir', 'peccary', 'howler', 'mono', 'jaguar'])
        cands.slice(0, 3).forEach((species, i) => results.push({ species, confidence: 60 - i*5, reasoning: 'Frecuencia muy baja (Mamíferos)' }))
      }
    }

    if (results.length === 0) {
       const fallback = chooseByCategory('bird', 3)
       fallback.forEach((species, i) => results.push({ species, confidence: 30 - i*5, reasoning: 'Análisis genérico' }))
    }

    return results.slice(0, 3).map(r => ({ ...r, suggestManualSelection: r.confidence < 50 }))
  }, [])

  return { analyzeAudio }
}
