import FAUNA from './fauna'
import FLORA from './flora'
import ECOSYSTEMS from './ecosystems'
import type { Species } from '../../types'

export { FAUNA, FLORA, ECOSYSTEMS }

export const SPECIES_DB: Species[] = [...FAUNA, ...FLORA]

export function searchSpecies(query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return SPECIES_DB.filter(s =>
    (s.commonName || '').toLowerCase().includes(q) ||
    (s.scientificName || '').toLowerCase().includes(q)
  )
}

export function getSpeciesByCategory(category: string) {
  return SPECIES_DB.filter(s => (s.category || '').toLowerCase() === category.toLowerCase())
}

export function getSpeciesById(id: string) {
  return SPECIES_DB.find(s => s.id === id)
}

export function getSpeciesByZone(zoneId: string) {
  const zoneTypeById: Record<string, string> = {
    calakmul: 'selva',
    laguna_terminos: 'humedal',
    ciudad_campeche: 'costa',
    hopelchen: 'selva',
    champoton: 'costa'
  }

  const type = zoneTypeById[zoneId] || 'selva'
  const keywords: Record<string, string[]> = {
    selva: ['selva', 'jungla', 'bosque', 'mangle', 'maya'],
    costa: ['costa', 'mar', 'playa', 'laguna', 'río', 'rio'],
    humedal: ['humedal', 'laguna', 'pantano', 'mangle'],
    sabana: ['sabana', 'pastizal', 'pradera']
  }

  const terms = keywords[type] ?? [type]
  return FAUNA.filter(species => {
    const habitat = (species.habitat || '').toLowerCase()
    return terms.some(term => habitat.includes(term))
  })
}

export default SPECIES_DB
