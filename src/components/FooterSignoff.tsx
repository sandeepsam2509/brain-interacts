"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

/** Oversized logo under the footer. Hidden until the visitor scrolls past the footer,
 *  then rises and fades in, tied to scroll position. Static for reduced-motion users. */
export function FooterSignoff() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      // 0 when the block's top reaches the bottom of the screen, 1 once it is fully in view.
      const progress = (window.innerHeight - r.top) / r.height;
      setP(Math.min(1, Math.max(0, progress)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const eased = 1 - Math.pow(1 - p, 3);
  return (
    <div ref={ref} aria-hidden="true" className="mx-auto max-w-[1440px] overflow-hidden px-6 pt-4 pb-8 md:pb-12">
      <div
        className="flex items-center gap-[2.5%] select-none will-change-transform"
        style={{ opacity: eased * 0.9, transform: `translateY(${(1 - eased) * 60}%) scale(${0.92 + eased * 0.08})` }}
      >
        <img src="/brand/brain-interacts-mark.svg" alt="" className="h-auto w-[13%] shrink-0" style={{ transform: `rotate(${(1 - eased) * -40}deg)` }} />
        <img src="/brand/brain-interacts-wordmark.svg" alt="" className="h-auto w-[84.5%] shrink-0" />
      </div>
    </div>
  );
}
