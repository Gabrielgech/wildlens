import { SPECIES_DB } from '../data/species'
import type { Species } from '../types'

const FOUNDRY_IQ_ENDPOINT = import.meta.env.VITE_FOUNDRY_IQ_ENDPOINT || ''
const FOUNDRY_IQ_KEY = import.meta.env.VITE_FOUNDRY_IQ_KEY || ''

export const DEMO_MODE = !FOUNDRY_IQ_KEY || !FOUNDRY_IQ_ENDPOINT

export interface FoundryIQResponse {
  answer: string
  sources: string[]
  confidence: number
}

export interface SyncResult {
  updated: number
  timestamp: Date
  sources: string[]
}

export interface EcologicalAlert {
  alert: string
  severity: 'low' | 'medium' | 'high'
  source: string
}

export interface EnrichedData {
  additionalInfo: string
  source: string
  lastUpdated: string
}

async function safeFetch(url: string, body: object): Promise<FoundryIQResponse> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'api-key': FOUNDRY_IQ_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  if (!response.ok) {
    throw new Error(`Foundry IQ request failed: ${response.status}`)
  }
  return response.json()
}

export async function queryFoundryIQ(query: string): Promise<FoundryIQResponse> {
  const body = {
    query,
    region: 'campeche_mexico',
    language: 'es'
  }

  if (DEMO_MODE) {
    return {
      answer: `WildLens Demo: Se recomienda mantener vigilancia en poblaciones de jaguar y flora endémica. Por ejemplo, el jaguar (Panthera onca) está listado como EN en la península.`,
      sources: ['CONABIO', 'IUCN Red List 2024'],
      confidence: 0.78
    }
  }

  return safeFetch(FOUNDRY_IQ_ENDPOINT, body)
}

function normalizeText(text: string) {
  return text.toLowerCase()
}

function applyConservationUpdates(answer: string): number {
  const lines = answer.split(/\n|\.|;/).map(line => line.trim())
  let updated = 0

  lines.forEach(line => {
    const match = line.match(/(.+?)\s*\(?\s*(LC|NT|VU|EN|CR)\s*\)?/i)
    if (match) {
      const name = match[1].trim().toLowerCase()
      const status = match[2].toUpperCase() as Species['conservationStatus']
      const species = SPECIES_DB.find(speciesItem => normalizeText(speciesItem.commonName || '').includes(name) || normalizeText(speciesItem.scientificName || '').includes(name))
      if (species && species.conservationStatus !== status) {
        species.conservationStatus = status
        updated += 1
      }
    }
  })

  return updated
}

export async function syncSpeciesData(): Promise<SyncResult> {
  const query = 'Lista de especies amenazadas en Campeche México con datos de conservación actualizados'
  const response = await queryFoundryIQ(query)
  const updated = applyConservationUpdates(response.answer)

  return {
    updated,
    timestamp: new Date(),
    sources: response.sources
  }
}

export async function getEcologicalAlert(zone: string): Promise<EcologicalAlert> {
  if (DEMO_MODE) {
    if (zone.toLowerCase().includes('selva')) {
      return {
        alert: 'Actividad de jaguar reportada en zona norte de Calakmul. Mantén distancia si avistas huellas frescas.',
        severity: 'medium',
        source: 'CONANP Campeche 2024'
      }
    }
    if (zone.toLowerCase().includes('costa')) {
      return {
        alert: 'Aumento de corrientes marinas y nidos de tortuga en la costa sur. Respeta las áreas protegidas.',
        severity: 'low',
        source: 'CONANP Campeche 2024'
      }
    }
    return {
      alert: 'Monitorea la calidad hídrica en humedales y evita alterar la vegetación ribereña.',
      severity: 'low',
      source: 'CONABIO 2024'
    }
  }

  const query = `Alertas ecológicas actuales en ${zone} Campeche México`
  const response = await queryFoundryIQ(query)
  return {
    alert: response.answer,
    severity: 'medium',
    source: response.sources[0] || 'Foundry IQ'
  }
}

export async function enrichSpeciesInfo(speciesName: string): Promise<EnrichedData> {
  if (DEMO_MODE) {
    return {
      additionalInfo: `Información de demo sobre ${speciesName}: especie registrada en la península de Yucatán con amenazas por pérdida de hábitat y conservación activa en áreas protegidas.`,
      source: 'CONABIO 2024',
      lastUpdated: '2024-11-10'
    }
  }

  const query = `Información científica actualizada sobre ${speciesName} en Yucatán Peninsula México`
  const response = await queryFoundryIQ(query)
  return {
    additionalInfo: response.answer,
    source: response.sources[0] || 'Foundry IQ',
    lastUpdated: new Date().toISOString().split('T')[0]
  }
}
