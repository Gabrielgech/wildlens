import { useMemo } from 'react'
import type { Species } from '../../types'
import { Volume2, MapPin, Circle, Leaf, AlertTriangle, Square } from 'lucide-react'
import { useSoundPlayer } from '../../hooks/useSoundPlayer'

interface FieldCardProps {
  species: Species
  onClose?: () => void
  mode: 'fauna' | 'flora'
}

const statusClasses: Record<string, string> = {
  LC: 'bg-[#2D6A4F] text-white',
  NT: 'bg-[#F4A261] text-white',
  VU: 'bg-[#F4A261] text-white',
  EN: 'bg-[#E63946] text-white',
  CR: 'bg-[#8B0000] text-white'
}

const urgencyClasses: Record<string, string> = {
  low: 'bg-[#2D6A4F] text-white',
  medium: 'bg-[#F4A261] text-white',
  high: 'bg-[#E63946] text-white',
  critical: 'bg-[#8B0000] text-white'
}

export default function FieldCard({ species, onClose, mode }: FieldCardProps) {
  const { playSound, stopSound, isPlaying, currentSoundType } = useSoundPlayer()
  const status = species.conservationStatus || 'LC'
  const danger = species.isDangerous && species.dangerLevel ? species.dangerLevel : 0
  const protocol = species.encounterProtocol?.[0]

  const category = useMemo(() => (species.category || '').toLowerCase(), [species.category])
  const activeSoundType = isPlaying ? currentSoundType : null

  return (
    <div className="field-card relative max-w-3xl mx-auto text-[#1A3326] shadow-[0_2px_8px_rgba(45,106,79,0.08)] animate-fade-slide-up">
      {onClose ? (
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          aria-label="Cerrar"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[22px] font-bold text-[#1A3326]">{species.commonName}</h2>
          <p className="mt-1 text-[14px] italic text-[#2D6A4F]">{species.scientificName}</p>
        </div>
        <div className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[status] || statusClasses.LC}`}>
          {status}
        </div>
      </div>

      {species.isDangerous && protocol ? (
        <div className="mt-4 rounded-2xl bg-[#FFEBEE] p-4 text-[#E63946] border border-[#FFCDD2]">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em]">
            <AlertTriangle className="h-4 w-4" />
            ⚠️ PELIGROSO — Nivel {danger}/5
          </div>
          <p className="mt-3 font-semibold text-[#C62828]">{protocol.action}</p>
          <p className="mt-2 text-sm text-[#B71C1C]">{protocol.description}</p>
          <span className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${urgencyClasses[protocol.urgency || 'high']}`}>
            {protocol.urgency?.toUpperCase()}
          </span>
        </div>
      ) : null}

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]">
          <div className="flex items-center gap-2 text-[#2D6A4F]"><MapPin className="h-4 w-4" /><span className="text-sm font-semibold">Hábitat</span></div>
          <p className="mt-2 text-sm text-[#4A7C59]">{species.habitat}</p>
        </div>

        <div className="rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]">
          <div className="flex items-center gap-2 text-[#2D6A4F]"><Circle className="h-4 w-4" /><span className="text-sm font-semibold">Alimentación</span></div>
          <p className="mt-2 text-sm text-[#4A7C59]">{mode === 'fauna' ? species.diet : (species as any).edibleParts ?? 'Ninguna'}</p>
        </div>

        {mode === 'flora' ? (
          <div className="rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]">
            <div className="flex items-center gap-2 text-[#2D6A4F]"><Leaf className="h-4 w-4" /><span className="text-sm font-semibold">Información</span></div>
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
        <div className="mt-5 rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]">
          <div className="flex items-center gap-2 text-[#2D6A4F]">
            <Volume2 className="h-4 w-4" />
            <span className="text-sm font-semibold">Sonidos</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            {species.sounds?.map((sound, index) => {
              const isActive = isPlaying && activeSoundType === sound.type
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => (isActive ? stopSound() : playSound(sound.type, category))}
                  className={`rounded-2xl border px-4 py-3 text-sm transition focus:outline-none ${isActive ? 'border-[#2D6A4F] bg-[#E8F5E9] text-[#2D6A4F] shadow-[0_0_12px_rgba(45,106,79,0.2)] animate-pulse' : 'border-[#C8E6C9] bg-white text-[#4A7C59] hover:border-[#2D6A4F]'}`}
                >
                  <div className="flex items-center gap-2">
                    {isActive ? <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#2D6A4F] animate-pulse" /> : null}
                    {isActive ? (
                      <>
                        <Square className="h-4 w-4" />
                        <span>Reproduciendo...</span>
                      </>
                    ) : (
                      sound.label
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      ) : null}

      <div className="mt-5 rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]">
        <h3 className="text-sm font-semibold text-[#2D6A4F]">Descripción</h3>
        <p className="mt-2 text-sm leading-6 text-[#4A7C59]">{species.description}</p>
      </div>
    </div>
  )
}
