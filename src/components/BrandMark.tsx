import { useId } from "react";

/** The Corporate Brain mark: three overlapping circles. */
export function BrandMark({ size = 36, className }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  const right = `${id}-r`;
  const top = `${id}-t`;
  return (
    <svg
      width={size}
      height={Math.round(size * 0.9625)}
      viewBox="8 6 80 77"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <clipPath id={right}>
          <circle cx="60" cy="55" r="22" />
        </clipPath>
        <clipPath id={top}>
          <circle cx="48" cy="34" r="22" />
        </clipPath>
      </defs>
      <circle cx="36" cy="55" r="22" fill="#EAD25F" />
      <circle cx="60" cy="55" r="22" fill="#3BB5E8" />
      <circle cx="48" cy="34" r="22" fill="#9AD751" />
      <g clipPath={`url(#${right})`}>
        <circle cx="36" cy="55" r="22" fill="#EEF1EE" />
      </g>
      <g clipPath={`url(#${top})`}>
        <circle cx="36" cy="55" r="22" fill="#F6F77E" />
        <circle cx="60" cy="55" r="22" fill="#AEF2ED" />
      </g>
      <g clipPath={`url(#${right})`}>
        <g clipPath={`url(#${top})`}>
          <circle cx="36" cy="55" r="22" fill="#F8FDF1" />
        </g>
      </g>
    </svg>
  );
}
