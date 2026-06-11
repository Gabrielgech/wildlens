import React from 'react'
import type { CampecheZone } from '../../hooks/useLocation'

interface LocationBadgeProps {
  zone: CampecheZone | null
  hasGPS: boolean
  onClick: () => void
}

export default function LocationBadge({ zone, hasGPS, onClick }: LocationBadgeProps) {
  const label = hasGPS ? (zone ? zone.name : 'Campeche, México') : 'Ubicación no disponible'
  const dotColor = hasGPS ? 'bg-emerald-400' : 'bg-slate-500'

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0f172a] px-4 py-2 text-sm text-textLight transition hover:border-emerald-400/40"
    >
      <span className={`inline-flex h-2.5 w-2.5 rounded-full ${dotColor}`} />
      <span>📍 {label}</span>
    </button>
  )
}
