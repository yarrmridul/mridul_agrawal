"use client"

import { FutureCard } from "@/components/future-card"

export default function FuturePage() {
  return (
    <main className="min-h-screen w-full relative bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50" />

      <section className="relative min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl px-6">
          <FutureCard />
        </div>
      </section>
    </main>
  )
}