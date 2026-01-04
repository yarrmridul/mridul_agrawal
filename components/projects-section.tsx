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
      image: "/projects/moodale.jpg",
      viewUrl: "/modale",
      liveUrl: "https://www.moodale.in/",
    },
    {
      id: 2,
      category: "prd",
      title: "Moodale Smart CRM on Google Sheets",
      description:
        "A lightweight CRM built with Google Sheets and Apps Script for managing leads and workflows.",
      status: "Completed",
      image: "/projects/googlesheetcrm.png",
    viewUrl: "/pag"
    },
    {
      id: 3,
      category: "prd",
      title: "Moti Motors – Profit-Sharing System",
      description:
        "A custom system enabling service transparency and vendor profit sharing.",
      status: "Completed",
      image: "/projects/motimotors.jpeg",
      viewUrl: "/moti"
    },
    {
      id: 4,
      category: "prd",
      title: "Moodale Operations Panel",
      description:
        "An admin & employee backend system for task tracking and performance monitoring.",
      status: "Progress",
      image: "/projects/crm.jpeg",
      viewUrl: "/panel",
      liveUrl: "https://moodaleadmin.onrender.com/"
    },
    {
      id: 5,
      category: "prd",
      title: "QR Code Generator Web Tool",
      description:
        "A fast, no-expiry QR generator built for small businesses and internal teams.",
      status: "Completed",
      image: "/projects/mqr.jpeg",
      viewUrl: "/codetoll",
      liveUrl: "https://m-qr-beta.vercel.app/"
    },

    // ================= STRATEGY =================
    {
      id: 6,
      category: "improve",
      title: "Irish Green – Youth Footfall Growth Campaign",
      description:
        "A youth-focused growth campaign designed to boost café walk-ins and organic engagement.",
      status: "Completed",
      image: "/projects/irishgreen.png",
      viewUrl: "/Irish"
    },
    {
      id: 7,
      category: "improve",
      title: "Sales & Outreach Training Program",
      description:
        "An Earn While You Learn initiative training young professionals in outreach and sales.",
      status: "Completed",
      image: "/projects/sales.png",
      viewUrl: "/sales"
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
          className={`${filtered.length === 1
            ? "flex justify-center"
            : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          } gap-6 justify-items-center`}
        >
          {filtered.length === 0 && (
            <p className="text-gray-400 text-center col-span-full">
              Case studies coming soon.
            </p>
          )}

          {filtered.map((project) => (
            <Card
              key={project.id}
              className="rounded-2xl border bg-white shadow-sm hover:shadow-xl transition overflow-hidden w-full relative flex flex-col min-h-[380px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-28 object-cover"
              />
              
              {/* Live button - top right */}
              {project.category === "prd" && project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-emerald-600 hover:bg-white transition-all duration-200 z-10"
                  aria-label="Visit live site"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <CardContent className="p-3 space-y-2 flex-grow flex flex-col">
                <h3 className="text-sm font-semibold">{project.title}</h3>
                <p className="text-[10px] text-gray-600 line-clamp-2">{project.description}</p>

                <Badge
                  variant="secondary"
                  className="text-[10px] px-2 py-1 rounded-full"
                >
                  {project.status}
                </Badge>

                {/* BUTTONS */}
                <div
                  className="pt-2 flex justify-center mt-auto"
                >
                  {/* View More */}
                  <Button
                    variant="outline"
                    className="rounded-full px-3 py-1.5 text-xs"
                    asChild
                  >
                    <Link href={project.viewUrl}>
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
