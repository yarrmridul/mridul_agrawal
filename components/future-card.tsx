"use client"

import { useState } from "react"
import { WebcamCard } from "./webcam-card"

export function FutureCard() {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <div className="flex flex-col items-center text-center gap-10">
      
      {/* Heading */}
      <div className="space-y-3 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Your Next <span className="text-cyan-400">Move</span>
        </h2>

        <p className="text-sm text-white/70">
          Some roles aren't listed yet. Some collaborations haven't started.
        </p>

        <p className="text-sm text-cyan-400/90">
          This is where the next one begins.
        </p>
      </div>

      {/* Card */}
      <WebcamCard
        isRevealed={isRevealed}
        onReveal={() => setIsRevealed(true)}
      />

      {/* Reveal content */}
      <div
        className={`transition-all duration-700 ${
          isRevealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="max-w-xl space-y-4 pt-4">
          <p className="text-sm text-white/75">
            I'm actively seeking meaningful partnerships and roles where
            ownership, impact, and innovation drive the mission forward.
          </p>

          <p className="text-sm text-cyan-400/90">
            LET’S BUILD SOMETHING EXTRAORDINARY TOGETHER.
          </p>

          <div className="flex justify-center gap-8 pt-4 text-sm">
            <a
              href="mailto:hello@example.com"
              className="text-white/70 hover:text-cyan-400 transition"
            >
              Send Email
            </a>
            <a
              href="tel:+1234567890"
              className="text-white/70 hover:text-cyan-400 transition"
            >
              Give a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}