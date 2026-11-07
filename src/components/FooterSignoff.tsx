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

  // Each piece runs over its own slice of the scroll so they arrive one after another.
  const seg = (a: number, b: number) => {
    const t = Math.min(1, Math.max(0, (p - a) / (b - a)));
    return 1 - Math.pow(1 - t, 3);
  };
  const green = seg(0.2, 0.7); // flies in from bottom-left
  const yellow = seg(0.3, 0.8); // from bottom-right
  const blue = seg(0.4, 0.88); // drops in from above
  const blend = seg(0.85, 1); // overlap colours appear once the circles meet
  const word = seg(0.5, 1); // wordmark wipes in left to right
  const fly = (t: number, dx: number, dy: number, rot: number) => ({
    transform: `translate(${(1 - t) * dx}px, ${(1 - t) * dy}px) rotate(${(1 - t) * rot}deg)`,
    transformOrigin: "center",
    transformBox: "fill-box" as const,
    opacity: t,
  });
  return (
    <div ref={ref} aria-hidden="true" className="mx-auto max-w-[1440px] overflow-hidden px-6 pt-4 pb-8 md:pb-12">
      <div className="flex items-center gap-[2.5%] select-none">
        <svg viewBox="8 6 80 77" className="h-auto w-[13%] shrink-0 overflow-visible">
          <defs>
            <clipPath id="fs-b"><circle cx="60" cy="55" r="22" /></clipPath>
            <clipPath id="fs-c"><circle cx="48" cy="34" r="22" /></clipPath>
          </defs>
          <circle cx="36" cy="55" r="22" fill="#9AD751" style={fly(green, -160, 120, -90)} />
          <circle cx="60" cy="55" r="22" fill="#EAD25F" style={fly(yellow, 180, 140, 90)} />
          <circle cx="48" cy="34" r="22" fill="#3BB5E8" style={fly(blue, 20, -180, 0)} />
          <g style={{ opacity: blend }}>
            <g clipPath="url(#fs-b)"><circle cx="36" cy="55" r="22" fill="#F6F77E" /></g>
            <g clipPath="url(#fs-c)">
              <circle cx="36" cy="55" r="22" fill="#AEF2ED" />
              <circle cx="60" cy="55" r="22" fill="#EEF1EE" />
            </g>
            <g clipPath="url(#fs-b)"><g clipPath="url(#fs-c)"><circle cx="36" cy="55" r="22" fill="#F8FDF1" /></g></g>
          </g>
        </svg>
        <img
          src="/brand/brain-interacts-wordmark.svg"
          alt=""
          className="h-auto w-[84.5%] shrink-0"
          style={{ clipPath: `inset(0 ${(1 - word) * 100}% 0 0)`, opacity: 0.3 + word * 0.7, transform: `translateY(${(1 - word) * 20}%)` }}
        />
      </div>
    </div>
  );
}
