"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronUp } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "timeline", label: "Timeline" },
    { id: "about", label: "Why Me" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 400);

      // Update active section based on scroll position
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
        <div className="bg-card/80 glassmorphism rounded-full px-6 py-3 shadow-lg">
          <ul className="flex items-center space-x-6">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                    activeSection === section.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 lg:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="sm"
          className="bg-card/80 glassmorphism text-card-foreground hover:bg-card border-0 shadow-lg"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {isOpen && (
          <div className="absolute top-12 right-0 bg-card/90 glassmorphism rounded-xl p-4 shadow-xl min-w-[200px]">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                      activeSection === section.id
                        ? "text-primary bg-primary/10"
                        : "text-card-foreground"
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="sm"
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </>
  );
}
