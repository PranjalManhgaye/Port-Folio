export function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stone-400/25 bg-stone-100/60 px-3 py-1 text-xs font-semibold text-foreground/90 ring-1 ring-inset ring-stone-300/30 dark:border-stone-600/30 dark:bg-stone-900/40 dark:text-foreground/85 dark:ring-stone-500/20">
      {children}
    </span>
  );
}

