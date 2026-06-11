import React from 'react'
import type { CampecheZone, LocationCoordinates } from '../hooks/useLocation'

export interface LocationContextValue {
  coords: LocationCoordinates | null
  zone: CampecheZone | null
  hasGPS: boolean
  refreshLocation: () => void
  setZone: (zone: CampecheZone | null) => void
}

export const LocationContext = React.createContext<LocationContextValue>({
  coords: null,
  zone: null,
  hasGPS: false,
  refreshLocation: () => {},
  setZone: () => {}
})
