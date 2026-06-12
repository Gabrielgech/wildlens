import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AudioVisualizer from '../../components/AudioVisualizer'
import FieldCard from '../../components/FieldCard'
import { useAudioClassifier } from '../../hooks/useAudioClassifier'
import { useAudioRecorder } from '../../hooks/useAudioRecorder'
import { getManualSelectionList } from '../../data/species'
import type { Species } from '../../types'
import { ChevronDown, ChevronLeft } from 'lucide-react'

export default function Listen() {
  const navigate = useNavigate()
  const {
    startRecording,
    stopRecording,
    isRecording,
    audioDuration,
    frequencyData,
    audioBlob,
    hasPermission,
    error
  } = useAudioRecorder()
  const { analyzeAudio } = useAudioClassifier()
  const [results, setResults] = useState<{ species: Species; confidence: number; reasoning: string; suggestManualSelection?: boolean }[] | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null)
  const [showManualSelection, setShowManualSelection] = useState(false)
  const [manualSearchQuery, setManualSearchQuery] = useState('')

  const canAnalyze = Boolean(audioBlob && frequencyData && !isRecording)

  const recordedLabel = useMemo(() => {
    if (!audioBlob) return 'Sin grabación'
    if (audioDuration === 0) return 'Grabación lista'
    return `Duración: ${audioDuration}s`
  }, [audioBlob, audioDuration])

  const handleAnalyze = async () => {
    if (!frequencyData) return
    setIsAnalyzing(true)
    window.setTimeout(() => {
      const analysis = analyzeAudio(frequencyData, audioDuration)
      setResults(analysis)
      setIsAnalyzing(false)
    }, 500)
  }

  const reset = () => {
    setResults(null)
    setSelectedSpecies(null)
    stopRecording()
  }

  return (
    <div className="min-h-screen p-4 bg-[#F8FBF0]">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-green-700 mb-4"
      >
        <ChevronLeft size={20} /> Regresar
      </button>
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#2D6A4F]">BioListen</p>
              <h2 className="mt-2 text-3xl font-bold text-[#1A3326]">Detecta animales por su sonido</h2>
              <p className="mt-3 max-w-2xl text-[#4A7C59]">
                Graba hasta 10 segundos de audio en el campo y deja que WildLens ofrezca posibles especies con base en patrones de frecuencia y ritmo.
              </p>
            </div>
            <div className="rounded-3xl bg-[#E8F5E9] p-4 text-right sm:text-left border border-[#C8E6C9]">
              <p className="text-sm text-[#4A7C59]">Estado</p>
              <p className="mt-1 text-xl font-semibold text-[#2D6A4F]">{isRecording ? 'Grabando' : audioBlob ? 'Listo para analizar' : 'Esperando grabación'}</p>
              <p className="mt-2 text-sm text-[#4A7C59]">{recordedLabel}</p>
            </div>
          </div>
        </div>

        <AudioVisualizer frequencyData={frequencyData} isRecording={isRecording} />

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-[#C8E6C9] bg-white p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#1A3326]">Grabación de campo</h3>
                <p className="mt-2 text-[#4A7C59]">Usa el micrófono de tu dispositivo para capturar sonidos de fauna y analizar su firma acústica.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  className={`rounded-3xl px-5 py-3 text-sm font-semibold transition ${isRecording ? 'bg-[#E63946] text-white hover:bg-[#D62828]' : 'bg-[#52B788] text-white hover:bg-[#2D6A4F] animate-pulse-green'}`}
                  onClick={isRecording ? stopRecording : startRecording}
                >
                  {isRecording ? 'Detener' : 'Iniciar grabación'}
                </button>
                <button
                  className="rounded-3xl border border-[#C8E6C9] bg-[#F1F8E9] px-5 py-3 text-sm text-[#2D6A4F] transition hover:border-[#2D6A4F]"
                  onClick={reset}
                >
                  Reiniciar
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]">
                <p className="text-sm uppercase tracking-[0.2em] text-[#4A7C59]">Permiso</p>
                <p className="mt-2 text-lg font-semibold text-[#2D6A4F]">{hasPermission ? 'Concedido' : 'No solicitado'}</p>
              </div>
              <div className="rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]">
                <p className="text-sm uppercase tracking-[0.2em] text-[#4A7C59]">Último resultado</p>
                <p className="mt-2 text-lg font-semibold text-[#2D6A4F]">{results?.length ? `${results.length} sugerencias` : 'Aún no analizado'}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                className="rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleAnalyze}
                disabled={!canAnalyze || isAnalyzing}
              >
                {isAnalyzing ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                    Procesando audio...
                  </span>
                ) : 'Analizar sonido'}
              </button>
              {error ? <span className="text-sm text-rose-300">{error}</span> : null}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6">
            <h3 className="text-xl font-bold text-white">Consejos rápidos</h3>
            <ul className="mt-4 space-y-3 text-textLight/80">
              <li>• Mantén el micrófono estable y apunta hacia la fuente del sonido.</li>
              <li>• Graba en intervalos cortos para capturar solo la llamada animal.</li>
              <li>• Usa el botón de análisis después de detener la grabación.</li>
            </ul>
          </div>
        </div>

        {results ? (
          <div className="rounded-3xl border border-border bg-surface p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Resultados sugeridos</h3>
                <p className="mt-2 text-textLight/80">WildLens propone especies según el perfil de audio grabado.</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">Confianza aproximada</span>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {results.map((result, index) => (
                <button
                  key={result.species.id}
                  type="button"
                  onClick={() => setSelectedSpecies(result.species)}
                  className="rounded-3xl border border-white/10 bg-[#0f172a] p-5 text-left transition hover:border-cyan-400/30 animate-fade-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold text-white">{result.species.commonName}</p>
                      <p className="mt-1 text-sm text-textLight/70">{result.species.scientificName}</p>
                    </div>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-textLight">{result.confidence}%</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-textLight/70">{result.reasoning}</p>
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {selectedSpecies ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setSelectedSpecies(null)}>
          <div className="relative w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1220] p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
            <FieldCard species={selectedSpecies} mode="fauna" onClose={() => setSelectedSpecies(null)} />
          </div>
        </div>
      ) : null}
    </div>
  )
}
