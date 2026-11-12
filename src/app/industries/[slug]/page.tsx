/* eslint-disable @next/next/no-img-element -- static design images */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Crumbs, Eyebrow, wrap } from "@/components/resources/parts";
import { findIndustry, industries } from "@/content/industries";
import { findStory, stories, storyHref } from "@/content/stories";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => industries.map((i) => ({ slug: i.id }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = findIndustry((await params).slug);
  if (!ind) return {};
  return { title: `${ind.name} · Industries`, description: ind.intro, alternates: { canonical: `/industries/${ind.id}` } };
}

const bars = ["border-brand-red", "border-amber", "border-brand-green"];
const answers: [string, string][] = [
  ["Decode job games for the role", routes.gamified],
  ["Corporate Brain working-style and skills view", routes.corporateBrain],
  ["Root cause analytics + Corporate Brain signals", routes.rootCause],
];
// Skills Decode measures in every game, shown as an illustrative report.
const sample: [string, number, string][] = [
  ["Analytical Thinking", 82, "bg-brand-green"],
  ["Detail Orientation", 74, "bg-brand-green"],
  ["Resilience", 58, "bg-amber"],
  ["Learning Agility", 88, "bg-brand-green"],
  ["Integrity", 91, "bg-brand-green"],
];

// Industry to the closest customer story.
const storyFor: Record<string, string> = {
  ites: "redington-turning-the-bench-into-a-growth-engine",
  "fmcg-and-consumer-goods": "megamech-promoting-the-right-people-into-supervision",
  "logistics-and-supply-chain": "bvg-fixing-the-floor-not-the-people",
  "retail-and-e-commerce": "pune-techtrol-gen-z-attrition",
};

export default async function IndustryPage({ params }: Props) {
  const ind = findIndustry((await params).slug);
  if (!ind) notFound();
  const short = ind.short.split(" & ")[0].toLowerCase();
  const story = findStory(storyFor[ind.id] ?? "bvg-fixing-the-floor-not-the-people") ?? stories[0];

  return (
    <>
      <section className="bg-navy text-white">
        <div className={`${wrap} grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_1fr]`}>
          <div>
            <Crumbs items={[{ label: "Home", href: routes.home }, { label: "Industries", href: routes.industries }, { label: ind.name }]} />
            <Eyebrow color="amber">Industry · {ind.name}</Eyebrow>
            <h1 className="text-[clamp(34px,4.4vw,54px)] leading-[1.05] font-bold">People intelligence for {ind.name.toLowerCase()}.</h1>
            <p className="mt-4 max-w-[520px] text-[17px] text-on-navy">{ind.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={enquiryHref("demo")} className="rounded-lg bg-brand-red px-5 py-3 font-semibold text-white no-underline hover:bg-brand-red-dark">
                Talk to us about {short}
              </Link>
              <a href={routes.gamified} className="rounded-lg border border-navy-line px-5 py-3 font-semibold text-white no-underline hover:border-on-navy">
                Preview a Decode game
              </a>
            </div>
          </div>
          <img src={ind.img} alt={ind.alt} className="aspect-[3/2] w-full rounded-2xl object-cover" />
        </div>
      </section>

      <section className="bg-white">
        <div className={`${wrap} py-16 md:py-20`}>
          <Eyebrow>Roles we have studied</Eyebrow>
          <h2 className="mb-8 text-[clamp(26px,3vw,38px)] font-bold text-ink">Built around the real jobs.</h2>
          <ul className="m-0 grid list-none grid-cols-2 gap-4 p-0 md:grid-cols-3 lg:grid-cols-5">
            {ind.roles.map((r, i) => (
              <li key={r} className={`rounded-xl border-t-4 bg-cloud p-4 ${bars[i % 3]}`}>
                <span className="block font-semibold text-ink">{r}</span>
                <span className="mt-1 block text-[13px] text-ink-muted">Fresher · Intermediate · Senior</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className={`${wrap} py-16 md:py-20`}>
          <Eyebrow color="amber">Where we help</Eyebrow>
          <h2 className="mb-8 text-[clamp(26px,3vw,38px)] font-bold">Three problems, three answers.</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {ind.help.map((h, i) => (
              <div key={h} className={`flex flex-col rounded-xl border-t-4 bg-white p-6 text-ink ${bars[i % 3]}`}>
                <h3 className="text-[18px] font-semibold">{h}</h3>
                <a href={answers[i % 3][1]} className="mt-auto block rounded-lg bg-cloud px-3 py-2 pt-2 text-[13.5px] text-ink no-underline hover:underline">
                  <strong>How:</strong> {answers[i % 3][0]}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className={`${wrap} grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2`}>
          <div>
            <Eyebrow>Decode for {short}</Eyebrow>
            <h2 className="text-[clamp(26px,3vw,38px)] leading-tight font-bold text-ink">A day in the job, in 15 to 30 minutes.</h2>
            <p className="mt-3 max-w-[520px] text-ink-body">Candidates play the real job: customers, documents and decisions. You get a score for each skill and what they did in each situation.</p>
            <a href={routes.gamified} className="mt-6 inline-block rounded-lg bg-brand-red px-5 py-3 font-semibold text-white no-underline hover:bg-brand-red-dark">
              Preview the games
            </a>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex justify-between text-[14px]">
              <strong className="text-ink">{ind.roles[0]} · Fresher</strong>
              <span className="text-ink-muted">Sample report</span>
            </div>
            <ul className="m-0 list-none space-y-3 p-0">
              {sample.map(([k, v, c]) => (
                <li key={k} className="grid grid-cols-[140px_1fr_28px] items-center gap-3 text-[13.5px] text-ink">
                  <span>{k}</span>
                  <span className="h-2 overflow-hidden rounded-full bg-cloud">
                    <span className={`block h-full rounded-full ${c}`} style={{ width: `${v}%` }} />
                  </span>
                  <span className="text-right font-semibold">{v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 mb-0 text-[12px] text-ink-muted">Illustrative scores. Skills shown are measured in every Decode game.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${wrap} py-16 md:py-20`}>
          <Eyebrow>Proof</Eyebrow>
          <h2 className="mb-8 text-[clamp(26px,3vw,38px)] font-bold text-ink">Results from our customers.</h2>
          <Link href={storyHref(story)} className="grid overflow-hidden rounded-2xl border border-rule no-underline hover:shadow-lg md:grid-cols-[1fr_1.2fr]">
            <img src="/site/f27e8606.webp" alt="" className="h-full min-h-[200px] w-full object-cover" />
            <span className="block p-7">
              <span className="block text-[12px] font-semibold tracking-[0.1em] text-ink-muted uppercase">
                {story.industry} · {story.client}
              </span>
              <span className="font-display mt-2 block text-[22px] font-semibold text-ink">{story.title}</span>
              {story.stats?.[0] && (
                <span className="mt-3 block">
                  <span className="font-display text-[34px] font-bold text-brand-red">{story.stats[0].value}</span>{" "}
                  <span className="text-ink-body">{story.stats[0].label.toLowerCase()}</span>
                </span>
              )}
              <span className="mt-3 block font-semibold text-ink underline">Read the story →</span>
            </span>
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy text-white">
        <img src="/site/44843417.webp" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className={`${wrap} relative py-16 text-center md:py-20`}>
          <h2 className="text-[clamp(28px,3.4vw,44px)] font-bold">Hire and grow people on evidence.</h2>
          <p className="mx-auto mt-3 max-w-[520px] text-on-navy">Tell us your roles, and we&apos;ll show you what evidence looks like for them.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href={enquiryHref("demo")} className="rounded-lg bg-brand-red px-5 py-3 font-semibold text-white no-underline hover:bg-brand-red-dark">
              Talk to us about {short}
            </Link>
            <Link href={routes.industries} className="rounded-lg border border-navy-line px-5 py-3 font-semibold text-white no-underline">
              See all industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
