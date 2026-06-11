import React, { useContext, useEffect, useState } from 'react'
import { MapPin, Database, ShieldCheck, Wifi, Sparkles, RefreshCcw, BookOpen } from 'lucide-react'
import { db } from '../../db'
import { FAUNA, FLORA, ECOSYSTEMS } from '../../data/species'
import FoundryIQBadge from '../../components/FoundryIQBadge'
import { LocationContext } from '../../context/LocationContext'
import { getEcologicalAlert, syncSpeciesData, EcologicalAlert } from '../../services/foundryIQ'

export default function Settings() {
  const [journalCount, setJournalCount] = useState(0)
  const [lastSync, setLastSync] = useState<Date | null>(null)
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncMessage, setSyncMessage] = useState('')
  const [sources, setSources] = useState<string[]>([])
  const [lastAlert, setLastAlert] = useState<EcologicalAlert | null>(null)
  const [showSources, setShowSources] = useState(false)
  const version = 'v0.1.0'
  const { zone, isOnline } = useContext(LocationContext)

  useEffect(() => {
    db.journalEntries.count().then(count => setJournalCount(count))
  }, [])

  useEffect(() => {
    const fetchAlert = async () => {
      const zoneLabel = zone?.name ?? 'Campeche'
      try {
        const alertResult = await getEcologicalAlert(zoneLabel)
        setLastAlert(alertResult)
      } catch {
        setLastAlert(null)
      }
    }

    fetchAlert()
  }, [zone, isOnline])

  const handleSync = async () => {
    setIsSyncing(true)
    setSyncMessage('')

    try {
      const result = await syncSpeciesData()
      setLastSync(result.timestamp)
      setSources(result.sources)
      setSyncMessage(`${result.updated} especies actualizadas · Fuentes: ${result.sources.join(', ')}`)
    } catch (error) {
      setSyncMessage('No se pudo sincronizar. Usa el modo offline o verifica tu conexión.')
    } finally {
      setIsSyncing(false)
    }
  }

  const handleClearJournal = async () => {
    if (window.confirm('¿Seguro que quieres borrar todo tu diario de campo?')) {
      await db.journalEntries.clear()
      alert('Diario borrado correctamente.')
    }
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
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-3 text-cyan-300">
                <BookOpen className="h-5 w-5" />
                <h2 className="text-xl font-semibold text-white">Foundry IQ</h2>
              </div>
              <p className="mt-3 text-textLight/80">Sincroniza datos científicos con WildLens y mantén el catálogo actualizado.</p>
            </div>
            <FoundryIQBadge lastSync={lastSync} isSyncing={isSyncing} isOnline={isOnline} />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-[1.5fr_0.9fr]">
            <div className="rounded-3xl bg-[#111827] p-5 text-textLight/80">
              <button
                type="button"
                onClick={handleSync}
                className="inline-flex items-center gap-2 rounded-3xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
              >
                <RefreshCcw className="h-4 w-4" /> Sincronizar ahora
              </button>
              {syncMessage ? <p className="mt-4 text-sm text-white">{syncMessage}</p> : null}
              <div className="mt-4 rounded-3xl bg-[#0f172a] p-4">
                <p className="text-sm uppercase text-textLight/70">Alerta ecológica</p>
                <p className="mt-2 text-white">{lastAlert?.alert || 'Sin alertas disponibles por el momento.'}</p>
                {lastAlert ? (
                  <p className="mt-2 text-xs text-textLight/60">{lastAlert.source} · {lastAlert.severity.toUpperCase()}</p>
                ) : null}
              </div>
            </div>
            <div className="rounded-3xl bg-[#111827] p-5 text-textLight/80">
              <p className="text-sm uppercase text-textLight/70">Fuentes científicas</p>
              <button
                type="button"
                onClick={() => setShowSources(prev => !prev)}
                className="mt-4 rounded-3xl bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {showSources ? 'Ocultar fuentes' : 'Mostrar fuentes'}
              </button>
              {showSources ? (
                <ul className="mt-4 space-y-2 text-sm text-textLight/80">
                  {sources.length > 0 ? sources.map(source => (
                    <li key={source} className="rounded-2xl bg-[#0f172a] p-3">{source}</li>
                  )) : (
                    <li className="rounded-2xl bg-[#0f172a] p-3">No hay fuentes registradas aún.</li>
                  )}
                </ul>
              ) : null}
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
              <span className={`inline-flex h-3.5 w-3.5 rounded-full ${isOnline ? 'bg-emerald-400' : 'bg-slate-500'}`} />
              <p className="text-textLight/80">{isOnline ? 'Disponible sin internet' : 'Offline activado'}</p>
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
