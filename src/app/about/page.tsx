/* eslint-disable @next/next/no-img-element -- static photos */
import type { Metadata } from "next";
import Link from "next/link";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Brain Interacts, a People Analytics Company",
  description:
    "Most performance problems are really fit problems. Brain Interacts builds a behavioral layer that connects leadership, managers and employees, grounded in research.",
  alternates: { canonical: routes.about },
};

const wrap = "mx-auto max-w-[1280px] px-4 md:px-[70px]";
const eyebrow = "text-[12px] font-semibold tracking-[0.1em] uppercase";
const h2 = "font-display text-[clamp(26px,3vw,40px)] leading-[1.12] font-semibold tracking-[-0.02em]";
const btnRed = "inline-flex items-center rounded-lg bg-brand-red px-5 py-3 text-[15px] font-semibold text-white no-underline hover:bg-brand-red-dark";
const btnGhostDark = "inline-flex items-center rounded-lg border border-navy-line px-5 py-3 text-[15px] font-semibold text-white no-underline hover:border-on-navy";

const principles = [
  ["Archetypes are shorthand, not labels.", ""],
  ["Look at the mix, not just the individual.", ""],
  ["Every suggestion shows its reasons.", ""],
  ["Development, not only selection.", "People can retake assessments."],
  ["Fair by default.", "Personality alone should never decide hiring, promotion or termination."],
  ["Customer data stays with the customer.", "A separate database per customer, shown by role, and corrected or deleted on request."],
];
const numColor = ["text-brand-red", "text-gold-ink", "text-green-ink"];

const team = [
  { name: "Srishti Sharma", role: "Co-Founder and Chief Research Officer", photo: "/team/srishti-sharma.webp", bar: "bg-brand-red" },
  { name: "Sandeep Kumar", role: "Co-Founder and Vice President of Sales and Marketing", photo: "/team/sandeep-kumar.webp", bar: "bg-amber" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className={`${wrap} grid items-center gap-12 pt-10 pb-16 md:pt-14 md:pb-20 lg:grid-cols-2`}>
          <div>
            <nav aria-label="Breadcrumb" className="text-[13px] text-on-navy-muted">
              <Link href={routes.home} className="text-on-navy-muted underline">
                Home
              </Link>{" "}
              / <span className="text-white">About us</span>
            </nav>
            <p className={`${eyebrow} mt-4 text-amber`}>About us</p>
            <h1 className="mt-4 text-[clamp(34px,4.2vw,56px)] leading-[1.06] font-semibold tracking-[-0.025em]">Most performance problems are really fit problems.</h1>
            <ul className="m-0 mt-6 list-none space-y-2.5 p-0 text-[15.5px] text-on-navy">
              {[
                ["bg-brand-red", "The right person in the wrong role."],
                ["bg-amber", "One strength repeated across a team while another is missing."],
                ["bg-brand-green", "A skilled specialist managed like a generalist."],
              ].map(([c, t]) => (
                <li key={t} className="flex items-center gap-3">
                  <span aria-hidden="true" className={`h-2 w-2 rounded-full ${c}`} />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-semibold">All fixable, once you can see them.</p>
          </div>
          <div className="relative pb-16 pl-10">
            <img src="/site/631ec024.webp" alt="A team discussing work" className="aspect-[1.3] w-full rounded-xl object-cover" />
            <img src="/site/ee5cc825.webp" alt="A worker on a factory floor" className="absolute bottom-0 left-0 w-[45%] rounded-xl border-4 border-navy object-cover" />
            <div className="absolute right-3 bottom-4 flex w-[180px] items-center justify-between rounded-lg bg-white p-3 text-ink">
              <div>
                <p className="m-0 text-[10.5px] font-semibold tracking-[0.08em] text-ink-muted uppercase">Role fit</p>
                <p className="m-0 text-[14px] font-semibold">Visible now</p>
              </div>
              <span aria-hidden="true" className="grid h-6 w-6 place-items-center rounded-full bg-green-tint text-[12px] text-green-ink">
                ✓
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="bg-white">
        <div className={`${wrap} grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2`}>
          <div>
            <p className={`${eyebrow} text-brand-red`}>What we believe</p>
            <h2 className={`${h2} mt-3 text-ink`}>How people work and what they can do are both measurable.</h2>
            <p className="mt-5 leading-[1.7] text-ink-body">
              Companies decide better when they can see working style and ability side by side with their goals. So we built a behavioral layer that
              connects leadership, managers and employees.
            </p>
            <p className="mt-4 leading-[1.7] text-ink-body">
              It turns working style, skills and daily interactions into clear suggestions: who should lead a project, who could take a task, and how to
              support each person.
            </p>
            <p className="mt-6 border-l-[3px] border-brand-red pl-4 font-display text-[20px] leading-[1.35] font-semibold text-ink">
              The software ranks and explains. People decide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="/site/86bfbc2c.webp" alt="A manager coaching a colleague" className="row-span-2 h-full w-full rounded-xl object-cover" />
            <div className="rounded-xl bg-cloud p-5">
              {[
                ["bg-brand-red", "Leadership"],
                ["bg-amber", "Managers"],
                ["bg-brand-green", "Employees"],
              ].map(([c, t]) => (
                <p key={t} className="m-0 flex items-center gap-2 py-1 text-[14px] font-semibold text-ink">
                  <span aria-hidden="true" className={`h-2 w-2 rounded-full ${c}`} />
                  {t}
                </p>
              ))}
              <p className="m-0 mt-2 text-[12px] text-ink-muted">one connected behavioral layer</p>
            </div>
            <img src="/site/7e00bc9e.webp" alt="Colleagues meeting in an office" className="h-[140px] w-full rounded-xl object-cover" />
          </div>
        </div>
      </section>

      {/* How we do it */}
      <section className="bg-cloud">
        <div className={`${wrap} py-16 md:py-24`}>
          <p className={`${eyebrow} text-brand-red`}>How we do it</p>
          <h2 className={`${h2} mt-3 max-w-[720px] text-ink`}>Grounded in research, written for the people who use it.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["/site/9b9a9a4e.webp", "bg-brand-red", "Working style", "A short assessment based on the Big Five gives each person a primary and secondary archetype, matched to ten Corporate Brain archetypes."],
              ["/site/5fa91dc1.webp", "bg-amber", "Skills", "A foundation-level technical check for each function shows strong, developing and needed areas."],
              ["/site/8fc9f461.webp", "bg-brand-green", "Company goals", "Leadership picks a goal in one of six categories, and the platform recommends how teams and individuals should pursue it."],
            ].map(([img, b, t, d]) => (
              <div key={t} className="overflow-hidden rounded-xl bg-white">
                <img src={img} alt="" className="h-[150px] w-full object-cover" />
                <div className={`h-1 ${b}`} />
                <div className="p-5">
                  <h3 className="text-[18px] font-semibold text-ink">{t}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-body">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="text-[14px] font-semibold text-ink">Six goal categories:</span>
            {["Financial", "Growth", "Customer", "Operational", "Innovation", "Capability"].map((g) => (
              <span key={g} className="rounded-full border border-rule-strong bg-white px-3 py-1 text-[13px] text-ink-body">
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-navy text-white">
        <div className={`${wrap} py-16 md:py-24`}>
          <p className={`${eyebrow} text-amber`}>Our principles</p>
          <h2 className={`${h2} mt-3`}>What we hold ourselves to.</h2>
          <ol className="m-0 mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map(([t, d], i) => (
              <li key={t} className="rounded-xl bg-white p-6 text-ink">
                <span className={`font-display text-[34px] leading-none font-semibold ${numColor[i % 3]}`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-[16px] leading-[1.35] font-semibold">{t}</h3>
                {d && <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-body">{d}</p>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white">
        <div className={`${wrap} py-16 md:py-24`}>
          <p className={`${eyebrow} text-brand-red`}>What we build</p>
          <h2 className={`${h2} mt-3 text-ink`}>One company, a growing family of products.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["/site/631ec024.webp", "bg-brand-red", "Corporate Brain", "Working style, skills, projects and tasks in one place for HR, founders and executive teams.", "Explore", routes.corporateBrain, false],
              ["/site/9b9a9a4e.webp", "bg-amber", "Decode", "Game-based assessments that show how people decide under real conditions.", "Explore", routes.gamified, false],
              ["/site/03b5dbaf.webp", "bg-brand-green", "FinCheck", "Behavioral analysis for neo-banks, NBFCs and banks.", "Explore FinCheck", routes.finCheck, true],
            ].map(([img, b, t, d, l, href, soon]) => (
              <a key={t as string} href={href as string} className="group relative overflow-hidden rounded-xl border border-rule bg-white text-ink no-underline">
                <img src={img as string} alt="" className="h-[150px] w-full object-cover" />
                {soon && <span className="absolute top-3 left-3 rounded-full bg-white px-2.5 py-1 text-[12px] font-semibold">Coming soon</span>}
                <div className="p-5">
                  <span aria-hidden="true" className={`block h-[3px] w-7 rounded ${b}`} />
                  <h3 className="mt-3 text-[20px] font-semibold">{t}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-body">{d}</p>
                  <span className="mt-3 inline-block font-semibold underline">{l} →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-20 bg-cloud">
        <div className={`${wrap} grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.2fr]`}>
          <div>
            <p className={`${eyebrow} text-brand-red`}>The team</p>
            <h2 className={`${h2} mt-3 text-ink`}>The people behind Brain Interacts.</h2>
            <p className="mt-4 leading-[1.65] text-ink-body">Co-authors of THE BRAIN research, building the products that come out of it.</p>
          </div>
          <ul className="m-0 grid list-none gap-5 p-0 sm:grid-cols-2">
            {team.map((p) => (
              <li key={p.name} className="overflow-hidden rounded-xl bg-white">
                <img src={p.photo} alt={`${p.name}, ${p.role}`} className="aspect-[4/4.2] w-full object-cover" />
                <div className={`h-1 ${p.bar}`} />
                <div className="p-5">
                  <h3 className="text-[18px] font-semibold text-ink">{p.name}</h3>
                  <p className="mt-1 text-[14px] text-ink-body">{p.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy text-white">
        <img src="/site/44843417.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className={`${wrap} relative py-20 text-center md:py-28`}>
          <h2 className="m-0 text-[clamp(28px,3.6vw,46px)] leading-[1.1] font-semibold tracking-[-0.02em]">Let&rsquo;s build teams that fit the work.</h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] text-on-navy-soft">Consultancies, HR tech platforms and research partners: let&rsquo;s build better teams together.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={enquiryHref("partnership")} className={btnRed}>
              Partner with us
            </Link>
            <a href="#team" className={btnGhostDark}>
              Meet the founders
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
