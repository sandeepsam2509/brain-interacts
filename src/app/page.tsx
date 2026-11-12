/* eslint-disable @next/next/no-img-element -- static photos */
import type { Metadata } from "next";
import Link from "next/link";
import { stories, storyHref } from "@/content/stories";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Brain Interacts, People Analytics for Every Industry" },
  description:
    "Brain Interacts is a people analytics company. We research how work happens in each industry and build products, like Corporate Brain and Decode, that help workplaces flourish.",
  alternates: { canonical: "/" },
};

const wrap = "mx-auto max-w-[1280px] px-4 md:px-[70px]";
const btnRed = "inline-flex items-center rounded-lg bg-brand-red px-5 py-3 text-[15px] font-semibold text-white no-underline hover:bg-brand-red-dark";
const btnGhostDark = "inline-flex items-center rounded-lg border border-navy-line px-5 py-3 text-[15px] font-semibold text-white no-underline hover:border-on-navy";
const eyebrow = "text-[12px] font-semibold tracking-[0.1em] uppercase";
const h2 = "font-display text-[clamp(26px,3vw,40px)] leading-[1.12] font-semibold tracking-[-0.02em]";

const industryChips = [
  "Banking & Financial Services",
  "Insurance",
  "ITES",
  "Retail & E-commerce",
  "FMCG & Consumer Goods",
  "Healthcare & Pharma",
  "Logistics & Supply Chain",
  "Telecommunication",
  "Education",
  "Hospitality & Travel",
];

const people = [
  { img: "/site/8fc9f461.webp", alt: "Executives in a boardroom", title: "CXOs", text: "Organization-wide alignment, succession risk and where to deploy leaders.", link: "For CXOs", href: routes.ceo, bar: "bg-brand-red" },
  { img: "/site/86bfbc2c.webp", alt: "A manager coaching a team member", title: "Managers", text: "Assign work by strengths, spot friction early and coach with evidence.", link: "For managers", href: routes.corporateBrain, bar: "bg-amber" },
  { img: "/site/793df1a3.webp", alt: "Colleagues working together at a desk", title: "Employees", text: "Understand your working style and where you can grow.", link: "Take the free assessment", href: routes.snapshot, bar: "bg-brand-green" },
];

export default function HomePage() {
  const featured = ["bvg-fixing-the-floor-not-the-people", "megamech-promoting-the-right-people-into-supervision", "redington-turning-the-bench-into-a-growth-engine"]
    .map((slug) => stories.find((s) => s.slug === slug))
    .filter((s) => s !== undefined);
  const storyImg = ["/site/f27e8606.webp", "/site/ee5cc825.webp", "/site/7e00bc9e.webp"];
  const storyTone = ["text-brand-red", "text-gold-ink", "text-green-ink"];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className={`${wrap} grid items-center gap-12 pt-14 pb-16 md:pt-20 md:pb-24 lg:grid-cols-[1.05fr_1fr]`}>
          <div>
            <p className={`${eyebrow} text-amber`}>People analytics, built on research</p>
            <h1 className="mt-5 text-[clamp(36px,4.4vw,60px)] leading-[1.06] font-semibold tracking-[-0.025em]">People analytics that help workplaces flourish.</h1>
            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.65] text-on-navy md:text-[17px]">
              We research how work really happens in banking, insurance, retail, healthcare and more, then build products like Corporate Brain and Decode
              for the people doing it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={routes.demo} className={btnRed}>
                Get a demo
              </Link>
              <Link href={enquiryHref("technical-assessment")} className={btnGhostDark}>
                Free technical assessment
              </Link>
            </div>
            <p className="mt-6 text-[13px] text-on-navy-muted">Built on the Big Five, the most widely researched model of working style.</p>
          </div>
          <div className="relative">
            <img src="/site/631ec024.webp" alt="A team meeting with a colleague presenting" className="aspect-[1.16] w-full rounded-2xl object-cover" />
            <span className="absolute -top-3 right-3 rounded-lg bg-amber px-3 py-1.5 text-[13px] font-semibold text-navy md:-right-3">Leadership · Managers · Employees</span>
            <div className="absolute -bottom-6 left-3 w-[250px] rounded-xl bg-white p-4 text-ink shadow-[0_20px_40px_rgba(10,22,40,0.3)] md:-left-8">
              <p className="m-0 text-[11px] font-semibold tracking-[0.08em] text-ink-muted uppercase">Brain suggests</p>
              <p className="m-0 mt-1.5 text-[15px] font-semibold">Plan Q1 product roadmap</p>
              <div className="mt-3 flex items-center justify-between text-[13px]">
                <span>Integrator archetype</span>
                <span className="rounded-full bg-green-tint px-2 py-0.5 text-[12px] font-semibold text-green-ink">92% fit</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-rule">
                <div className="h-1.5 w-[92%] rounded-full bg-brand-green" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience strip */}
      <section className="border-b border-rule bg-cloud">
        <div className={`${wrap} grid gap-5 py-7 sm:grid-cols-3`}>
          {[
            ["bg-brand-red", "Leadership", "A 360° view of the whole company"],
            ["bg-amber", "Managers", "Team analytics for every team"],
            ["bg-brand-green", "Employees", "Relief: the right work, the right support"],
          ].map(([dot, t, d]) => (
            <div key={t} className="flex gap-3">
              <span aria-hidden="true" className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dot}`} />
              <div>
                <p className="m-0 font-semibold text-ink">{t}</p>
                <p className="m-0 text-[14px] text-ink-body">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white">
        <div className={`${wrap} py-16 md:py-24`}>
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h2 className={`${h2} m-0 text-ink`}>We study how each industry works, then build for its people.</h2>
            <p className="m-0 leading-[1.65] text-ink-body">
              Every industry hires, trains and leads differently. Our research teams study its roles, standards and daily situations so the products fit
              real work.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-[2fr_1fr_1fr]">
            {[
              ["/site/ee5cc825.webp", "Worker operating machinery on a factory floor", "Manufacturing & FMCG", "fmcg-and-consumer-goods"],
              ["/site/7e00bc9e.webp", "Professionals meeting in a modern office", "ITES", "ites"],
              ["/site/8fc9f461.webp", "Leadership team around a boardroom table", "Banking & Insurance", "banking-and-financial-services"],
            ].map(([src, alt, label, id]) => (
              <Link key={label} href={`/industries/${id}`} className="group relative block overflow-hidden rounded-xl">
                <img src={src} alt={alt} className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-[270px]" />
                <span className="absolute bottom-3 left-3 rounded-md bg-white px-3 py-1.5 text-[13px] font-semibold text-ink">{label}</span>
              </Link>
            ))}
          </div>
          <ul className="m-0 mt-6 flex list-none flex-wrap items-center gap-2.5 p-0">
            {industryChips.map((c) => (
              <li key={c} className="rounded-full border border-rule-strong px-3.5 py-1.5 text-[13px] text-ink-body">
                {c}
              </li>
            ))}
            <li>
              <Link href={routes.industries} className="text-[13px] font-semibold text-brand-red">
                See how we help each industry →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Products */}
      <section className="bg-navy text-white">
        <div className={`${wrap} py-16 md:py-24`}>
          <h2 className={`${h2} m-0`}>Products built from our research.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <a href={routes.corporateBrain} className="group flex flex-col overflow-hidden rounded-xl bg-white text-ink no-underline">
              <div aria-hidden="true" className="h-[150px] bg-cloud p-4">
                <div className="grid grid-cols-3 gap-2">
                  {["border-brand-red", "border-amber", "border-brand-green"].map((b) => (
                    <div key={b} className={`h-9 rounded-md border-t-[3px] bg-white ${b}`} />
                  ))}
                </div>
                <div className="mt-4 flex items-end gap-2">
                  {[24, 34, 22, 44, 28].map((h, i) => (
                    <div key={i} className={`flex-1 rounded-sm ${i === 3 ? "bg-navy" : "bg-rule-strong"}`} style={{ height: h }} />
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className={`${eyebrow} m-0 text-[11px] text-brand-red`}>Flagship</p>
                <h3 className="mt-3 flex h-8 items-center font-display">
                  <img src="/brand/corporate-brain-mark.svg" alt="" className="h-8 w-auto" />
                  <span className="ml-2 text-[22px] font-semibold">Corporate Brain</span>
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-body">People analytics and task intelligence for leadership, managers and employees.</p>
                <span className="mt-auto inline-block pt-3 font-semibold underline">Explore →</span>
              </div>
            </a>
            <a href={routes.gamified} className="group flex flex-col overflow-hidden rounded-xl bg-white text-ink no-underline">
              <div aria-hidden="true" className="grid h-[150px] grid-cols-4 grid-rows-2 gap-2 bg-amber-tint p-4">
                <div className="rounded-md bg-amber" />
                <div className="rounded-md bg-white" />
                <div className="rounded-md bg-white" />
                <div className="rounded-full bg-brand-red" />
                <div className="rounded-md bg-white" />
                <div className="rounded-md bg-navy" />
                <div className="rounded-full bg-brand-green" />
                <div className="rounded-md bg-white" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className={`${eyebrow} m-0 text-[11px] text-gold-ink`}>Game-based assessments</p>
                <h3 className="mt-3 flex h-8 items-center gap-2">
                  <img src="/brand/decode-wordmark-navy.svg" alt="Decode" className="h-7 w-auto" />
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-body">Short job games for 85 roles across 14 industries.</p>
                <span className="mt-auto inline-block pt-3 font-semibold underline">Explore →</span>
              </div>
            </a>
            <Link href={routes.finCheck} className="group flex flex-col overflow-hidden rounded-xl bg-white text-ink no-underline">
              <div aria-hidden="true" className="h-[150px] bg-green-tint p-4">
                <div className="flex justify-between text-[12px] font-semibold">
                  <span>Behavioral risk</span>
                  <span className="text-green-ink">Low</span>
                </div>
                <div className="mt-2 flex h-1.5 overflow-hidden rounded-full">
                  <span className="w-[33%] bg-brand-green" />
                  <span className="w-[33%] bg-amber" />
                  <span className="flex-1 bg-brand-red" />
                </div>
                <p className="m-0 mt-3 text-[12px] text-ink-muted">Applicant consistency · 0.86</p>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className={`${eyebrow} m-0 text-[11px] text-green-ink`}>For lenders · Coming soon</p>
                <h3 className="mt-3 flex h-8 items-center text-[22px] font-semibold">FinCheck</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-body">Behavioral risk intelligence for banks and NBFCs.</p>
                <span className="mt-auto inline-block pt-3 font-semibold underline">Explore →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brain suggests */}
      <section className="bg-white">
        <div className={`${wrap} grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2`}>
          <div className="relative">
            <img src="/site/86bfbc2c.webp" alt="A manager coaching a colleague at a laptop" className="aspect-[1.35] w-full rounded-xl object-cover" />
            <div className="absolute right-3 -bottom-10 w-[240px] rounded-xl border border-rule bg-white p-4 shadow-[0_18px_40px_rgba(10,22,40,0.16)] md:right-auto md:left-[38%]">
              <p className="m-0 font-semibold">Ship release checklist</p>
              <div className="mt-2 flex justify-between text-[13px]">
                <span>Ananya Iyer · Executor</span>
                <span className="font-semibold text-green-ink">94%</span>
              </div>
              <div className="mt-1 flex justify-between text-[12px] text-ink-muted">
                <span>Next best · Priya Sharma</span>
                <span>71%</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[13px] font-semibold">
                <span className="rounded-md bg-navy py-2 text-center text-white">Assign</span>
                <span className="rounded-md border border-rule-strong py-2 text-center">Why?</span>
              </div>
              <p className="m-0 mt-2 text-[11px] text-ink-muted">Sample names, for illustration.</p>
            </div>
          </div>
          <div className="pt-8 lg:pt-0">
            <p className={`${eyebrow} text-brand-red`}>Brain suggests</p>
            <h2 className={`${h2} mt-3 text-ink`}>Know who people are. Give them work that fits.</h2>
            <p className="mt-4 leading-[1.65] text-ink-body">Working style sits beside the task board, so managers assign work by strengths, not just availability.</p>
            <ol className="m-0 mt-7 list-none space-y-4 p-0">
              {[
                ["bg-red-tint text-brand-red", "Profile", "A short assessment gives a primary and secondary archetype."],
                ["bg-amber-tint text-gold-ink", "Match", "Ranks the best and second-best person for each task, with reasons."],
                ["bg-green-tint text-green-ink", "Decide", "A manager reviews and assigns. Nothing is automatic."],
              ].map(([c, t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[14px] font-semibold ${c}`}>{i + 1}</span>
                  <div>
                    <p className="m-0 font-semibold text-ink">{t}</p>
                    <p className="m-0 text-[14.5px] text-ink-body">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Work and people */}
      <section className="bg-cloud">
        <div className={`${wrap} py-16 md:py-24`}>
          <h2 className={`${h2} m-0 text-ink`}>Work and people decisions, in one place.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6">
              <div className="h-[92px]">
              <div aria-hidden="true" className="grid grid-cols-3 gap-2 text-center text-[11px] font-semibold">
                <span className="rounded-md bg-green-tint py-1.5 text-green-ink">Discovery</span>
                <span className="rounded-md bg-amber-tint py-1.5 text-gold-ink">Build</span>
                <span className="rounded-md bg-cloud py-1.5 text-ink-muted">Launch</span>
              </div>
              <p className="m-0 mt-2 text-[12px] text-ink-muted">Suggested lead: Integrator · 92% fit</p>
              </div>
              <h3 className="mt-4 text-[18px] font-semibold">Projects</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-body">Plan milestones and timelines, and get a best-fit lead and team suggested.</p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <div className="h-[92px]">
              <div aria-hidden="true" className="flex items-center gap-2 text-[11px] font-semibold">
                <span className="rounded-md bg-cloud px-2 py-1.5">Done</span>→<span className="rounded-md bg-amber-tint px-2 py-1.5 text-gold-ink">In review</span>→
                <span className="rounded-md bg-green-tint px-2 py-1.5 text-green-ink">Approved</span>
              </div>
              <p className="m-0 mt-2 text-[12px] text-ink-muted">Reviewer sign-off required</p>
              </div>
              <h3 className="mt-4 text-[18px] font-semibold">Tasks with review</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-body">Nothing counts as done until it is reviewed and approved.</p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <div className="h-[92px]">
              <div aria-hidden="true" className="space-y-1.5 text-[11px] font-semibold">
                <div className="w-full rounded-sm bg-navy px-2 py-0.5 text-white">24 Applied</div>
                <div className="w-[70%] rounded-sm bg-amber px-2 py-0.5 text-navy">11 Assessed</div>
                <div className="w-[45%] rounded-sm bg-red-tint px-2 py-0.5 text-brand-red">5 Interview</div>
                <div className="w-[28%] rounded-sm bg-brand-green px-2 py-0.5 text-white">1 Hired</div>
              </div>
              </div>
              <h3 className="mt-4 text-[18px] font-semibold">Hiring</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-body">Link openings to projects, send assessments and track every candidate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer stories */}
      <section className="bg-navy text-white">
        <div className={`${wrap} py-16 md:py-24`}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className={`${h2} m-0 max-w-[560px]`}>Trusted across facilities, manufacturing and IT.</h2>
            <Link href={routes.stories} className="font-semibold text-amber">
              Read customer stories →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featured.map((s, i) => (
              <Link key={s.slug} href={storyHref(s)} className="group flex flex-col overflow-hidden rounded-xl bg-white text-ink no-underline">
                <img src={storyImg[i]} alt="" className="h-[170px] w-full object-cover" />
                <div className="p-5">
                  <p className={`${eyebrow} m-0 text-[11px] ${storyTone[i]}`}>
                    {s.client} · {s.industry}
                  </p>
                  <h3 className="mt-2 text-[17px] leading-[1.3] font-semibold group-hover:underline">{s.title}</h3>
                  {s.stats?.[0] && (
                    <p className="m-0 mt-2 text-[14px] text-ink-body">
                      <strong className="text-ink">{s.stats[0].value}</strong> {s.stats[0].label.toLowerCase()}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* People who shape teams */}
      <section className="bg-white">
        <div className={`${wrap} py-16 md:py-24`}>
          <h2 className={`${h2} m-0 text-ink`}>Built for the people who shape teams.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {people.map((p) => (
              <div key={p.title}>
                <div className="overflow-hidden rounded-xl">
                  <img src={p.img} alt={p.alt} className="h-[210px] w-full object-cover" />
                  <div className={`h-1 ${p.bar}`} />
                </div>
                <h3 className="mt-4 text-[19px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-body">{p.text}</p>
                <Link href={p.href} className="mt-2 inline-block text-[14px] font-semibold text-ink underline">
                  {p.link} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="bg-navy text-white">
        <div className={`${wrap} grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2`}>
          <div>
            <p className={`${eyebrow} text-amber`}>Our research</p>
            <h2 className={`${h2} mt-3`}>Science you can explain to your board.</h2>
            <p className="mt-4 leading-[1.65] text-on-navy">
              Everything we build starts with THE BRAIN, our Behavioural Reasoning and Interaction Network. It maps Big Five working styles to how people
              actually interact at work.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ["border-brand-red", "Big Five", "The most researched model of working style"],
                ["border-amber", "Interactions", "How styles work together, not just alone"],
                ["border-brand-green", "Industry roles", "Studied role by role, in ten industries"],
              ].map(([b, t, d]) => (
                <div key={t} className={`rounded-lg border-t-[3px] bg-white p-3.5 text-ink ${b}`}>
                  <p className="m-0 text-[14px] font-semibold">{t}</p>
                  <p className="m-0 mt-1 text-[12.5px] leading-[1.45] text-ink-body">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3">
              <Link href={routes.science} className="font-semibold text-amber">
                See our science & methodology →
              </Link>
              <Link href={routes.whitepapers} className="font-semibold text-white">
                Read The Behavioral Enterprise Series →
              </Link>
            </div>
          </div>
          <div className="relative pb-16">
            <img src="/site/9b9a9a4e.webp" alt="Researchers sorting notes in a workshop" className="w-[85%] rounded-xl object-cover" />
            <img
              src="/site/5fa91dc1.webp"
              alt="Analyst reviewing charts on a tablet"
              className="absolute right-0 bottom-0 w-[58%] rounded-xl border-4 border-navy object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-cloud">
        <div className={`${wrap} grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2`}>
          <div className="relative">
            <img src="/site/f694d932.webp" alt="Secure server racks" className="h-[300px] w-full rounded-xl object-cover md:h-[360px]" />
            <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-lg bg-white p-3.5 shadow-lg">
              <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full bg-green-tint text-green-ink">✓</span>
              <div>
                <p className="m-0 text-[14px] font-semibold text-ink">Only you see your people&rsquo;s data</p>
                <p className="m-0 text-[12.5px] text-ink-muted">Customer data is deleted after the contract ends</p>
              </div>
            </div>
          </div>
          <div>
            <p className={`${eyebrow} text-brand-red`}>Trust & security</p>
            <h2 className={`${h2} mt-3 text-ink`}>People data deserves enterprise-grade care.</h2>
            <p className="mt-4 leading-[1.65] text-ink-body">
              Each organisation sees only its own people, and nothing is collected without consent. Built for Indian law first.
            </p>
            <ul className="m-0 mt-6 flex list-none flex-wrap gap-2.5 p-0">
              {["DPDP Act aligned", "Consent-based collection", "Encryption in transit", "Role-based access"].map((c) => (
                <li key={c} className="rounded-lg border border-rule-strong bg-white px-3.5 py-2 text-[13px] font-semibold text-ink">
                  {c}
                </li>
              ))}
            </ul>
            <Link href={routes.trust} className="mt-6 inline-block font-semibold text-ink underline">
              How we protect your data →
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-navy text-white">
        <img src="/site/44843417.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className={`${wrap} relative py-20 text-center md:py-28`}>
          <h2 className="m-0 text-[clamp(30px,4vw,52px)] leading-[1.08] font-semibold tracking-[-0.02em]">Build teams on evidence, not instinct.</h2>
          <p className="mt-4 text-[17px] text-on-navy-soft">See Corporate Brain on your own org structure in a live walkthrough.</p>
          <Link href={routes.demo} className={`${btnRed} mt-8`}>
            Get a demo
          </Link>
        </div>
      </section>
    </>
  );
}
