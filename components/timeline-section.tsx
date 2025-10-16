import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Star, Calendar, Target } from "lucide-react";

export function TimelineSection() {
  const timelineEntries = [
    {
      year: "2018",
      title: "Started Graphic Designing",
      company: "Freelance",
      description:
        "Started graphic designing journey as a freelancer, creating visual content for various clients.",
      type: "professional",
      category: "freelance",
    },
    {
      year: "2019",
      title: "Started Social Media Marketing & Content Strategy",
      company: "Freelance",
      description:
        "Expanded into social media marketing and strategic planning for businesses.",
      type: "professional",
      category: "freelance",
    },
    {
      year: "2019",
      title: "CBSE (X)",
      institution: "PRFS (Birla School), Mathura",
      description: "Secured 92%.",
      type: "academic",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPvZN1rYMu9QuPOM_WbMgh1KscZH7-NLhAA&s",
    },
    {
      year: "2020",
      title: "Moodale - Founder & Operations Lead",
      company: "Digital Marketing Agency",
      description:
        "Founded and scaled a digital marketing and strategy agency, managing 20+ team members across multiple client projects.",
      type: "professional",
      category: "entrepreneurship",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AMGAx0QIkUt2P5whfFk42OMXNT0S4hPJBg&s",
      isHighlighted: true,
    },
    {
      year: "2021",
      title: "CBSE (XII)",
      institution: "Prasad Public School, Mathura",
      description: "Secured 81.4%",
      type: "academic",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI8vkXrTMStY-n8rVH4p6via2DB8k7hRtwNw&s",
    },
    {
      year: "2022",
      title: "B.E. Electronics & Communication Engineering",
      institution: "VIT Vellore",
      description:
        "Currently pursuing Bachelor's in Electronics and Communication Engineering (Present).\nCGPA: 8.85",
      type: "academic",
      logo: "https://i.pinimg.com/474x/2d/1d/36/2d1d3632086bf8503d9d6fe8e44d8427.jpg",
    },
    {
      year: "2023",
      title: "Navdrishti - Technical Content Coordinator",
      company: "Navdrishti Group",
      description:
        "Automated editorial workflows and streamlined operations using Google Sheets & Apps Script for content management.",
      type: "professional",
      category: "internship",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfECCZHifSdTCjvM6C2eQnR9lBjPgiVB7Iwg&s",
    },
    {
      year: "2025",
      title: "Techlive Solutions - Web Developer Intern",
      company: "Techlive Solutions",
      description:
        "Developed responsive websites with UX focus using HTML, CSS, JavaScript and conducted comprehensive UX research.",
      type: "professional",
      category: "internship",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0KkD4neg9y4qMJ1QpzZCZLftZcWorJjP0A&s",
    },
    {
      year: "2025",
      title: "Your Company Here",
      company: "Hire me to help achieve your next milestone",
      description:
        "Ready to bring innovative solutions, technical expertise, and entrepreneurial mindset to drive your business forward.",
      type: "professional",
      category: "opportunity",
      isOpportunity: true,
    },
  ];

  return (
    <section className="py-20 px-4 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Professional{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Timeline
          </span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A journey of continuous learning and professional growth from 2018 to
          present.
        </p>
      </div>

      {/* Always Desktop-Style Timeline */}
      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary rounded-full"></div>

        <div className="space-y-20">
          {timelineEntries.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            const isAcademic = milestone.type === "academic";
            const isOpportunity = milestone.isOpportunity;
            const isHighlighted = milestone.isHighlighted;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                      isOpportunity
                        ? "bg-gradient-to-r from-accent to-primary border-white shadow-lg animate-pulse"
                        : isHighlighted
                        ? "bg-gradient-to-r from-primary to-secondary border-white shadow-lg"
                        : isAcademic
                        ? "bg-primary border-white"
                        : "bg-secondary border-white"
                    }`}
                  >
                    <div className="flex items-center justify-center w-full h-full text-white">
                      {isOpportunity ? (
                        <Target className="w-3 h-3" />
                      ) : isHighlighted ? (
                        <Star className="w-3 h-3" />
                      ) : isAcademic ? (
                        <GraduationCap className="w-3 h-3" />
                      ) : (
                        <Briefcase className="w-3 h-3" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    isLeft ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <TimelineCard milestone={milestone} />
                </div>

                {/* Year */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
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
    </section>
  );
}

function TimelineCard({ milestone }: { milestone: any }) {
  const isAcademic = milestone.type === "academic";
  const isOpportunity = milestone.isOpportunity;
  const isHighlighted = milestone.isHighlighted;
  const isEntrepreneurship = milestone.category === "entrepreneurship";
  const isInternship = milestone.category === "internship";

  return (
    <Card
      className={`border-0 shadow-xl hover:shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
        isOpportunity
          ? "bg-gradient-to-br from-accent/20 to-primary/20 ring-2 ring-accent/40"
          : isHighlighted
          ? "bg-gradient-to-br from-primary/10 to-secondary/10 ring-2 ring-primary/30"
          : "bg-card/60"
      }`}
    >
      <CardContent className="p-6 space-y-3">
        <div className="flex items-center space-x-3 justify-between">
          <div className="flex items-center space-x-2">
            {milestone.logo && (
              <img
                src={milestone.logo}
                alt="logo"
                className="w-10 h-10 rounded-full object-cover shadow-md"
              />
            )}
            <h3
              className={`text-lg font-bold ${
                isOpportunity
                  ? "text-accent"
                  : isHighlighted
                  ? "text-primary"
                  : "text-card-foreground"
              }`}
            >
              {milestone.title}
            </h3>
          </div>
          <Badge
            variant="secondary"
            className={`text-xs ${
              isAcademic
                ? "bg-primary text-white"
                : isEntrepreneurship
                ? "bg-gradient-to-r from-primary to-secondary text-white"
                : isInternship
                ? "bg-secondary text-white"
                : isOpportunity
                ? "bg-accent text-white"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {isAcademic
              ? "Academic"
              : isEntrepreneurship
              ? "Entrepreneurship"
              : isInternship
              ? "Internship"
              : isOpportunity
              ? "Opportunity"
              : "Professional"}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          {isAcademic ? milestone.institution : milestone.company}
        </p>

        <p className="text-sm leading-relaxed text-card-foreground whitespace-pre-line">
          {milestone.description}
        </p>
      </CardContent>
    </Card>
  );
}
