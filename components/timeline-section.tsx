import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Star, Calendar, Target } from "lucide-react";
import HOS from "../public/HOS.jpeg";

export function TimelineSection() {
  const timelineEntries = [
    {
      year: "2018",
      title: "Started Graphic Designing",
      company: "Freelance",
      description:
        "Started graphic designing journey as a freelancer, creating visual content for various clients.",
      type: "professional" as const,
      category: "freelance" as const,
    },
    {
      year: "2019",
      title: "Started Social Media Marketing & Content Strategy",
      company: "Freelance",
      description:
        "Expanded into social media marketing and strategic planning for businesses.",
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
      title: "Moodale - Founder & CEO(Chief EVERYTHING officer)",
      company: "Digital Marketing & Strategy Agency",
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
      description:
        "Currently pursuing Bachelor's in Electronics and Communication Engineering (Present).\nCGPA: 8.85",
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
      title: "House of SJ – Business Operations & Product Lead",
      // company: "Techlive Solutions",
      description:
        "Led product development and operations for a clothing startup, managing website creation, influencer collaborations, and business growth strategies.",
      type: "professional" as const,
      category: "product" as const,
      // logo: "https://drive.google.com/file/d/1pKZGILhjAd_DqYFSWwSlYhaRRklgXDwK/view?usp=sharing",
      logo:"data:image/png;base64,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",

      //  logo: '<img src="https://drive.google.com/uc?export=view&id=1pKZGILhjAd_DqYFSWwSlYhaRRklgXDwK" alt="My file" />'
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
  ];

  const academicMilestones = timelineEntries.filter(
    (entry) => entry.type === "academic"
  );
  const professionalMilestones = timelineEntries.filter(
    (entry) => entry.type === "professional"
  );

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
            A journey of continuous learning and professional growth from 2018
            to present
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary rounded-full"></div>

            <div className="space-y-16">
              {timelineEntries.map((milestone, index) => {
                const isAcademic = milestone.type === "academic";
                const isHighlighted =
                  "isHighlighted" in milestone && milestone.isHighlighted;
                const isOpportunity =
                  "isOpportunity" in milestone && milestone.isOpportunity;
                const isFreelance =
                  "category" in milestone && milestone.category === "freelance";

                return (
                  <div key={index} className="relative flex items-center">
                    {/* Timeline Dot */}
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

                    {/* Content Card - Academic on left, Professional on right */}
                    <div
                      className={`w-5/12 ${
                        isAcademic ? "pr-8" : "pl-8 ml-auto"
                      }`}
                    >
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
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineEntries.map((milestone, index) => {
            const isAcademic = milestone.type === "academic";
            const isHighlighted =
              "isHighlighted" in milestone && milestone.isHighlighted;
            const isOpportunity =
              "isOpportunity" in milestone && milestone.isOpportunity;
            const isFreelance =
              "category" in milestone && milestone.category === "freelance";

            return (
              <div key={index} className="relative flex items-start space-x-4">
                {/* Timeline Line and Dot */}
                <div className="flex flex-col items-center">
                  <div
                    className={`${
                      isFreelance
                        ? "w-3 h-3 rounded-full bg-muted-foreground border-2 border-white"
                        : `w-4 h-4 rounded-full border-2 ${
                            isOpportunity
                              ? "bg-gradient-to-r from-accent to-primary border-white shadow-lg animate-pulse"
                              : isHighlighted
                              ? "bg-gradient-to-r from-primary to-secondary border-white shadow-lg"
                              : isAcademic
                              ? "bg-primary border-white"
                              : "bg-secondary border-white"
                          }`
                    }`}
                  >
                    {!isFreelance && (
                      <>
                        {isOpportunity && (
                          <Target className="w-2 h-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        )}
                        {isHighlighted && !isOpportunity && (
                          <Star className="w-2 h-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        )}
                      </>
                    )}
                  </div>
                  {index < timelineEntries.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-secondary mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Badge
                    variant="outline"
                    className={`font-semibold mb-2 ${
                      isOpportunity
                        ? "bg-gradient-to-r from-accent to-primary text-white border-accent"
                        : "bg-background border-primary text-primary"
                    }`}
                  >
                    {milestone.year}
                  </Badge>
                  <TimelineCard milestone={milestone} isLeft={true} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface TimelineCardProps {
  milestone: any;
  isLeft: boolean;
}

function TimelineCard({ milestone, isLeft }: TimelineCardProps) {
  const isAcademic = milestone.type === "academic";
  const isFreelance =
    "category" in milestone && milestone.category === "freelance";
  const isEntrepreneurship =
    "category" in milestone && milestone.category === "entrepreneurship";
  const isProduct = "category" in milestone && milestone.category === "product";
  const isInternship =
    "category" in milestone && milestone.category === "internship";

  const isOpportunity = "isOpportunity" in milestone && milestone.isOpportunity;
  const isHighlighted = "isHighlighted" in milestone && milestone.isHighlighted;

  if (isFreelance) {
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Briefcase className="w-4 h-4 text-muted-foreground" />
          <Badge
            variant="secondary"
            className="text-xs bg-muted text-muted-foreground"
          >
            Freelance
          </Badge>
        </div>
        <h3 className="text-base font-semibold text-card-foreground">
          {milestone.title}
        </h3>
        <p className="text-sm text-muted-foreground">{milestone.company}</p>
        <p className="text-sm text-card-foreground leading-relaxed">
          {milestone.description}
        </p>
      </div>
    );
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
        <div className="flex items-start justify-between flex-wrap">
          <div className="flex items-center space-x-3 ">
            {milestone.logo && (
              <img 
                src={milestone.logo || "/placeholder.svg"}
                alt={`${
                  isAcademic ? milestone.institution : milestone.company
                } logo`}
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
              <Badge
                variant="secondary"
                className={`text-xs ${
                  isOpportunity
                    ? "bg-accent text-white border-accent"
                    : isAcademic
                    ? "bg-primary text-white border-primary"
                    : isEntrepreneurship
                    ? "bg-gradient-to-r from-primary to-secondary text-white border-primary"
                    : "bg-secondary text-white border-secondary"
                }`}
              >
                {isOpportunity
                  ? "Opportunity"
                  : isAcademic
                  ? "Academic"
                  : isEntrepreneurship
                  ? "Entrepreneurship"
                  : isProduct
                  ? "Product"
                  : "Internship"}
              </Badge>
            </div>
          </div>
          {isHighlighted && !isOpportunity && (
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white text-xs mt-1">
              Key Achievement
            </Badge>
          )}
          {isOpportunity && (
            <Badge className="bg-gradient-to-r from-accent to-primary text-white text-xs animate-pulse">
              Available Now
            </Badge>
          )}
        </div>

        <div>
          <h3
            className={`text-lg font-bold group-hover:text-primary transition-colors duration-300 ${
              isOpportunity
                ? "text-accent"
                : isHighlighted
                ? "text-primary"
                : "text-card-foreground"
            }`}
          >
            {milestone.title}
          </h3>
          <p className="text-sm font-medium text-muted-foreground">
            {isAcademic ? milestone.institution : milestone.company}
          </p>
        </div>

        <p className="text-sm text-card-foreground leading-relaxed whitespace-pre-line">
          {milestone.description}
        </p>

        {isAcademic && (
          <div className="pt-3 border-t border-primary/20">
            <Badge
              variant="outline"
              className="text-xs bg-primary/10 text-primary border-primary"
            >
              {milestone.year === "2019" && "CBSE (X): 2019"}
              {milestone.year === "2021" && "CBSE 12: 2021"}
              {milestone.year === "2022" && "BTech: 2022-Present"}
            </Badge>
          </div>
        )}

        {isHighlighted && !isOpportunity && (
          <div className="pt-3 border-t border-primary/20">
            <p className="text-xs text-primary font-medium">
              🚀 Leading achievement - Successfully scaled from startup to
              established agency
            </p>
          </div>
        )}

        {isOpportunity && (
          <div className="pt-3 border-t border-accent/30">
            <p className="text-xs text-accent font-medium">
              💼 Let's discuss how I can contribute to your team's success and
              drive innovation
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
