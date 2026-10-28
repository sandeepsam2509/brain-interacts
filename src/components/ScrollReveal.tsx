"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Page motion, added from the browser so content is always visible without JavaScript:
 * - the opening section animates in when the page loads
 * - every later section fades and slides up as it scrolls into view
 * - cards and list items inside a section follow one after another
 * Skipped completely for visitors who ask their device for reduced motion.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section > div"));
    if (sections.length === 0) return;

    // Opening section: plays straight away.
    sections[0].classList.add("hero-in");

    const rest = sections.slice(1);
    rest.forEach((inner) => {
      inner.classList.add("reveal");
      // Stagger the items of grids and lists inside the section.
      inner.querySelectorAll<HTMLElement>(":scope .grid > *, :scope ol > li, :scope ul > li, :scope dl > div").forEach((el, i) => {
        el.classList.add("reveal-item");
        el.style.transitionDelay = `${Math.min(i, 8) * 70}ms`;
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    rest.forEach((el) => {
      // Anything already on screen (e.g. after a jump link) shows at once.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.88) el.classList.add("in");
      else io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
