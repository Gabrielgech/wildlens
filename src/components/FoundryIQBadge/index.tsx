import React from 'react'
import { DEMO_MODE } from '../../services/foundryIQ'

interface FoundryIQBadgeProps {
  lastSync: Date | null
  isSyncing: boolean
  isOnline: boolean
}

export default function FoundryIQBadge({ lastSync, isSyncing, isOnline }: FoundryIQBadgeProps) {
  const timestamp = lastSync ? lastSync.toLocaleString('es-MX', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : null
  const content = isSyncing
    ? '🔄 Sincronizando con Foundry IQ...'
    : !isOnline
      ? '📴 Modo offline · Datos locales'
      : DEMO_MODE
        ? '🔬 Foundry IQ · Modo Demo'
        : '🔗 Foundry IQ · Sincronizado'

  const badgeClass = isSyncing
    ? 'bg-sky-500 text-black animate-pulse'
    : !isOnline
      ? 'bg-slate-600 text-white'
      : DEMO_MODE
        ? 'bg-blue-500 text-black'
        : 'bg-emerald-500 text-black'

  return (
    <div className={`inline-flex flex-col rounded-3xl px-4 py-3 text-sm font-semibold ${badgeClass}`}>
      <span>{content}</span>
      {lastSync && isOnline && !isSyncing ? (
        <span className="mt-1 text-xs font-normal text-black/80">Última sincronización: {timestamp}</span>
      ) : null}
    </div>
  )
}
