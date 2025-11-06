"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Sparkles } from "lucide-react"
import mridul_img from "../../public/mridul_img.png"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header Section */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span className="text-sm font-medium">← Back</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-2">
                <span className="text-slate-900">About </span>
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Me</span>
              </h1>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4"></div>
            </div>

            <p className="text-slate-700 leading-relaxed text-base">
              Born and raised in Mathura — so yes, I bring both a sweet tooth and a knack for balance. As a true Baniya,
              I've mastered the art of <em className="font-semibold text-slate-900">paisa bachao</em> — from making
              custom CRMs for me to negotiating deals that make everyone smile. I'm big on management, bigger on jugaad
              and happiest when building systems that make work smoother (and people happier) and solving real world
              problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-4">
              <Link
                href="https://www.linkedin.com/in/mridul-agrawal-62029522b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Linkedin size={18} />
                LinkedIn
              </Link>
              <a
                href="mailto:mridulagrawal06@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Mail size={18} />
                Gmail
              </a>
            </div>
          </div>

          {/* Center Column - Profile Image */}
          <div className="lg:col-span-1 flex flex-col items-center gap-8">
            <div className="text-center space-y-4">
              <p className="text-lg font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent leading-relaxed">
                Building systems, sipping chai, and figuring life one product at a time.
              </p>
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-slate-200/50">
                <div className="aspect-square w-full max-w-xs bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={mridul_img}
                    alt="Profile"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Story */}
          <div className="lg:col-span-1 space-y-5">
            {/* First Card - Journey */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50 rounded-xl p-7 shadow-sm hover:shadow-lg hover:border-blue-300/70 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="text-cyan-500" size={18} />
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-slate-900 text-base">The Journey</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  I've always had a thing for figuring out how things work — and how they could work better. That
                  curiosity turned into side gigs back in Class 10 (2018). By 2020, that curiosity evolved into Moodale
                  — my real-world MBA in operations, marketing, and strategy. I didn't know where it would lead then
                  (and still don't fully), but that's the fun part — and it continues to shape how I approach work
                  today.
                </p>
              </div>
            </div>

            {/* Second Card - Philosophy */}
            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-xl p-7 shadow-sm hover:shadow-lg hover:border-emerald-300/70 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="text-emerald-500" size={18} />
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-slate-900 text-base">Building Better</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Over the years, I've learned that great products aren't just built — they're understood, tested, and
                  evolved. I love collaborating with people who think differently, figuring out why, and building
                  systems that make life (and work) smoother.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}