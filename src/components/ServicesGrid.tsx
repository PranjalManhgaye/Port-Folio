import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "./SectionHeader";

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-24">
      <Reveal>
        <SectionHeader
          kicker="Services"
          title="What I build for you"
          description="Freelance-friendly backend delivery: endpoints, auth patterns, and maintainable structure."
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <div className="card-surface h-full p-6 dark:bg-zinc-900/35">
              <h3 className="font-display text-lg font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-foreground/75">{s.description}</p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="text-sm text-foreground/80 flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]/75 flex-none" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="card-surface mt-8 p-6 dark:bg-zinc-900/30">
          <p className="text-sm text-foreground/75 leading-7">
            Best for: small-to-mid backend features, REST API systems, and auth/role-based implementations where correctness and maintainability matter.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
