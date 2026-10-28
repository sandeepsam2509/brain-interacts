import Image from "next/image";

export type Render = { src: string; alt: string; width: number; height: number };

// 3D renders of Corporate Brain on transparent backgrounds (public/3d). They show sample data only.
export const renders = {
  home: { src: "/3d/home.webp", alt: "Corporate Brain leadership, manager and employee views in 3D", width: 1600, height: 910 },
  leadership: { src: "/3d/lead.webp", alt: "Corporate Brain leadership dashboard with attrition risk and bench strength", width: 1600, height: 1138 },
  manager: { src: "/3d/mgr.webp", alt: "Corporate Brain team board with team capability and a suggested assignment", width: 1600, height: 1062 },
  employee: { src: "/3d/emp.webp", alt: "Corporate Brain employee profile with strengths and a growth path", width: 1600, height: 1015 },
  flow: { src: "/3d/flow.webp", alt: "Employee, manager and leadership views stacked as layers", width: 1507, height: 1600 },
  people: { src: "/3d/people.webp", alt: "Corporate Brain people directory with availability and assessment status", width: 1600, height: 978 },
  bench: { src: "/3d/bench.webp", alt: "Corporate Brain bench view matching free people to delayed projects", width: 1600, height: 1050 },
  hiring: { src: "/3d/hiring.webp", alt: "Corporate Brain hiring board with project fit scores", width: 1600, height: 1102 },
  analytics: { src: "/3d/analytics.webp", alt: "Corporate Brain team analytics by team", width: 1600, height: 1117 },
  reports: { src: "/3d/reports.webp", alt: "Corporate Brain leadership report with recommended next steps", width: 1600, height: 1132 },
  assessments: { src: "/3d/assess.webp", alt: "Corporate Brain assessments overview", width: 1600, height: 1106 },
} satisfies Record<string, Render>;

export type Tint = "brand" | "gold" | "sky" | "lime";

const glow: Record<Tint, [string, string, string]> = {
  brand: ["bg-sky", "bg-lime", "bg-gold"],
  gold: ["bg-gold", "bg-gold", "bg-lime"],
  sky: ["bg-sky", "bg-sky", "bg-lime"],
  lime: ["bg-lime", "bg-lime", "bg-sky"],
};

/**
 * A 3D render floating gently over a soft, slowly moving glow in the page's colour.
 * `priority` for images at the top of the page so they load first.
 */
export function Hero3D({ render, tint = "brand", priority = false }: { render: Render; tint?: Tint; priority?: boolean }) {
  const [a, b, c] = glow[tint];
  return (
    <div className="relative w-full">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -inset-y-[10%]">
        <span className={`glow-a absolute top-0 right-[10%] h-[60%] w-[60%] rounded-full ${a} opacity-20 blur-[80px]`} />
        <span className={`glow-b absolute bottom-0 left-[5%] h-[50%] w-[50%] rounded-full ${b} opacity-15 blur-[80px]`} />
        <span className={`glow-c absolute right-0 bottom-[10%] h-[45%] w-[45%] rounded-full ${c} opacity-15 blur-[80px]`} />
      </div>
      <Image
        src={render.src}
        alt={render.alt}
        width={render.width}
        height={render.height}
        priority={priority}
        sizes="(min-width: 1024px) 640px, 100vw"
        className="float-3d relative h-auto w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
}

/** Same render, framed for light sections (where a dark glow would look muddy). */
export function Render3D({ render, tone }: { render: Render; tone: "dark" | "light" }) {
  return tone === "dark" ? (
    <Hero3D render={render} />
  ) : (
    <div className="relative overflow-hidden rounded-2xl bg-navy p-4 md:p-6">
      <Image src={render.src} alt={render.alt} width={render.width} height={render.height} sizes="(min-width: 1024px) 600px, 100vw" className="float-3d h-auto w-full" />
    </div>
  );
}
