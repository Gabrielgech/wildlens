import { ECOSYSTEMS, FAUNA } from '../data/species'
import type { Species } from '../types'

export type Ecosystem = (typeof ECOSYSTEMS)[number]

const environmentMap: Array<{ terms: string[]; ecosystemId: string }> = [
  { terms: ['jungle', 'forest', 'tree', 'vegetation', 'rainforest'], ecosystemId: 'eco_001' },
  { terms: ['water', 'swamp', 'lake', 'wetland', 'lagoon'], ecosystemId: 'eco_003' },
  { terms: ['beach', 'coast', 'mangrove', 'sea', 'estuary'], ecosystemId: 'eco_002' },
  { terms: ['field', 'grass', 'savanna', 'plain', 'pasture', 'meadow'], ecosystemId: 'eco_004' }
]

export function detectEcosystem(predictions: string[]): Ecosystem {
  const labels = predictions.map(label => label.toLowerCase())
  for (const mapping of environmentMap) {
    if (labels.some(label => mapping.terms.some(term => label.includes(term)))) {
      return ECOSYSTEMS.find(item => item.id === mapping.ecosystemId) ?? ECOSYSTEMS[0]
    }
  }
  return ECOSYSTEMS[0]
}

export function getSpeciesForEcosystem(ecosystemId: string): Species[] {
  const lowerMap: Record<string, string[]> = {
    eco_001: ['selva', 'bosque', 'calakmul', 'tropical'],
    eco_002: ['manglar', 'laguna', 'costera', 'estuario'],
    eco_003: ['humedal', 'laguna', 'costa', 'agua', 'mar'],
    eco_004: ['sabana', 'sabanas', 'pastizal', 'norte']
  }

  const lookup = lowerMap[ecosystemId] ?? lowerMap.eco_001
  const matches = FAUNA.filter(species => {
    const habitat = (species.habitat ?? '').toLowerCase()
    return lookup.some(term => habitat.includes(term))
  })

  return matches.length > 0 ? matches : FAUNA.slice(0, 3)
}
