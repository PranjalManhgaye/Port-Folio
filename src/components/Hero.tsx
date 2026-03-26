import Image from "next/image";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export function Hero() {
  const showPhoto = Boolean(profile.profileImageSrc);

  return (
    <section className="relative overflow-hidden pt-20 pb-14" aria-label="Hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-40%] h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_60%)] opacity-60" />
        <div className="absolute left-[-120px] top-[180px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,var(--accent2)_0%,transparent_60%)] opacity-35 blur-[10px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.35))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.65))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,165,82,0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(196,165,82,0.14),transparent_55%)]" />
      </div>

      <div className="relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-2xl min-w-0 flex-1">
            <Reveal delay={0}>
              <p className="text-xs font-semibold tracking-[0.2em] text-foreground/65 uppercase">
                {profile.heroRole}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight">
                <span className="text-gradient">{profile.name}</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-foreground/80">
                {profile.heroValueLine}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {profile.focusAreas.slice(0, 5).map((a) => (
                  <Badge key={a}>{a}</Badge>
                ))}
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-foreground/55">
                {profile.credibilityStrip.map((item, i) => (
                  <span key={item} className="inline-flex items-center gap-3">
                    {i > 0 ? <span className="text-foreground/25" aria-hidden>·</span> : null}
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="#contact" variant="primary">
                  Tell me your project
                </Button>
                <Button href={profile.githubUrl} variant="secondary">
                  View GitHub
                </Button>
                <Button href="#projects" variant="ghost">
                  Selected work
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="w-full shrink-0 lg:max-w-[min(100%,22rem)] xl:max-w-sm">
            <div className="flex flex-col gap-6">
              {showPhoto ? (
                <Reveal delay={120}>
                  <div className="group relative mx-auto flex w-full flex-col items-center lg:mx-0 lg:items-start">
                    <div className="rounded-full bg-gradient-to-br from-[color:var(--accent)] via-[color:var(--accent2)] to-[color:var(--accent-tertiary)] p-[3px] shadow-[0_24px_55px_-14px_rgba(138,109,47,0.35)] dark:shadow-[0_24px_55px_-14px_rgba(196,165,82,0.28)]">
                      <div className="rounded-full bg-stone-950 p-[3px] shadow-inner">
                        <div className="relative h-[13.5rem] w-[13.5rem] overflow-hidden rounded-full sm:h-60 sm:w-60">
                          <Image
                            src={profile.profileImageSrc!}
                            alt={`${profile.name}, ${profile.heroRole}`}
                            fill
                            priority
                            sizes="(max-width: 1024px) 240px, 256px"
                            className="object-cover object-[center_22%] scale-[1.08] transition duration-500 ease-out group-hover:scale-[1.12] motion-reduce:group-hover:scale-[1.08]"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-stone-200/15 dark:ring-stone-400/15" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-5 w-full text-center text-xs font-medium tracking-wide text-foreground/55 lg:text-left">
                      {profile.location}
                    </p>
                  </div>
                </Reveal>
              ) : null}

              <Reveal delay={180}>
                <div className="card-surface backdrop-blur-md p-6 dark:bg-zinc-900/40">
                  <p className="text-sm font-semibold text-foreground/85 font-display">
                    Quick trust signals
                  </p>
                  <div className="mt-4 grid grid-cols-1 gap-3">
                    {profile.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/30 px-4 py-3 dark:bg-black/25"
                      >
                        <span className="text-xs font-semibold text-foreground/65">
                          {h.label}
                        </span>
                        <span className="text-sm font-bold text-foreground/90 text-right">
                          {h.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-foreground/60 leading-6">
                    Best fit for REST APIs, auth patterns, and maintainable backend delivery.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
