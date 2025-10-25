"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

export function WhyHireMeSection() {
  const heading = "Why Hire Me";
  const subline =
    "Because I don’t just use AI — I build with it, think with it, and scale with it";

  const benefits = [
    {
      title: "Not Just Projects — Real Market Experience",
      description:
        "Unlike most freshers, you’ve actually handled clients, campaigns, and business outcomes in the real world. That’s a huge edge.",
    },
    {
      title: "Entrepreneurship = My Real-Time MBA",
      description:
        "Running Moodale taught me sales, marketing, client handling, strategy, and execution — lessons more practical than any MBA classroom.",
    },
    {
      title: "Communication as a Superpower",
      description:
        "Working with clients, leading teams, and presenting strategies sharpened my ability to communicate persuasively and clearly.",
    },
    {
      title: "Bridge Between Strategy and Execution",
      description:
        "I don’t just plan strategies — I roll up my sleeves and make them happen with processes, automation, and systems.",
    },
    {
      title: "Wore Multiple Hats When It Mattered",
      description:
        "Design, social ads, web, data, ops, sales, marketing—whatever moved the work forward, I owned it.",
    },
    {
      title: "AI as My Right Hand",
      description:
        "I leverage AI daily to work smarter, automate processes, and scale creativity — making it a natural extension of how I build and solve problems.",
    },
    {
      title: "Leadership Before Graduation",
      description:
        "Managed a 20+ member team and scaled client campaigns — proving I can handle responsibility early.",
    },
    {
      title: "Client-Ready From Day One",
      description:
        "Comfortable owning communication, deadlines, and delivery without hand-holding.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              {heading}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {subline}
          </p>
          <div className="mt-6 flex justify-center">
            <span className="h-[3px] w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-primary animate-[pulse_2.2s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
          {benefits.map((b, i) => (
            <FlipCard
              key={i}
              title={b.title}
              description={b.description}
              index={i}
              className={i < 6 ? "block" : "hidden sm:block"} // Show 6 on mobile
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({
  title,
  description,
  index,
  className = "",
}: {
  title: string;
  description: string;
  index: number;
  className?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Fade-in animation when card enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("in-view");
            obs.unobserve(el);
          }
        }
      },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto flip back after 3 seconds
  useEffect(() => {
    if (flipped) {
      const timer = setTimeout(() => setFlipped(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [flipped]);

  return (
    <div
      ref={ref}
      className={[
        "group relative h-56 sm:h-56 md:h-64 lg:h-72 cursor-pointer select-none [perspective:1200px]",
        "opacity-0 translate-y-6 transition-all duration-700",
        "[&.in-view]:opacity-100 [&.in-view]:translate-y-0",
        className,
      ].join(" ")}
      style={{ transitionDelay: `${(index % 4) * 60}ms` }}
      onClick={() => setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      aria-expanded={flipped}
      aria-label={`${title} card`}
    >
      {/* Glow frame */}
      <div className="absolute -inset-px rounded-2xl bg-[radial-gradient(120%_120%_at_0%_0%,theme(colors.primary/25),transparent_40%),radial-gradient(120%_120%_at_100%_100%,theme(colors.secondary/25),transparent_40%)] opacity-60 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />

      {/* 3D wrapper */}
      <div
        className={[
          "relative h-full w-full rounded-2xl transition-transform duration-500 transform motion-safe:[transform-style:preserve-3d]",
          "group-hover:motion-safe:rotate-y-180 group-hover:scale-[1.015] group-hover:-rotate-1",
          flipped ? "motion-safe:rotate-y-180" : "",
        ].join(" ")}
      >
        {/* FRONT */}
        <Card className="absolute inset-0 rounded-2xl border-0 bg-card/60 backdrop-blur-md shadow-lg hover:shadow-xl motion-safe:[backface-visibility:hidden]">
          <div className="h-full flex items-center justify-center text-center p-4 sm:p-5 md:p-6 lg:p-8">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold leading-tight max-w-[22rem]">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                {title}
              </span>
            </h3>
          </div>
        </Card>

        {/* BACK */}
        <Card className="absolute inset-0 rounded-2xl border-0 bg-gradient-to-br from-background to-card/90 backdrop-blur-md shadow-xl motion-safe:rotate-y-180 motion-safe:[backface-visibility:hidden]">
          <div className="h-full w-full p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col items-center justify-center text-center gap-2 sm:gap-3">
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-snug max-w-[22rem]">
              {title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-base text-muted-foreground max-w-[22rem]">
              {description}
            </p>

            {/* Close button */}
            <button
              className="mt-3 inline-flex items-center rounded-md px-3 py-1 text-xs sm:text-sm md:text-sm font-medium text-primary border border-primary/40 hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
            >
              Close
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default WhyHireMeSection;
