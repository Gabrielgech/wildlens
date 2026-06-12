import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCamera } from '../../hooks/useCamera'
import { useImageClassifier } from '../../hooks/useImageClassifier'
import { FLORA, FAUNA, ECOSYSTEMS, getSpeciesById, getManualSelectionList } from '../../data/species'
import type { Species } from '../../types'
import FieldCard from '../../components/FieldCard'
import Button from '../../components/ui/Button'
import { db } from '../../db'
import {
  Camera,
  Upload,
  RefreshCcw,
  Leaf,
  Mountain,
  PawPrint,
  AlertTriangle,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const tabs = [
  { id: 'ecoscan', label: '🌄 EcoScan', icon: Mountain },
  { id: 'flora', label: '🌿 FloraID', icon: Leaf },
  { id: 'fauna', label: '🦎 FaunaID', icon: PawPrint }
] as const

type TabId = (typeof tabs)[number]['id']

export default function Identify() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<TabId>('ecoscan')
  const [capturedBase64, setCapturedBase64] = useState<string | null>(null)
  const [analysisResults, setAnalysisResults] = useState<any[]>([])
  const [journalMessage, setJournalMessage] = useState<string | null>(null)
  const [showManualSelection, setShowManualSelection] = useState(false)
  const [manualSearchQuery, setManualSearchQuery] = useState('')
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const { videoRef, startCamera, stopCamera, capturePhoto, hasPermission, error: cameraError, isLoading: cameraLoading } = useCamera()
  const { classify, isClassifying, error: classifyError, isDemoMode } = useImageClassifier()

  useEffect(() => {
    startCamera()
    return () => stopCamera()
  }, [])

  const commonFlora = FLORA.slice(0, 3)
  const commonFauna = FAUNA.slice(0, 3)

  async function handleCapture() {
    try {
      const { base64 } = await capturePhoto()
      // base64 from capturePhoto already has the data:image/jpeg;base64, prefix? 
      // wait, in original it sets photoSrc to base64. Let's assume it has prefix.
      setCapturedBase64(base64.split(',')[1] || base64)
      setAnalysisResults([])
    } catch (err) {
      console.error(err)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      const base64 = (event.target?.result as string).split(',')[1]
      setCapturedBase64(base64)
      setAnalysisResults([])
    }
    reader.readAsDataURL(file)
  }

  const handleAnalyze = async () => {
    if (!capturedBase64) return
    const mode = activeTab === 'flora' ? 'flora' : 
                 activeTab === 'ecoscan' ? 'ecosystem' : 'fauna'
    const results = await classify(capturedBase64, mode)
    setAnalysisResults(results)
  }

  function resetPhoto() {
    setCapturedBase64(null)
    setAnalysisResults([])
    setJournalMessage(null)
  }

  async function saveJournal() {
    const top = analysisResults[0]?.species
    if (!top) {
      setJournalMessage('No hay especie para guardar.')
      return
    }
    try {
      await db.journalEntries.add({
        id: `journal_${Date.now()}`,
        speciesId: top.id,
        date: new Date().toISOString()
      })
      setJournalMessage('Guardado en diario')
    } catch (err) {
      setJournalMessage('No se pudo guardar en diario.')
    }
  }

  const topFlora = analysisResults.find((item: any) => ['tree', 'plant', 'bush'].includes(item.species?.category)) || analysisResults[0]
  const topFauna = analysisResults.find((item: any) => ['mammal', 'bird', 'reptile', 'amphibian', 'insect'].includes(item.species?.category)) || analysisResults[0]
  const altFlora = analysisResults.filter((item: any) => item !== topFlora && ['tree', 'plant', 'bush'].includes(item.species?.category)).slice(0, 2)
  const altFauna = analysisResults.filter((item: any) => item !== topFauna && ['mammal', 'bird', 'reptile', 'amphibian', 'insect'].includes(item.species?.category)).slice(0, 2)

  const floraTop = topFlora ?? { species: commonFlora[0], confidence: 0, reasoning: 'Sin coincidencias directas' }
  const faunaTop = topFauna ?? { species: commonFauna[0], confidence: 0, reasoning: 'Sin coincidencias directas' }

  // Ecosystem fallback if mode is ecoscan
  const ecosystemSpecies = commonFauna

  return (
    <div className="min-h-screen bg-background px-4 pb-32 pt-6 text-textLight">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-green-700 mb-4"
      >
        <ChevronLeft size={20} /> Regresar
      </button>

      <div className="mb-6 rounded-[28px] border border-[#C8E6C9] bg-white p-4 shadow-[0_2px_8px_rgba(45,106,79,0.08)]">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#E8F5E9] text-[#2D6A4F]">
            <Leaf className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#2D6A4F]">WildLens Identify</h1>
            <p className="mt-1 text-sm italic text-[#4A7C59]">Usa la cámara para reconocer especies con IA.</p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-2 rounded-full bg-white p-1 border border-[#C8E6C9]">
        <button onClick={() => {
          const idx = tabs.findIndex(t => t.id === activeTab);
          setActiveTab(tabs[(idx - 1 + tabs.length) % tabs.length].id)
        }} className="p-2 text-[#2D6A4F] hover:bg-[#E8F5E9] rounded-full">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex flex-1 gap-1 overflow-x-auto px-2">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[80px] rounded-full px-3 py-2 text-xs font-bold transition whitespace-nowrap ${isActive ? 'bg-[#2D6A4F] text-white' : 'bg-white text-[#2D6A4F] border border-[#C8E6C9]'}`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
        <button onClick={() => {
          const idx = tabs.findIndex(t => t.id === activeTab);
          setActiveTab(tabs[(idx + 1) % tabs.length].id)
        }} className="p-2 text-[#2D6A4F] hover:bg-[#E8F5E9] rounded-full">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <section className="field-card mb-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-[#1A3326]">Captura tu foto</h2>
            <p className="text-sm text-[#4A7C59]">Selecciona cámara o sube una imagen para comenzar la identificación.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="secondary" size="sm" icon={<Upload className="h-4 w-4" />} onClick={() => fileInputRef.current?.click()}>
              Subir foto
            </Button>
            <Button variant="primary" size="sm" icon={<Camera className="h-4 w-4" />} onClick={handleCapture} disabled={cameraLoading || !hasPermission}>
              Tomar foto
            </Button>
            {capturedBase64 ? (
              <Button variant="ghost" size="sm" icon={<RefreshCcw className="h-4 w-4" />} onClick={resetPhoto}>
                Nueva foto
              </Button>
            ) : null}
          </div>
        </div>

        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />

        <div className="relative overflow-hidden rounded-[24px] border border-[#C8E6C9] bg-[#F1F8E9] p-3">
          {capturedBase64 ? (
            <>
              <img src={`data:image/jpeg;base64,${capturedBase64}`} alt="Preview" className="h-72 w-full rounded-[20px] object-cover" />
              <Button
                variant={analysisResults.length > 0 ? "secondary" : "primary"}
                size="md"
                className="absolute bottom-4 right-4"
                onClick={handleAnalyze}
                disabled={!capturedBase64 || isClassifying}
              >
                {isClassifying ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Analizando...
                  </span>
                ) : analysisResults.length > 0 ? 'Analizar otra vez' : '🔍 Analizar imagen'}
              </Button>
            </>
          ) : (
            <div className="flex h-72 items-center justify-center rounded-[20px] border-2 border-dashed border-[#C8E6C9] bg-white">
              <div className="text-center">
                {!hasPermission && !cameraLoading ? (
                  <div className="flex flex-col items-center gap-3">
                    <Camera className="h-12 w-12 text-[#2D6A4F]" />
                    <p className="text-sm font-medium text-[#1A3326]">Permite el uso de cámara</p>
                    <p className="text-xs text-[#4A7C59]">o sube una foto para identificar</p>
                    <div className="flex gap-2 pt-2">
                      <Button variant="primary" size="sm" onClick={startCamera}>
                        Usar cámara
                      </Button>
                      <Button variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()}>
                        Subir foto
                      </Button>
                    </div>
                  </div>
                ) : cameraLoading ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#C8E6C9] border-t-[#2D6A4F]" />
                    <p className="text-sm text-[#4A7C59]">Iniciando cámara...</p>
                  </div>
                ) : (
                  <div className="relative h-full w-full">
                    <video ref={videoRef} className="h-full w-full rounded-[20px] bg-[#E8F5E9] object-cover" muted playsInline />
                    <Button
                      variant="primary"
                      size="md"
                      className="absolute bottom-4 right-4 bg-gray-400 opacity-50 cursor-not-allowed"
                      disabled={true}
                    >
                      Sube una foto primero
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {(cameraError || classifyError) ? (
          <div className="mt-3 rounded-2xl bg-[#FFEBEE] p-3 text-sm text-[#E63946]">{cameraError || classifyError}</div>
        ) : null}
      </section>

      {isClassifying ? (
        <div className="field-card flex items-center justify-center p-10 text-sm text-[#4A7C59]">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-t-[#2D6A4F] border-[#E8F5E9]" />
            Analizando imagen...
          </div>
        </div>
      ) : capturedBase64 && analysisResults.length > 0 ? (
        <section className="space-y-6">
          <div key={activeTab} className="animate-fade-slide-up w-full">
            {activeTab === 'ecoscan' ? (
              <div className="field-card">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3 py-1 text-xs text-[#2D6A4F]">Ecosistema detectado</div>
                    <h3 className="mt-4 text-2xl font-bold text-[#1A3326]">Selva tropical</h3>
                    <p className="mt-2 max-w-2xl text-sm text-[#4A7C59]">Ecosistema detectado a través de análisis de imágenes.</p>
                  </div>
                  <div className="rounded-3xl bg-[#E8F5E9] px-4 py-3 text-sm text-[#2D6A4F] font-medium">Zona: Campeche</div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]">
                    <h4 className="text-sm font-semibold text-[#2D6A4F]">Posibles especies en esta zona</h4>
                    <div className="mt-4 space-y-3">
                      {(ecosystemSpecies.length ? ecosystemSpecies : commonFauna).slice(0, 4).map((species: Species, index: number) => (
                        <div key={species.id} className="flex items-center justify-between rounded-2xl bg-white p-3 border border-[#C8E6C9] animate-fade-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                          <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#2D6A4F]">•</span>
                            <div>
                              <p className="font-semibold text-[#1A3326]">{species.commonName}</p>
                              <p className="text-xs text-[#4A7C59]">{species.scientificName}</p>
                            </div>
                          </div>
                          {species.isDangerous ? (
                            <span className="rounded-full bg-[#FFEBEE] px-2 py-1 text-[11px] font-semibold text-[#E63946]">Peligro {species.dangerLevel}/5</span>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-[#FFF3E0] p-4 border border-[#FFE0B2]">
                      <h4 className="text-sm font-semibold text-[#F4A261]">Riesgos detectados</h4>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#D97706]">
                        <li>Riesgos según el área identificada</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]">
                      <h4 className="text-sm font-semibold text-[#2D6A4F]">Curiosidades</h4>
                      <p className="mt-3 text-sm text-[#4A7C59]">Información cultural local disponible.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {activeTab === 'flora' ? (
              <div className="space-y-6">
                <div className="field-card">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{floraTop.species.commonName}</h3>
                      <p className="mt-1 text-sm italic text-[#52B788]">{floraTop.species.scientificName}</p>
                      <p className="mt-2 text-sm text-[#cbd5e1]">Confianza: {floraTop.confidence}%</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {floraTop.species.isEdible ? <span className="rounded-full bg-[#2D6A4F] px-3 py-1 text-xs font-semibold text-white">COMESTIBLE</span> : null}
                      {(floraTop.species as any).isToxic ? <span className="rounded-full bg-[#E63946] px-3 py-1 text-xs font-semibold text-white">⚠️ TÓXICO</span> : null}
                    </div>
                  </div>
                  <FieldCard species={floraTop.species} mode="flora" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {(altFlora.length ? altFlora : commonFlora.slice(1, 3)).map((item: any, index: number) => (
                    <div key={item.species.id} className="rounded-2xl bg-[#1f2744] p-4 animate-fade-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <p className="text-sm font-semibold text-white">{item.species.commonName}</p>
                      <p className="mt-2 text-xs text-[#94a3b8]">{item.species.scientificName}</p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#52B788]">{item.reasoning}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {activeTab === 'fauna' ? (
              <div className="space-y-6">
                {faunaTop.species.isDangerous ? (
                  <div className="rounded-2xl bg-[#641E16] p-4 text-white">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em]">
                      <AlertTriangle className="h-4 w-4" /> PELIGROSO — Nivel {faunaTop.species.dangerLevel}/5
                    </div>
                    <p className="mt-3 text-sm text-[#f8eaea]">{faunaTop.species.encounterProtocol?.[0]?.action}</p>
                    <p className="mt-2 text-sm text-[#f8eaea]/90">{faunaTop.species.encounterProtocol?.[0]?.description}</p>
                  </div>
                ) : null}

                <div className="field-card">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{faunaTop.species.commonName}</h3>
                      <p className="mt-1 text-sm italic text-[#52B788]">{faunaTop.species.scientificName}</p>
                      <p className="mt-2 text-sm text-[#cbd5e1]">Confianza: {faunaTop.confidence}%</p>
                    </div>
                  </div>
                  <FieldCard species={faunaTop.species} mode="fauna" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {(altFauna.length ? altFauna : commonFauna.slice(1, 3)).map((item: any, index: number) => (
                    <div key={item.species.id} className="rounded-2xl bg-[#1f2744] p-4 animate-fade-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <p className="text-sm font-semibold text-white">{item.species.commonName}</p>
                      <p className="mt-2 text-xs text-[#94a3b8]">{item.species.scientificName}</p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#52B788]">{item.reasoning}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="rounded-2xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]">
            <p className="text-sm text-[#2D6A4F]">
              🔬 <strong>Identificación asistida por IA</strong> · Precisión estimada basada en características visuales generales
            </p>
          </div>

          <div className="rounded-2xl bg-[#FFF3E0] p-4 border border-[#FFE0B2]">
            <p className="text-sm font-medium text-[#D97706]">¿No es correcto? Selecciona manualmente de nuestra base de datos.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="md" onClick={saveJournal}>
              Guardar en diario
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => setShowManualSelection(!showManualSelection)}
              icon={<ChevronDown className={`h-4 w-4 transition-transform ${showManualSelection ? 'rotate-180' : ''}`} />}
            >
              Seleccionar manualmente
            </Button>
            {journalMessage ? <p className="text-sm text-[#4A7C59]">{journalMessage}</p> : null}
          </div>

          {showManualSelection ? (
            <div className="rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]">
              <h4 className="font-semibold text-[#1A3326] mb-3">Buscar especie</h4>
              <input
                type="text"
                placeholder="Buscar por nombre común o científico..."
                value={manualSearchQuery}
                onChange={(e) => setManualSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[#C8E6C9] bg-white px-3 py-2 text-[#1A3326] placeholder-[#4A7C59] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
              />
              <div className="mt-3 max-h-96 space-y-2 overflow-y-auto">
                {getManualSelectionList('fauna')
                  .filter(s =>
                    !manualSearchQuery ||
                    (s.commonName || '').toLowerCase().includes(manualSearchQuery.toLowerCase()) ||
                    (s.scientificName || '').toLowerCase().includes(manualSearchQuery.toLowerCase())
                  )
                  .slice(0, 20)
                  .map((species) => (
                    <button
                      key={species.id}
                      onClick={() => {
                        setAnalysisResults([
                          { species, confidence: 100, reasoning: 'Selección manual' },
                          ...analysisResults.slice(1)
                        ])
                        setShowManualSelection(false)
                        setManualSearchQuery('')
                      }}
                      className="w-full rounded-lg bg-white p-2 text-left transition-colors hover:bg-[#E8F5E9]"
                    >
                      <p className="font-medium text-[#1A3326]">{species.commonName}</p>
                      <p className="text-xs text-[#4A7C59]">{species.scientificName}</p>
                    </button>
                  ))}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}
    </div>
  )
}
