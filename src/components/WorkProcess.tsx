import { processSteps } from "@/data/process";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "./SectionHeader";

export function WorkProcess() {
  return (
    <section id="process" className="scroll-mt-24 mt-14">
      <Reveal>
        <SectionHeader
          kicker="Delivery process"
          title="How I work with clients"
          description="A clear flow that reduces surprises and makes progress visible."
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {processSteps.map((s, i) => (
          <Reveal key={s.step} delay={i * 50}>
            <div className="card-surface h-full p-6 dark:bg-zinc-900/35">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-foreground/55 uppercase">
                    Step {s.step}
                  </p>
                  <h3 className="font-display mt-2 text-lg font-bold tracking-tight">{s.title}</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold tracking-widest text-foreground/45">
                    Delivery
                  </p>
                  <div className="mt-1 h-2 w-14 rounded-full bg-[color:var(--accent)]/55" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-foreground/80">{s.details}</p>

              <ul className="mt-4 space-y-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="text-sm text-foreground/80 flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/60 flex-none" />
                    <span>{d}</span>
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
