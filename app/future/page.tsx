"use client";

import { FutureCard } from "@/components/future-card"
import { useRouter } from "next/navigation"

export default function FuturePage() {
  const router = useRouter();
  
  const handleBack = () => {
    router.push('/');
  };
  
  return (
    <main className="min-h-screen w-full relative bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50" />
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`
      }} />

      {/* Back Button */}
      <button 
        onClick={handleBack}
        className="absolute top-6 left-6 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
        aria-label="Go back to home"
      >
        <svg 
          className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
      </button>

      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="w-full max-w-6xl px-6">
          <FutureCard />
        </div>
      </section>
    </main>
  )
}