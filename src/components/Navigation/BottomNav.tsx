import React from 'react'
import { NavLink } from 'react-router-dom'
import { Camera, Mic, BookOpen, Settings } from 'lucide-react'

const tabs = [
  { to: '/identify', label: 'Identify', Icon: Camera },
  { to: '/listen', label: 'Listen', Icon: Mic },
  { to: '/journal', label: 'Journal', Icon: BookOpen },
  { to: '/settings', label: 'Settings', Icon: Settings }
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-xl bg-surface rounded-lg shadow-lg border border-primary/20">
      <ul className="flex justify-between p-2">
        {tabs.map(({ to, Icon, label }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-2 px-1 text-sm ${
                  isActive ? 'text-accent' : 'text-textLight/80'
                }`
              }
            >
              <Icon className="w-6 h-6" />
              <span className="sr-only">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
