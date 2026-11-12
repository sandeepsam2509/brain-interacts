/* eslint-disable @next/next/no-img-element -- static design images */
import type { Metadata } from "next";
import { Band, Checks, Closing, Head, Hero, accents } from "@/components/v3";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Corporate Brain puts working style and skills beside every project and task, so managers can see who fits the work, and why, before they decide.",
  alternates: { canonical: routes.howItWorks },
};

const steps = [
  { img: "/site/793df1a3.webp", title: "01 · Profile", text: "A short assessment based on the Big Five gives each person a primary and secondary archetype. A role skills check adds strong, developing and needed areas." },
  { img: "/site/5fa91dc1.webp", title: "02 · Match", text: "For each project and task, Brain ranks the best and second-best person, with the reasons in plain words." },
  { img: "/site/44843417.webp", title: "03 · Decide", text: "A manager reviews the suggestion and assigns the work. Nothing is automatic, and every choice stays with people." },
];

const views = [
  { label: "Leadership view", tint: "bg-red-tint text-brand-red", items: ["Organization-wide view of the whole company", "Team mix against six company goals", "Key-person and succession insights", "Hiring pipeline and company reports"] },
  { label: "Manager view", tint: "bg-amber-tint text-gold-ink", items: ["Team dashboard and management actions", "Task and project-lead suggestions from Brain", "Cover planning for time away", "Coaching guides for each working style"] },
  { label: "Employee view", tint: "bg-green-tint text-green-ink", items: ["Working-style profile and role skills check", "Strengths and development areas", "Progress page with retakes", "8-week workload planner"] },
];

const goals = ["Financial", "Growth", "Customer", "Operational", "Innovation", "Capability"];

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        crumbs={[{ label: "Home", href: routes.home }, { label: "Platform" }, { label: "How it works" }]}
        eyebrow="How it works"
        title="From who people are to work that fits."
        lead="Corporate Brain puts working style and skills beside every project and task, so managers can see who fits the work, and why, before they decide."
        actions={[
          { label: "Get a demo", href: enquiryHref("demo") },
          { label: "Take the free assessment", href: routes.snapshot },
        ]}
        side={
          <div className="rounded-2xl bg-white p-6 text-ink shadow-xl">
            <div className="flex items-center justify-between">
              <strong className="text-[15px]">Plan Q1 product roadmap</strong>
              <span className="rounded-full bg-green-tint px-2.5 py-1 text-[12px] font-semibold text-green-ink">92% fit</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-tint font-semibold text-gold-ink">
                PS
              </span>
              <span>
                <span className="block font-semibold">Priya Sharma</span>
                <span className="block text-[12.5px] text-ink-muted">Integrator · next best Rahul Mehta, 74%</span>
              </span>
            </div>
            <p className="mt-4 rounded-lg bg-cloud p-3 text-[13.5px] text-ink-body">
              <strong className="text-ink">Why?</strong> Strong planning and cross-team coordination; has led two similar projects.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <span className="rounded-lg bg-navy py-2.5 text-center text-[14px] font-semibold text-white">Assign</span>
              <span className="rounded-lg border border-rule-strong py-2.5 text-center text-[14px] font-semibold">See other options</span>
            </div>
            <p className="mt-3 mb-0 text-[11.5px] text-ink-muted">Sample names, for illustration.</p>
          </div>
        }
      />

      <Band>
        <Head eyebrow="Three steps" title="Profile, match, decide." />
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="overflow-hidden rounded-xl border border-rule bg-white">
              <img src={s.img} alt="" className="aspect-[16/9] w-full object-cover" />
              <div className={`h-1 ${accents.bg[i]}`} />
              <div className="p-5">
                <h3 className="text-[20px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-ink-body">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Band>

      <Band tone="navy">
        <Head dark eyebrow="One platform, three views" title="Everyone sees what they need. Nothing more." />
        <div className="grid gap-5 md:grid-cols-3">
          {views.map((v, i) => (
            <div key={v.label} className={`rounded-xl border-t-4 bg-white p-6 text-ink ${accents.bar[i]}`}>
              <span className={`inline-block rounded-full px-3 py-1 text-[12.5px] font-semibold ${v.tint}`}>{v.label}</span>
              <div className="mt-4">
                <Checks items={v.items} />
              </div>
            </div>
          ))}
        </div>
      </Band>

      <Band tone="cloud">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Head eyebrow="Company goals" title="Point every team at the goal that matters now." />
            <p className="-mt-4 text-ink-body">
              Leadership picks a goal in one of six categories. Corporate Brain then recommends how teams and individuals should pursue it, based on the mix of working styles you actually have.
            </p>
            <ul className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0">
              {goals.map((g) => (
                <li key={g} className="rounded-full border border-rule-strong bg-white px-4 py-2 text-[14px] font-semibold text-ink">
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6">
            <strong className="text-[15px] text-ink">Team mix · Growth goal</strong>
            <ul className="m-0 mt-4 list-none space-y-4 p-0">
              {[
                ["Rainmakers", 18, "bg-brand-red"],
                ["Integrators", 34, "bg-amber"],
                ["Executors", 48, "bg-brand-green"],
              ].map(([t, v, c]) => (
                <li key={t as string}>
                  <span className="flex justify-between text-[13.5px] text-ink">
                    <span>{t}</span>
                    <span>{v}%</span>
                  </span>
                  <span className="mt-1.5 block h-2 rounded-full bg-cloud">
                    <span className={`block h-full rounded-full ${c}`} style={{ width: `${v}%` }} />
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 mb-0 text-[12px] text-ink-muted">Example only. Archetype mix shown for illustration.</p>
          </div>
        </div>
      </Band>

      <Band>
        <div className="grid items-center gap-8 rounded-2xl bg-amber-tint p-7 md:grid-cols-[1.4fr_1fr] md:p-10">
          <div>
            <Head eyebrow="Works with Decode" color="amber" title="Hire with Decode, then place and grow people in Corporate Brain." />
            <p className="-mt-4 text-ink-body">Decode&apos;s game-based results flow into the Corporate Brain hiring pipeline, on the same Big Five model.</p>
          </div>
          <a href={routes.gamified} className="justify-self-start rounded-lg bg-brand-red px-5 py-3 font-semibold text-white no-underline hover:bg-brand-red-dark md:justify-self-end">
            Explore Decode →
          </a>
        </div>
      </Band>

      <Closing
        title="See Corporate Brain on your own org."
        text="A live walkthrough using your structure and your goals."
        actions={[
          { label: "Get a demo", href: enquiryHref("demo") },
          { label: "See pricing", href: routes.pricing },
        ]}
      />
    </>
  );
}
