import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      company: "Moodale",
      position: "Founder & Operations Lead",
      duration: "06/2020–01/2025",
      intro: "Founded and scaled a digital marketing and strategy agency.",
      metrics: ["500+ campaigns", "40% efficiency gain", "95% client satisfaction"],
      details:
        "Managed 20+ cross-functional team, delivered 500+ client campaigns, built CRM with Apps Script, boosted efficiency by 40%, achieved 95% client satisfaction.",
      technologies: ["Google Apps Script", "Google Sheets", "CRM Development", "Team Management", "Strategy"],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AMGAx0QIkUt2P5whfFk42OMXNT0S4hPJBg&s",
    },
    {
      company: "Navdrishti",
      position: "Operations & Process Analyst",
      duration: "01/2023–02/2025",
      intro: "Automated editorial workflows and streamlined ops.",
      metrics: ["60% time saved", "Cross-team coordination"],
      details:
        "Automated workflows with Google Sheets & Apps Script, coordinated teams for high-quality on-time delivery.",
      technologies: ["Google Sheets", "Apps Script", "Workflow Automation", "Team Coordination", "Operations"],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfECCZHifSdTCjvM6C2eQnR9lBjPgiVB7Iwg&s",
    },
    {
      company: "Techlive Solutions",
      position: "Web Developer Intern",
      duration: "05/2025–06/2025",
      intro: "Developed responsive websites, UX-focused.",
      metrics: ["Responsive UI", "Higher engagement"],
      details: "Designed sites using HTML, CSS, Java; conducted UX research to improve satisfaction.",
      technologies: ["HTML", "CSS", "Java", "UX Research", "Responsive Design"],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0KkD4neg9y4qMJ1QpzZCZLftZcWorJjP0A&s",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience: The Fun Part of the Resume
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flip-card h-80">
              <div className="flip-card-inner">
                {/* Front of Card */}
                <Card className="flip-card-front bg-card/60 glassmorphism border-0 h-full">
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <img
                          src={exp.logo || "/placeholder.svg"}
                          alt={`${exp.company} logo`}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-bold text-card-foreground">{exp.company}</h3>
                          <h4 className="text-primary font-semibold text-sm">{exp.position}</h4>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>
                      <p className="text-sm text-card-foreground leading-relaxed mb-4">{exp.intro}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.metrics.map((metric, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs bg-secondary/20 text-secondary border-secondary/30 px-3 py-1 rounded-full"
                        >
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Back of Card */}
                <Card className="flip-card-back bg-gradient-to-br from-primary/10 to-secondary/10 glassmorphism border-0 h-full">
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground mb-4">Key Achievements</h3>
                      <p className="text-sm text-card-foreground leading-relaxed mb-4">{exp.details}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-card-foreground mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.map((tech, idx) => (
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
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
