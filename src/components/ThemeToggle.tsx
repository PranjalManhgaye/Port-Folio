"use client";

import { useEffect, useState } from "react";

type ThemeName = "heritage-dark" | "british-light";

const STORAGE_KEY = "portfolio-theme";

function applyTheme(theme: ThemeName) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof window === "undefined") return "heritage-dark";

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "heritage-dark" || saved === "british-light") return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "heritage-dark"
      : "british-light";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function onToggle() {
    const next: ThemeName = theme === "british-light" ? "heritage-dark" : "british-light";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-full border border-foreground/30 bg-[var(--surface-elevated)] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-foreground/90 transition hover:bg-foreground/8 hover:border-foreground/40"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span suppressHydrationWarning>
        {theme === "british-light" ? "Heritage dark" : "British light"}
      </span>
    </button>
  );
}
