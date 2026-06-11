import React, { useEffect, useRef, useState } from 'react'
import { useCamera } from '../../hooks/useCamera'
import { useImageClassifier } from '../../hooks/useImageClassifier'
import { FLORA, FAUNA, ECOSYSTEMS, getSpeciesById } from '../../data/species'
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
  AlertTriangle
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
      <div className="mb-6 rounded-[28px] border border-[#2D6A4F]/50 bg-[#16213E]/80 p-4 shadow-[0_32px_80px_rgba(0,0,0,0.28)]">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#2D6A4F]/20 text-[#52B788]">
            <Leaf className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#52B788]">WildLens Identify</h1>
            <p className="mt-1 text-sm italic text-[#E8F5E9]/85">Usa la cámara para reconocer ecosistemas y especies con IA.</p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2 rounded-full bg-[#16213E] p-1 border border-[#2D6A4F]">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex min-w-[110px] items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${isActive ? 'bg-[#52B788]/15 text-[#52B788]' : 'text-[#94a3b8] hover:bg-white/5'}`}
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
            <h2 className="text-xl font-semibold text-white">Captura tu foto</h2>
            <p className="text-sm text-[#94a3b8]">Selecciona cámara o sube una imagen para comenzar la identificación.</p>
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

        <div className="relative overflow-hidden rounded-[24px] border border-[#2D6A4F] bg-[#0f172a] p-3">
          {photoSrc ? (
            <img src={photoSrc} alt="Preview" className="h-full w-full rounded-[20px] object-cover" />
          ) : (
            <div className="relative overflow-hidden rounded-[20px] border border-[#2D6A4F]/70 bg-[#0b1224] p-2">
              <video ref={videoRef} className="h-72 w-full rounded-[20px] bg-black object-cover" muted playsInline />
              {!hasPermission && !cameraLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-center text-sm text-[#cbd5e1]">
                  <div>
                    <p>Permite el uso de cámara para ver el visor.</p>
                    <Button variant="secondary" size="sm" onClick={startCamera}>
                      Iniciar cámara
                    </Button>
                  </div>
                </div>
              ) : null}
              {cameraLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white">Cargando cámara...</div>
              ) : null}
            </div>
          )}
        </div>

        {(error || modelError) ? (
          <div className="mt-3 rounded-2xl bg-[#941b0c] p-3 text-sm text-white">{error || modelError}</div>
        ) : null}
      </section>

      {isModelLoading ? (
        <div className="field-card flex items-center justify-center p-10 text-sm text-[#94a3b8]">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-t-[#52B788] border-white" />
            Cargando modelo de IA...
          </div>
        </div>
      ) : isAnalyzing ? (
        <div className="field-card flex items-center justify-center p-10 text-sm text-[#94a3b8]">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-t-[#52B788] border-white" />
            Analizando imagen...
          </div>
        </div>
      ) : photoSrc && classifyResult ? (
        <section className="space-y-6">
          {activeTab === 'ecoscan' ? (
            <div className="field-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#2D6A4F]/15 px-3 py-1 text-xs text-[#52B788]">Ecosistema detectado</div>
                  <h3 className="mt-4 text-2xl font-bold text-white">{classifyResult.ecosystem?.name ?? 'Selva tropical'}</h3>
                  <p className="mt-2 max-w-2xl text-sm text-[#cbd5e1]">{classifyResult.ecosystem?.description}</p>
                </div>
                <div className="rounded-3xl bg-[#0f172a] px-4 py-3 text-sm text-[#94a3b8]">Zona: {classifyResult.ecosystem?.zone}</div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#1f2744] p-4">
                  <h4 className="text-sm font-semibold text-[#52B788]">Posibles especies en esta zona</h4>
                  <div className="mt-4 space-y-3">
                   {(ecosystemSpecies.length ? ecosystemSpecies : commonFauna).slice(0, 4).map((species: Species) => (
                      <div key={species.id} className="flex items-center justify-between rounded-2xl bg-[#16213E] p-3">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2D6A4F]/20 text-[#52B788]">•</span>
                          <div>
                            <p className="font-semibold text-white">{species.commonName}</p>
                            <p className="text-xs text-[#94a3b8]">{species.scientificName}</p>
                          </div>
                        </div>
                        {species.isDangerous ? (
                          <span className="rounded-full bg-[#E63946]/10 px-2 py-1 text-[11px] font-semibold text-[#E63946]">Peligro {species.dangerLevel}/5</span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-[#1f2744] p-4">
                    <h4 className="text-sm font-semibold text-[#52B788]">Riesgos detectados</h4>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#cbd5e1]">
                      {(classifyResult.ecosystem?.risks ?? ['Riesgos no disponibles']).map((risk: string) => (
                        <li key={risk}>{risk}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-[#1f2744] p-4">
                    <h4 className="text-sm font-semibold text-[#52B788]">Curiosidades</h4>
                    <p className="mt-3 text-sm text-[#cbd5e1]">{classifyResult.ecosystem?.curiosities?.[0] ?? 'Información cultural local disponible.'}</p>
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

          <div className="rounded-2xl bg-[#0f172a] p-4 text-sm text-[#94a3b8]">
            ⚠️ Identificación asistida por IA. Verifica con expertos locales.
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="md" onClick={saveJournal}>
              Guardar en diario
            </Button>
            {journalMessage ? <p className="text-sm text-[#94a3b8]">{journalMessage}</p> : null}
          </div>
        </section>
      ) : null}
    </div>
  )
}
