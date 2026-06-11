import React from 'react'
import type { Species } from '../../types'
import { Volume2, MapPin, SpoonKnife, Leaf, AlertTriangle } from 'lucide-react'

interface FieldCardProps {
  species: Species
  onClose?: () => void
  mode: 'fauna' | 'flora'
}

const statusClasses: Record<string, string> = {
  LC: 'bg-[#2D6A4F] text-white',
  NT: 'bg-[#F4A261] text-black',
  VU: 'bg-[#F4A261] text-black',
  EN: 'bg-[#E63946] text-white',
  CR: 'bg-[#8B0000] text-white'
}

const urgencyClasses: Record<string, string> = {
  low: 'bg-[#2D6A4F] text-white',
  medium: 'bg-[#F4A261] text-black',
  high: 'bg-[#E63946] text-white',
  critical: 'bg-[#8B0000] text-white'
}

export default function FieldCard({ species, onClose, mode }: FieldCardProps) {
  const status = species.conservationStatus || 'LC'
  const danger = species.isDangerous && species.dangerLevel ? species.dangerLevel : 0
  const protocol = species.encounterProtocol?.[0]

  return (
    <div className="field-card max-w-3xl mx-auto text-textLight shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[22px] font-bold text-white">{species.commonName}</h2>
          <p className="mt-1 text-[14px] italic text-[#52B788]">{species.scientificName}</p>
        </div>
        <div className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[status] || statusClasses.LC}`}>
          {status}
        </div>
      </div>

      {species.isDangerous && protocol ? (
        <div className="mt-4 rounded-2xl bg-[#641E16] p-4 text-white">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em]">
            <AlertTriangle className="h-4 w-4" />
            ⚠️ PELIGROSO — Nivel {danger}/5
          </div>
          <p className="mt-3 font-semibold text-white">{protocol.action}</p>
          <p className="mt-2 text-sm text-[#e0e8f0]/80">{protocol.description}</p>
          <span className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${urgencyClasses[protocol.urgency || 'high']}`}>
            {protocol.urgency?.toUpperCase()}
          </span>
        </div>
      ) : null}

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-[#1f2744] p-4">
          <div className="flex items-center gap-2 text-[#52B788]"><MapPin className="h-4 w-4" /><span className="text-sm font-semibold">Hábitat</span></div>
          <p className="mt-2 text-sm text-[#d1d5db]">{species.habitat}</p>
        </div>

        <div className="rounded-2xl bg-[#1f2744] p-4">
          <div className="flex items-center gap-2 text-[#52B788]"><SpoonKnife className="h-4 w-4" /><span className="text-sm font-semibold">Alimentación</span></div>
          <p className="mt-2 text-sm text-[#d1d5db]">
            {mode === 'fauna' ? species.diet : (species as any).edibleParts ?? 'Ninguna'}
          </p>
        </div>

        {mode === 'flora' ? (
          <div className="rounded-2xl bg-[#1f2744] p-4">
            <div className="flex items-center gap-2 text-[#52B788]"><Leaf className="h-4 w-4" /><span className="text-sm font-semibold">Información</span></div>
            <div className="mt-2 flex flex-wrap gap-2">
              {species.isEdible ? (
                <span className="rounded-full bg-[#2D6A4F] px-3 py-1 text-xs font-semibold text-white">Comestible</span>
              ) : null}
              {(species as any).isToxic ? (
                <span className="rounded-full bg-[#E63946] px-3 py-1 text-xs font-semibold text-white">Tóxico</span>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      {mode === 'fauna' ? (
        <div className="mt-5 rounded-2xl bg-[#1f2744] p-4">
          <div className="flex items-center gap-2 text-[#52B788]">
            <Volume2 className="h-4 w-4" />
            <span className="text-sm font-semibold">Sonidos</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            {species.sounds?.map((sound, index) => (
              <button key={index} className="rounded-2xl border border-[#52B788]/30 bg-[#16213E] px-3 py-2 text-sm text-[#d1d5db] transition hover:border-[#52B788]">
                {sound.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-5 rounded-2xl bg-[#1f2744] p-4">
        <h3 className="text-sm font-semibold text-[#52B788]">Descripción</h3>
        <p className="mt-2 text-sm leading-6 text-[#cbd5e1]">{species.description}</p>
      </div>
    </div>
  )
}
