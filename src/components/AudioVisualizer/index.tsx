import React from 'react'

interface AudioVisualizerProps {
  frequencyData: Uint8Array | null
  isRecording: boolean
}

export default function AudioVisualizer({ frequencyData, isRecording }: AudioVisualizerProps) {
  const bars = Array.from({ length: 32 }, (_, index) => {
    const value = frequencyData ? frequencyData[Math.floor((frequencyData.length / 32) * index)] : 0
    const height = Math.max(2, Math.min(100, (value / 255) * 100))
    return { value, height }
  })

  return (
    <div className="rounded-3xl border border-border bg-surface p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-textLight/70">BioListen</p>
          <p className="text-base text-textLight">Visualizador de espectro</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${isRecording ? 'bg-red-500/15 text-red-300' : 'bg-green-500/10 text-emerald-300'}`}>
          {isRecording ? 'Grabando' : 'Listo'}
        </span>
      </div>

      <div className="flex h-24 items-end gap-1 overflow-hidden rounded-2xl bg-black/5 px-1 py-2">
        {bars.map((bar, idx) => (
          <div
            key={idx}
            className="h-full w-full rounded-full bg-gradient-to-t from-emerald-500/80 to-cyan-400"
            style={{ height: `${bar.height}%`, opacity: bar.value ? 1 : 0.4 }}
          />
        ))}
      </div>
    </div>
  )
}
