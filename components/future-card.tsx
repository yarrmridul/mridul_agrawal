"use client"

import { useState } from "react"
import { WebcamCard } from "./webcam-card"

export function FutureCard() {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl w-full px-4">
      
      {/* Text Content - Left Side */}
      <div className="flex-1 max-w-lg">
        <div className="space-y-6 text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Your Next <span className="font-extrabold">Move</span>
          </h2>

          <div className="space-y-4">
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
              Not everything worth building is listed.
              Not every collaboration has begun.
            </p>

            <p className="text-base md:text-lg text-cyan-300/90 font-medium italic">
              This is where the next one starts.
            </p>
          </div>
        </div>

        {/* Reveal content */}
        <div
          className={`mt-8 transition-all duration-1000 ease-out ${
            isRevealed
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95 pointer-events-none"
          }`}
        >
          <div className="space-y-6">
            <p className="text-base text-white/80 leading-relaxed">
              I work at the intersection of product, data, and business.
              I'm actively exploring roles, collaborations, and partnerships where ownership, impact, and long-term thinking matter.
            </p>

            <p className="text-lg font-semibold text-cyan-300/95 tracking-wide">
              Let's build something extraordinary — deliberately.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="mailto:hello@example.com"
                className="px-6 py-3 bg-gradient-to-r from-white/5 to-cyan-400/10 backdrop-blur-sm border border-white/10 rounded-xl text-white/90 hover:text-cyan-400 hover:from-cyan-400/20 hover:to-cyan-400/20 transition-all duration-300 font-medium text-base shadow-lg hover:shadow-cyan-400/20 group relative overflow-hidden"
              >
                <span className="relative z-10">Send Email</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="tel:+1234567890"
                className="px-6 py-3 bg-gradient-to-r from-white/5 to-cyan-400/10 backdrop-blur-sm border border-white/10 rounded-xl text-white/90 hover:text-cyan-400 hover:from-cyan-400/20 hover:to-cyan-400/20 transition-all duration-300 font-medium text-base shadow-lg hover:shadow-cyan-400/20 group relative overflow-hidden"
              >
                <span className="relative z-10">Give a Call</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card - Right Side */}
      <div className="flex-shrink-0">
        <WebcamCard
          isRevealed={isRevealed}
          onReveal={() => setIsRevealed(true)}
        />
      </div>
    </div>
  )
}