import React, { useEffect, useRef, useState } from 'react'
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
  ChevronDown
} from 'lucide-react'

const tabs = [
  { id: 'ecoscan', label: '🌄 EcoScan', icon: Mountain },
  { id: 'flora', label: '🌿 FloraID', icon: Leaf },
  { id: 'fauna', label: '🦎 FaunaID', icon: PawPrint }
] as const

type TabId = (typeof tabs)[number]['id']

export default function Identify() {
  const [activeTab, setActiveTab] = useState<TabId>('ecoscan')
  const [photoSrc, setPhotoSrc] = useState<string | null>(null)
  const [photoImage, setPhotoImage] = useState<HTMLImageElement | null>(null)
  const [classifyResult, setClassifyResult] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [journalMessage, setJournalMessage] = useState<string | null>(null)
  const [showManualSelection, setShowManualSelection] = useState(false)
  const [manualSearchQuery, setManualSearchQuery] = useState('')
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const { videoRef, startCamera, stopCamera, capturePhoto, hasPermission, error, isLoading: cameraLoading } = useCamera()
  const { classify, isModelLoading, modelError } = useImageClassifier()

  useEffect(() => {
    startCamera()
    return () => stopCamera()
  }, [])

  useEffect(() => {
    if (!photoImage || isModelLoading || modelError) return
    setIsAnalyzing(true)
    setJournalMessage(null)
    classify(photoImage)
      .then(result => setClassifyResult(result))
      .catch(() => setClassifyResult(null))
      .finally(() => setIsAnalyzing(false))
  }, [photoImage, activeTab, isModelLoading, modelError])

  const commonFlora = FLORA.slice(0, 3)
  const commonFauna = FAUNA.slice(0, 3)

  async function handleCapture() {
    try {
      const { image, base64 } = await capturePhoto()
      setPhotoSrc(base64)
      setPhotoImage(image)
    } catch (err) {
      console.error(err)
    }
  }

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      const image = new Image()
      image.src = result
      image.onload = () => {
        setPhotoSrc(result)
        setPhotoImage(image)
      }
    }
    reader.readAsDataURL(file)
  }

  function resetPhoto() {
    setPhotoSrc(null)
    setPhotoImage(null)
    setClassifyResult(null)
    setJournalMessage(null)
  }

  async function saveJournal() {
    const top = classifyResult?.results?.[0]?.species
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

  const topFlora = classifyResult?.results?.find((item: any) => ['tree', 'plant', 'bush'].includes(item.species.category))
  const topFauna = classifyResult?.results?.find((item: any) => ['mammal', 'bird', 'reptile', 'amphibian', 'insect'].includes(item.species.category))
  const altFlora = classifyResult?.results?.filter((item: any) => item !== topFlora && ['tree', 'plant', 'bush'].includes(item.species.category)).slice(0, 2) ?? []
  const altFauna = classifyResult?.results?.filter((item: any) => item !== topFauna && ['mammal', 'bird', 'reptile', 'amphibian', 'insect'].includes(item.species.category)).slice(0, 2) ?? []

  const floraTop = topFlora ?? { species: commonFlora[0], confidence: 0, reason: 'Sin coincidencias directas' }
  const faunaTop = topFauna ?? { species: commonFauna[0], confidence: 0, reason: 'Sin coincidencias directas' }

  const ecosystemSpecies = classifyResult?.ecosystem?.typicalSpecies
    ? classifyResult.ecosystem.typicalSpecies.map((id: string) => getSpeciesById(id)).filter(Boolean)
    : []

  return (
    <div className="min-h-screen bg-background px-4 pb-32 pt-6 text-textLight">
      <div className="mb-6 rounded-[28px] border border-[#C8E6C9] bg-white p-4 shadow-[0_2px_8px_rgba(45,106,79,0.08)]">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#E8F5E9] text-[#2D6A4F]">
            <Leaf className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#2D6A4F]">WildLens Identify</h1>
            <p className="mt-1 text-sm italic text-[#4A7C59]">Usa la cámara para reconocer ecosistemas y especies con IA.</p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2 rounded-full bg-white p-1 border border-[#C8E6C9]">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex min-w-[110px] items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${isActive ? 'bg-[#E8F5E9] text-[#2D6A4F] border-b-2 border-[#2D6A4F]' : 'text-[#9E9E9E] hover:bg-[#F8FBF0]'}`}
            >
              <Icon className="h-5 w-5" />
              {tab.label}
            </button>
          )
        })}
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
            {photoSrc ? (
              <Button variant="ghost" size="sm" icon={<RefreshCcw className="h-4 w-4" />} onClick={resetPhoto}>
                Nueva foto
              </Button>
            ) : null}
          </div>
        </div>

        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />

        <div className="relative overflow-hidden rounded-[24px] border border-[#C8E6C9] bg-[#F1F8E9] p-3">
          {photoSrc ? (
            <>
              <img src={photoSrc} alt="Preview" className="h-72 w-full rounded-[20px] object-cover" />
              <Button
                variant="primary"
                size="md"
                className="absolute bottom-4 right-4"
                onClick={handleCapture}
                disabled={isAnalyzing || isModelLoading}
              >
                Analizar
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
                  <div className="flex h-full items-center justify-center">
                    <video ref={videoRef} className="h-full w-full rounded-[20px] bg-[#E8F5E9] object-cover" muted playsInline />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {(error || modelError) ? (
          <div className="mt-3 rounded-2xl bg-[#FFEBEE] p-3 text-sm text-[#E63946]">{error || modelError}</div>
        ) : null}
      </section>

      {isModelLoading ? (
        <div className="field-card flex items-center justify-center p-10 text-sm text-[#4A7C59]">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-t-[#2D6A4F] border-[#E8F5E9]" />
            Preparando IA local... (solo la primera vez)
          </div>
        </div>
      ) : isAnalyzing ? (
        <div className="field-card flex items-center justify-center p-10 text-sm text-[#4A7C59]">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-t-[#2D6A4F] border-[#E8F5E9]" />
            Analizando imagen...
          </div>
        </div>
      ) : photoSrc && classifyResult ? (
        <section className="space-y-6">
          <div key={activeTab} className="animate-tab-fade-in w-full">
            {activeTab === 'ecoscan' ? (
              <div className="field-card">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3 py-1 text-xs text-[#2D6A4F]">Ecosistema detectado</div>
                    <h3 className="mt-4 text-2xl font-bold text-[#1A3326]">{classifyResult.ecosystem?.name ?? 'Selva tropical'}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-[#4A7C59]">{classifyResult.ecosystem?.description}</p>
                  </div>
                  <div className="rounded-3xl bg-[#E8F5E9] px-4 py-3 text-sm text-[#2D6A4F] font-medium">Zona: {classifyResult.ecosystem?.zone}</div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]">
                    <h4 className="text-sm font-semibold text-[#2D6A4F]">Posibles especies en esta zona</h4>
                    <div className="mt-4 space-y-3">
                     {(ecosystemSpecies.length ? ecosystemSpecies : commonFauna).slice(0, 4).map((species: Species) => (
                        <div key={species.id} className="flex items-center justify-between rounded-2xl bg-white p-3 border border-[#C8E6C9]">
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
                        {(classifyResult.ecosystem?.risks ?? ['Riesgos no disponibles']).map((risk: string) => (
                          <li key={risk}>{risk}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]">
                      <h4 className="text-sm font-semibold text-[#2D6A4F]">Curiosidades</h4>
                      <p className="mt-3 text-sm text-[#4A7C59]">{classifyResult.ecosystem?.curiosities?.[0] ?? 'Información cultural local disponible.'}</p>
                    </div>
                    {classifyResult.ecosystem?.migratory?.length ? (
                      <div className="rounded-2xl bg-[#1f2744] p-4">
                        <h4 className="text-sm font-semibold text-[#52B788]">Especies migratorias</h4>
                        <p className="mt-3 text-sm text-[#cbd5e1]">{classifyResult.ecosystem.migratory.join(', ')}</p>
                      </div>
                    ) : null}
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
                  {(altFlora.length ? altFlora : commonFlora.slice(1, 3)).map((item: any) => (
                    <div key={item.species.id} className="rounded-2xl bg-[#1f2744] p-4">
                      <p className="text-sm font-semibold text-white">{item.species.commonName}</p>
                      <p className="mt-2 text-xs text-[#94a3b8]">{item.species.scientificName}</p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#52B788]">{item.reason}</p>
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
                  {(altFauna.length ? altFauna : commonFauna.slice(1, 3)).map((item: any) => (
                    <div key={item.species.id} className="rounded-2xl bg-[#1f2744] p-4">
                      <p className="text-sm font-semibold text-white">{item.species.commonName}</p>
                      <p className="mt-2 text-xs text-[#94a3b8]">{item.species.scientificName}</p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#52B788]">{item.reason}</p>
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

          {classifyResult?.suggestManualSelection ? (
            <div className="rounded-2xl bg-[#FFF3E0] p-4 border border-[#FFE0B2]">
              <p className="text-sm font-medium text-[#D97706]">¿No es correcto? Selecciona manualmente de nuestra base de datos.</p>
            </div>
          ) : null}

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
                        setClassifyResult({
                          ...classifyResult,
                          results: [{ species, confidence: 100, reason: 'Selección manual' }, ...classifyResult.results.slice(1)]
                        })
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
