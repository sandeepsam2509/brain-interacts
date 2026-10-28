import Image from "next/image";
import type { Accent, Image as ImageType } from "@/lib/types";

const glow: Record<Accent | "brand", string[]> = {
  brand: ["bg-blue", "bg-green", "bg-gold"],
  green: ["bg-green", "bg-green", "bg-aqua"],
  gold: ["bg-gold", "bg-gold", "bg-lemon"],
  blue: ["bg-blue", "bg-blue", "bg-aqua"],
  aqua: ["bg-aqua", "bg-blue", "bg-aqua"],
  lemon: ["bg-lemon", "bg-gold", "bg-lemon"],
};

// A 3D render of the Corporate Brain platform on a transparent background, floating
// over a soft glow in the page's colour (or all three logo colours).
export function Hero3D({ image, tint = "brand" }: { image: ImageType; tint?: Accent | "brand" }) {
  const [a, b, c] = glow[tint];
  return (
    <div className="relative w-full max-w-[720px] lg:w-[130%] lg:max-w-none lg:translate-x-[8%]">
      <div aria-hidden="true" className="pointer-events-none absolute -inset-[12%]">
        <span className={`glow-a absolute right-[10%] top-[0%] h-[60%] w-[60%] rounded-full ${a} opacity-25 blur-[80px]`} />
        <span className={`glow-b absolute bottom-[0%] left-[5%] h-[50%] w-[50%] rounded-full ${b} opacity-20 blur-[80px]`} />
        <span className={`glow-c absolute bottom-[10%] right-[0%] h-[45%] w-[45%] rounded-full ${c} opacity-20 blur-[80px]`} />
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
        sizes="(min-width: 1024px) 760px, 100vw"
        className="float-3d relative h-auto w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
}
