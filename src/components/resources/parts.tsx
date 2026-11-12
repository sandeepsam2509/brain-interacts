/* eslint-disable @next/next/no-img-element -- static design images */
import Image from "next/image";
import Link from "next/link";
import type { Resource } from "@/content/resources";
import type { Whitepaper } from "@/content/whitepapers";
import { SignupForm } from "@/components/SignupForm";
import { routes } from "@/lib/site";

export const wrap = "mx-auto max-w-[1280px] px-4 md:px-8";

export function Eyebrow({ children, color = "red" }: { children: React.ReactNode; color?: "red" | "amber" | "green" }) {
  const c = { red: "text-brand-red", amber: "text-gold-ink", green: "text-green-ink" }[color];
  return <p className={`mb-2 text-[12px] font-semibold tracking-[0.12em] uppercase ${c}`}>{children}</p>;
}

export function Crumbs({ items, dark = true }: { items: { label: string; href?: string }[]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`mb-4 text-[13px] ${dark ? "text-on-navy-soft" : "text-ink-muted"}`}>
      {items.map((it, i) => (
        <span key={it.label}>
          {i > 0 && <span className="mx-1.5">/</span>}
          {it.href ? (
            <Link href={it.href} className={`underline ${dark ? "text-on-navy-soft hover:text-white" : "text-ink-muted hover:text-ink"}`}>
              {it.label}
            </Link>
          ) : (
            <span className={dark ? "text-white" : "text-ink"}>{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export const wpHref = (slug: string) => `/resources/whitepapers/${slug}`;
export const researchHref = "/resources/research/the-behavioral-enterprise";

/** A whitepaper cover that links to its landing page. */
export function PaperCover({ paper }: { paper: Whitepaper & { cover: string } }) {
  const href = paper.kind === "research" ? researchHref : wpHref(paper.slug);
  return (
    <Link href={href} className="group block no-underline">
      <span className="block overflow-hidden rounded-md bg-white shadow-[0_10px_28px_rgba(10,22,40,0.16)] ring-1 ring-rule transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none">
        <Image src={paper.cover} alt={`Cover of ${paper.title}`} width={360} height={509} className="h-auto w-full" />
      </span>
      <span className="mt-3 block text-[13.5px] leading-snug font-semibold text-ink group-hover:underline">{paper.title}</span>
    </Link>
  );
}

const fallback = ["/site/793df1a3.webp", "/site/44843417.webp", "/site/7e00bc9e.webp", "/site/ee5cc825.webp", "/site/9c4d0203.webp", "/site/94257643.webp"];

export function ArticleCard({ item, i = 0 }: { item: Resource; i?: number }) {
  return (
    <Link href={item.href ?? routes.resources} className="group flex flex-col overflow-hidden rounded-xl border border-rule bg-white no-underline transition-shadow hover:shadow-[0_14px_32px_rgba(10,22,40,0.1)]">
      <img src={item.cover ?? fallback[i % fallback.length]} alt="" loading="lazy" className="aspect-[16/8] w-full object-cover" />
      <span className="flex flex-1 flex-col p-5">
        <span className="flex items-center justify-between gap-3 text-[12px]">
          <span className="rounded-full bg-cloud px-2.5 py-1 font-semibold text-ink">{item.topic}</span>
          {item.meta && <span className="text-ink-muted">{item.meta.replace(/^Article \d+ · /, "")}</span>}
        </span>
        <span className="font-display mt-3 block text-[17px] leading-snug font-semibold text-ink">{item.title}</span>
        <span className="mt-2 line-clamp-2 block text-[14px] text-ink-body">{item.summary}</span>
        <span className="mt-auto pt-4 text-[14px] font-semibold text-ink underline">Read article →</span>
      </span>
    </Link>
  );
}

export function NewsletterBand({ id }: { id: string }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <img src="/site/fc928bb2.webp" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className={`${wrap} relative grid items-center gap-8 py-14 md:py-20 lg:grid-cols-2`}>
        <div>
          <h2 className="text-[clamp(28px,3.4vw,44px)] leading-[1.08] font-bold">New research, once a month.</h2>
          <p className="mt-3 text-on-navy">Articles, whitepapers and research in your inbox. No spam.</p>
        </div>
        <div className="lg:justify-self-end">
          <SignupForm tone="dark" id={id} button="Subscribe" />
        </div>
      </div>
    </section>
  );
}
