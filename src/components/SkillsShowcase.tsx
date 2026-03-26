import { skills } from "@/data/skills";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "./SectionHeader";

export function SkillsShowcase() {
  return (
    <section id="skills" className="scroll-mt-24 mt-14">
      <Reveal>
        <SectionHeader
          kicker="Skills"
          title="Core tools I deliver with"
          description="Backend, data, DevOps-style delivery, and systems thinking—aligned with how I ship and contribute to the open source community."
        />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={i * 45}>
            <div className="card-surface h-full p-6 dark:bg-zinc-900/35">
              <h3 className="font-display text-lg font-bold tracking-tight">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/80 flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]/75 flex-none" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
