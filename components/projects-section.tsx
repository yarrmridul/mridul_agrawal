"use client";
import Link from "next/link";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("prd");

  const tabs = [
    { id: "prd", label: "Product" },
    { id: "improve", label: "Strategy" },
    { id: "teardown", label: "Case Studies" },
  ];

  const projects = [
    // ================= PRODUCT =================
    {
      id: 1,
      category: "prd",
      title: "Moodale",
      description:
        "A full-service digital marketing and strategy agency focused on brand growth and innovation.",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1761839258605-d1b118266ccc?auto=format&fit=crop&q=80&w=1470",
      viewUrl: "/modale",
      liveUrl: "#",
    },
    {
      id: 2,
      category: "prd",
      title: "Moodale Smart CRM on Google Sheets",
      description:
        "A lightweight CRM built with Google Sheets and Apps Script for managing leads and workflows.",
      status: "Completed",
      image:
        "https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-126.jpg",
    viewUrl: "/pag",
      liveUrl: "#",
    },
    {
      id: 3,
      category: "prd",
      title: "Moti Motors – Profit-Sharing System",
      description:
        "A custom system enabling service transparency and vendor profit sharing.",
      status: "Completed",
      image:
        "https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg",
      viewUrl: "/moti",
      liveUrl: "#",
    },
    {
      id: 4,
      category: "prd",
      title: "Moodale Operations Panel",
      description:
        "An admin & employee backend system for task tracking and performance monitoring.",
      status: "Progress",
      image:
        "https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5522.jpg",
      viewUrl: "/panel",
      liveUrl: "#",
    },
    {
      id: 5,
      category: "prd",
      title: "QR Code Generator Web Tool",
      description:
        "A fast, no-expiry QR generator built for small businesses and internal teams.",
      status: "Completed",
      image:
        "https://img.freepik.com/free-vector/flat-weather-forecast-app_23-2148092966.jpg",
      viewUrl: "/codetoll",
      liveUrl: "#",
    },

    // ================= STRATEGY =================
    {
      id: 6,
      category: "improve",
      title: "Irish Green – Youth Footfall Growth Campaign",
      description:
        "A youth-focused growth campaign designed to boost café walk-ins and organic engagement.",
      status: "Completed",
      image:
        "https://img.freepik.com/free-vector/app-interface-design-concept_52683-36057.jpg",
      viewUrl: "/Irish",
    },
    {
      id: 7,
      category: "improve",
      title: "Sales & Outreach Training Program",
      description:
        "An Earn While You Learn initiative training young professionals in outreach and sales.",
      status: "Completed",
      image:
        "https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-126.jpg",
      viewUrl: "/sales",
    },
  ];

  const filtered = projects.filter((p) => p.category === activeTab);

  return (
    <section className="py-14 sm:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            Featured <span className="text-emerald-600">Projects</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground mt-2">
            From Problems to Products.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b pb-2 mb-10 justify-center flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 text-sm sm:text-base font-medium transition-all ${
                activeTab === tab.id
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          className={`${
            filtered.length === 1
              ? "flex justify-center"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          } gap-8 justify-items-center`}
        >
          {filtered.length === 0 && (
            <p className="text-gray-400 text-center col-span-full">
              Case studies coming soon.
            </p>
          )}

          {filtered.map((project) => (
            <Card
              key={project.id}
              className="rounded-2xl border bg-white shadow-sm hover:shadow-xl transition overflow-hidden w-full max-w-[360px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 sm:h-48 object-cover"
              />

              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>

                <Badge
                  variant="secondary"
                  className="text-xs px-3 py-1 rounded-full"
                >
                  {project.status}
                </Badge>

                {/* BUTTONS */}
                <div
                  className={`pt-4 ${
                    project.category === "improve"
                      ? "flex justify-center"
                      : "grid grid-cols-2 gap-2"
                  }`}
                >
                  {/* View More */}
                  <Button
                    variant="outline"
                    className="rounded-full px-6"
                    asChild
                  >
                    <Link href={project.viewUrl}>
                      View More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>

                  {/* Live – ONLY for Product */}
                  {project.category === "prd" && project.liveUrl && (
                    <Button
                      className="rounded-full bg-emerald-600 hover:bg-emerald-700 px-6"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank">
                        Live <ExternalLink className="w-4 h-4 ml-1" />
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
