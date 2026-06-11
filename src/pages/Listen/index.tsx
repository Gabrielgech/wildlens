import { useMemo, useState } from 'react'
import AudioVisualizer from '../../components/AudioVisualizer'
import FieldCard from '../../components/FieldCard'
import { useAudioClassifier } from '../../hooks/useAudioClassifier'
import { useAudioRecorder } from '../../hooks/useAudioRecorder'
import type { Species } from '../../types'

export default function Listen() {
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
  const [results, setResults] = useState<{ species: Species; confidence: number; reasoning: string }[] | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null)

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
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_28px_120px_rgba(0,0,0,0.22)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-accent/70">BioListen</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Detecta animales por su sonido</h2>
              <p className="mt-3 max-w-2xl text-textLight/80">
                Graba hasta 10 segundos de audio en el campo y deja que WildLens ofrezca posibles especies con base en patrones de frecuencia y ritmo.
              </p>
            </div>
            <div className="rounded-3xl bg-[#111827] p-4 text-right sm:text-left">
              <p className="text-sm text-textLight/70">Estado</p>
              <p className="mt-1 text-xl font-semibold text-white">{isRecording ? 'Grabando' : audioBlob ? 'Listo para analizar' : 'Esperando grabación'}</p>
              <p className="mt-2 text-sm text-textLight/80">{recordedLabel}</p>
            </div>
          </div>
        </div>

        <AudioVisualizer frequencyData={frequencyData} isRecording={isRecording} />

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-border bg-surface p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Grabación de campo</h3>
                <p className="mt-2 text-textLight/80">Usa el micrófono de tu dispositivo para capturar sonidos de fauna y analizar su firma acústica.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  className={`rounded-3xl px-5 py-3 text-sm font-semibold transition ${isRecording ? 'bg-red-500 text-white hover:bg-red-400' : 'bg-emerald-500 text-black hover:bg-emerald-400'}`}
                  onClick={isRecording ? stopRecording : startRecording}
                >
                  {isRecording ? 'Detener' : 'Iniciar grabación'}
                </button>
                <button
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-white/20"
                  onClick={reset}
                >
                  Reiniciar
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#111827] p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-textLight/70">Permiso</p>
                <p className="mt-2 text-lg font-semibold text-white">{hasPermission ? 'Concedido' : 'No solicitado'}</p>
              </div>
              <div className="rounded-3xl bg-[#111827] p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-textLight/70">Último resultado</p>
                <p className="mt-2 text-lg font-semibold text-white">{results?.length ? `${results.length} sugerencias` : 'Aún no analizado'}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                className="rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleAnalyze}
                disabled={!canAnalyze || isAnalyzing}
              >
                {isAnalyzing ? 'Analizando…' : 'Analizar grabación'}
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
              {results.map(result => (
                <button
                  key={result.species.id}
                  type="button"
                  onClick={() => setSelectedSpecies(result.species)}
                  className="rounded-3xl border border-white/10 bg-[#0f172a] p-5 text-left transition hover:border-cyan-400/30"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1220] p-6 shadow-2xl">
            <button
              className="absolute right-5 top-5 rounded-full bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
              onClick={() => setSelectedSpecies(null)}
            >
              Cerrar
            </button>
            <FieldCard species={selectedSpecies} mode="fauna" />
          </div>
        </div>
      ) : null}
    </div>
  )
}
