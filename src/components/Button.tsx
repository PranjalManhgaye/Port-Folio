import type { ReactNode } from "react";

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type,
  disabled,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/45 focus:ring-offset-2 focus:ring-offset-[var(--background)] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  const variants: Record<typeof variant, string> = {
    primary:
      "bg-[color:var(--accent)] text-[#141210] hover:brightness-[1.06] border border-stone-900/20 dark:border-amber-950/30 dark:text-[#141210] dark:hover:brightness-110",
    secondary:
      "bg-transparent text-foreground hover:bg-stone-900/[0.04] dark:hover:bg-stone-100/[0.06] border border-stone-800/15 dark:border-stone-100/15",
    ghost:
      "bg-transparent text-foreground hover:bg-stone-900/[0.04] dark:hover:bg-stone-100/[0.06] border border-transparent",
  };

  const cls = [base, variants[variant], className ?? ""].join(" ");

  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={cls}
      onClick={onClick}
      type={type ?? "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
