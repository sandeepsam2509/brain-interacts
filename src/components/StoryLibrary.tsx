"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { type Product, type Story, storyHref } from "@/content/stories";

/** Abstract brand artwork per story (no client logos or photos). */
const storyPhoto: Record<string, string> = {
  "bvg-fixing-the-floor-not-the-people": "/site/f27e8606.webp",
  "pune-techtrol-gen-z-attrition": "/site/793df1a3.webp",
  "facilities-staffing-around-strengths": "/site/94257643.webp",
  "manufacturing-balanced-plant-leadership": "/site/8fc9f461.webp",
  "megamech-promoting-the-right-people-into-supervision": "/site/ee5cc825.webp",
  "redington-turning-the-bench-into-a-growth-engine": "/site/7e00bc9e.webp",
  "it-services-assigning-work-by-strengths": "/site/631ec024.webp",
  "technology-services-lost-momentum": "/site/9b9a9a4e.webp",
  "automation-aligning-engineering-and-customer-teams": "/site/dc17ab22.webp",
};

/** Photo for a customer story (stock imagery, not the client's own site). */
export function StoryArt({ story }: { story: Story; seed?: number }) {
  // eslint-disable-next-line @next/next/no-img-element -- static design images
  return <img src={storyPhoto[story.slug] ?? "/site/44843417.webp"} alt="" aria-hidden="true" className="h-full w-full object-cover" />;
}

function Card({ s, seed }: { s: Story; seed: number }) {
  return (
    <li className="flex">
      <Link
        href={storyHref(s)}
        className="group flex w-full flex-col overflow-hidden rounded-2xl border border-rule bg-white text-ink no-underline transition-shadow duration-300 hover:shadow-[0_18px_44px_rgba(10,22,40,0.12)]"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none">
            <StoryArt story={s} seed={seed} />
          </div>
          <span className="absolute bottom-3 left-3 max-w-[85%] rounded-lg bg-white/95 px-3 py-1.5 text-[12px] font-bold text-ink shadow-sm">{s.client}</span>
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="text-[11.5px] font-semibold tracking-[0.1em] text-ink-muted uppercase">{s.industry}</p>
          <h3 className="mt-2 text-[17px] leading-snug font-semibold">{s.title}</h3>
          {s.stats?.[0] ? (
            <p className="mt-3 border-t border-rule pt-3">
              <span className={`font-display block text-[30px] leading-none font-bold ${["text-brand-red", "text-gold-ink", "text-green-ink"][seed % 3]}`}>{s.stats[0].value}</span>
              <span className="mt-1 block text-[13px] text-ink-body">{s.stats[0].label}</span>
            </p>
          ) : (
            <p className="mt-2 line-clamp-3 text-[14px] leading-[1.6] text-ink-body">{s.challenge}</p>
          )}
          <ul className="m-0 mt-4 flex list-none flex-wrap gap-1.5 p-0">
            {s.products.map((p) => (
              <li key={p} className="rounded-full bg-cloud px-2.5 py-1 text-[12px] font-semibold text-ink">
                {p}
              </li>
            ))}
          </ul>
          <span className="mt-auto pt-5 text-[14px] font-semibold underline">
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
