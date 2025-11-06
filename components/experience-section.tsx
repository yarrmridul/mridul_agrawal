import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Moodale",
      position: "Founder & CEO (Chief of Everything) ",
      duration: "June 2020 – January 2025 ",
      intro: "Founded and scaled a digital marketing and strategy agency.",
      metrics: [
        " 500+ Campaigns",
        "40% Ops Efficiency Gain",
        "95% Client Satisfaction",
      ],
      details:
        "Managed a 20+ cross-functional team, delivered 500+ client campaigns, and helped businesses solve operational challenges through data-backed strategy and custom tools — from profit-sharing apps to lead systems and footfall growth solutions",
      technologies: [
        "Google Apps Script ",
        "Google Sheets ",
        "CRM Development ",
        "Team Management",
        "Business Strategy",
      ],
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
      technologies: [
        "Google Sheets",
        "Apps Script",
        "Workflow Automation",
        "Team Coordination",
        "Operations",
      ],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfECCZHifSdTCjvM6C2eQnR9lBjPgiVB7Iwg&s",
    },
    {
      company: "House of SJ",
      position: "Business Operations & Product Lead",
      duration: "June 2025 – Present",
      intro:
        "One of the founding members of a clothing brand startup in India, leading product development and business operations from the ground up.",
      metrics: [
        "Product Development",
        "Business Growth",
        "Operational Strategy.",
      ],
      details:
        "Managed end-to-end operations — from website development to influencer partnerships and supply coordination. Oversaw team setup, handled collaborations and negotiations, and helped shape customer acquisition and retention strategies.",
      technologies: [
        "WordPress ",
        "Google Sheets",
        "Operations Management ",
        "Digital Strategy ",
        "Product Management",
      ],
      logo: "/HOS.jpeg",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flip-card h-80">
              <div className="flip-card-inner">
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
                          <h3 className="text-lg font-bold text-card-foreground">
                            {exp.company}
                          </h3>
                          <h4 className="text-primary font-semibold text-sm">
                            {exp.position}
                          </h4>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.duration}
                      </p>
                      <p className="text-sm text-card-foreground leading-relaxed mb-4">
                        {exp.intro}
                      </p>
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

                <Card className="flip-card-back bg-gradient-to-br from-primary/10 to-secondary/10 glassmorphism border-0 h-full">
                  <CardContent className="p-4 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground mb-4">
                        Key Achievements
                      </h3>
                      <p className="text-sm text-card-foreground leading-relaxed mb-4">
                        {exp.details}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-card-foreground mb-2\">
                        {exp.company === "Navdrishti Group"
                          ? "Skills Applied"
                          : "Technologies Used"}
                        :
                      </h4>
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
  );
}
