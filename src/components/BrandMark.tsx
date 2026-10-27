// The three overlapping circles: psychological science, interactive technology
// and organizational strategy.
export function BrandMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 52 32" aria-hidden="true" className={className}>
      <circle cx="16" cy="16" r="13" fill="#EAD25F" />
      <circle cx="26" cy="16" r="13" fill="#9AD751" fillOpacity="0.85" />
      <circle cx="36" cy="16" r="13" fill="#3BB5E8" fillOpacity="0.8" />
      <circle cx="26" cy="16" r="6" fill="#AEF2ED" fillOpacity="0.55" />
    </svg>
  );
}

// Large, soft version of the mark used as a background motif in heroes and CTAs.
export function Motif({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <div className="relative h-full w-full opacity-[0.16] blur-[2px]">
        <span className="absolute left-0 top-1/2 aspect-square w-1/2 -translate-y-1/2 rounded-full bg-gold" />
        <span className="absolute left-1/4 top-1/2 aspect-square w-1/2 -translate-y-1/2 rounded-full bg-green mix-blend-screen" />
        <span className="absolute left-1/2 top-1/2 aspect-square w-1/2 -translate-y-1/2 rounded-full bg-blue mix-blend-screen" />
      </div>
    </div>
  );
}
