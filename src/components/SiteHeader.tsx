"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-foreground/20 bg-background/92 shadow-lg shadow-black/10 dark:shadow-black/40"
          : "border-foreground/15 bg-background/80",
      ].join(" ")}
    >
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-sm font-bold tracking-tight text-foreground no-underline hover:no-underline"
        >
          {profile.handle}
        </Link>
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-3 py-1.5 text-xs font-semibold text-foreground/85 transition hover:border-foreground/20 hover:bg-foreground/5 hover:text-foreground no-underline hover:no-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
        <a
          href="#contact"
          className="rounded-full border border-stone-900/20 bg-[color:var(--accent)] px-4 py-2 text-xs font-bold text-[#141210] no-underline hover:brightness-105 hover:no-underline dark:border-amber-950/30 sm:text-sm"
        >
          Hire me
        </a>
      </Container>
    </header>
  );
}
