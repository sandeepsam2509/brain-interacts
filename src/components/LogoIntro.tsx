"use client";

import { useEffect, useState } from "react";

// Logo intro: the figure's body rises, the head drops into place, then the wordmark
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
      <svg viewBox="0 0 378 100" className="w-[min(420px,80vw)] overflow-visible">
        <circle className="intro-head" cx="36" cy="24" r="14" fill="#B91C1C" />
        <path className="intro-body" d="M0 90L22 50H50L72 90H52L36 74L20 90Z" fill="#FACC15" />
        <path className="intro-collar" d="M22 50H50L36 74Z" fill="#FFFFFF" />
        <image className="intro-word" href="/brand/brain-interacts-wordmark.svg" x="92" y="0" width="286" height="100" />
      </svg>
    </div>
  );
}
