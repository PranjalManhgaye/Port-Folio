import { BackgroundDecor } from "@/components/BackgroundDecor";
import { Container } from "@/components/Container";
import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { ProjectSpotlight } from "@/components/ProjectSpotlight";
import { Reveal } from "@/components/Reveal";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsShowcase } from "@/components/SkillsShowcase";
import { WorkProcess } from "@/components/WorkProcess";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <BackgroundDecor />

      <SiteHeader />

      <main className="flex-1">
        <Container className="pb-16">
          <Hero />

          <Reveal>
            <section id="about" className="scroll-mt-24 mt-14 max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.18em] text-foreground/55 uppercase">
                About
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                What I do for clients
              </h2>
              {profile.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="mt-4 text-sm leading-7 text-foreground/75">
                  {paragraph}
                </p>
              ))}
            </section>
          </Reveal>

          <div className="mt-16 space-y-24">
            <ServicesGrid />
            <ProjectSpotlight />
            <SkillsShowcase />
            <WorkProcess />
            <ContactCTA />
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
