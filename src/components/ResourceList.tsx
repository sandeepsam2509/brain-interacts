"use client";

import Link from "next/link";
import { useState } from "react";
import { articles, categories, type Article } from "@/content/articles";
import { ArrowIcon } from "./ui";

const accentFor: Record<Article["category"], string> = {
  Guides: "text-green",
  Research: "text-gold",
  "Case studies": "text-blue",
};

function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className={`group flex h-full flex-col rounded-2xl border border-line bg-navy-800/50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-secondary/50 hover:bg-navy-800 md:p-8 ${
        featured ? "md:p-10" : ""
      }`}
    >
      <p className={`text-eyebrow font-medium uppercase tracking-[0.14em] ${accentFor[article.category]}`}>
        {featured ? `Featured · ${article.category}` : article.category}
      </p>
      <h3 className={`mt-4 font-semibold leading-snug ${featured ? "text-h3-sm md:text-h2-sm" : "text-h4 md:text-h3-sm"}`}>
        {article.title}
      </h3>
      <p className="mt-3 text-secondary">{article.excerpt}</p>
      <span className="mt-auto flex items-center justify-between pt-8 text-small text-muted">
        {article.readTime}
        <ArrowIcon className="text-mist transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function ResourceList() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [featured, ...rest] = articles;
  const shown = active === "All" ? rest : articles.filter((a) => a.category === active);

  return (
    <>
      {active === "All" && (
        <div className="mb-16">
          <ArticleCard article={featured} featured />
        </div>
      )}
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-h2-sm font-semibold tracking-tight md:text-h2">The latest thinking</h2>
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-small font-medium transition-colors ${
                active === c ? "border-green bg-green text-navy-900" : "border-line text-secondary hover:border-secondary/60 hover:text-mist"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      {shown.length ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-line p-10 text-center">
          <p className="font-semibold">No resources in this category yet.</p>
          <p className="mt-2 text-secondary">
            Verified case studies will be published here. Explore Guides or Research in the meantime.
          </p>
        </div>
      )}
    </>
  );
}
