import React from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Camera, PawPrint, Mic, WifiOff, ArrowRight } from 'lucide-react'
import BottomNav from '../../components/Navigation/BottomNav'

const cards = [
  {
    title: 'EcoScan',
    desc: 'Analiza ecosistemas por foto',
    icon: Camera,
    to: '/identify'
  },
  {
    title: 'FloraID',
    desc: 'Identifica plantas y árboles',
    icon: Leaf,
    to: '/identify'
  },
  {
    title: 'FaunaID',
    desc: 'Identifica animales con protocolo de seguridad',
    icon: PawPrint,
    to: '/identify'
  },
  {
    title: 'BioListen',
    desc: 'Detecta especies por sonido',
    icon: Mic,
    to: '/listen'
  }
]

function FeatureCard({ title, desc, Icon, to }: { title: string; desc: string; Icon: React.ComponentType<{ className?: string }>; to: string }) {
  return (
    <Link to={to} className="field-card group flex min-h-[180px] flex-col justify-between transition duration-200 hover:-translate-y-1 hover:border-[#52B788]/60">
      <div>
        <Icon className="h-12 w-12 text-[#52B788]" />
        <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-[#94a3b8]">{desc}</p>
      </div>
      <div className="flex items-center justify-end text-[#94a3b8]">
        <ArrowRight className="h-5 w-5 transition group-hover:text-[#52B788]" />
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background px-4 pb-24 pt-6 text-textLight">
      <section className="relative overflow-hidden rounded-[28px] border border-[#2D6A4F]/50 bg-[#16213E] p-6 shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F]/20 via-transparent to-[#1A1A2E]/80" />
        <div className="relative flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#2D6A4F]/20 text-[#52B788]">
              <Leaf className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-[32px] font-bold text-[#52B788]">WildLens</h1>
              <p className="mt-1 text-base italic text-[#E8F5E9]/90">Nature speaks. WildLens listens.</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-4 py-2 text-sm text-[#cbd5e1] ring-1 ring-[#2D6A4F]/20">
            <WifiOff className="h-4 w-4 text-[#52B788]" />
            Campeche, México · Offline Ready
          </div>
        </div>
      </section>

      <main className="mt-8 grid gap-4 sm:grid-cols-2">
        {cards.map(card => (
          <FeatureCard key={card.title} title={card.title} desc={card.desc} Icon={card.icon} to={card.to} />
        ))}
      </main>

      <footer className="mt-8 flex flex-col gap-2 text-sm text-[#94a3b8]">
        <p>Base de datos: 12 fauna · 8 flora · 4 ecosistemas</p>
        <p>v0.1.0 · Powered by Foundry IQ</p>
      </footer>

      <BottomNav />
    </div>
  )
}
