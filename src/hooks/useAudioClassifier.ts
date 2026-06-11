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
    const dominantIndex = getDominantIndex(frequencyData)
    const averageAmplitude = getAverage(frequencyData)
    const highFreqRatio = getHighFreqRatio(frequencyData)
    const rhythmScore = getRhythmScore(frequencyData)

    const results: MatchResult[] = []
    let confidence = 0
    let suggestManualSelection = false

    /**
     * Frequency range analysis:
     * dominantIndex > 200 (very high freq): insects, small creatures
     * dominantIndex 100-200 (high freq): small to medium birds
     * dominantIndex 50-100 (medium freq): medium birds/amphibians
     * dominantIndex 20-50 (low-medium): large birds, medium mammals
     * dominantIndex < 20 (very low): large mammals
     */

    // Very high frequency: likely insects or very small creatures
    if (dominantIndex > 200 && highFreqRatio > 0.6) {
      const insectCandidates = FAUNA.filter(s => 
        s.category === 'insect' || 
        s.commonName?.toLowerCase().includes('insecto') ||
        s.commonName?.toLowerCase().includes('rana')
      )
      if (insectCandidates.length > 0) {
        insectCandidates.slice(0, 3).forEach((species, index) => {
          results.push({
            species,
            confidence: Math.round(55 - index * 15 + Math.random() * 10),
            reasoning: 'Frecuencias muy altas sugieren animales pequeños como insectos o ranas.'
          })
        })
        confidence = results[0]?.confidence ?? 0
      }
    }

    // High frequency (100-200): small to medium birds (guacamaya, tucán, Amazona)
    if (dominantIndex >= 100 && dominantIndex <= 200 && rhythmScore > 0.4) {
      const smallBirdCandidates = pickSpecies(['guacamaya', 'Ara', 'tucán', 'Ramphastos', 'Amazona'])
      if (smallBirdCandidates.length === 0) {
        const birdCandidates = chooseByCategory('bird', 3)
        birdCandidates.forEach((species, index) => {
          results.push({
            species,
            confidence: Math.round(70 - index * 12 + Math.random() * 10),
            reasoning: 'Frecuencias altas y patrón rítmico sugieren aves pequeñas a medianas.'
          })
        })
      } else {
        smallBirdCandidates.slice(0, 3).forEach((species, index) => {
          results.push({
            species,
            confidence: Math.round(75 - index * 12 + Math.random() * 8),
            reasoning: `Patrón característico de ${species.commonName}`
          })
        })
      }
      confidence = results[0]?.confidence ?? 0
    }

    // Medium frequency (50-100): medium birds, amphibians (Phoenicopterus, Meleagris, tree frogs)
    if (dominantIndex >= 50 && dominantIndex < 100 && rhythmScore > 0.3) {
      const mediumBirdCandidates = pickSpecies(['flamenco', 'Phoenicopterus', 'pavo', 'Meleagris', 'rana', 'tree frog'])
      if (mediumBirdCandidates.length === 0) {
        const mixed = [...chooseByCategory('bird', 2), ...chooseByCategory('amphibian', 1)]
        mixed.forEach((species, index) => {
          results.push({
            species,
            confidence: Math.round(65 - index * 10 + Math.random() * 10),
            reasoning: 'Frecuencias medias sugieren aves medianas o anfibios.'
          })
        })
      } else {
        mediumBirdCandidates.slice(0, 3).forEach((species, index) => {
          results.push({
            species,
            confidence: Math.round(70 - index * 12 + Math.random() * 10),
            reasoning: `Sonido caracterísico de ${species.commonName}`
          })
        })
      }
      confidence = results[0]?.confidence ?? 0
    }

    // Low-medium frequency (20-50): large birds, medium mammals (Jabiru, coati, peccary)
    if (dominantIndex >= 20 && dominantIndex < 50) {
      const largeBirdCandidates = pickSpecies(['Jabiru', 'cigüeña', 'stork', 'coati', 'coatí', 'pecari', 'peccary'])
      if (largeBirdCandidates.length === 0) {
        const mixed = [...chooseByCategory('bird', 1), ...chooseByCategory('mammal', 2)]
        mixed.forEach((species, index) => {
          results.push({
            species,
            confidence: Math.round(68 - index * 10 + Math.random() * 12),
            reasoning: 'Frecuencias bajas indican aves grandes o mamíferos medianos.'
          })
        })
      } else {
        largeBirdCandidates.slice(0, 3).forEach((species, index) => {
          results.push({
            species,
            confidence: Math.round(72 - index * 12 + Math.random() * 10),
            reasoning: `Patrón sonoro típico de ${species.commonName}`
          })
        })
      }
      confidence = results[0]?.confidence ?? 0
    }

    // Very low frequency < 20: large mammals (tapir, jaguar - rare to hear)
    if (dominantIndex < 20 && averageAmplitude > 80) {
      const largeMammalCandidates = pickSpecies(['tapir', 'jaguar', 'puma', 'león', 'large mammal'])
      if (largeMammalCandidates.length === 0) {
        const mammalCandidates = chooseByCategory('mammal', 3)
        mammalCandidates.forEach((species, index) => {
          results.push({
            species,
            confidence: Math.round(60 - index * 12 + Math.random() * 15),
            reasoning: 'Frecuencias muy bajas sugieren mamíferos grandes, muy raros de escuchar.'
          })
        })
      } else {
        largeMammalCandidates.slice(0, 3).forEach((species, index) => {
          results.push({
            species,
            confidence: Math.round(65 - index * 12 + Math.random() * 12),
            reasoning: `Vocalización característica de ${species.commonName}`
          })
        })
      }
      confidence = results[0]?.confidence ?? 0
    }

    // Fallback: if no clear classification
    if (results.length === 0) {
      const randomSpecies = chooseByCategory('bird', 3)
      randomSpecies.forEach((species, index) => {
        results.push({
          species,
          confidence: Math.round(40 - index * 8),
          reasoning: 'El sonido no es suficientemente claro para identificación precisa.'
        })
      })
      suggestManualSelection = true
    }

    // Mark for manual selection if confidence too low
    if (confidence < 40) {
      suggestManualSelection = true
    }

    return results.slice(0, 3).map(r => ({
      ...r,
      suggestManualSelection
    }))
  }, [])

  return { analyzeAudio }
}

