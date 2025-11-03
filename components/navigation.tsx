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

      // Update active section
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
        <>
          {/* Scroll to top on right side */}
          <Button
            onClick={scrollToTop}
            size="sm"
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <ChevronUp className="w-5 h-5" />
          </Button>

          {/* WhatsApp Icon on left side */}
          <a
            href="https://wa.me/917983738443"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-500 bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20.52 3.48A11.85 11.85 0 0012 0C5.37 0 0 5.37 0 12a11.85 11.85 0 002.38 7.15L0 24l5.1-2.38A11.88 11.88 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22a9.83 9.83 0 01-5-1.36l-.36-.21-3.02 1.4.64-3.15-.21-.33A9.83 9.83 0 012.17 12C2.17 6.58 6.58 2.17 12 2.17S21.83 6.58 21.83 12 17.42 21.83 12 21.83zm5.44-7.02c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.6-.91-2.18-.24-.58-.49-.5-.67-.5h-.57c-.18 0-.47.07-.72.35-.25.27-.95.93-.95 2.27s.97 2.63 1.1 2.82c.14.2 1.91 2.92 4.62 4.09.65.28 1.15.45 1.54.57.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.27.22-.63.22-1.17.15-1.27-.07-.1-.27-.17-.57-.32z" />
            </svg>
          </a>
        </>
      )}
    </>
  );
}
