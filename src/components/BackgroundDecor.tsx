/** Fixed mesh, grid, and noise — purely decorative. */
export function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-page-grid opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-page-noise opacity-[0.45] mix-blend-overlay" aria-hidden />
      <div className="absolute left-1/2 top-[-20%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_55%)] opacity-35 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,var(--accent2)_0%,transparent_60%)] opacity-30 blur-3xl" />
    </div>
  );
}
