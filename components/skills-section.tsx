"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Layers, Wrench, Users } from "lucide-react"
import { useState, useEffect } from "react"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "from-primary to-primary/70",
      skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL", "GraphQL"],
    },
    {
      title: "Frameworks",
      icon: Layers,
      color: "from-secondary to-secondary/70",
      skills: ["React", "Next.js", "Node.js", "Vue.js", "Express", "Tailwind CSS"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-accent to-accent/70",
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "Postman"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "from-primary/80 to-secondary/80",
      skills: [
        "Leadership",
        "Communication",
        "Problem Solving",
        "Team Collaboration",
        "Project Management",
        "Mentoring",
      ],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategoryCard key={category.title} category={category} index={categoryIndex} isVisible={isVisible} />
          ))}
        </div>

        {/* Additional Skills Overview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-bold mb-8 text-card-foreground">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "UI/UX Design",
              "Responsive Design",
              "API Development",
              "Database Design",
              "Performance Optimization",
              "SEO",
              "Agile Methodology",
              "Code Review",
              "Technical Writing",
              "Cross-browser Compatibility",
            ].map((skill, index) => (
              <Badge
                key={skill}
                variant="outline"
                className={`px-4 py-2 text-sm bg-card/60 glassmorphism border-primary/30 text-card-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 100 + 800}ms`,
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface SkillCategoryCardProps {
  category: {
    title: string
    icon: React.ElementType
    color: string
    skills: string[]
  }
  index: number
  isVisible: boolean
}

function SkillCategoryCard({ category, index, isVisible }: SkillCategoryCardProps) {
  return (
    <Card
      className={`bg-card/60 glassmorphism border-0 hover:bg-card/80 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group ${
        isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"
      }`}
      style={{
        animationDelay: `${index * 200}ms`,
      }}
    >
      <CardContent className="p-6 space-y-6">
        {/* Category Header */}
        <div className="flex items-center space-x-3">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <category.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
            {category.title}
          </h3>
        </div>

        {/* Skills as Pill-shaped Labels */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <Badge
              key={skill}
              variant="outline"
              className={`px-3 py-1 text-sm bg-background/50 border-primary/30 text-card-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{
                animationDelay: `${(index * 200) + (skillIndex * 100) + 400}ms`,
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
