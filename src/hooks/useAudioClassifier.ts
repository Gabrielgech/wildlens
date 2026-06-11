import { useCallback } from 'react'
import { FAUNA } from '../data/species'
import type { Species } from '../types'

export interface MatchResult {
  species: Species
  confidence: number
  reasoning: string
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
    const birdCandidates = pickSpecies(['guacamaya', 'tucán', 'flamenco', 'pavo'])
    const mammalCandidates = pickSpecies(['jaguar', 'tapir', 'coati', 'pecari'])
    const reptileCandidates = pickSpecies(['cocodrilo', 'nauyaca', 'iguana'])

    if (highFreqRatio > 0.25 && rhythmScore > 0.5) {
      birdCandidates.slice(0, 3).forEach((species, index) => {
        results.push({
          species,
          confidence: Math.max(30, Math.round(75 - index * 12 - averageAmplitude * 0.05)),
          reasoning: `Alta presencia de frecuencias agudas y patrón rítmico sugiere aves como ${species.commonName}.`
        })
      })
    } else if (averageAmplitude > 120 && dominantIndex < frequencyData.length * 0.2) {
      mammalCandidates.slice(0, 3).forEach((species, index) => {
        results.push({
          species,
          confidence: Math.max(35, Math.round(70 - index * 10 + (averageAmplitude - 120) * 0.2)),
          reasoning: `Baja frecuencia y gran amplitud indican posibles mamíferos grandes como ${species.commonName}.`
        })
      })
    } else if (highFreqRatio > 0.55 && rhythmScore < 0.4) {
      const insect = FAUNA.find(species => species.commonName?.toLowerCase().includes('ig') || species.scientificName?.toLowerCase().includes('ig'))
      if (insect) {
        results.push({
          species: insect,
          confidence: 55,
          reasoning: 'Frecuencias muy altas y cambios rápidos sugieren animales más pequeños o reptiles de alta tonalidad.'
        })
      }
      chooseByCategory('reptile', 2).forEach((species, index) => {
        results.push({
          species,
          confidence: Math.max(30, 50 - index * 8),
          reasoning: `Frecuencia media y cambios rápidos pueden corresponder a ${species.commonName}.`
        })
      })
    } else {
      const mediumCandidates = [...birdCandidates, ...reptileCandidates].slice(0, 3)
      mediumCandidates.forEach((species, index) => {
        results.push({
          species,
          confidence: Math.max(25, Math.round(60 - index * 10)),
          reasoning: `Patrón sonoro de frecuencia media sugiere ${species.commonName}.`
        })
      })
    }

    if (results.length < 3) {
      chooseByCategory('bird', 3).forEach(species => {
        if (!results.some(item => item.species.id === species.id)) {
          results.push({
            species,
            confidence: 35,
            reasoning: 'Si no hay coincidencias claras, se sugiere un ave común de Campeche.'
          })
        }
      })
    }

    return results.slice(0, 3)
  }, [])

  return { analyzeAudio }
}
