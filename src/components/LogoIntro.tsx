"use client";

import { useEffect, useState } from "react";

// Logo intro: the three circles draw themselves in, fill with colour, then the wordmark
// slides in. Once per browser session, over a page that is already rendered underneath.
// Skipped for visitors who ask for reduced motion; any click skips it.
export function LogoIntro() {
  const [state, setState] = useState<"hidden" | "playing" | "leaving">("hidden");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("bi-intro") === "1";
      sessionStorage.setItem("bi-intro", "1");
    } catch {
      seen = true;
    }
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setState("playing");
    const t1 = window.setTimeout(() => setState("leaving"), 1900);
    const t2 = window.setTimeout(() => setState("hidden"), 2350);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (state === "hidden") return null;

  return (
    <div
      aria-hidden="true"
      onClick={() => setState("hidden")}
      className={`fixed inset-0 z-[100] grid place-items-center bg-navy transition-opacity duration-500 ${state === "leaving" ? "opacity-0" : "opacity-100"}`}
    >
      <svg viewBox="4 2 342 85" className="w-[min(360px,75vw)] overflow-visible">
        <circle className="intro-ring" cx="48" cy="34" r="22" stroke="#3BB5E8" />
        <circle className="intro-ring" cx="36" cy="55" r="22" stroke="#9AD751" />
        <circle className="intro-ring" cx="60" cy="55" r="22" stroke="#EAD25F" />
        <image className="intro-fill" href="/brand/brain-interacts-mark.svg" x="8" y="6" width="80" height="77" />
        <image className="intro-word" href="/brand/brain-interacts-wordmark.svg" x="90" y="28" width="248" height="32" />
      </svg>
    </div>
  );
}
