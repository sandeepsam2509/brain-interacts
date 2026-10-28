import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import type { Hero } from "@/lib/types";
import { Motif } from "./BrandMark";
import { DashboardPreview } from "./DashboardPreview";
import { Hero3D } from "./Hero3D";
import { JsonLd } from "./JsonLd";
import { PatternPreview } from "./PatternPreview";
import { Actions, Container, Eyebrow } from "./ui";

export function PageHero({ hero, path }: { hero: Hero; path: string }) {
  const { crumbs, eyebrow, title, lead, actions, visual, tint } = hero;
  const hasVisual = Boolean(visual);
  const visualFirst = visual === "pattern";
  const isRender = typeof visual === "object" && visual.render;

  return (
    <section className="relative overflow-hidden border-b border-line/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_0%,rgba(59,181,232,0.12),transparent_70%),radial-gradient(40%_50%_at_0%_100%,rgba(154,215,81,0.08),transparent_70%)]"
      />
      {!isRender && <Motif className="-right-24 top-1/2 hidden h-[360px] w-[540px] -translate-y-1/2 xl:block" />}
      <Container className="relative py-16 md:py-24">
        {crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-10 text-small text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-mist">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-secondary">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        )}
        <div className={hasVisual ? "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16" : ""}>
          <div className={`${hasVisual ? "" : "max-w-4xl"} ${visualFirst ? "lg:order-2" : ""}`}>
            <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
            <h1 className="text-balance text-h1-sm font-semibold leading-[1.08] tracking-tight md:text-h1-md lg:text-h1">{title}</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lead text-secondary">{lead}</p>
            <Actions actions={actions} className="mt-9" />
          </div>
          {hasVisual && (
            <div className={`flex justify-center lg:justify-end ${visualFirst ? "lg:order-1 lg:justify-start" : ""}`}>
              {visual === "dashboard" ? (
                <DashboardPreview />
              ) : visual === "pattern" ? (
                <PatternPreview />
              ) : isRender ? (
                <Hero3D image={visual} tint={tint} />
              ) : visual ? (
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  width={visual.width}
                  height={visual.height}
                  priority
                  className="w-full rounded-2xl border border-line shadow-[0_30px_80px_-30px_rgba(59,181,232,0.35)]"
                />
              ) : null}
            </div>
          )}
        </div>
      </Container>
      {crumbs.length > 0 && (
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: `${site.url}${c.href ?? path}`,
          })),
        }}
      />
      )}
    </section>
  );
}
