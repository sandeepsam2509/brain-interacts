/* eslint-disable @next/next/no-img-element -- static design images */
import type { Metadata } from "next";
import Link from "next/link";
import { researchHref, wpHref } from "@/components/resources/parts";
import { Band, Checks, Closing, Head, Hero, accents } from "@/components/v3";
import { findStory, storyHref } from "@/content/stories";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "For CXOs",
  description: "Organization-wide alignment, succession risk and where to put your leaders, from one Leadership view in Corporate Brain.",
  alternates: { canonical: routes.ceo },
};

const questions = [
  ["“Are our teams built for this year's goal?”", "See the mix of working styles in every team against the goal you set: growth, customer, operational and more."],
  ["“Who are our key people, and who is next?”", "Key-person and succession insights show where one exit would hurt, and who is ready to step up."],
  ["“Where should our leaders go?”", "Match leaders to the projects and teams that need their strengths most."],
];

const proof = ["megamech-promoting-the-right-people-into-supervision", "redington-turning-the-bench-into-a-growth-engine", "bvg-fixing-the-floor-not-the-people"];

const path = [
  { kind: "Whitepaper", title: "The ROI of Psychological Safety", meta: "Culture", href: wpHref("the-roi-of-psychological-safety") },
  { kind: "Whitepaper", title: "The Sunk Cost Trap", meta: "Teams & performance", href: wpHref("the-sunk-cost-trap") },
  { kind: "Whitepaper", title: "Culture Lasts Three Weeks", meta: "Culture", href: wpHref("culture-lasts-three-weeks") },
  { kind: "Research", title: "The Behavioral Enterprise", meta: "104 pages", href: researchHref },
];

export default function ForCxosPage() {
  return (
    <>
      <Hero
        crumbs={[{ label: "Home", href: routes.home }, { label: "Solutions" }, { label: "For CXOs" }]}
        eyebrow="For CXOs"
        title="See the whole company, not just the org chart."
        lead="Organization-wide alignment, succession risk and where to put your leaders, from one Leadership view."
        actions={[
          { label: "Get a demo", href: enquiryHref("demo") },
          { label: "Read the CXO reading path", href: "#reading-path" },
        ]}
        side={<img src="/site/8fc9f461.webp" alt="Executives in a boardroom" className="aspect-[3/2] w-full rounded-2xl object-cover" />}
      />

      <Band>
        <Head eyebrow="Questions you can answer" title="Three questions every leadership team asks." />
        <div className="grid gap-4 md:grid-cols-3">
          {questions.map(([q, a], i) => (
            <div key={q} className={`rounded-xl border-t-4 bg-cloud p-6 ${accents.bar[i]}`}>
              <h3 className="font-display text-[19px] leading-snug font-semibold text-ink">{q}</h3>
              <p className="mt-3 text-[14.5px] text-ink-body">{a}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band tone="navy">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Head dark eyebrow="Leadership view" title="One screen for the whole company." />
            <div className="[&_li]:text-on-navy">
              <Checks items={["Organization-wide view of working styles and skills", "Team mix against six company goals", "Key-person and succession insights", "Hiring pipeline and company reports"]} />
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink">
            <div className="flex justify-between text-[14px]">
              <strong>Leadership view</strong>
              <span className="text-ink-muted">Example</span>
            </div>
            <dl className="m-0 mt-4 grid grid-cols-3 gap-3">
              {[
                ["7 / 12", "Teams aligned to goal", "text-brand-red"],
                ["4", "Key-person risks", "text-gold-ink"],
                ["9", "Ready successors", "text-green-ink"],
              ].map(([v, l, c]) => (
                <div key={l} className="rounded-lg bg-cloud p-3">
                  <dt className={`font-display text-[24px] font-bold ${c}`}>{v}</dt>
                  <dd className="m-0 text-[12px] text-ink-muted">{l}</dd>
                </div>
              ))}
            </dl>
            <ul className="m-0 mt-4 list-none space-y-2.5 p-0">
              {[
                ["Sales", 72, "bg-brand-green"],
                ["Operations", 54, "bg-amber"],
                ["Product", 81, "bg-brand-green"],
                ["Finance", 38, "bg-brand-red"],
              ].map(([t, v, c]) => (
                <li key={t as string} className="grid grid-cols-[90px_1fr] items-center gap-3 text-[13px]">
                  <span>{t}</span>
                  <span className="h-2 rounded-full bg-cloud">
                    <span className={`block h-full rounded-full ${c}`} style={{ width: `${v}%` }} />
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 mb-0 text-[12px] text-ink-muted">Illustrative figures.</p>
          </div>
        </div>
      </Band>

      <Band tone="cloud">
        <Head eyebrow="Proof" title="What leadership teams have done with it." />
        <div className="grid gap-4 md:grid-cols-3">
          {proof.map((slug, i) => {
            const s = findStory(slug);
            if (!s?.stats) return null;
            return (
              <Link key={slug} href={storyHref(s)} className="flex flex-col rounded-xl bg-white p-6 no-underline hover:shadow-lg">
                <span className="text-[11.5px] font-semibold tracking-[0.1em] text-ink-muted uppercase">{s.industry}</span>
                <span className="mt-2 font-semibold text-ink">{s.title}</span>
                <span className={`font-display mt-4 text-[34px] leading-none font-bold ${accents.text[i]}`}>{s.stats[0].value}</span>
                <span className="mt-1 text-[13px] text-ink-body">{s.stats[0].label}</span>
                <span className="mt-auto pt-4 text-[14px] font-semibold text-ink underline">Read the story →</span>
              </Link>
            );
          })}
        </div>
      </Band>

      <Band id="reading-path">
        <Head eyebrow="Reading path for CXOs" title="Four reads, one evening." />
        <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-4">
          {path.map((p, i) => (
            <li key={p.title}>
              <Link href={p.href} className={`flex h-full flex-col rounded-xl border-t-4 bg-cloud p-5 no-underline hover:shadow-md ${accents.bar[i % 3]}`}>
                <span className="text-[11.5px] font-semibold tracking-[0.1em] text-ink-muted uppercase">
                  {i + 1} · {p.kind}
                </span>
                <span className="font-display mt-2 text-[17px] font-semibold text-ink">{p.title}</span>
                <span className="mt-auto pt-3 text-[13px] text-ink-muted">{p.meta}</span>
              </Link>
            </li>
          ))}
        </ol>
      </Band>

      <Closing
        title="Build teams on evidence, not instinct."
        text="See Corporate Brain on your own org structure in a live walkthrough."
        image="/site/8fc9f461.webp"
        actions={[
          { label: "Get a demo", href: enquiryHref("demo") },
          { label: "See pricing", href: routes.pricing },
        ]}
      />
    </>
  );
}
