"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("prd");

  const tabs = [
    { id: "prd", label: "PRD" },
    { id: "improve", label: "Product Improvement" },
    { id: "teardown", label: "Teardown" },
    { id: "sense", label: "Product Sense" },
    { id: "uiux", label: "UI/UX" },
    { id: "automation", label: "Automation" },
    { id: "frontend", label: "Frontend" },
  ];

  const projects = [
    {
      id: 1,
      category: "prd",
      title: " Moodale – Digital Marketing & Strategy Agency",
      description:
        "A full-service digital marketing and strategy agency I founded to help brands grow through creative design, performance strategy, and business innovation.",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1761839258605-d1b118266ccc?auto=format&fit=crop&q=80&w=1470",
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      category: "improve",
      title: "Moodale Smart CRM on Google Sheets",
      description:
        "An internal system built on Google Sheets + Apps Script to streamline client management, project tracking, and communication at Moodale.",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1761839258605-d1b118266ccc?auto=format&fit=crop&q=80&w=1470",
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      category: "teardown",
      title: "Moti Motors – Profit-Sharing & Service Transparency System ",
      description:
        "A custom-built web application that digitized after-sales service operations for Moti Motors, ensuring transparency and efficiency across vendors.",
      status: "Completed",
      image: "https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-126.jpg",
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      id: 4,
      category: "sense",
      title: "Irish Green – Youth Footfall Growth Campaign ",
      description:
        "A creative campaign designed for Irish Green Café to attract young audiences, boost organic engagement, and position the brand as a youth favorite.",
      status: "Completed",
      image:
        "https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg",
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      id: 5,
      category: "uiux",
      title: "Sales & Outreach Training Program",
      description:
        "A structured “Earn While You Learn” initiative that scaled Moodale’s outreach by training young learners to become skilled, incentive-driven marketers.",
      status: "Completed",
      image: "https://img.freepik.com/free-vector/app-interface-design-concept_52683-36057.jpg",
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      id: 6,
      category: "automation",
      title: "Moodale Operations Panel – Admin & Employee Backend System",
      description:
        "A backend management system for task allocation, approvals, and performance tracking — built to bring structure and visibility to Moodale’s operations.",
      status: "Progress",
      image:
        "https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5522.jpg",
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      id: 7,
      category: "frontend",
      title: "QR Code Generator Web Tool",
      description:
        "A lightweight QR code generator built for small businesses and internal teams to create custom, never-expiring QR codes.",
      status: "Completed",
      image:
        "https://img.freepik.com/free-vector/flat-weather-forecast-app_23-2148092966.jpg",
      codeUrl: "#",
      liveUrl: "#",
    },
  ];

  const filtered = projects.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Featured <span className="text-emerald-600">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-2">
            From Problems to Products.
          </p>
        </div>

        <div className="flex gap-6 border-b pb-2 mb-10 justify-center flex-wrap">
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

        {/* ⭐ Auto-center when only ONE card exists */}
        <div
          className={`${
            filtered.length === 1
              ? "flex justify-center"
              : "grid grid-cols-1 md:grid-cols-3"
          } gap-8 justify-items-center`}
        >
          {filtered.map((project) => (
            <Card
              key={project.id}
              className="rounded-2xl shadow-md hover:shadow-xl transition border overflow-hidden w-full md:w-[350px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>

                <div>
                  <Badge
                    variant="secondary"
                    className="text-xs px-3 py-1 rounded-full"
                  >
                    {project.status}
                  </Badge>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={project.codeUrl} target="_blank">
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                  </Button>

                  {project.liveUrl && (
                    <Button
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      asChild
                    >
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
