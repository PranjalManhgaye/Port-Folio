import Image from "next/image";
import { projects } from "@/data/projects";
import type { PortfolioProject } from "@/data/projects";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

function ProjectMedia({ project }: { project: PortfolioProject }) {
  if (project.imageSrc) {
    return (
      <div className="relative mb-4 h-24 w-full shrink-0 overflow-hidden rounded-xl bg-zinc-900/30 ring-1 ring-inset ring-white/10">
        <Image
          src={project.imageSrc}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }
  const initial =
    project.title
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "P";

  return (
    <div className="relative mb-4 flex h-24 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[color:var(--accent)]/20 via-stone-800/45 to-[color:var(--accent2)]/25 ring-1 ring-inset ring-stone-500/15 dark:from-[color:var(--accent)]/15 dark:via-zinc-900/50 dark:to-[color:var(--accent2)]/20">
      <span className="font-display text-2xl font-extrabold tracking-tight text-foreground/20">
        {initial}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  const meta = [project.primaryLanguage, project.updatedLabel].filter(Boolean).join(" · ");
  const shortHighlights = project.highlights.slice(0, 2);

  return (
    <div className="card-surface group flex h-[24rem] w-full flex-col overflow-hidden p-5 dark:bg-zinc-900/35">
      <ProjectMedia project={project} />

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 min-h-[4.5rem]">
            <h3 className="font-display text-base font-bold leading-snug tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 line-clamp-1 text-xs leading-relaxed text-foreground/80">
              {project.subtitle}
            </p>
            {meta ? (
              <p className="mt-1.5 text-[11px] font-semibold text-foreground/60">{meta}</p>
            ) : null}
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[10px] font-semibold tracking-widest text-foreground/65 uppercase">
              {project.id === "interviewos-hacksagon" ? "Team" : "Selected"}
            </p>
            <div className="mt-1.5 flex max-w-[9rem] flex-wrap justify-end gap-1">
              {project.stackTags.slice(0, 2).map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-foreground/25 bg-[var(--surface-elevated)] px-2 py-0.5 text-[10px] font-semibold text-foreground/85 dark:bg-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-foreground/85">{project.description}</p>

        <ul className="mt-3 space-y-1.5">
          {shortHighlights.map((h) => (
            <li key={h} className="flex gap-2 text-xs leading-snug text-foreground/85">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent)]/75" />
              <span className="line-clamp-1">{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.repoUrl ? (
            <Button href={project.repoUrl} variant="secondary" className="!px-4 !py-1.5 !text-xs">
              View repository
            </Button>
          ) : null}
          <Button href="#contact" variant="ghost" className="!px-4 !py-1.5 !text-xs">
            Ask about this
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ProjectSpotlight() {
  return (
    <section id="projects" className="scroll-mt-24 mt-14">
      <Reveal>
        <SectionHeader
          kicker="Selected work"
          title="Proof you can ship"
          description="A small set of projects that show how I think about delivery: core logic, edge cases, and clean structure."
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 70} className="w-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
