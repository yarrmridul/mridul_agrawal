import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Clock, CheckCircle } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Operations Panel: Task & Employee Backend System",
      status: "in-progress",
      description:
        "Built to reduce the chaos of managing multiple employees, tasks, and approvals in a growing digital agency. The system was designed to bring structure through role-based access, centralized records, and smoother workflows.",
      shortDescription:
        "Backend system to streamline employee and task management with role-based access and workflow tracking.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "SQL"],
      details:
        "Built to reduce the chaos of managing multiple employees, tasks, and approvals in a growing digital agency. The system was designed to bring structure through role-based access, centralized records, and smoother workflows.",
      metrics: ["Role-based access", "Task/Employee mgmt"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A3hr1k2BdRN1SrXm82uYNnfVtMGFmp.png",
      codeUrl: "https://github.com/yarrmridul/moodaleemployee",
      liveUrl: "https://moodaleadmin.onrender.com/",
    },
    {
      id: 2,
      title: "Custom CRM & Automation System",
      status: "completed",
      description:
        "CRM for campaigns, billing, tasks, leave approvals, reminders. Automation reduced manual work and improved efficiency.",
      shortDescription:
        "Automation-driven CRM on Google Sheets to simplify client management, tasks, and internal workflows.",
      technologies: ["Google Sheets", "Apps Script"],
      details:
        "Built to cut down the manual effort of managing campaigns, tasks, and client communications as a one-person team. Automated reminders, approvals, and workflow tracking so operations could run smoothly without constant manual follow-ups.",
      metrics: ["70% manual effort cut", "40% operations improved"],
      image:
        "https://cdn.prod.website-files.com/619c916dd7a3fa284adc0b27/65fac5fcb13ea0e1c548c422_f05a631d-05be-4413-9338-9655adc38c90.webp",
      codeUrl: "https://github.com/yarrmridul/gsheet-taskassignemnt-crm",
      liveUrl: "https://crm-system.ridul.dev",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">Where #Problems Met My Fixes.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} isAlternate={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Project {
  id: number
  title: string
  status: "completed" | "in-progress"
  description: string
  shortDescription: string
  technologies: string[]
  details: string
  metrics: string[]
  image: string
  codeUrl: string
  liveUrl: string
}

interface ProjectCardProps {
  project: Project
  isAlternate?: boolean
}

function ProjectCard({ project, isAlternate = false }: ProjectCardProps) {
  return (
    <div className="group relative">
      {/* Static Action Buttons - Always visible */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <Button
          size="sm"
          variant="outline"
          className="bg-card/80 glassmorphism border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          asChild
        >
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-1" />
            View Code
          </a>
        </Button>
        <Button
          size="sm"
          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white transition-all duration-300"
          asChild
        >
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-1" />
            Visit Website
          </a>
        </Button>
      </div>

      {/* Flip Card Container */}
      <div className="flip-card h-96">
        <div className="flip-card-inner">
          {/* Front of Card */}
          <Card
            className={`flip-card-front ${isAlternate ? "border-2 border-accent bg-accent/5" : "bg-card/60 glassmorphism border-0"} h-full overflow-hidden`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                <StatusBadge status={project.status} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.shortDescription}</p>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-secondary/20 text-secondary border-secondary/30 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs bg-accent/20 text-accent border-accent/30 px-3 py-1 rounded-full"
                    >
                      {metric}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back of Card */}
          <Card className="flip-card-back bg-gradient-to-br from-primary/10 to-secondary/10 glassmorphism border-0 h-full">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Project Details</h3>
                <p className="text-sm text-card-foreground leading-relaxed mb-4">{project.details}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-2">Key Metrics:</h4>
                    <div className="space-y-1">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="text-xs font-medium text-secondary flex items-center">
                          <CheckCircle className="w-3 h-3 mr-2" />
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs bg-secondary/20 text-secondary border-secondary/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface StatusBadgeProps {
  status: "completed" | "in-progress"
}

function StatusBadge({ status }: StatusBadgeProps) {
  const isCompleted = status === "completed"

  return (
    <Badge
      variant={isCompleted ? "default" : "secondary"}
      className={`text-xs font-medium ${
        isCompleted ? "bg-accent text-accent-foreground" : "bg-orange-100 text-orange-700 border-orange-200"
      }`}
    >
      {isCompleted ? (
        <>
          <CheckCircle className="w-3 h-3 mr-1" />
          Completed
        </>
      ) : (
        <>
          <Clock className="w-3 h-3 mr-1" />
          In Progress
        </>
      )}
    </Badge>
  )
}
