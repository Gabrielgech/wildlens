import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Identify from './pages/Identify'
import Listen from './pages/Listen'
import Journal from './pages/Journal'
import Settings from './pages/Settings'
import BottomNav from './components/Navigation/BottomNav'
import { useLocation } from './hooks/useLocation'
import { LocationContext } from './context/LocationContext'

export default function App() {
  const locationState = useLocation()

  return (
    <LocationContext.Provider value={locationState}>
      <div className="min-h-screen bg-background text-textLight">
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
