import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Identify from './pages/Identify'
import Listen from './pages/Listen'
import Journal from './pages/Journal'
import Settings from './pages/Settings'
import BottomNav from './components/Navigation/BottomNav'
import { useLocation } from './hooks/useLocation'
import { useOnlineStatus } from './hooks/useOnlineStatus'
import { LocationContext } from './context/LocationContext'

export default function App() {
  const locationState = useLocation()
  const { isOnline } = useOnlineStatus()
  const [toast, setToast] = useState<string | null>(null)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    if (isOnline) {
      setToast('🔗 Conectado — sincronizando con Foundry IQ')
    } else {
      setToast('📴 Modo campo activado — sin internet')
    }
  }, [isOnline])

  useEffect(() => {
    if (!toast) return
    const id = window.setTimeout(() => setToast(null), 3000)
    return () => window.clearTimeout(id)
  }, [toast])

  return (
    <LocationContext.Provider value={{ ...locationState, isOnline }}>
      <div className="min-h-screen bg-background text-textLight">
        {toast ? (
          <div className="fixed inset-x-0 top-4 z-50 mx-auto max-w-3xl rounded-3xl bg-slate-900/95 px-6 py-3 text-center text-sm text-white shadow-xl shadow-black/30">
            {toast}
          </div>
        ) : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        {/* bottom nav rendered inside pages too, but include as fallback */}
        <BottomNav />
      </div>
    </LocationContext.Provider>
  )
}
