"use client";

import { useEffect, useState } from "react";

/** "On this page" list built from the headings in the legal text. */
export function LegalToc({ targetId }: { targetId: string }) {
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const root = document.getElementById(targetId);
    if (!root) return;
    const hs = Array.from(root.querySelectorAll("h2"));
    const list = hs.map((h, i) => {
      if (!h.id) h.id = `s-${i + 1}-${(h.textContent ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)}`;
      h.classList.add("scroll-mt-24");
      return { id: h.id, text: (h.textContent ?? "").replace(/^\d+\.\s*/, "") };
    });
    setItems(list);
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "0px 0px -70% 0px" });
    hs.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [targetId]);

  if (items.length < 2) return null;
  return (
    <nav aria-label="On this page" className="sticky top-24 hidden lg:block">
      <p className="mb-3 text-[11.5px] font-semibold tracking-[0.1em] text-ink-muted uppercase">On this page</p>
      <ul className="m-0 list-none space-y-1 p-0">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={`block border-l-2 py-1 pl-3 text-[13.5px] no-underline ${active === it.id ? "border-brand-red font-semibold text-ink" : "border-transparent text-ink-muted hover:text-ink"}`}
            >
              {it.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
