import { useCallback, useEffect, useState } from 'react'

export interface CampecheZone {
  id: string
  name: string
  zone: 'selva' | 'humedal' | 'costa' | 'sabana'
  bounds: {
    minLat: number
    maxLat: number
    minLng: number
    maxLng: number
  }
}

export const CAMPECHE_ZONES: CampecheZone[] = [
  {
    id: 'calakmul',
    name: 'Calakmul / Selva Maya',
    zone: 'selva',
    bounds: { minLat: 17.5, maxLat: 19.0, minLng: -90.5, maxLng: -89.0 }
  },
  {
    id: 'laguna_terminos',
    name: 'Laguna de Términos',
    zone: 'humedal',
    bounds: { minLat: 18.3, maxLat: 19.0, minLng: -92.0, maxLng: -90.8 }
  },
  {
    id: 'ciudad_campeche',
    name: 'Ciudad de Campeche',
    zone: 'costa',
    bounds: { minLat: 19.7, maxLat: 20.0, minLng: -90.6, maxLng: -90.2 }
  },
  {
    id: 'hopelchen',
    name: 'Hopelchén / Zona Maya',
    zone: 'selva',
    bounds: { minLat: 19.5, maxLat: 20.5, minLng: -90.3, maxLng: -89.5 }
  },
  {
    id: 'champoton',
    name: 'Champotón / Costa Sur',
    zone: 'costa',
    bounds: { minLat: 19.0, maxLat: 19.5, minLng: -91.0, maxLng: -90.4 }
  }
]

export interface LocationCoordinates {
  lat: number
  lng: number
}

export interface UseLocationResult {
  coords: LocationCoordinates | null
  zone: CampecheZone | null
  hasGPS: boolean
  isLoading: boolean
  error: string | null
  refreshLocation: () => void
  setZone: (zone: CampecheZone | null) => void
}

function detectZone(lat: number, lng: number) {
  return CAMPECHE_ZONES.find(zone =>
    lat >= zone.bounds.minLat && lat <= zone.bounds.maxLat &&
    lng >= zone.bounds.minLng && lng <= zone.bounds.maxLng
  ) ?? null
}

export function useLocation() {
  const [coords, setCoords] = useState<LocationCoordinates | null>(null)
  const [zone, setZone] = useState<CampecheZone | null>(null)
  const [hasGPS, setHasGPS] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const locate = useCallback(() => {
    setIsLoading(true)
    setError(null)

    if (!navigator.geolocation) {
      setHasGPS(false)
      setCoords(null)
      setZone(null)
      setError('Geolocalización no soportada')
      setIsLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        const currentCoords = { lat: latitude, lng: longitude }
        const matchedZone = detectZone(latitude, longitude)
        setCoords(currentCoords)
        setZone(matchedZone)
        setHasGPS(true)
        setError(null)
        setIsLoading(false)
      },
      err => {
        setCoords(null)
        setZone(null)
        setHasGPS(false)
        setError(err.message || 'Permiso de ubicación denegado')
        setIsLoading(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      }
    )
  }, [])

  useEffect(() => {
    locate()
  }, [locate])

  return {
    coords,
    zone,
    hasGPS,
    isLoading,
    error,
    refreshLocation: locate,
    setZone
  }
}
