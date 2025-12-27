"use client";

import { useState, useRef, useEffect } from "react";

interface WebcamCardProps {
  isRevealed: boolean;
  onReveal: () => void;
}

export function WebcamCard({ isRevealed, onReveal }: WebcamCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasCamera, setHasCamera] = useState(true);

  const isMobile =
    typeof window !== "undefined" &&
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

  const playClickSound = () => {
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = "sine"
    osc.frequency.value = 620
    gain.gain.value = 0.04

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start()
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15)
    osc.stop(ctx.currentTime + 0.15)
  }

  const handleReveal = () => {
    if (!isRevealed) {
      playClickSound()
      onReveal()
    }
  }

  useEffect(() => {
    if (!isRevealed && typeof window !== "undefined") {
      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
              width: { ideal: 1280 },
              height: { ideal: 720 },
              facingMode: "user"
            } 
          });
          
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current?.play().catch(() => {
  console.log("Autoplay blocked, image fallback still visible");
});
          }
          
          setHasCamera(true);
        } catch (err) {
          console.log("Camera access denied or not available:", err);
          setHasCamera(false);
        }
      };

      startCamera();

      return () => {
        if (videoRef.current?.srcObject) {
          const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
          tracks.forEach(track => track.stop());
        }
      };
    }
  }, [isRevealed]);

  useEffect(() => {
    if (!videoRef.current || isMobile) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current
        if (!video) return

        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [isMobile]);

  return (
    <div 
      ref={cardRef}
      className={`relative w-72 h-[26rem] cursor-pointer group
    transition-transform duration-700
    ${!isRevealed ? "animate-float" : ""}
    ${isRevealed ? "animate-heartbeat" : ""}
  `}
      onClick={handleReveal}
    >
      {/* Video container */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10">

        {/* Base image — ALWAYS visible */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/me.jpg')", // <-- REQUIRED
          }}
        />

        {/* Webcam layer (optional) */}
        {hasCamera && !isMobile && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`
              absolute inset-0 w-full h-full object-cover
              scale-x-[-1]
              brightness-95 contrast-110
              transition-opacity duration-700
              opacity-100
            `}
          />
        )}

        {/* Blur overlay */}
        <div
          className={`
            absolute inset-0 rounded-2xl transition-all duration-700
            ${
              isRevealed
                ? "backdrop-blur-0 bg-black/0"
                : "backdrop-blur-md bg-black/40"
            }
          `}
        />
        
        {/* Cyan glow */}
        <div
          className="
            pointer-events-none
            absolute -inset-[1px]
            rounded-2xl
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
            bg-gradient-to-br
            from-cyan-400/40
            via-transparent
            to-cyan-400/40
            blur-md
          "
        />
      </div>

      {/* Card content */}
      <div
        className={`
          absolute inset-0 z-10 flex flex-col justify-center items-center
          p-6 text-center pointer-events-none
          transition-all duration-700
          ${isRevealed ? "text-white/90" : "text-white"}
        `}
      >
        {/* Access */}
        <span
          className={`
            text-xs tracking-widest uppercase mb-4
            transition-opacity duration-500
            ${isRevealed ? "opacity-100" : "opacity-40"}
          `}
        >
          ● ACCESS GRANTED
        </span>

        {/* Title */}
        <h2 className="text-2xl font-semibold tracking-wide leading-tight">
          YOUR<br />NEXT<br />MOVE
        </h2>

        {/* Subtitle */}
        <p
          className={`
            text-xs mt-3 tracking-widest transition-opacity duration-500
            ${isRevealed ? "opacity-70" : "opacity-40"}
          `}
        >
          CLICK TO EXPLORE
        </p>

        {/* ID */}
        <p className="text-white/50 text-xs font-mono mt-6">
          ID: 2025-NEXT-ROLE
        </p>
      </div>
    </div>
  );
}