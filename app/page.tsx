import { HeroSection } from "@/components/hero-section";
import { WhyHireMeSection } from "@/components/why-hire-me-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { TimelineSection } from "@/components/timeline-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";
import { ScrollAnimation } from "@/components/scroll-animations";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen gradient-bg">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="experience">
          <ScrollAnimation animation="slide-left" delay={200}>
            <ExperienceSection />
          </ScrollAnimation>
        </section>

        <section id="projects">
          <ScrollAnimation animation="scale-up" delay={300}>
            <ProjectsSection />
          </ScrollAnimation>
        </section>

        <section id="timeline">
          <ScrollAnimation animation="fade-up" delay={100}>
            <TimelineSection />
          </ScrollAnimation>
        </section>
        <section id="about">
          <ScrollAnimation animation="fade-up">
            <WhyHireMeSection />
          </ScrollAnimation>
        </section>
        <section id="skills">
          <ScrollAnimation animation="slide-right" delay={200}>
            <SkillsSection />
          </ScrollAnimation>
        </section>

        <section id="contact">
          <ScrollAnimation animation="fade-up" delay={150}>
            <ContactSection />
          </ScrollAnimation>
        </section>
      </main>
      <Footer />
    </>
  );
}
