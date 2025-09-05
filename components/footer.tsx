"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp, FileText, Linkedin, Github } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 px-4 border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="text-sm text-muted-foreground">© 2025 Mridul Agrawal</div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Top
          </Button>

          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <a href="https://drive.google.com/drive/folders/1nC52MQEiG7A2B_Bs05HXwvpndiO3knDJ?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <FileText className="w-4 h-4 mr-1" />
              Resume
            </a>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <a href="https://www.linkedin.com/in/mridul-agrawal-62029522b" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-1" />
              LinkedIn
            </a>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <a href="https://github.com/yarrmridul" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-1" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
