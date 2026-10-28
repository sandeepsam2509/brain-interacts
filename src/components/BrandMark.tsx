/* eslint-disable @next/next/no-img-element -- small SVG logos don't need next/image */

type Product = "brain-interacts" | "corporate-brain";

const marks: Record<Product, { mark: string; logo: string; name: string; ratio: number }> = {
  "brain-interacts": {
    mark: "/brand/brain-interacts-mark.svg",
    logo: "/brand/brain-interacts-logo.svg",
    name: "Brain Interacts",
    ratio: 342.07 / 85,
  },
  "corporate-brain": {
    mark: "/brand/corporate-brain-mark.svg",
    logo: "/brand/corporate-brain-logo.svg",
    name: "Corporate Brain",
    ratio: 368.55 / 85,
  },
};

// The three overlapping circles on their own. Brain Interacts uses the same mark as
// Corporate Brain with the colours moved one circle round.
export function BrandMark({
  size = 32,
  product = "brain-interacts",
  className = "",
}: {
  size?: number;
  product?: Product;
  className?: string;
}) {
  return (
    <img src={marks[product].mark} alt="" aria-hidden="true" width={Math.round(size * (80 / 77))} height={size} className={className} />
  );
}

// Full logo: mark plus wordmark, as one image.
export function BrandLogo({
  height = 32,
  product = "brain-interacts",
  className = "",
}: {
  height?: number;
  product?: Product;
  className?: string;
}) {
  const m = marks[product];
  return <img src={m.logo} alt={m.name} width={Math.round(height * m.ratio)} height={height} className={className} />;
}

// Large, soft version of the mark used as a background motif in heroes and CTAs.
// The circles sit in the logo's triangle and drift slowly.
export function Motif({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <div className="relative h-full w-full opacity-[0.16] blur-[2px]">
        <span className="motif-drift-a absolute left-[18%] top-[30%] aspect-square w-[46%] rounded-full bg-green" />
        <span className="motif-drift-b absolute left-[38%] top-[30%] aspect-square w-[46%] rounded-full bg-gold mix-blend-screen" />
        <span className="motif-drift-c absolute left-[28%] top-[2%] aspect-square w-[46%] rounded-full bg-blue mix-blend-screen" />
      </div>
    </div>
  );
}
