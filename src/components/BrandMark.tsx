/* eslint-disable @next/next/no-img-element -- small SVG logos don't need next/image */

// The Brain Interacts mark: three overlapping circles (the Corporate Brain mark with the
// colours moved one circle round). Files live in public/brand.
export function BrandMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src="/brand/brain-interacts-mark.svg"
      alt=""
      aria-hidden="true"
      width={Math.round(size * (80 / 77))}
      height={size}
      className={`shrink-0 ${className}`}
    />
  );
}

/** "Brain Interacts" wordmark in white, for dark backgrounds. */
export function Wordmark({ height = 18, className = "" }: { height?: number; className?: string }) {
  return (
    <img
      src="/brand/brain-interacts-wordmark.svg"
      alt=""
      aria-hidden="true"
      width={Math.round(height * (248 / 32))}
      height={height}
      className={`block max-w-none ${className}`}
    />
  );
}
