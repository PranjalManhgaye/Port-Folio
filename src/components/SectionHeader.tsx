export function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center" : "text-left";

  return (
    <div className={["mb-10", alignCls].join(" ")}>
      {kicker ? (
        <p className="text-xs font-semibold tracking-[0.18em] text-foreground/65 uppercase mb-3">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm sm:text-base leading-7 text-foreground/70 max-w-2xl text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
