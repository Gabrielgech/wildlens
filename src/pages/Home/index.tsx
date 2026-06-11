import React from 'react'
import BottomNav from '../../components/Navigation/BottomNav'

function FeatureCard({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="bg-background/40 border border-primary/10 p-4 rounded-lg">
      <h3 className="text-accent font-semibold">{title}</h3>
      <p className="text-textLight/80 text-sm mt-1">{desc}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen px-4 pb-24">
      <header className="pt-8">
        <h1 className="text-4xl font-bold text-accent">WildLens</h1>
        <p className="mt-2 text-textLight/80">Nature speaks. WildLens listens.</p>
      </header>

      <main className="mt-8 grid grid-cols-1 gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <FeatureCard title="EcoScan" desc="Offline photo ID for quick field checks." />
          <FeatureCard title="FloraID" desc="Identify plant species with images." />
          <FeatureCard title="FaunaID" desc="Fast wildlife recognition for animals." />
          <FeatureCard title="BioListen" desc="Analyze field recordings to detect species." />
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
