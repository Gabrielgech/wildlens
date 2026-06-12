import React from 'react'
import type { CampecheZone } from '../../hooks/useLocation'

interface LocationBadgeProps {
  zone: CampecheZone | null
  hasGPS: boolean
  onClick: () => void
}

export default function LocationBadge({ zone, hasGPS, onClick }: LocationBadgeProps) {
  const label = hasGPS ? (zone ? zone.name : 'Campeche, México') : 'Ubicación no disponible'
  const dotColor = hasGPS ? 'bg-green-500' : 'bg-slate-500'

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-800 transition hover:bg-green-100"
    >
      <span className={`inline-flex h-2.5 w-2.5 rounded-full ${dotColor}`} />
      <span>📍 {label}</span>
    </button>
  )
}
