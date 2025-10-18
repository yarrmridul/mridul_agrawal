import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Star, Calendar, Target } from "lucide-react"

export function TimelineSection() {
  const timelineEntries = [
    {
      year: "2018",
      title: "Started Graphic Designing",
      company: "Freelance",
      description: "Started graphic designing journey as a freelancer, creating visual content for various clients.",
      type: "professional" as const,
      category: "freelance" as const,
    },
    {
      year: "2019",
      title: "Started Social Media Marketing & Content Strategy",
      company: "Freelance",
      description: "Expanded into social media marketing and strategic planning for businesses.",
      type: "professional" as const,
      category: "freelance" as const,
    },
    {
      year: "2019",
      title: "CBSE (X)",
      institution: "PRFS (Birla School), Mathura",
      description: "Secured 92%.",
      type: "academic" as const,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPvZN1rYMu9QuPOM_WbMgh1KscZH7-NLhAA&s",
    },
    {
      year: "2020",
      title: "Moodale - Founder & Operations Lead",
      company: "Digital Marketing Agency",
      description:
        "Founded and scaled a digital marketing and strategy agency, managing 20+ cross-functional team members across multiple client projects.",
      type: "professional" as const,
      category: "entrepreneurship" as const,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AMGAx0QIkUt2P5whfFk42OMXNT0S4hPJBg&s",
      isHighlighted: true,
    },
    {
      year: "2021",
      title: "CBSE (XII)",
      institution: "Prasad Public School, Mathura",
      description: "Secured 81.4%",
      type: "academic" as const,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI8vkXrTMStY-n8rVH4p6via2DB8k7hRtwNw&s",
    },
    {
      year: "2022",
      title: "B.E. Electronics & Communication Engineering",
      institution: "VIT Vellore",
      description: "Currently pursuing Bachelor's in Electronics and Communication Engineering (Present).\nCGPA: 8.85",
      type: "academic" as const,
      logo: "https://i.pinimg.com/474x/2d/1d/36/2d1d3632086bf8503d9d6fe8e44d8427.jpg",
    },
    {
      year: "2023",
      title: "Navdrishti - Technical Content Coordinator",
      company: "Navdrishti Group",
      description:
        "Automated editorial workflows and streamlined operations using Google Sheets & Apps Script for content management.",
      type: "professional" as const,
      category: "internship" as const,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfECCZHifSdTCjvM6C2eQnR9lBjPgiVB7Iwg&s",
    },
    {
      year: "2025",
      title: "Techlive Solutions - Web Developer Intern",
      company: "Techlive Solutions",
      description:
        "Developed responsive websites with UX focus using HTML, CSS, JavaScript and conducted comprehensive UX research.",
      type: "professional" as const,
      category: "internship" as const,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0KkD4neg9y4qMJ1QpzZCZLftZcWorJjP0A&s",
    },
    {
      year: "2025",
      title: "Your Company Here",
      company: "Hire me to help achieve your next milestone",
      description:
        "Ready to bring innovative solutions, technical expertise, and entrepreneurial mindset to drive your business forward.",
      type: "professional" as const,
      category: "opportunity" as const,
      isOpportunity: true,
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A journey of continuous learning and professional growth from 2018 to present
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary rounded-full"></div>

          <div className="space-y-16">
            {timelineEntries.map((milestone, index) => {
              const isAcademic = milestone.type === "academic"
              const isHighlighted = "isHighlighted" in milestone && milestone.isHighlighted
              const isOpportunity = "isOpportunity" in milestone && milestone.isOpportunity
              const isFreelance = "category" in milestone && milestone.category === "freelance"

              return (
                <div key={index} className="relative flex items-center">
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`${
                        isFreelance
                          ? "w-3 h-3 rounded-full bg-muted-foreground border-2 border-white"
                          : `w-6 h-6 rounded-full border-4 ${
                              isOpportunity
                                ? "bg-gradient-to-r from-accent to-primary border-white shadow-lg scale-125 animate-pulse"
                                : isHighlighted
                                  ? "bg-gradient-to-r from-primary to-secondary border-white shadow-lg scale-125"
                                  : isAcademic
                                    ? "bg-primary border-white"
                                    : "bg-secondary border-white"
                            }`
                      } transition-all duration-300 hover:scale-110`}
                    >
                      {!isFreelance && (
                        <>
                          {isOpportunity ? (
                            <Target className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          ) : isHighlighted ? (
                            <Star className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          ) : isAcademic ? (
                            <GraduationCap className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          ) : (
                            <Briefcase className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Reduced width card */}
                  <div className={`w-full lg:w-4/12 ${isAcademic ? "pr-8" : "pl-8 ml-auto"}`}>
                    <TimelineCard milestone={milestone} isLeft={isAcademic} />
                  </div>

                  {/* Year Badge */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
                    <Badge
                      variant="outline"
                      className={`font-semibold px-3 py-1 ${
                        isOpportunity
                          ? "bg-gradient-to-r from-accent to-primary text-white border-accent"
                          : "bg-background border-primary text-primary"
                      }`}
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      {milestone.year}
                    </Badge>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineEntries.map((milestone, index) => (
            <div key={index} className="relative flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    milestone.type === "academic"
                      ? "bg-primary border-white"
                      : "bg-secondary border-white"
                  }`}
                ></div>
                {index < timelineEntries.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-secondary mt-2"></div>
                )}
              </div>
              <div className="flex-1">
                <Badge variant="outline" className="font-semibold mb-2">
                  {milestone.year}
                </Badge>
                <TimelineCard milestone={milestone} isLeft={true} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface TimelineCardProps {
  milestone: any
  isLeft: boolean
}

function TimelineCard({ milestone, isLeft }: TimelineCardProps) {
  const isAcademic = milestone.type === "academic"
  const isFreelance = milestone.category === "freelance"
  const isEntrepreneurship = milestone.category === "entrepreneurship"
  const isInternship = milestone.category === "internship"
  const isOpportunity = milestone.isOpportunity
  const isHighlighted = milestone.isHighlighted

  if (isFreelance) {
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Briefcase className="w-4 h-4 text-muted-foreground" />
          <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
            Freelance
          </Badge>
        </div>
        <h3 className="text-base font-semibold text-card-foreground">{milestone.title}</h3>
        <p className="text-sm text-muted-foreground">{milestone.company}</p>
        <p className="text-sm text-card-foreground leading-relaxed">{milestone.description}</p>
      </div>
    )
  }

  return (
    <Card
      className={`glassmorphism border-0 hover:bg-card/80 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group ${
        isOpportunity
          ? "bg-gradient-to-br from-accent/20 to-primary/20 ring-2 ring-accent/50 shadow-lg"
          : isHighlighted
            ? "bg-gradient-to-br from-primary/10 to-secondary/10 ring-2 ring-primary/50 shadow-lg"
            : isEntrepreneurship
              ? "bg-card/60 border-2 border-primary/30"
              : isInternship
                ? "bg-card/40"
                : "bg-card/60"
      }`}
    >
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {milestone.logo && (
              <img
                src={milestone.logo}
                alt="logo"
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <div className="flex items-center space-x-2">
              {isAcademic ? (
                <GraduationCap className="w-5 h-5 text-primary" />
              ) : isOpportunity ? (
                <Target className="w-5 h-5 text-accent" />
              ) : (
                <Briefcase className="w-5 h-5 text-secondary" />
              )}
            </div>
          </div>
          {isHighlighted && (
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white text-xs">
              Key Achievement
            </Badge>
          )}
        </div>

        <h3
          className={`text-lg font-bold ${
            isOpportunity ? "text-accent" : isHighlighted ? "text-primary" : "text-card-foreground"
          }`}
        >
          {milestone.title}
        </h3>
        <p className="text-sm font-medium text-muted-foreground">
          {isAcademic ? milestone.institution : milestone.company}
        </p>
        <p className="text-sm text-card-foreground leading-relaxed whitespace-pre-line">
          {milestone.description}
        </p>
      </CardContent>
    </Card>
  )
}