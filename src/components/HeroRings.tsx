"use client";
import { useEffect, useRef } from "react";

// Three interlocking rings in the brand colours (red, amber, green), drawn in 3D on a canvas and turning slowly.
// A labelled point travels on each ring: Leadership, Managers, Employees.
import { ringSets, type RingItem } from "@/content/rings";

const GEOMETRY = [
  { color: "185,28,28", tiltX: 0.35, tiltZ: 0.0, speed: 0.22 },
  { color: "244,194,13", tiltX: 0.35, tiltZ: 2.094, speed: -0.18 },
  { color: "21,128,61", tiltX: 0.35, tiltZ: 4.189, speed: 0.15 },
];

export function HeroRings({ items = ringSets.corporateBrain }: { items?: RingItem[] }) {
  const RINGS = GEOMETRY.map((g, i) => ({ ...g, ...items[i] }));
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const tags = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const c = canvas.current!;
    const box = wrap.current!;
    const ctx = c.getContext("2d")!;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t0 = performance.now();
    let w = 0, h = 0, raf = 0;
    let mx = 0, my = 0; // pointer tilt, -1..1

    const resize = () => {
      const r = box.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = r.width; h = r.height;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onMove = (e: PointerEvent) => {
      const r = box.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width) * 2 - 1;
      my = ((e.clientY - r.top) / r.height) * 2 - 1;
    };

    // Rotate a point on the unit circle into 3D for ring i at time t.
    const point = (i: number, a: number, t: number) => {
      const ring = RINGS[i];
      let x = Math.cos(a), y = Math.sin(a), z = 0;
      // each ring is a great circle, turned about the vertical axis (0°, 60°, 120°)
      const yaw = ring.tiltZ / 2, cyw = Math.cos(yaw), syw = Math.sin(yaw);
      [x, z] = [x * cyw + z * syw, -x * syw + z * cyw];
      // then leaned so the three rings read as an orb
      const cx = Math.cos(ring.tiltX), sx = Math.sin(ring.tiltX);
      [x, y] = [x * cx - y * sx, x * sx + y * cx];
      // whole-scene spin, plus a little pointer tilt
      const spin = t * 0.12 + mx * 0.35;
      const cs = Math.cos(spin), ss = Math.sin(spin);
      [x, z] = [x * cs + z * ss, -x * ss + z * cs];
      const pitch = 0.35 + my * 0.25;
      const cp = Math.cos(pitch), sp = Math.sin(pitch);
      [y, z] = [y * cp - z * sp, y * sp + z * cp];
      return { x, y, z };
    };

    const draw = (now: number) => {
      const t = still ? 2 : (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.34;
      const ox = w / 2, oy = h / 2;
      const project = (p: { x: number; y: number; z: number }) => {
        const s = 2.6 / (2.6 + p.z);
        return { x: ox + p.x * R * s, y: oy + p.y * R * s, s };
      };

      // soft glow in the centre
      const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, R * 1.4);
      g.addColorStop(0, "rgba(203,213,225,0.12)");
      g.addColorStop(1, "rgba(203,213,225,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      RINGS.forEach((ring, i) => {
        // ring outline as short segments, brighter at the front
        const N = 160;
        let prev = project(point(i, 0, t));
        for (let k = 1; k <= N; k++) {
          const p3 = point(i, (k / N) * Math.PI * 2, t);
          const p = project(p3);
          const alpha = 0.25 + 0.75 * ((1 - p3.z) / 2);
          ctx.strokeStyle = `rgba(${ring.color},${alpha.toFixed(3)})`;
          ctx.lineWidth = 1.2 + 1.6 * p.s * ((1 - p3.z) / 2);
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
          prev = p;
        }
        // small dots trailing round each ring
        for (let d = 0; d < 6; d++) {
          const p3 = point(i, t * ring.speed * 2 + (d / 6) * Math.PI * 2 + 0.5, t);
          const p = project(p3);
          ctx.fillStyle = `rgba(${ring.color},${(0.3 + 0.5 * ((1 - p3.z) / 2)).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.6 * p.s, 0, Math.PI * 2);
          ctx.fill();
        }
        // the labelled node
        const n3 = point(i, t * ring.speed + i * 2.1, t);
        const n = project(n3);
        const front = (1 - n3.z) / 2;
        ctx.fillStyle = `rgba(${ring.color},1)`;
        ctx.shadowColor = `rgba(${ring.color},0.9)`;
        ctx.shadowBlur = 18;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 5.5 * n.s, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        void front;
      });
      if (!still) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    box.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      box.removeEventListener("pointermove", onMove);
    };
  }, []);

  const spots = ["sm:top-[6%] sm:left-0", "sm:top-[42%] sm:right-0", "sm:bottom-[6%] sm:left-[4%]"];
  return (
    <div className="relative w-full max-w-[480px] justify-self-center">
    <div ref={wrap} className="relative aspect-square w-full" role="img"
      aria-label={RINGS.map((r) => `${r.label}: ${r.text}`).join(". ")}>
      <canvas ref={canvas} className="absolute inset-0 h-full w-full" />
    </div>
    <div className="relative mt-4 grid gap-2.5 sm:absolute sm:inset-0 sm:mt-0 sm:block">
      {RINGS.map((r, i) => (
        <div
          key={r.label}
          ref={(el) => { tags.current[i] = el; }}
          className={`pointer-events-none rounded-xl border border-navy-line bg-navy-raised/90 px-3.5 py-2.5 shadow-lg backdrop-blur sm:absolute sm:w-max sm:max-w-[210px] ${spots[i]}`}
          style={{ borderLeft: `3px solid rgb(${r.color})` }}
        >
          <p className="m-0 font-mono text-[11px] font-semibold tracking-[0.08em] text-white uppercase">{r.label}</p>
          <p className="m-0 mt-0.5 text-[13px] leading-[1.4] font-semibold text-white">{r.text}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
