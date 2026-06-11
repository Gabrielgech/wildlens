import React from 'react'
import { X, MapPin } from 'lucide-react'
import type { CampecheZone } from '../../hooks/useLocation'
import { CAMPECHE_ZONES } from '../../hooks/useLocation'

interface LocationSelectorProps {
  currentZone: CampecheZone | null
  hasGPS: boolean
  onUseGPS: () => void
  onSelect: (zone: CampecheZone) => void
  onClose: () => void
}

export default function LocationSelector({ currentZone, hasGPS, onUseGPS, onSelect, onClose }: LocationSelectorProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-3xl overflow-hidden rounded-[2rem] bg-[#0b1220] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-textLight/70">Seleccionar ubicación</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Elige tu zona</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-white/5 p-2 text-white transition hover:bg-white/10">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 p-5">
          {hasGPS ? (
            <button
              type="button"
              onClick={onUseGPS}
              className="inline-flex items-center gap-2 rounded-3xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
            >
              <MapPin className="h-4 w-4" /> Usar GPS
            </button>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            {CAMPECHE_ZONES.map(zone => {
              const isActive = currentZone?.id === zone.id
              return (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => onSelect(zone)}
                  className={`rounded-[1.5rem] border p-4 text-left transition ${isActive ? 'border-emerald-400 bg-emerald-500/10' : 'border-white/10 bg-[#111827] hover:border-emerald-400/50'}`}
                >
                  <p className="text-lg font-semibold text-white">{zone.name}</p>
                  <span className="mt-3 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-textLight">
                    {zone.zone}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-3xl bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
