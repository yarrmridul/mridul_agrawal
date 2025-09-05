"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MessageCircle, ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Content */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-balance animate-slide-up">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mridul.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in delay-300">
            I’m the kind of person who turns chaos into clean systems and ideas into action. I love bridging the gap
            between tech and business — because spreadsheets deserve some personality, and strategies deserve some
            speed.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Hire Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            Download Resume
          </Button>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-6 pt-8 animate-fade-in delay-700">
          <SocialIcon icon={Linkedin} href="#" label="LinkedIn" />
          <SocialIcon icon={Github} href="#" label="GitHub" />
          <SocialIcon icon={MessageCircle} href="#" label="WhatsApp" />
          <SocialIcon icon={Mail} href="#" label="Email" />
          <SocialIcon icon={Phone} href="#" label="Call" />
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <div className="w-12 h-12 rounded-full bg-card/60 glassmorphism flex items-center justify-center text-card-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110">
          <ArrowDown className="w-5 h-5" />
        </div>
      </button>
    </section>
  )
}

interface SocialIconProps {
  icon: React.ElementType
  href: string
  label: string
}

function SocialIcon({ icon: Icon, href, label }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-14 h-14 rounded-full bg-card/60 glassmorphism flex items-center justify-center text-card-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
    >
      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </a>
  )
}
