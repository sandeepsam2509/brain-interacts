/* eslint-disable @next/next/no-img-element -- small SVG logos don't need next/image */

// The Brain Interacts mark: a red head over a yellow figure with a navy collar.
// Official files live in public/brand (from the Brain Interacts logo pack). Never recolour them.
export function BrandMark({
  size = 32,
  tone = "dark",
  className = "",
}: {
  size?: number;
  /** "dark" = for navy backgrounds (white collar). "light" = for white backgrounds. */
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <img
      src={tone === "dark" ? "/brand/brain-interacts-mark-reversed.svg" : "/brand/brain-interacts-mark.svg"}
      alt=""
      aria-hidden="true"
      width={Math.round(size * (72 / 80))}
      height={size}
      className={`shrink-0 ${className}`}
    />
  );
}

/** "Brain Interacts / A People Analytics Company" with the divider, white, for dark backgrounds. */
export function Wordmark({ height = 32, className = "" }: { height?: number; className?: string }) {
  return (
    <img
      src="/brand/brain-interacts-wordmark.svg"
      alt=""
      aria-hidden="true"
      width={Math.round(height * (286 / 100))}
      height={height}
      className={`block max-w-none ${className}`}
    />
  );
}

/** The red, amber and green brand stripe (4 px) that sits above the header. */
export function BrandStripe({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex h-1 ${className}`}>
      <span className="flex-1 bg-brand-red" />
      <span className="flex-1 bg-amber" />
      <span className="flex-1 bg-brand-green" />
    </div>
  );
}
