import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Camera, PawPrint, Mic, ArrowRight } from 'lucide-react'
import BottomNav from '../../components/Navigation/BottomNav'
import LocationBadge from '../../components/LocationBadge'
import LocationSelector from '../../components/LocationSelector'
import { LocationContext } from '../../context/LocationContext'

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

function FeatureCard({ title, desc, Icon, to, index }: { title: string; desc: string; Icon: React.ComponentType<{ className?: string }>; to: string; index: number }) {
  return (
    <Link to={to} className="field-card group flex min-h-[180px] flex-col justify-between transition duration-200 hover:-translate-y-1 hover:border-[#2D6A4F] border-l-4 border-l-[#2D6A4F] animate-fade-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
      <div>
        <Icon className="h-12 w-12 text-[#2D6A4F]" />
        <h3 className="mt-4 text-xl font-bold text-[#1A3326]">{title}</h3>
        <p className="mt-2 text-sm text-[#4A7C59]">{desc}</p>
      </div>
      <div className="flex items-center justify-end text-[#4A7C59]">
        <ArrowRight className="h-5 w-5 transition group-hover:text-[#2D6A4F]" />
      </div>
    </Link>
  )
}

export default function Home() {
  const { zone, hasGPS, setZone, refreshLocation } = useContext(LocationContext)
  const [selectorOpen, setSelectorOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background px-4 pb-24 pt-6 text-textLight">
      <section className="relative overflow-hidden rounded-[28px] border border-[#C8E6C9] bg-gradient-to-br from-[#E8F5E9] to-[#F8FBF0] p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]">
        <div className="relative flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#E8F5E9] text-[#2D6A4F]">
              <Leaf className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-[32px] font-bold text-[#2D6A4F]">WildLens</h1>
              <p className="mt-1 text-base italic text-[#4A7C59]">Nature speaks. WildLens listens.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <LocationBadge zone={zone} hasGPS={hasGPS} onClick={() => setSelectorOpen(true)} />
            {zone ? (
              <span className="rounded-full bg-[#E8F5E9] px-4 py-2 text-sm text-[#2D6A4F] font-medium">Zona actual: {zone.name}</span>
            ) : null}
          </div>
        </div>
      </section>
      {selectorOpen ? (
        <LocationSelector
          currentZone={zone}
          hasGPS={hasGPS}
          onUseGPS={() => {
            setSelectorOpen(false)
            refreshLocation()
          }}
          onSelect={selectedZone => {
            setZone(selectedZone)
            setSelectorOpen(false)
          }}
          onClose={() => setSelectorOpen(false)}
        />
      ) : null}

      <main className="mt-8 grid gap-4 sm:grid-cols-2">
        {cards.map((card, idx) => (
          <FeatureCard key={card.title} title={card.title} desc={card.desc} Icon={card.icon} to={card.to} index={idx} />
        ))}
      </main>

      <footer className="mt-8 flex flex-col gap-2 text-sm text-[#4A7C59]">
        <p>Base de datos: 12 fauna · 8 flora · 4 ecosistemas</p>
        <p>v0.1.0 · Powered by Foundry IQ</p>
      </footer>

      <BottomNav />
    </div>
  )
}
