export interface SoundEntry {
  type: string
  label: string
  fileUrl?: string
}

export interface EncounterProtocol {
  action: string
  description: string
  urgency?: 'low' | 'medium' | 'high'
}

export interface Species {
  id: string
  commonName: string
  scientificName?: string
  category?: string
  description?: string
  isEdible?: boolean
  isDangerous?: boolean
  dangerLevel?: number
  encounterProtocol?: EncounterProtocol[]
  habitat?: string
  diet?: string
  sounds?: SoundEntry[]
  imageUrl?: string
  region?: string
}

export interface Location {
  lat: number
  lng: number
  region?: string
  municipality?: string
  zone?: string
}

export interface JournalEntry {
  id: string
  speciesId?: string
  date: string
  location?: Location
  photoUrl?: string
  notes?: string
}
