import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Compass, MapPin, Image, Eye } from 'lucide-react'
import { db } from '../../db'
import FieldCard from '../../components/FieldCard'
import { getSpeciesById } from '../../data/species'
import type { JournalEntry, Species } from '../../types'

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

function formatSpanishDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return `${date.getDate()} de ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`
}

export default function Journal() {
  const navigate = useNavigate()
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState<'all' | 'fauna' | 'flora'>('all')
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null)

  useEffect(() => {
    let mounted = true
    db.journalEntries
      .toArray()
      .then(items => {
        if (!mounted) return
        const sorted = items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        setEntries(sorted)
      })
      .catch(() => {
        if (mounted) setEntries([])
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  const filteredEntries = useMemo(() => {
    return entries.filter(entry => {
      const species = entry.speciesId ? getSpeciesById(entry.speciesId) : undefined
      if (!species) return false
      if (activeFilter === 'all') return true
      return species.category?.toLowerCase() === activeFilter
    })
  }, [activeFilter, entries])

  const totalEntries = entries.length
  const uniqueSpeciesCount = new Set(entries.map(entry => entry.speciesId)).size
  const mostRecentEntryDate = totalEntries ? formatSpanishDate(entries[0].date) : null

  return (
    <div className="min-h-screen p-4 bg-[#F8FBF0]">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#2D6A4F]">Mi Diario de Campo</p>
              <h1 className="mt-3 text-3xl font-bold text-[#1A3326]">{totalEntries} avistamientos registrados</h1>
            </div>
            <button
              type="button"
              onClick={() => navigate('/identify')}
              className="rounded-3xl bg-[#52B788] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2D6A4F]"
            >
              Ir a Identificar
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex min-h-[320px] items-center justify-center rounded-[2rem] border border-[#C8E6C9] bg-white">
            <div className="flex flex-col items-center gap-4">
              <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#E8F5E9] border-t-[#2D6A4F]" />
              <p className="text-lg text-[#4A7C59]">Cargando tus registros...</p>
            </div>
          </div>
        ) : filteredEntries.length === 0 ? (
          <div className="rounded-[2rem] border border-[#C8E6C9] bg-white p-10 text-center">
            <Compass className="mx-auto h-20 w-20 text-[#2D6A4F]" />
            <h2 className="mt-6 text-3xl font-bold text-[#1A3326]">Tu diario está vacío</h2>
            <p className="mt-3 max-w-2xl mx-auto text-[#4A7C59]">
              Identifica especies con EcoScan, FloraID o FaunaID para guardar tus avistamientos aquí.
            </p>
            <button
              type="button"
              onClick={() => navigate('/identify')}
              className="mt-8 rounded-3xl bg-[#52B788] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2D6A4F]"
            >
              Ir a Identificar
            </button>
          </div>
        ) : (
          <>
            <div className="rounded-[2rem] border border-[#C8E6C9] bg-white p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#4A7C59]">Filtrar</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {(['all', 'fauna', 'flora'] as const).map(filter => (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeFilter === filter ? 'bg-[#2D6A4F] text-white' : 'bg-[#F1F8E9] text-[#2D6A4F] hover:bg-[#E8F5E9]'}`}
                      >
                        {filter === 'all' ? 'Todos' : filter === 'fauna' ? 'Fauna' : 'Flora'}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl bg-[#E8F5E9] p-4 text-sm text-[#4A7C59] border border-[#C8E6C9]">
                  <p>Total de entradas: <span className="font-semibold text-[#2D6A4F]">{filteredEntries.length}</span></p>
                  <p className="mt-2">Especies únicas: <span className="font-semibold text-[#2D6A4F]">{uniqueSpeciesCount}</span></p>
                  <p className="mt-2">Último registro: <span className="font-semibold text-[#2D6A4F]">{mostRecentEntryDate}</span></p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {filteredEntries.map(entry => {
                const species = entry.speciesId ? getSpeciesById(entry.speciesId) : undefined
                return (
                  <div key={entry.id} className="rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)] border-l-4 border-l-[#2D6A4F]">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <p className="text-sm uppercase tracking-[0.24em] text-[#2D6A4F]">{formatSpanishDate(entry.date)}</p>
                        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                          <div>
                            <p className="text-xl font-bold text-[#1A3326]">{species?.commonName ?? 'Especie desconocida'}</p>
                            {species?.scientificName ? (
                              <p className="text-sm italic text-[#4A7C59]">{species.scientificName}</p>
                            ) : null}
                          </div>
                          {species ? (
                            <span className="rounded-full bg-[#E8F5E9] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F]">
                              {species.category === 'flora' ? 'Flora' : 'Fauna'}
                            </span>
                          ) : null}
                        </div>
                        {entry.location ? (
                          <div className="mt-4 flex items-center gap-2 text-[#4A7C59]">
                            <MapPin className="h-4 w-4" />
                            <span>{entry.location.lat.toFixed(4)}, {entry.location.lng.toFixed(4)}</span>
                          </div>
                        ) : null}
                      </div>

                      <div className="grid gap-3 sm:auto-rows-min sm:w-72">
                        {entry.photoUrl ? (
                          <img src={entry.photoUrl} alt={species?.commonName ?? 'Registro'} className="h-40 w-full rounded-3xl object-cover" />
                        ) : (
                          <div className="flex h-40 items-center justify-center rounded-3xl bg-white/5 text-sm text-textLight/70">Sin foto</div>
                        )}
                        <button
                          type="button"
                          onClick={() => species && setSelectedSpecies(species)}
                          className="inline-flex items-center justify-center gap-2 rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
                        >
                          <Eye className="h-4 w-4" /> Ver ficha
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {selectedSpecies ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="relative w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1220] p-6 shadow-2xl">
              <button
                type="button"
                className="absolute right-5 top-5 rounded-full bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                onClick={() => setSelectedSpecies(null)}
              >
                Cerrar
              </button>
              <FieldCard species={selectedSpecies} mode={selectedSpecies.category === 'flora' ? 'flora' : 'fauna'} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
