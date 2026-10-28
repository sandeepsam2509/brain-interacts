"use client";

import { useState } from "react";

export type ArticleSummary = { category: string; title: string; summary: string; date?: string };

/** Article list with category filter buttons. */
export function ArticleList({ categories, articles }: { categories: string[]; articles: ArticleSummary[] }) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      <div role="group" aria-label="Filter articles by topic" className="mb-8 flex flex-wrap gap-2">
        {["All", ...categories].map((c) => {
          const on = c === active;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                on ? "border-navy bg-navy text-white" : "border-rule-strong bg-white text-ink hover:border-ink"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>
      <ul className="m-0 list-none border-t border-rule p-0">
        {shown.map((a) => (
          <li key={a.title} className="grid gap-2 border-b border-rule py-6 md:grid-cols-[180px_1fr_140px] md:gap-6">
            <span className="font-mono text-xs text-ink-link uppercase">{a.category}</span>
            <div>
              <h3 className="text-xl font-bold">{a.title}</h3>
              <p className="mt-1.5 leading-[1.7] text-ink-body">{a.summary}</p>
            </div>
            <span className="text-sm text-ink-muted md:text-right">{a.date ?? "Coming soon"}</span>
          </li>
        ))}
        {shown.length === 0 && <li className="py-6 text-ink-muted">No articles in this topic yet.</li>}
      </ul>
    </>
  );
}
