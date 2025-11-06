"use client";
import Link from "next/link";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

// Notes:
// • Much smaller heading on phones via clamp()
// • Tighter vertical rhythm on mobile and larger on desktop
// • Safer animations: motion-safe + motion-reduce
// • Hide heavy blobs on small screens to prevent overflow/blur zoom
// • Larger tap targets and responsive icon sizes
// • Prevent horizontal scroll; safe-area bottom padding for notches
// • Uses svh unit so mobile browser chrome doesn't squash the hero

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative overflow-x-hidden px-4 sm:px-6 py-14 sm:py-20 md:py-24 min-h-[88svh] md:min-h-screen flex items-center justify-center pb-[env(safe-area-inset-bottom)]"
      aria-label="Intro / Hero"
    >
      <div className="mx-auto w-full max-w-screen-lg text-center space-y-8 sm:space-y-10">
        {/* Hero Content */}
        <div className="space-y-4 sm:space-y-6 motion-safe:animate-fade-in motion-reduce:animate-none">
          <h1
            className="font-serif font-bold leading-[1.05] text-balance mx-auto text-[clamp(2rem,8vw,4.25rem)] md:text-[4.75rem]"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mridul.
            </span>
          </h1>
          <p
            className="mx-auto max-w-prose text-pretty text-base sm:text-lg md:text-xl text-muted-foreground motion-safe:animate-fade-in motion-reduce:animate-none md:delay-300"
          >
            I'm the kind of person who turns chaos into roadmaps and ideas into impact. I
            live where user pain meets business gain — translating "we should build this"
            into "wow, this works."
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 sm:inline-flex gap-3 sm:gap-4 justify-center items-center motion-safe:animate-fade-in motion-reduce:animate-none md:delay-500">
          <Link href="/about" passHref legacyBehavior>
            <Button
              size="lg"
              className="px-7 sm:px-8 py-5 text-base sm:text-lg rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transition-transform duration-300 motion-safe:hover:scale-[1.03]"
            >
              About Me
            </Button>
          </Link>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-7 sm:px-8 py-5 text-base sm:text-lg rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-md hover:shadow-lg transition-transform duration-300 motion-safe:hover:scale-[1.03] bg-transparent"
          >
            <a
              href="https://drive.google.com/drive/folders/1nC52MQEiG7A2B_Bs05HXwvpndiO3knDJ?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 sm:gap-5 pt-6 sm:pt-8 motion-safe:animate-fade-in motion-reduce:animate-none md:delay-700">
          <SocialIcon icon={Linkedin} href="https://www.linkedin.com/in/mridul-agrawal-62029522b" label="LinkedIn" />
          <SocialIcon icon={Github} href="https://github.com/yarrmridul" label="GitHub" />
          <SocialIcon icon={SiWhatsapp} href="https://wa.me/917983738443" label="WhatsApp" />
          <SocialIcon icon={Mail} label="Email" href="https://mail.google.com/mail/?view=cm&fs=1&to=mridulagrawal06@gmail.com&su=Portfolio%20Inquiry&body=Hello%2C%20I%20just%20visited%20your%20portfolio." />
          <SocialIcon icon={Phone} href="tel:+917983738443" label="Call" />
        </div>

        {/* Floating Animation Elements (hidden on small for performance) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl motion-safe:animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-xl motion-safe:animate-pulse md:delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-lg motion-safe:animate-pulse md:delay-500" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo("experience")}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce focus:outline-none"
        aria-label="Scroll to experience section"
      >
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 flex items-center justify-center text-card-foreground hover:bg-primary hover:text-primary-foreground transition-transform duration-300 motion-safe:hover:scale-110">
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </button>
    </section>
  );
}

interface SocialIconProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

function SocialIcon({ icon: Icon, href, label }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
      className="group min-w-12 min-h-12 sm:w-14 sm:h-14 w-12 h-12 rounded-full bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 flex items-center justify-center text-card-foreground hover:bg-primary hover:text-primary-foreground transition-transform duration-300 motion-safe:hover:scale-110 hover:shadow-md"
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}

export default HeroSection;