import React from 'react'
import { NavLink } from 'react-router-dom'
import { Camera, Mic, BookOpen, Settings } from 'lucide-react'

const tabs = [
  { to: '/identify', label: 'Cámara', Icon: Camera },
  { to: '/listen', label: 'Audio', Icon: Mic },
  { to: '/journal', label: 'Diario', Icon: BookOpen },
  { to: '/settings', label: 'Ajustes', Icon: Settings }
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#C8E6C9] z-50 shadow-[0_-2px_8px_rgba(45,106,79,0.08)]">
      <ul className="mx-auto flex h-full max-w-4xl justify-between px-4">
        {tabs.map(({ to, label, Icon }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              className={({ isActive }) =>
                `group h-full flex flex-col items-center justify-center gap-1 transition-colors duration-200 ${
                  isActive ? 'text-[#2D6A4F]' : 'text-[#9E9E9E]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative flex h-6 w-6 items-center justify-center">
                    {isActive && <span className="absolute top-0 h-1.5 w-1.5 rounded-full bg-[#2D6A4F]" />}
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em]">{label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
