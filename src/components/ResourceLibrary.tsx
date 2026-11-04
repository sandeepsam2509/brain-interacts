"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { featuredResourceId, type Resource, type ResourceType, resourceTypes, topics, type Topic } from "@/content/resources";
import { openWhitepaper } from "./WhitepaperLibrary";

type Category = ResourceType | "all";

const typeLabel = (t: ResourceType) => resourceTypes.find((x) => x.key === t)?.singular ?? t;

// Brand colour per type, used for the label and the thumbnail art.
const tone: Record<ResourceType, { label: string; bg: string; a: string; b: string }> = {
  whitepapers: { label: "text-ink-link", bg: "#E3F1FC", a: "#5BB8F5", b: "#0A1628" },
  research: { label: "text-green-ink", bg: "#EDF7DC", a: "#B8E05A", b: "#0A1628" },
  articles: { label: "text-gold-ink", bg: "#FCEFC9", a: "#F2C14E", b: "#0A1628" },
  science: { label: "text-ink", bg: "#E6EAF1", a: "#5BB8F5", b: "#0A1628" },
};

/** Abstract brand artwork for items without a cover image. */
export function Art({ r, seed }: { r: Resource; seed: number }) {
  const t = tone[r.type];
  const v = seed % 3;
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="200" fill="#0A1628" />
      {v === 0 && (
        <>
          <circle cx="250" cy="40" r="110" fill={t.a} opacity="0.9" />
          <circle cx="80" cy="190" r="80" fill="#5BB8F5" opacity="0.35" />
          <circle cx="250" cy="40" r="52" fill="#0A1628" opacity="0.25" />
        </>
      )}
      {v === 1 && (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={40 + i * 50} y={150 - (i + 1) * 22} width="34" height={(i + 1) * 22 + 20} rx="6" fill={i === 4 ? t.a : "#1E3A66"} />
          ))}
          <path d="M40 120 C 110 60, 180 110, 280 30" stroke="#F2C14E" strokeWidth="5" fill="none" strokeLinecap="round" />
        </>
      )}
      {v === 2 && (
        <>
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3, 4, 5].map((col) => (
              <circle key={`${row}-${col}`} cx={50 + col * 44} cy={40 + row * 40} r={(row + col) % 4 === 0 ? 13 : 7} fill={(row + col) % 4 === 0 ? t.a : "#1E3A66"} />
            )),
          )}
        </>
      )}
    </svg>
  );
}

function Thumb({ r, seed, large = false }: { r: Resource; seed: number; large?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${large ? "aspect-[16/11] lg:aspect-auto lg:h-full" : "aspect-[16/10]"}`} style={{ background: tone[r.type].bg }}>
      {r.cover ? (
        <div className="absolute inset-0 flex items-center justify-center p-5">
          <Image
            src={r.cover}
            alt=""
            width={720}
            height={1018}
            sizes={large ? "260px" : "150px"}
            className={`h-full w-auto rounded-[6px] shadow-[0_14px_30px_rgba(10,22,40,0.28)] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none ${large ? "max-h-[340px]" : ""}`}
          />
        </div>
      ) : (
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none">
          <Art r={r} seed={seed} />
        </div>
      )}
      {r.comingSoon && (
        <span className="absolute top-3 left-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold tracking-wide text-ink uppercase shadow-sm">Coming soon</span>
      )}
    </div>
  );
}

function action(r: Resource) {
  if (r.comingSoon) return { label: "Coming soon", arrow: "" };
  if (r.whitepaper) return { label: "Download PDF", arrow: "↓" };
  return { label: r.type === "science" ? "Explore the science" : r.type === "research" ? "Read the research" : "Read article", arrow: "→" };
}

/** The whole card is one link or button, so it's easy to hit on a phone. */
function CardShell({ r, className, children }: { r: Resource; className: string; children: React.ReactNode }) {
  if (r.whitepaper && !r.comingSoon) {
    return (
      <button type="button" onClick={() => openWhitepaper(r.whitepaper!)} className={`${className} text-left`} aria-label={`Download ${r.title}`}>
        {children}
      </button>
    );
  }
  if (r.href && !r.comingSoon) {
    return (
      <Link href={r.href} className={`${className} text-ink no-underline`}>
        {children}
      </Link>
    );
  }
  return <div className={className}>{children}</div>;
}

function Card({ r, seed }: { r: Resource; seed: number }) {
  const a = action(r);
  return (
    <li className="flex">
      <CardShell
        r={r}
        className={`group flex w-full flex-col overflow-hidden rounded-2xl border border-rule bg-white transition-shadow duration-300 ${r.comingSoon ? "" : "cursor-pointer hover:shadow-[0_18px_44px_rgba(10,22,40,0.12)]"}`}
      >
        <Thumb r={r} seed={seed} />
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className={`font-mono text-[11px] tracking-[0.12em] uppercase ${tone[r.type].label}`}>
            {typeLabel(r.type)} · {r.topic}
          </p>
          <h3 className="mt-2.5 text-[19px] leading-snug font-bold tracking-[-0.01em]">{r.title}</h3>
          <p className="mt-2 text-[15px] leading-[1.6] text-ink-body">{r.summary}</p>
          <span className={`mt-auto pt-5 text-[15px] font-bold ${r.comingSoon ? "text-ink-muted" : "text-ink group-hover:text-ink-link"}`}>
            {a.label} {a.arrow && <span aria-hidden="true">{a.arrow}</span>}
          </span>
        </div>
      </CardShell>
    </li>
  );
}

function Featured({ r }: { r: Resource }) {
  const a = action(r);
  return (
    <CardShell r={r} className="group mb-10 grid w-full cursor-pointer overflow-hidden rounded-[20px] border border-rule bg-white transition-shadow duration-300 hover:shadow-[0_22px_54px_rgba(10,22,40,0.14)] lg:grid-cols-[1.05fr_1fr]">
      <Thumb r={r} seed={0} large />
      <div className="flex flex-col justify-center p-6 md:p-10">
        <p className="font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">Featured · {typeLabel(r.type)}</p>
        <h2 className="mt-3 text-[clamp(26px,2.8vw,38px)] leading-[1.12] font-extrabold tracking-[-0.02em]">{r.title}</h2>
        <p className="mt-4 text-[17px] leading-[1.65] text-ink-body">{r.summary}</p>
        {r.meta && <p className="mt-3 text-sm text-ink-muted">{r.meta}</p>}
        <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-navy px-5 py-3 text-[15px] font-bold text-white transition-colors group-hover:bg-[#1e3a66]">
          {a.label} <span aria-hidden="true">{a.arrow}</span>
        </span>
      </div>
    </CardShell>
  );
}

const PAGE = 9;

export function ResourceLibrary({ items, initialCategory }: { items: Resource[]; initialCategory: Category }) {
  const [category, setCategory] = useState<Category>(initialCategory);
  const [chosenTopics, setChosenTopics] = useState<Topic[]>([]);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE);

  // Keep the address in step with the filter, so a filtered view can be shared or bookmarked.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (category === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", category);
    window.history.replaceState(null, "", url);
  }, [category]);

  useEffect(() => setLimit(PAGE), [category, chosenTopics, query]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: items.length };
    for (const t of resourceTypes) c[t.key] = items.filter((i) => i.type === t.key).length;
    return c;
  }, [items]);

  const q = query.trim().toLowerCase();
  const filtered = items.filter(
    (r) =>
      (category === "all" || r.type === category) &&
      (chosenTopics.length === 0 || chosenTopics.includes(r.topic)) &&
      (!q || `${r.title} ${r.summary} ${r.topic}`.toLowerCase().includes(q)),
  );
  const showFeatured = category === "all" && chosenTopics.length === 0 && !q;
  const featured = items.find((r) => r.id === featuredResourceId);
  const list = showFeatured && featured ? filtered.filter((r) => r.id !== featured.id) : filtered;
  const available = new Set(items.filter((r) => category === "all" || r.type === category).map((r) => r.topic));

  const toggleTopic = (t: Topic) => setChosenTopics((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  const cats: { key: Category; label: string }[] = [{ key: "all", label: "All resources" }, ...resourceTypes.map((t) => ({ key: t.key as Category, label: t.label }))];

  return (
    <div className="grid gap-10 lg:grid-cols-[230px_1fr] lg:gap-14">
      {/* Filters: a sticky sidebar on desktop, scrollable chips on phones */}
      <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:hidden" role="group" aria-label="Content type">
          {cats.map((c) => (
            <button
              key={c.key}
              type="button"
              aria-pressed={category === c.key}
              onClick={() => setCategory(c.key)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold ${category === c.key ? "border-navy bg-navy text-white" : "border-rule-strong bg-white text-ink"}`}
            >
              {c.label} <span className="opacity-60">{counts[c.key]}</span>
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <p className="mb-3 font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">Content type</p>
          <ul className="m-0 list-none p-0" role="group" aria-label="Content type">
            {cats.map((c) => {
              const on = category === c.key;
              return (
                <li key={c.key}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setCategory(c.key)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[15px] transition-colors ${on ? "bg-navy font-bold text-white" : "font-semibold text-ink hover:bg-[#EEF1F6]"}`}
                  >
                    {c.label}
                    <span className={`font-mono text-xs ${on ? "text-lime" : "text-ink-muted"}`}>{counts[c.key]}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="mt-9 mb-3 font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">Topic</p>
          <ul className="m-0 list-none p-0">
            {topics
              .filter((t) => available.has(t))
              .map((t) => (
                <li key={t}>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-[15px] text-ink hover:bg-[#EEF1F6]">
                    <input type="checkbox" checked={chosenTopics.includes(t)} onChange={() => toggleTopic(t)} className="h-4 w-4 accent-[#0A1628]" />
                    {t}
                  </label>
                </li>
              ))}
          </ul>
          {chosenTopics.length > 0 && (
            <button type="button" onClick={() => setChosenTopics([])} className="mt-3 px-3 text-sm font-semibold text-ink-link underline">
              Clear topics
            </button>
          )}
        </div>
      </aside>

      <div className="min-w-0">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full sm:max-w-[420px]">
            <span className="sr-only">Search resources</span>
            <svg className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-ink-muted" width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M14 14l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, whitepapers, research and science"
              className="w-full rounded-full border border-rule-strong bg-white py-3 pr-4 pl-11 text-[15px] text-ink placeholder:text-ink-muted"
            />
          </label>
          <p className="text-sm text-ink-muted" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "resource" : "resources"}
          </p>
        </div>

        {showFeatured && featured && <Featured r={featured} />}

        {list.length > 0 ? (
          <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 xl:grid-cols-3">
            {list.slice(0, limit).map((r, i) => (
              <Card key={r.id} r={r} seed={i} />
            ))}
          </ul>
        ) : (
          <div className="rounded-2xl border border-dashed border-rule-strong p-10 text-center">
            <p className="text-lg font-bold">Nothing matches yet.</p>
            <p className="mt-1 text-ink-body">Try another word or clear the filters.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setChosenTopics([]);
                setCategory("all");
              }}
              className="mt-4 rounded-lg bg-navy px-5 py-2.5 text-sm font-bold text-white"
            >
              Show all resources
            </button>
          </div>
        )}

        {list.length > limit && (
          <div className="mt-10 text-center">
            <button type="button" onClick={() => setLimit((l) => l + PAGE)} className="rounded-lg border border-navy px-6 py-3 text-[15px] font-bold text-ink hover:bg-navy hover:text-white">
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
