"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { type Product, type Story, storyHref } from "@/content/stories";

const industryTone: Record<string, string> = {
  "Facilities management": "#F4C20D",
  Manufacturing: "#CBD5E1",
  "IT services": "#F4C20D",
  "Industrial automation": "#15803D",
};

/** Abstract brand artwork per story (no client logos or photos). */
export function StoryArt({ story, seed = 0 }: { story: Story; seed?: number }) {
  const a = industryTone[story.industry] ?? "#CBD5E1";
  const v = seed % 3;
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="200" fill="#0F172A" />
      {v === 0 && (
        <>
          <circle cx="250" cy="40" r="110" fill={a} opacity="0.9" />
          <circle cx="80" cy="190" r="80" fill="#CBD5E1" opacity="0.3" />
        </>
      )}
      {v === 1 && (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={40 + i * 50} y={150 - (i + 1) * 22} width="34" height={(i + 1) * 22 + 20} rx="6" fill={i === 4 ? a : "#1E293B"} />
          ))}
          <path d="M40 120 C 110 60, 180 110, 280 30" stroke="#F4C20D" strokeWidth="5" fill="none" strokeLinecap="round" />
        </>
      )}
      {v === 2 &&
        [0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => (
            <circle key={`${row}-${col}`} cx={50 + col * 44} cy={40 + row * 40} r={(row + col) % 4 === 0 ? 13 : 7} fill={(row + col) % 4 === 0 ? a : "#1E293B"} />
          )),
        )}
    </svg>
  );
}


function Card({ s, seed }: { s: Story; seed: number }) {
  return (
    <li className="flex">
      <Link
        href={storyHref(s)}
        className="group flex w-full flex-col overflow-hidden rounded-2xl border border-rule bg-white text-ink no-underline transition-shadow duration-300 hover:shadow-[0_18px_44px_rgba(15,23,42,0.12)]"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none">
            <StoryArt story={s} seed={seed} />
          </div>
          <span className="absolute bottom-3 left-3 max-w-[85%] rounded-lg bg-white/95 px-3 py-1.5 text-[12px] font-bold text-ink shadow-sm">{s.client}</span>
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="font-mono text-[11px] tracking-[0.12em] text-ink-link uppercase">{s.industry}</p>
          <h3 className="mt-2.5 text-[16px] leading-snug font-bold tracking-[-0.01em]">{s.title}</h3>
          <p className="mt-2 text-[14px] leading-[1.6] text-ink-body">{s.challenge}</p>
          <ul className="m-0 mt-4 flex list-none flex-wrap gap-1.5 p-0">
            {s.products.map((p) => (
              <li key={p} className="rounded-full bg-[#EEF2F6] px-2.5 py-1 text-[12px] font-semibold text-ink">
                {p}
              </li>
            ))}
          </ul>
          <span className="mt-auto pt-5 text-[14px] font-bold group-hover:text-ink-link">
            Read the story <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </li>
  );
}

export function StoryLibrary({ items, industries, products }: { items: Story[]; industries: string[]; products: Product[] }) {
  const [industry, setIndustry] = useState("All");
  const [product, setProduct] = useState<Product | "All">("All");
  const filtered = useMemo(
    () => items.filter((s) => (industry === "All" || s.industry === industry) && (product === "All" || s.products.includes(product))),
    [items, industry, product],
  );

  const chip = (on: boolean) =>
    `shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${on ? "border-navy bg-navy text-white" : "border-rule-strong bg-white text-ink hover:border-navy"}`;

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:px-0" role="group" aria-label="Industry">
          {["All", ...industries].map((i) => (
            <button key={i} type="button" aria-pressed={industry === i} onClick={() => setIndustry(i)} className={chip(industry === i)}>
              {i === "All" ? "All industries" : i}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 text-sm text-ink-body">
          <span className="shrink-0 font-semibold text-ink">Product</span>
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value as Product | "All")}
            className="rounded-full border border-rule-strong bg-white px-4 py-2 text-sm font-semibold text-ink"
          >
            <option value="All">All products</option>
            {products.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
      </div>
      <p className="mb-5 text-sm text-ink-muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "story" : "stories"}
      </p>
      {filtered.length ? (
        <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((s) => (
            <Card key={s.slug} s={s} seed={items.indexOf(s)} />
          ))}
        </ul>
      ) : (
        <div className="rounded-2xl border border-dashed border-rule-strong p-10 text-center">
          <p className="text-lg font-bold">No stories match yet.</p>
          <button
            type="button"
            onClick={() => {
              setIndustry("All");
              setProduct("All");
            }}
            className="mt-4 rounded-lg bg-navy px-5 py-2.5 text-sm font-bold text-white"
          >
            Show all stories
          </button>
        </div>
      )}
    </div>
  );
}
