import { contact } from "@/data/contact";
import { profile } from "@/data/profile";
import { Button } from "./Button";
import { SectionHeader } from "./SectionHeader";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

export function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-24 mt-14 pb-24">
      <Reveal>
        <SectionHeader
          kicker="Contact"
          title="Let's build your backend"
          description="Send a short message. I reply with a clear next-step and a practical plan."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="card-surface p-6 sm:p-8 dark:bg-zinc-900/40">
          <div className="flex flex-col lg:flex-row gap-8 lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm text-foreground/80 leading-7">
                Hi, I&apos;m <span className="font-bold">{profile.name}</span>. I work on{" "}
                <span className="font-semibold">backend APIs</span>, auth patterns, and clean architecture
                delivery.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-foreground/15 bg-white/10 px-3 py-1 text-xs font-semibold text-foreground/80 dark:bg-white/5">
                  {contact.locationLine}
                </span>
                <Button href={profile.githubUrl} variant="secondary">
                  GitHub
                </Button>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-bold tracking-widest text-foreground/70 uppercase">
                  What to include
                </h3>
                <ul className="mt-4 space-y-2">
                  {[
                    "What you need to build",
                    "Any auth/user roles involved",
                    "Database preferences",
                    "Timeline and target users",
                  ].map((t) => (
                    <li key={t} className="text-sm text-foreground/80 flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]/75 flex-none" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full lg:max-w-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
