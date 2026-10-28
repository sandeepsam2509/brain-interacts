// Small 16px stroke icons used beside section labels.

const paths = {
  people: (
    <>
      <circle cx="6" cy="5" r="2.5" />
      <path d="M1.5 13c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4M11 3a2.2 2.2 0 010 4.2M12.5 9.3c1.3.5 2 1.8 2 3.7" />
    </>
  ),
  spark: <path d="M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3M3.5 3.5l2 2M10.5 10.5l2 2M12.5 3.5l-2 2M5.5 10.5l-2 2" />,
  grid: (
    <>
      <rect x="2" y="2" width="5" height="5" rx="1" />
      <rect x="9" y="2" width="5" height="5" rx="1" />
      <rect x="2" y="9" width="5" height="5" rx="1" />
      <rect x="9" y="9" width="5" height="5" rx="1" />
    </>
  ),
  target: (
    <>
      <circle cx="8" cy="8" r="6.5" />
      <circle cx="8" cy="8" r="3.5" />
      <circle cx="8" cy="8" r="0.8" />
    </>
  ),
  flow: (
    <>
      <circle cx="3" cy="8" r="1.5" />
      <circle cx="13" cy="8" r="1.5" />
      <path d="M4.5 8h7M9.5 6l2 2-2 2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="1.5" y="4.5" width="13" height="9" rx="1.5" />
      <path d="M5.5 4.5V3a1 1 0 011-1h3a1 1 0 011 1v1.5M1.5 8.5h13" />
    </>
  ),
  chart: <path d="M2 14h12M4 11V8M8 11V3M12 11V6" />,
  quote: <path d="M2.5 13V9.5c0-2.6 1.2-4.2 3-5M2.5 9.5h3.5V13H2.5M9.5 13V9.5c0-2.6 1.2-4.2 3-5M9.5 9.5H13V13H9.5" />,
};

export type IconName = keyof typeof paths;

export function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
