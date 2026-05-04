"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const experiences = [
  {
    company: "ION Group",
    position: "Technical Analyst – Operations & Automation",
    duration: "Jan 2026 – Present",
    logo: "/logos/ion.png",
    isCurrent: true,
    dotColor: "bg-emerald-400",
    openBorder: "border-emerald-500/40",
    openBg: "from-emerald-950/20 to-transparent",
    barColor: "bg-emerald-500",
    skillColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    bullets: [
      "Monitored mission-critical trading systems, proactively resolving alerts and ensuring high system uptime.",
      "Developed alert scripts to detect service disruptions early and support seamless price processing workflows (BAU).",
      "Automated repetitive operational tasks by identifying inefficiencies and implementing quick-action workflows, significantly reducing manual effort.",
      "Built a Microsoft Teams–based onboarding support hub, improving access to processes and accelerating new joiner ramp-up.",
      "Developed a Copilot agent to retrieve historical ticket data, enabling faster issue resolution and knowledge reuse.",
      "Managed client-facing pricing queries, providing timely updates and maintaining clear communication during delays.",
    ],
    skills: ["Trading Systems", "Alert Scripting", "Automation", "Microsoft Teams", "Copilot Agent", "BAU Support"],
  },
  {
    company: "Moodale",
    position: "Founder & Operations Lead",
    duration: "Jun 2020 – Jan 2025",
    logo: "/logos/moodale.png3.jpg",
    isCurrent: false,
    dotColor: "bg-violet-400",
    openBorder: "border-violet-500/40",
    openBg: "from-violet-950/20 to-transparent",
    barColor: "bg-violet-500",
    skillColor: "bg-violet-500/10 text-violet-400 border-violet-500/25",
    bullets: [
      "Founded and scaled a digital marketing and strategy agency, leading a 10+ member cross-functional team across marketing, operations, and tech.",
      "Delivered 500+ campaigns across digital marketing, automation, and strategy, improving client retention and ROI.",
      "Built a custom CRM and workflow automation system using AI-assisted tools, reducing manual effort and improving team efficiency.",
      "Partnered with clients to define problems, analyze business needs, and present structured solution options with clear trade-offs.",
    ],
    skills: ["Agency Management", "CRM Development", "Workflow Automation", "Digital Marketing", "Business Strategy", "AI Tools"],
  },
  {
    company: "Techlive Solutions",
    position: "Web Development & UX Intern",
    duration: "May 2024 – Jul 2024",
    logo: "/logos/techlive.jpg",
    isCurrent: false,
    dotColor: "bg-sky-400",
    openBorder: "border-sky-500/40",
    openBg: "from-sky-950/20 to-transparent",
    barColor: "bg-sky-500",
    skillColor: "bg-sky-500/10 text-sky-400 border-sky-500/25",
    bullets: [
      "Built responsive websites using AI-assisted tools and prompt engineering, improving mobile optimization and reducing development effort.",
      "Collaborated with clients to gather requirements and translate business needs into structured website features.",
      "Developed interactive product demos to help clients visualize solutions and accelerate decision-making.",
      "Acted as a bridge between clients and developers, aligning technical execution with user expectations and business goals.",
      "Ensured solutions effectively connected technical implementation with strategic business objectives.",
    ],
    skills: ["Web Development", "UX Design", "Prompt Engineering", "Client Communication", "Responsive Design"],
  },
  {
    company: "Navdrishti",
    position: "Operations & Strategy Intern",
    duration: "Jan 2023 – Feb 2024",
    logo: "/logos/images.png",
    isCurrent: false,
    dotColor: "bg-amber-400",
    openBorder: "border-amber-500/40",
    openBg: "from-amber-950/20 to-transparent",
    barColor: "bg-amber-500",
    skillColor: "bg-amber-500/10 text-amber-400 border-amber-500/25",
    bullets: [
      "Automated editorial workflows using Google Sheets and Apps Script, reducing manual tracking effort by ~50%.",
      "Designed a task and budget tracking system to improve visibility and coordination across teams.",
      "Coordinated cross-functional teams (content, finance, design) to ensure timely project delivery.",
    ],
    skills: ["Google Sheets", "Apps Script", "Workflow Automation", "Budget Tracking", "Cross-team Coordination"],
  },
]

function CompanyLogo({ logo, company, dotColor }: { logo: string; company: string; dotColor: string }) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl ${dotColor}`}>
        {company[0]}
      </div>
    )
  }

  return (
    <img
      src={logo}
      alt={`${company} logo`}
      onError={() => setImgError(true)}
      className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-full object-cover"
    />
  )
}

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx)

  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience: The Fun Part of the Resume
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-4">
          {experiences.map((exp, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden
                  ${isOpen
                    ? `${exp.openBorder} shadow-2xl`
                    : "border-border/30 hover:border-border/60 shadow-sm hover:shadow-md"
                  }
                `}
              >
                {/* Gradient bg on open */}
                {isOpen && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.openBg} pointer-events-none`} />
                )}

                {/* Left accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-500 ${exp.barColor}
                    ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
                  style={{ transformOrigin: "top" }}
                />

                {/* ── HEADER ── */}
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="relative w-full flex items-start gap-4 pl-7 pr-4 py-5 text-left"
                >
                  {/* Logo — clean, no box */}
                  <CompanyLogo logo={exp.logo} company={exp.company} dotColor={exp.dotColor} />

                  {/* Text block — takes remaining space */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    {/* Line 1: Role title + Current badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-card-foreground leading-snug">
                        {exp.position}
                      </h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/35 uppercase tracking-wide flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Now
                        </span>
                      )}
                    </div>

                    {/* Line 2: Company · Duration */}
                    <p className="text-sm text-muted-foreground">
                      <span className="text-primary font-semibold">{exp.company}</span>
                      <span className="mx-1.5 opacity-40">·</span>
                      <span className="text-xs">{exp.duration}</span>
                    </p>
                  </div>

                  {/* Chevron pill */}
                  <div
                    className={`flex-shrink-0 mt-1 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300
                      ${isOpen ? "bg-primary/15 text-primary" : "bg-muted/20 text-muted-foreground"}`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {/* ── BODY ── */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden
                    ${isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="relative px-5 sm:px-7 pb-7 pt-0">

                    {/* Full-width divider */}
                    <div className={`h-px mb-6 ${exp.barColor} opacity-20`} />

                    {/* Section label */}
                    <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-3">
                      Highlights
                    </p>

                    {/* Bullet list */}
                    <ul className="space-y-2.5 mb-7">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {/* Accent dash marker */}
                          <span className={`flex-shrink-0 mt-[9px] w-4 h-[2px] rounded-full ${exp.barColor} opacity-70`} />
                          <p className="text-[13.5px] sm:text-sm text-card-foreground/80 leading-relaxed">
                            {bullet}
                          </p>
                        </li>
                      ))}
                    </ul>

                    {/* Skills section */}
                    <div className={`rounded-xl border px-4 py-4 ${exp.skillColor.split(' ')[0]} border-opacity-20`}>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/50 mb-3">
                        Skills & Tools
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className={`text-xs px-3 py-1.5 rounded-full border font-semibold ${exp.skillColor}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
