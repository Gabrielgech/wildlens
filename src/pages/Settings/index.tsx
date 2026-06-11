import React, { useEffect, useState } from 'react'
import { MapPin, Database, ShieldCheck, Wifi, Sparkles } from 'lucide-react'
import { db } from '../../db'
import { FAUNA, FLORA, ECOSYSTEMS } from '../../data/species'

export default function Settings() {
  const [journalCount, setJournalCount] = useState(0)
  const version = 'v0.1.0'

  useEffect(() => {
    db.journalEntries.count().then(count => setJournalCount(count))
  }, [])

  const handleClearJournal = async () => {
    const confirmed = window.confirm('¿Borrar todas las entradas del diario? Esta acción no se puede deshacer.')
    if (!confirmed) return
    await db.journalEntries.clear()
    setJournalCount(0)
  }

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-accent/70">Configuración</p>
              <h1 className="mt-3 text-3xl font-bold text-white">WildLens</h1>
              <p className="mt-2 text-textLight/80">Explora biodiversidad en Campeche incluso sin conexión.</p>
            </div>
            <div className="rounded-3xl bg-[#111827] p-4 text-right text-sm text-textLight/80">
              <p className="font-semibold text-white">{version}</p>
              <p>Edición de Hackathon Agents League 2026</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-3 text-emerald-300">
              <MapPin className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-white">Región</h2>
            </div>
            <p className="mt-4 text-textLight/80">Campeche, México</p>
          </div>

          <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-3 text-cyan-300">
              <Database className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-white">Base de datos</h2>
            </div>
            <div className="mt-4 grid gap-3">
              <div className="rounded-3xl bg-[#111827] p-4">
                <p className="text-sm uppercase text-textLight/70">Fauna</p>
                <p className="mt-2 text-2xl font-semibold text-white">{FAUNA.length}</p>
              </div>
              <div className="rounded-3xl bg-[#111827] p-4">
                <p className="text-sm uppercase text-textLight/70">Flora</p>
                <p className="mt-2 text-2xl font-semibold text-white">{FLORA.length}</p>
              </div>
              <div className="rounded-3xl bg-[#111827] p-4">
                <p className="text-sm uppercase text-textLight/70">Ecosistemas</p>
                <p className="mt-2 text-2xl font-semibold text-white">{ECOSYSTEMS.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
          <div className="flex items-center gap-3 text-violet-300">
            <Sparkles className="h-5 w-5" />
            <h2 className="text-xl font-semibold text-white">Acerca de</h2>
          </div>
          <p className="mt-4 text-textLight/80">
            WildLens es un proyecto de ciencia ciudadana que combina inteligencia artificial con biodiversidad. Desarrollado para el Hackathon Agents League 2026.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#111827] p-4">
              <p className="text-sm uppercase text-textLight/70">Powered by</p>
              <p className="mt-2 text-white">Foundry IQ</p>
            </div>
            <div className="rounded-3xl bg-[#111827] p-4">
              <p className="text-sm uppercase text-textLight/70">Asistente</p>
              <p className="mt-2 text-white">GitHub Copilot</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-3 text-emerald-300">
              <Wifi className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-white">Estado offline</h2>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-3xl bg-[#111827] p-4">
              <span className="inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400" />
              <p className="text-textLight/80">Disponible sin internet</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-3 text-sky-300">
              <ShieldCheck className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-white">Diario</h2>
            </div>
            <p className="mt-4 text-textLight/80">Entradas guardadas: <span className="font-semibold text-white">{journalCount}</span></p>
            <button
              type="button"
              onClick={handleClearJournal}
              className="mt-6 rounded-3xl bg-rose-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-rose-400"
            >
              Limpiar diario
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
