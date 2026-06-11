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
    <div className="min-h-screen p-4 bg-[#F8FBF0]">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#2D6A4F]">Configuración</p>
              <h1 className="mt-3 text-3xl font-bold text-[#1A3326]">WildLens</h1>
              <p className="mt-2 text-[#4A7C59]">Explora biodiversidad en Campeche incluso sin conexión.</p>
            </div>
            <div className="rounded-3xl bg-[#E8F5E9] p-4 text-right text-sm text-[#4A7C59] border border-[#C8E6C9]">
              <p className="font-semibold text-[#2D6A4F]">{version}</p>
              <p>Edición de Hackathon Agents League 2026</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]">
            <div className="flex items-center gap-3 text-[#2D6A4F]">
              <MapPin className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-[#1A3326]">Región</h2>
            </div>
            <p className="mt-4 text-[#4A7C59]">Campeche, México</p>
          </div>

          <div className="rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]">
            <div className="flex items-center gap-3 text-[#2D6A4F]">
              <Database className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-[#1A3326]">Base de datos</h2>
            </div>
            <div className="mt-4 grid gap-3">
              <div className="rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]">
                <p className="text-sm uppercase text-[#4A7C59]">Fauna</p>
                <p className="mt-2 text-2xl font-semibold text-[#2D6A4F]">{FAUNA.length}</p>
              </div>
              <div className="rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]">
                <p className="text-sm uppercase text-[#4A7C59]">Flora</p>
                <p className="mt-2 text-2xl font-semibold text-[#2D6A4F]">{FLORA.length}</p>
              </div>
              <div className="rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]">
                <p className="text-sm uppercase text-[#4A7C59]">Ecosistemas</p>
                <p className="mt-2 text-2xl font-semibold text-[#2D6A4F]">{ECOSYSTEMS.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-3 text-[#2D6A4F]">
                <BookOpen className="h-5 w-5" />
                <h2 className="text-xl font-semibold text-[#1A3326]">Foundry IQ</h2>
              </div>
              <p className="mt-3 text-[#4A7C59]">Sincroniza datos científicos con WildLens y mantén el catálogo actualizado.</p>
            </div>
            <FoundryIQBadge lastSync={lastSync} isSyncing={isSyncing} isOnline={isOnline} />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-[1.5fr_0.9fr]">
            <div className="rounded-3xl bg-[#F1F8E9] p-5 text-[#4A7C59] border border-[#C8E6C9]">
              <button
                type="button"
                onClick={handleSync}
                className="inline-flex items-center gap-2 rounded-3xl bg-[#52B788] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2D6A4F]"
              >
                <RefreshCcw className="h-4 w-4" /> Sincronizar ahora
              </button>
              {syncMessage ? <p className="mt-4 text-sm text-[#1A3326]">{syncMessage}</p> : null}
              <div className="mt-4 rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]">
                <p className="text-sm uppercase text-[#4A7C59]">Alerta ecológica</p>
                <p className="mt-2 text-[#1A3326]">{lastAlert?.alert || 'Sin alertas disponibles por el momento.'}</p>
                {lastAlert ? (
                  <p className="mt-2 text-xs text-[#4A7C59]">{lastAlert.source} · {lastAlert.severity.toUpperCase()}</p>
                ) : null}
              </div>
            </div>
            <div className="rounded-3xl bg-[#F1F8E9] p-5 text-[#4A7C59] border border-[#C8E6C9]">
              <p className="text-sm uppercase text-[#4A7C59]">Fuentes científicas</p>
              <button
                type="button"
                onClick={() => setShowSources(prev => !prev)}
                className="mt-4 rounded-3xl bg-white px-4 py-3 text-sm font-semibold text-[#2D6A4F] transition hover:bg-[#E8F5E9] border border-[#C8E6C9]"
              >
                {showSources ? 'Ocultar fuentes' : 'Mostrar fuentes'}
              </button>
              {showSources ? (
                <ul className="mt-4 space-y-2 text-sm text-[#4A7C59]">
                  {sources.length > 0 ? sources.map(source => (
                    <li key={source} className="rounded-2xl bg-white p-3 border border-[#C8E6C9]">{source}</li>
                  )) : (
                    <li className="rounded-2xl bg-white p-3 border border-[#C8E6C9]">No hay fuentes registradas aún.</li>
                  )}
                </ul>
              ) : null}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]">
          <div className="flex items-center gap-3 text-[#2D6A4F]">
            <Sparkles className="h-5 w-5" />
            <h2 className="text-xl font-semibold text-[#1A3326]">Acerca de</h2>
          </div>
          <p className="mt-4 text-[#4A7C59]">
            WildLens es un proyecto de ciencia ciudadana que combina inteligencia artificial con biodiversidad. Desarrollado para el Hackathon Agents League 2026.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]">
              <p className="text-sm uppercase text-[#4A7C59]">Powered by</p>
              <p className="mt-2 text-[#2D6A4F] font-semibold">Foundry IQ</p>
            </div>
            <div className="rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]">
              <p className="text-sm uppercase text-[#4A7C59]">Asistente</p>
              <p className="mt-2 text-[#2D6A4F] font-semibold">GitHub Copilot</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]">
            <div className="flex items-center gap-3 text-[#2D6A4F]">
              <Wifi className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-[#1A3326]">Estado offline</h2>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]">
              <span className={`inline-flex h-3.5 w-3.5 rounded-full ${isOnline ? 'bg-[#52B788]' : 'bg-[#C8E6C9]'}`} />
              <p className="text-[#4A7C59]">{isOnline ? 'Disponible sin internet' : 'Offline activado'}</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]">
            <div className="flex items-center gap-3 text-[#2D6A4F]">
              <ShieldCheck className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-[#1A3326]">Diario</h2>
            </div>
            <p className="mt-4 text-[#4A7C59]">Entradas guardadas: <span className="font-semibold text-[#2D6A4F]">{journalCount}</span></p>
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
