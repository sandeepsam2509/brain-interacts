/* eslint-disable @next/next/no-img-element -- static photos */
import type { Metadata } from "next";
import Link from "next/link";
import { stories, storyHref } from "@/content/stories";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";
import { industries, industryHref } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries, People Analytics by Sector",
  description:
    "Brain Interacts researches how work happens in banking, insurance, ITES, retail, FMCG, healthcare, logistics, telecom, education, hospitality and manufacturing, then builds people analytics products for each.",
  alternates: { canonical: routes.industries },
};

const wrap = "mx-auto max-w-[1280px] px-4 md:px-[70px]";
const eyebrow = "text-[12px] font-semibold tracking-[0.1em] uppercase";
const h2 = "font-display text-[clamp(26px,3vw,40px)] leading-[1.12] font-semibold tracking-[-0.02em]";
const btnRed = "inline-flex items-center rounded-lg bg-brand-red px-5 py-3 text-[15px] font-semibold text-white no-underline hover:bg-brand-red-dark";
const btnGhostDark = "inline-flex items-center rounded-lg border border-navy-line px-5 py-3 text-[15px] font-semibold text-white no-underline hover:border-on-navy";


const layers = [
  ["01", "Industry research", "We study each sector's roles, standards, regulations and daily situations.", "border-brand-red"],
  ["02", "Role and skill models", "We define what strong performance looks like at each level of experience.", "border-amber"],
  ["03", "Evidence from behavior", "Job games and assessments show how people actually decide.", "border-brand-green"],
  ["04", "People intelligence", "Evidence becomes archetypes, team fit, gaps and suitability.", "border-brand-red"],
  ["05", "Decisions in action", "Hiring, promotion, staffing and development, tracked over time.", "border-amber"],
];

const stages = [
  ["Intuition", "Decisions on gut feel, tenure and CVs."],
  ["Measurement", "Assessments and scores, kept in separate silos."],
  ["Insight", "Patterns across teams, roles and locations."],
  ["Prediction", "Early signals for attrition, fit and readiness."],
  ["Flourishing", "Each person in the right role, growing under a plan."],
];

const principles = [
  ["Research first", "Every product starts with fieldwork in its industry."],
  ["Built for the role", "Situations, skills and language match the real job."],
  ["Evidence, not labels", "We describe what people did and how it compares, not verdicts."],
  ["Private by design", "Each organization sees only its own people, under India's DPDP Act."],
  ["Growth, not judgement", "Gaps become development plans, and progress is reassessed."],
];
const tint = ["bg-red-tint text-brand-red", "bg-amber-tint text-gold-ink", "bg-green-tint text-green-ink"];
const bar = ["bg-brand-red", "bg-amber", "bg-brand-green"];

export default function IndustriesPage() {
  const named = stories.filter((s) => s.named);
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className={`${wrap} grid items-center gap-12 pt-14 pb-16 md:pt-20 md:pb-20 lg:grid-cols-2`}>
          <div>
            <p className={`${eyebrow} text-amber`}>Industries</p>
            <h1 className="mt-5 text-[clamp(36px,4.4vw,58px)] leading-[1.06] font-semibold tracking-[-0.025em]">From workforce data to people intelligence.</h1>
            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.65] text-on-navy md:text-[17px]">
              We research how work happens in ten industries, then build products and solutions that fit the roles, rules and pressures of each one.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={enquiryHref("demo")} className={btnRed}>
                Talk to us about your industry
              </Link>
              <a href="#industries" className={btnGhostDark}>
                Explore industries
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-2.5" style={{ height: 420 }}>
            <img src="/site/03b5dbaf.webp" alt="" className="col-span-2 row-span-2 h-full w-full rounded-xl object-cover" />
            <img src="/site/1d8f1936.webp" alt="" className="h-full w-full rounded-xl object-cover" />
            <img src="/site/94257643.webp" alt="" className="h-full w-full rounded-xl object-cover" />
            <img src="/site/bb275f24.webp" alt="" className="h-full w-full rounded-xl object-cover" />
            <img src="/site/9c4d0203.webp" alt="" className="h-full w-full rounded-xl object-cover" />
            <div className="flex flex-col justify-end rounded-xl bg-white p-4 text-ink">
              <span className="font-display text-[34px] leading-none font-semibold text-brand-red">10</span>
              <span className="mt-1 text-[14px] font-semibold">industries researched</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-white">
        <div className={`${wrap} grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2`}>
          <div className="relative pb-12">
            <img src="/site/ee5cc825.webp" alt="A worker on a factory floor" className="aspect-[1.32] w-[88%] rounded-xl object-cover" />
            <div className="absolute right-0 bottom-0 w-[270px] rounded-xl border border-rule bg-white p-4 text-[13px] shadow-[0_18px_40px_rgba(10,22,40,0.14)]">
              <div className="flex justify-between">
                <span className="text-ink-muted">CV, interview, tenure</span>
                <span className="font-semibold">What people say</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-cloud">
                <div className="h-1.5 w-[35%] rounded-full bg-rule-strong" />
              </div>
              <div className="mt-4 flex justify-between">
                <span className="text-ink-muted">Job games, behavior</span>
                <span className="font-semibold">How people act</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-cloud">
                <div className="h-1.5 w-[88%] rounded-full bg-brand-green" />
              </div>
            </div>
          </div>
          <div>
            <p className={`${eyebrow} text-brand-red`}>Why it matters</p>
            <h2 className={`${h2} mt-3 text-ink`}>Every industry runs on people. Few can see how their people really work.</h2>
            <p className="mt-5 leading-[1.7] text-ink-body">
              A bank branch, a contact floor and a factory shift each ask for different things. Yet most hiring and promotion still leans on CVs,
              interviews and tenure, which show what people say and have done, not how they act under pressure.
            </p>
            <p className="mt-4 leading-[1.7] text-ink-body">Generic tests miss this because they don&rsquo;t know the job. So we start with research into the industry itself.</p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-cloud">
        <div className={`${wrap} py-16 md:py-24`}>
          <div className="grid items-end gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <p className={`${eyebrow} text-brand-red`}>How we work</p>
              <h2 className={`${h2} mt-3 text-ink`}>Our approach is built across five connected layers.</h2>
            </div>
            <img src="/site/9b9a9a4e.webp" alt="Researchers sorting notes in a workshop" className="hidden h-[150px] w-full rounded-xl object-cover md:block" />
          </div>
          <ol className="m-0 mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-5">
            {layers.map(([n, t, d, b]) => (
              <li key={n} className={`rounded-xl border-t-[3px] bg-white p-5 ${b}`}>
                <span className="font-display text-[22px] font-semibold text-ink">{n}</span>
                <h3 className="mt-3 text-[16px] font-semibold text-ink">{t}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-body">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Model */}
      <section className="bg-navy text-white">
        <div className={`${wrap} py-16 md:py-24`}>
          <p className={`${eyebrow} text-amber`}>People intelligence model</p>
          <h2 className={`${h2} mt-3 max-w-[640px]`}>Five stages, from gut feel to a workplace that flourishes.</h2>
          <div aria-hidden="true" className="mt-10 h-1 rounded-full bg-gradient-to-r from-on-navy-muted via-amber to-brand-green" />
          <ol className="m-0 mt-8 grid list-none items-end gap-4 p-0 md:grid-cols-5">
            {stages.map(([t, d], i) => (
              <li key={t} className="rounded-xl bg-white p-5 text-ink" style={{ marginBottom: `${i * 20}px` }}>
                <p className="m-0 text-[11px] font-semibold tracking-[0.08em] text-ink-muted uppercase">Stage {i + 1}</p>
                <h3 className="mt-1.5 text-[18px] font-semibold">{t}</h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-ink-body">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="scroll-mt-20 bg-white">
        <div className={`${wrap} pt-16 md:pt-24`}>
          <h2 className={`${h2} m-0 text-ink`}>Industries we research and serve.</h2>
          <ul className="m-0 mt-8 grid list-none grid-cols-2 gap-2.5 p-0 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((i) => (
              <li key={i.id}>
                <a href={`#${i.id}`} className="group relative block h-[120px] overflow-hidden rounded-xl">
                  <img src={i.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy/85 to-transparent" />
                  <span className="absolute inset-x-3 bottom-2.5 text-[13px] leading-tight font-semibold text-white">{i.short}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {industries.map((ind, k) => (
          <article key={ind.id} id={ind.id} className={`scroll-mt-20 ${k % 2 ? "bg-cloud" : "bg-white"}`}>
            <div className={`${wrap} grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2`}>
              <div className={`overflow-hidden rounded-xl ${k % 2 ? "lg:order-2" : ""}`}>
                <img src={ind.img} alt={ind.alt} className="h-[260px] w-full object-cover md:h-[300px]" />
                <div className={`h-1 ${bar[k % 3]}`} />
              </div>
              <div>
                <p className={`${eyebrow} m-0 text-[11px] text-ink-muted`}>Industry {String(k + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-[clamp(24px,2.4vw,30px)] font-semibold text-ink">{ind.name}</h3>
                <p className="mt-3 leading-[1.65] text-ink-body">{ind.intro}</p>
                <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">
                  {ind.roles.map((r) => (
                    <li key={r} className="rounded-full border border-rule-strong bg-white px-3 py-1 text-[12.5px] text-ink-body">
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 mb-2 text-[14px] font-semibold text-ink">Where we help</p>
                <ul className="m-0 list-none space-y-1.5 p-0">
                  {ind.help.map((h) => (
                    <li key={h} className="flex gap-2.5 text-[14.5px] text-ink-body">
                      <span aria-hidden="true" className="text-green-ink">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link href={industryHref(ind.id)} className="mt-5 inline-block font-semibold text-ink underline">
                  More on {ind.short.toLowerCase()} →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Stories */}
      <section className="bg-navy text-white">
        <div className={`${wrap} py-16 md:py-24`}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className={`${h2} m-0`}>Transforming workplaces with evidence.</h2>
            <Link href={routes.stories} className="font-semibold text-amber">
              All customer stories →
            </Link>
          </div>
          <ul className="m-0 mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {named.map((s, i) => (
              <li key={s.slug}>
                <Link href={storyHref(s)} className="flex h-full flex-col rounded-xl bg-white p-5 text-ink no-underline hover:shadow-xl">
                  <div className="flex h-10 items-center">
                    {s.logo ? <img src={s.logo} alt={`${s.client} logo`} className="h-full w-auto max-w-[140px] object-contain" /> : <span className="font-semibold">{s.client}</span>}
                  </div>
                  <p className={`${eyebrow} mt-4 mb-0 text-[11px] ${["text-brand-red", "text-gold-ink", "text-green-ink"][i % 3]}`}>
                    {s.industry} · {s.client}
                  </p>
                  <h3 className="mt-1.5 text-[16px] leading-[1.3] font-semibold">{s.title}</h3>
                  {s.stats?.[0] && (
                    <p className="m-0 mt-auto pt-5">
                      <span className="block font-display text-[32px] leading-none font-semibold">{s.stats[0].value}</span>
                      <span className="mt-1 block text-[13px] text-ink-muted">{s.stats[0].label}</span>
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ambition */}
      <section className="bg-white">
        <div className={`${wrap} grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2`}>
          <div>
            <p className={`${eyebrow} text-brand-red`}>Our ambition</p>
            <p className="mt-4 font-display text-[clamp(24px,2.6vw,34px)] leading-[1.25] font-semibold text-ink">
              Help every workplace understand its people well enough that each person can do their best work, and keep growing.
            </p>
          </div>
          <img src="/site/fc928bb2.webp" alt="A teacher with students in a classroom" className="h-[260px] w-full rounded-xl object-cover" />
        </div>
      </section>

      {/* Principles */}
      <section className="bg-cloud">
        <div className={`${wrap} py-16 md:py-24`}>
          <p className={`${eyebrow} text-brand-red`}>What guides us</p>
          <h2 className={`${h2} mt-3 text-ink`}>Five principles behind everything we build.</h2>
          <ul className="m-0 mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map(([t, d], i) => (
              <li key={t} className="rounded-xl bg-white p-5">
                <span className={`grid h-9 w-9 place-items-center rounded-full text-[13px] font-semibold ${tint[i % 3]}`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-[16px] font-semibold text-ink">{t}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-body">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy text-white">
        <img src="/site/42f05e52.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className={`${wrap} relative py-20 text-center md:py-28`}>
          <h2 className="m-0 text-[clamp(28px,3.6vw,46px)] leading-[1.1] font-semibold tracking-[-0.02em]">Put people intelligence at the core.</h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] text-on-navy-soft">Tell us your industry and teams, and we&rsquo;ll show you what evidence looks like for your roles.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={enquiryHref("demo")} className={btnRed}>
              Reach out to us
            </Link>
            <a href={routes.gamified} className={btnGhostDark}>
              Explore Decode
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
