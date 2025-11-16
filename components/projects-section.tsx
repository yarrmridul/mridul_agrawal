"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "prd", label: "PRD" },
    { id: "improve", label: "Product Improvement" },
    { id: "teardown", label: "Teardown" },
    { id: "sense", label: "Product Sense" },
  ];

  const projects = [
    {
      id: 1,
      category: "prd",
      title: "Operations Panel: Task & Employee Backend System",
      description:
        "Backend system to streamline employee and task management with role-based access and workflow tracking.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "SQL"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A3hr1k2BdRN1SrXm82uYNnfVtMGFmp.png",
      codeUrl: "https://github.com/yarrmridul/moodaleemployee",
      liveUrl: "#",
    },
    {
      id: 2,
      category: "improve",
      title: "Automation System using Google Sheets",
      description:
        "Automation-driven CRM on Google Sheets to simplify client management, tasks, and internal workflows.",
      technologies: ["Google Sheets", "Apps Script"],
      image:
        "https://images.unsplash.com/photo-1761839258605-d1b118266ccc?auto=format&fit=crop&q=80&w=1470",
      codeUrl: "https://github.com/yarrmridul/gsheet-taskassignemnt-crm",
      liveUrl: "#",
    },
    {
      id: 3,
      category: "sense",
      title: "Portfolio Website",
      description:
        "A responsive and animated personal portfolio showcasing creative work and experience.",
      technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
      image: "https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-126.jpg",
      codeUrl: "https://github.com/kunal0094/ecommerce-website",
      liveUrl: "#",
    },
    {
      id: 4,
      category: "teardown",
      title: "E-Commerce Store UI",
      description:
        "Modern store UI with product grid, cart functionality, and checkout flow.",
      technologies: ["React", "Redux", "Firebase"],
      image:
        "https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg",
      codeUrl: "https://github.com/kunal0094/Restaurant_website",
      liveUrl: "#",
    },
  ];

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Featured <span className="text-emerald-600">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-2">
            Where #Problems Met My Fixes.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b pb-2 mb-10 justify-center">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`pb-2 text-sm font-medium transition-all ${
                activeTab === t.id
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <Card
              key={project.id}
              className="rounded-2xl shadow-md hover:shadow-xl transition border overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <CardContent className="p-6 space-y-4">
                {/* TITLE */}
                <h3 className="text-lg font-semibold">{project.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600">{project.description}</p>

                {/* TECHNOLOGY BADGES */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={project.codeUrl} target="_blank">
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                  </Button>

                  {project.liveUrl && (
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                      <a href={project.liveUrl} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-1" /> Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
