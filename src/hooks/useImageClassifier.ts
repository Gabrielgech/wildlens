import { useEffect, useState } from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet'
import type { MobileNet } from '@tensorflow-models/mobilenet'
import type { Species } from '../types'
import { FAUNA, FLORA, ECOSYSTEMS } from '../data/species'
import { detectEcosystem, getSpeciesForEcosystem } from '../utils/ecoMapper'

export interface ClassificationResult {
  species: Species
  confidence: number
  reason: string
}

export interface ClassifyResponse {
  results: ClassificationResult[]
  ecosystem?: typeof ECOSYSTEMS[number]
  predictions: Array<{ className: string; probability: number }> 
}

export function useImageClassifier() {
  const [model, setModel] = useState<MobileNet | null>(null)
  const [isModelLoading, setIsModelLoading] = useState(true)
  const [modelError, setModelError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setIsModelLoading(true)
    mobilenet.load()
      .then(loadedModel => {
        if (mounted) {
          setModel(loadedModel)
          setIsModelLoading(false)
        }
      })
      .catch(err => {
        if (mounted) {
          setModelError(err?.message || 'No se pudo cargar el modelo de IA.')
          setIsModelLoading(false)
        }
      })

    return () => {
      mounted = false
    }
  }, [])

  function normalizeLabel(label: string) {
    return label
      .toLowerCase()
      .replace(/[^a-záéíóúüñ0-9\s]/gi, '')
      .split(/\s+/)
      .filter(Boolean)
  }

  function searchSpecies(queryWords: string[]) {
    const matched: Record<string, ClassificationResult> = {}
    const allSpecies = [...FAUNA, ...FLORA]

    allSpecies.forEach(species => {
      const haystack = `${species.commonName ?? ''} ${species.scientificName ?? ''}`.toLowerCase()
      queryWords.forEach(word => {
        if (word.length > 1 && haystack.includes(word)) {
          matched[species.id] = {
            species,
            confidence: 0,
            reason: `Coincidencia con '${word}'`
          }
        }
      })
    })

    return Object.values(matched)
  }

  async function classify(image: HTMLImageElement | HTMLVideoElement): Promise<ClassifyResponse> {
    if (!model) {
      throw new Error('Modelo no cargado.')
    }

    const predictions = await model.classify(image, 5)
    const normalizedWords = predictions
      .flatMap(prediction => normalizeLabel(prediction.className))
      .filter((word, index, list) => list.indexOf(word) === index)

    const speciesMatches = searchSpecies(normalizedWords)
    const ecosystem = detectEcosystem(predictions.map(prediction => prediction.className))
    const fallbackSpecies = getSpeciesForEcosystem(ecosystem.id)

    const results: ClassificationResult[] = []

    if (speciesMatches.length > 0) {
      speciesMatches.forEach((match, index) => {
        const prediction = predictions[index] || predictions[0]
        match.confidence = Math.round((prediction?.probability ?? 0.5) * 100)
        results.push(match)
      })
    }

    if (results.length === 0) {
      fallbackSpecies.slice(0, 3).forEach((species, index) => {
        results.push({
          species,
          confidence: Math.round(((predictions[index]?.probability ?? 0.5) - index * 0.05) * 100),
          reason: `Ecosistema detectado: ${ecosystem.name}`
        })
      })
    }

    return {
      results: results.slice(0, 3),
      ecosystem,
      predictions: predictions.map(prediction => ({
        className: prediction.className,
        probability: prediction.probability
      }))
    }
  }

  return {
    classify,
    isModelLoading,
    modelError
  }
}
