import Dexie, { Table } from 'dexie'
import type { Species, JournalEntry } from '../types'

export class WildLensDB extends Dexie {
  species!: Table<Species, string>
  journalEntries!: Table<JournalEntry, string>

  constructor() {
    super('WildLensDB')
    this.version(1).stores({
      species: 'id, commonName, scientificName, category, region',
      journalEntries: 'id, speciesId, date'
    })
  }
}

export const db = new WildLensDB()
