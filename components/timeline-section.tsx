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
      logo: "/HOS.jpeg",

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
        <div className="text-center mb-12">
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
        {/* Scroll Canvas Timeline */}
        <div className="relative max-w-6xl mx-auto mt-12">
          {/* Anchoring element */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 rotate-[-90deg] text-xs tracking-widest uppercase text-muted-foreground/60">
            Timeline
          </div>
          
          {/* Scroll hint */}
          <div className="absolute top-5 right-8 z-20 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/70">
            Scroll
          </div>

          {/* Top fade */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10" />

          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />

          {/* Canvas */}
          <div
            className="
              h-[85vh] md:h-[100vh]
              overflow-y-auto
              rounded-3xl
              bg-card/50
              backdrop-blur-xl
              border border-white/40
              shadow-[0_40px_120px_-30px_rgba(0,0,0,0.35)]
              ring-1 ring-black/10
              scroll-smooth
              px-6 md:px-10
              py-24
              scroll-canvas
            "
          >
            <div className="space-y-40">
              <img
                src="/timeline/aa.svg"
                alt="Academic timeline"
                className="w-full max-w-5xl mx-auto -mt-8 select-none opacity-95 brightness-[0.98]"
                draggable={false}
              />

              <img
                src="/timeline/bb.svg"
                alt="Professional timeline"
                className="w-full max-w-5xl mx-auto select-none opacity-95 brightness-[0.98]"
                draggable={false}
              />
              <div className="text-center pt-24 pb-12 text-xs text-muted-foreground/70">
                • End of timeline •
              </div>
            </div>
            {/* Inner vignette */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
            {/* Signature detail */}
            <div className="absolute left-4 bottom-12 rotate-[-90deg] text-[10px] tracking-widest uppercase text-muted-foreground/50">
              2018 — Present
            </div>
          </div>
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
