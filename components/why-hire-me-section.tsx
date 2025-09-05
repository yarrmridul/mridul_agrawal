"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

/**
 * WhyHireMeSection
 * - Exports BOTH named and default to avoid undefined import issues.
 * - No emojis anywhere.
 * - 4×2 grid on large screens; fully responsive.
 * - Front: big, attractive title only.
 * - Back: title + description only.
 * - Flip on hover (desktop) and on click/tap (mobile/keyboard).
 * - Extra polish: animated gradient glow, glass blur, sheen, tilt/scale, in-view reveal.
 */

export function WhyHireMeSection() {
  // If your site uses a parent heading/subline, you can delete this block and keep only the grid.
  const heading = "Why Hire Me";
  const subline =
    "I turn data-driven insights and technical know-how into outcomes your business can feel.";

  const benefits: { title: string; description: string }[] = [
    {
      title: "Not Just Projects — Real Market Experience",
      description:
        "I’ve handled live campaigns, clients, and outcomes in the real world, not just classroom deliverables.",
    },
    {
      title: "Entrepreneurship Was My Real-Time MBA",
      description:
        "Running an agency taught me sales, marketing, client handling, strategy, and execution the hard way—by doing.",
    },
    {
      title: "Clear, Confident Communication",
      description:
        "From client calls to cross-functional handoffs, I keep plans crisp, decisions documented, and teams aligned.",
    },
    {
      title: "Bridge Between Strategy and Execution",
      description:
        "I translate goals into processes and systems—so ideas don’t die in meetings, they ship.",
    },
    {
      title: "Wore Multiple Hats When It Mattered",
      description:
        "Design, social ads, web, data, ops, sales, marketing—whatever moved the work forward, I owned it.",
    },
    {
      title: "Automation Mindset",
      description:
        "I remove repetitive work with clean workflows and simple automation, so teams focus on impact.",
    },
    {
      title: "Leadership Before Graduation",
      description:
        "I’ve led teams and owned delivery for clients early in my journey—accountability is not new to me.",
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
        {/* Keep or remove this heading/subline block depending on your layout */}
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

        {/* Cards grid — 4×2 on lg screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {benefits.map((b, i) => (
            <FlipCard key={i} title={b.title} description={b.description} index={i} />
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
}: {
  title: string;
  description: string;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // In-view reveal (no libs)
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

  return (
    <div
      ref={ref}
      className={[
        "group relative h-48 md:h-56 cursor-pointer select-none [perspective:1200px]",
        "opacity-0 translate-y-6 transition-all duration-700",
        "[&.in-view]:opacity-100 [&.in-view]:translate-y-0",
      ].join(" ")}
      style={{ transitionDelay: `${(index % 4) * 60}ms` }}
      onClick={() => setFlipped((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((v) => !v);
        }
        if (e.key === "Escape") setFlipped(false);
      }}
      role="button"
      tabIndex={0}
      aria-expanded={flipped}
      aria-label={`${title} card`}
    >
      {/* Animated gradient frame (outer glow) */}
      <div className="absolute -inset-px rounded-2xl bg-[radial-gradient(120%_120%_at_0%_0%,theme(colors.primary/25),transparent_40%),radial-gradient(120%_120%_at_100%_100%,theme(colors.secondary/25),transparent_40%)] opacity-60 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />

      {/* 3D wrapper */}
      <div
        className={[
          "relative h-full w-full rounded-2xl transition-transform duration-500",
          "motion-safe:[transform-style:preserve-3d]",
          "transition-[transform,box-shadow] ease-out",
          "group-hover:-rotate-1 group-hover:scale-[1.015]",
          "group-hover:motion-safe:rotate-y-180",
          flipped ? "motion-safe:rotate-y-180" : "",
        ].join(" ")}
      >
        {/* FRONT — big, attractive title (no icon/emoji) */}
        <Card
          className={[
            "absolute inset-0 rounded-2xl border-0",
            "bg-card/60 backdrop-blur-md",
            "shadow-lg hover:shadow-xl transition-shadow duration-300",
            "motion-safe:[backface-visibility:hidden]",
            "before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none",
            "before:bg-[radial-gradient(80%_60%_at_50%_0%,theme(colors.primary/10),transparent_60%)]",
          ].join(" ")}
        >
          <div className="h-full w-full p-6 flex items-center justify-center text-center">
            <h3 className="text-lg md:text-[1.25rem] font-extrabold leading-tight tracking-tight max-w-[22rem]">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                {title}
              </span>
            </h3>
          </div>

          {/* sheen sweep */}
          <span
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.12) 30%, transparent 60%)",
              maskImage:
                "radial-gradient(60% 180% at -20% 50%, black 20%, transparent 60%)",
            }}
          />
        </Card>

        {/* BACK — title + description (no icon/emoji) */}
        <Card
          className={[
            "absolute inset-0 rounded-2xl border-0",
            "bg-gradient-to-br from-background to-card/90 backdrop-blur-md",
            "shadow-xl",
            "motion-safe:rotate-y-180 motion-safe:[backface-visibility:hidden]",
          ].join(" ")}
        >
          <div className="h-full w-full p-6 flex flex-col items-center justify-center text-center gap-3">
            <h3 className="text-base md:text-[1.06rem] font-semibold leading-snug max-w-[22rem]">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground max-w-[22rem]">
              <span className="font-semibold">
                {description.split(" ").slice(0, 4).join(" ")}
              </span>{" "}
              {description.split(" ").slice(4).join(" ")}
            </p>
            <button
              className="mt-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
              aria-label="Close card"
            >
              Close
            </button>
          </div>
        </Card>
      </div>

      {/* motion-reduce fallback (no 3D flip) */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .group:hover .motion-safe\\:rotate-y-180 {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default WhyHireMeSection;
