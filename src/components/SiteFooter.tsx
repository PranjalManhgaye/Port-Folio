import { Container } from "@/components/Container";
import { profile } from "@/data/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-bold">{profile.name}</p>
          <p className="mt-1 text-xs text-foreground/60">
            Freelance backend · {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-semibold">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 no-underline hover:underline"
          >
            GitHub
          </a>
          <a href="#contact" className="text-foreground/80 no-underline hover:underline">
            Contact
          </a>
        </div>
        <p className="text-xs text-foreground/50">
          &copy; {year} {profile.handle}. Built with Next.js.
        </p>
      </Container>
    </footer>
  );
}
