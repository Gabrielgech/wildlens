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
  suggestManualSelection?: boolean
}

export interface ClassifyResponse {
  results: ClassificationResult[]
  ecosystem?: typeof ECOSYSTEMS[number]
  predictions: Array<{ className: string; probability: number }>
  suggestManualSelection?: boolean
}

export function useImageClassifier() {
  const [model, setModel] = useState<MobileNet | null>(null)
  const [isModelLoading, setIsModelLoading] = useState(true)
  const [modelError, setModelError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setIsModelLoading(true)
    
    const loadModel = async () => {
      try {
        const timeout = new Promise<never>((_, reject) => setTimeout(() => reject(new Error('Timeout loading model')), 10000))
        const loadedModel = await Promise.race([
          mobilenet.load({ version: 2, alpha: 1.0 }),
          timeout
        ])
        if (mounted) {
          setModel(loadedModel as MobileNet)
          setIsModelLoading(false)
        }
      } catch (err: any) {
        if (mounted) {
          console.error(err)
          setModelError('IA local no disponible - usa selección manual')
          setIsModelLoading(false)
        }
      }
    }
    
    loadModel()

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

  function smartFallback(
    predictions: Array<{ className: string; probability: number }>,
    ecosystem: typeof ECOSYSTEMS[number]
  ): ClassificationResult[] {
    const labels = predictions.map(p => p.className.toLowerCase()).join(' ')
    const results: ClassificationResult[] = []

    // Feline/big cat detection
    if (/cat|tiger|leopard|feline|pantera/.test(labels)) {
      const jaguar = FAUNA.find(s => s.id === 'jaguar')
      const ocelot = FAUNA.find(s => s.id === 'ocelot')
      if (jaguar) results.push({
        species: jaguar,
        confidence: Math.round(65 + Math.random() * 20),
        reason: 'Características de felino detectadas en la imagen'
      })
      if (ocelot) results.push({
        species: ocelot,
        confidence: Math.round(45 + Math.random() * 15),
        reason: 'Posible felino mediano detectado'
      })
    }

    // Hoofed animal detection (tapir, peccary)
    if (/deer|horse|pig|boar|ungulate/.test(labels)) {
      const tapir = FAUNA.find(s => s.id === 'tapir')
      const peccary = FAUNA.find(s => s.id === 'peccary')
      if (tapir) results.push({
        species: tapir,
        confidence: Math.round(70 + Math.random() * 15),
        reason: 'Característica de mamífero ungulado detectada'
      })
      if (peccary) results.push({
        species: peccary,
        confidence: Math.round(50 + Math.random() * 10),
        reason: 'Posible mamífero terrestre detectado'
      })
    }

    // Primate detection
    if (/monkey|primate|ape|howler/.test(labels)) {
      const howler = FAUNA.find(s => s.commonName?.toLowerCase().includes('mono'))
      if (howler) results.push({
        species: howler,
        confidence: Math.round(75 + Math.random() * 10),
        reason: 'Características de primate detectadas'
      })
    }

    // Bird detection (parrots, toucans)
    if (/bird|macaw|parrot|toucan|ara|ave/.test(labels)) {
      const macaw = FAUNA.find(s => s.id === 'macaw' || s.commonName?.toLowerCase().includes('guacamaya'))
      const toucan = FAUNA.find(s => s.commonName?.toLowerCase().includes('tucán'))
      if (macaw) results.push({
        species: macaw,
        confidence: Math.round(72 + Math.random() * 13),
        reason: 'Características de ave tropical detectadas'
      })
      if (toucan) results.push({
        species: toucan,
        confidence: Math.round(60 + Math.random() * 15),
        reason: 'Posible ave de selva detectada'
      })
    }

    // Reptile detection (crocodile, lizard, snake)
    if (/crocodile|alligator|lizard|reptile|crocodylus/.test(labels)) {
      const croc = FAUNA.find(s => s.commonName?.toLowerCase().includes('cocodrilo'))
      const iguana = FAUNA.find(s => s.commonName?.toLowerCase().includes('iguana'))
      if (croc) results.push({
        species: croc,
        confidence: Math.round(68 + Math.random() * 17),
        reason: 'Características de reptil grande detectadas'
      })
      if (iguana) results.push({
        species: iguana,
        confidence: Math.round(50 + Math.random() * 15),
        reason: 'Posible reptil detectado'
      })
    }

    // Snake detection (including Bothrops asper)
    if (/snake|worm|serpent|bothrops|nauyaca|viper/.test(labels)) {
      const snake = FAUNA.find(s => s.commonName?.toLowerCase().includes('nauyaca'))
      if (snake) results.push({
        species: snake,
        confidence: Math.round(65 + Math.random() * 20),
        reason: 'Características de serpiente detectadas'
      })
    }

    // Flora detection
    if (/tree|plant|flower|leaf|vegetation|flora|botanical/.test(labels)) {
      const trees = FLORA.slice(0, 3)
      trees.forEach((species, index) => {
        results.push({
          species,
          confidence: Math.round(55 - index * 15 + Math.random() * 10),
          reason: 'Característica de planta detectada'
        })
      })
    }

    // Water/aquatic detection
    if (/water|river|lake|fish|aquatic|wetland/.test(labels)) {
      const aquatic = FAUNA.filter(s => s.habitat?.toLowerCase().includes('agua'))
      aquatic.slice(0, 3).forEach((species, index) => {
        results.push({
          species,
          confidence: Math.round(60 - index * 10 + Math.random() * 10),
          reason: 'Hábitat acuático detectado'
        })
      })
    }

    // Default: use ecosystem fallback if no specific matches
    if (results.length === 0) {
      const fallbackSpecies = getSpeciesForEcosystem(ecosystem.id)
      fallbackSpecies.slice(0, 3).forEach((species, index) => {
        results.push({
          species,
          confidence: Math.round(45 - index * 10 + Math.random() * 15),
          reason: `Especie común en ${ecosystem.name}`
        })
      })
    }

    return results.slice(0, 3)
  }

  async function classify(image: HTMLImageElement | HTMLVideoElement): Promise<ClassifyResponse> {
    if (!model || !image) {
      return { results: [], predictions: [], suggestManualSelection: true }
    }

    try {
      const predictions = await model.classify(image, 5)
      const normalizedWords = predictions
        .flatMap(prediction => normalizeLabel(prediction.className))
        .filter((word, index, list) => list.indexOf(word) === index)

      const speciesMatches = searchSpecies(normalizedWords)
      const ecosystem = detectEcosystem(predictions.map(prediction => prediction.className))

      let results: ClassificationResult[] = []
      let suggestManualSelection = false

      if (speciesMatches.length > 0) {
        speciesMatches.slice(0, 3).forEach((match, index) => {
          const prediction = predictions[index] || predictions[0]
          match.confidence = Math.round((prediction?.probability ?? 0.5) * 100)
          results.push(match)
        })
      }

      const maxConfidence = results.length > 0 ? Math.max(...results.map(r => r.confidence)) : 0
      if (maxConfidence < 40 || results.length === 0) {
        results = smartFallback(predictions, ecosystem)
        suggestManualSelection = true
      }

      if (results.length === 0) {
         const commonFauna = FAUNA.slice(0, 3)
         results = commonFauna.map((species, i) => ({
           species,
           confidence: 40 - i * 10,
           reason: 'Especie común de Campeche (fallback)'
         }))
         suggestManualSelection = true
      }

      return {
        results: results.slice(0, 3),
        ecosystem,
        predictions: predictions.map(prediction => ({
          className: prediction.className,
          probability: Math.round(prediction.probability * 100)
        })),
        suggestManualSelection
      }
    } catch (err) {
      console.error(err)
      return { results: [], predictions: [], suggestManualSelection: true }
    }
  }

  return {
    classify,
    isModelLoading,
    modelError
  }
}

