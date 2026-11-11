import type { Metadata } from "next";
import { HeroRings } from "@/components/HeroRings";
import { WorkPeople } from "@/components/WorkPeople";
import { ArrowLink, ButtonLink, Eyebrow, H2, Section } from "@/components/ui";
import { audiences, hero, industries, matches, matchSteps, products, stories } from "@/content/home";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Brain Interacts, People Analytics for Every Industry" },
  description:
    "Brain Interacts is a people analytics company. We research how work happens in each industry and build products, like Corporate Brain and Decode, that help workplaces flourish.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero with the 3D rings graphic */}
      <Section tone="dark" innerClassName="pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <h1 className="text-[clamp(26px,3.3vw,42px)] leading-[1.05] font-extrabold tracking-[-0.03em]">
              {hero.title} <span className="text-gold">{hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-[560px] text-[15px] leading-[1.7] text-on-navy md:text-[16px]">{hero.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={routes.demo}>Get a demo</ButtonLink>
              <ButtonLink href={enquiryHref("technical-assessment")} variant="outlineDark">
                Free technical assessment
              </ButtonLink>
            </div>
            <p className="mt-[18px] text-sm text-on-navy-muted">{hero.note}</p>
          </div>

          <div id="snapshot" className="scroll-mt-24">
            <HeroRings />
          </div>
        </div>
      </Section>

      {/* Industries we research */}
      <Section tone="light">
        <Eyebrow icon="briefcase" color="goldInk">
          Industries we research
        </Eyebrow>
        <H2 className="mb-3 max-w-[820px]">We study how each industry works, then build for its people.</H2>
        <p className="mb-8 max-w-[700px] leading-[1.7] text-ink-body">
          Every industry hires, trains and leads differently. Our research team studies the roles, standards and day-to-day situations in each
          one, so our products and solutions fit the work your people really do.
        </p>
        <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
          {industries.map((i) => (
            <li key={i} className="rounded-full border border-rule bg-cloud px-4 py-2 text-[14px] font-semibold text-ink">
              {i}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ArrowLink href={routes.industries} tone="light">
            See how we help each industry
          </ArrowLink>
        </div>
      </Section>

      {/* Products */}
      <Section tone="light">
        <Eyebrow icon="grid" color="link">
          Products
        </Eyebrow>
        <H2 className="mb-8 max-w-[780px]">Products built from our research.</H2>
        <div className="grid gap-5 md:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className={`rounded-2xl border border-rule border-t-[3px] bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg ${p.rule}`}>
              <span className={`font-mono text-xs uppercase ${p.tagColor}`}>{p.tag}</span>
              <h3 className="mt-2.5 mb-2.5 text-xl font-bold">{p.name}</h3>
              <p className="leading-[1.7] text-ink-body">
                {p.text}{" "}
                <ArrowLink href={p.href} tone="light">
                  Explore
                </ArrowLink>
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects, tasks and hiring */}
      <WorkPeople tone="dark" />

      {/* Archetypes × tasks */}
      <Section tone="light">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div>
            <Eyebrow icon="people" color="link">
              Brain Suggests
            </Eyebrow>
            <H2 className="mb-4">
              Know who people are. <span className="text-ink-link">Give them work that fits.</span>
            </H2>
            <p className="text-[15px] leading-[1.7] text-ink-body">
              Every person&apos;s working style sits beside the task board, so managers assign work by strengths, not just by who is free.
            </p>
            <ol className="mt-7 grid list-none gap-4 p-0">
              {matchSteps.map((st) => (
                <li key={st.n} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-[14px] font-extrabold text-lime">{st.n}</span>
                  <div>
                    <p className="font-bold">{st.title}</p>
                    <p className="text-[14px] leading-[1.6] text-ink-body">{st.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Product-style panel; illustrative example */}
          <div className="rounded-2xl border border-rule bg-white p-4 shadow-[0_18px_48px_rgba(15,23,42,0.10)] md:p-5" aria-label="Example of Brain Suggests task matching">
            <div className="mb-3 flex items-center justify-between px-1">
              <p className="text-[13px] font-bold">Task board · Suggested owners</p>
              <span className="rounded-full bg-[#E8F3EC] px-2.5 py-1 text-[11px] font-semibold text-green-ink">Example</span>
            </div>
            <div className="grid gap-3">
              {matches.map((m) => (
                <div key={m.task} className="rounded-xl border border-rule p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-bold">{m.task}</p>
                    <span className="rounded-md bg-navy px-2.5 py-1 text-[11px] font-bold text-white">Assign</span>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[14px] font-extrabold text-navy ${m.dot}`}>{m.initial}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[14px] font-semibold">
                        {m.person} <span className={`font-bold ${m.ink}`}>· {m.style}</span>
                      </p>
                      <div className="mt-1.5 flex items-center gap-2">
                        <span className="h-1.5 flex-1 rounded-full bg-rule">
                          <span className={`block h-1.5 rounded-full ${m.bar}`} style={{ width: `${m.fit}%` }} />
                        </span>
                        <span className="text-[12px] font-bold">{m.fit}% fit</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2.5 text-[12px] leading-[1.5] text-ink-muted">
                    Why: {m.why} · Next best: {m.next}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Customer stories */}
      <Section tone="dark">
        <Eyebrow icon="quote" color="sky">
          Customer stories
        </Eyebrow>
        <H2 className="mb-8 max-w-[780px]">Trusted across facilities, manufacturing and IT.</H2>
        <div className="grid gap-5 md:grid-cols-3">
          {stories.map((s) => (
            <div key={s.title} className="rounded-2xl border border-navy-line bg-navy-raised p-6">
              <span className={`font-mono text-xs uppercase ${s.color}`}>{s.industry}</span>
              <h3 className="mt-2.5 mb-2.5 text-xl font-bold">{s.title}</h3>
              <p className="leading-[1.7] text-on-navy">{s.text}</p>
            </div>
          ))}
        </div>
        <ArrowLink href={routes.stories} tone="dark" className="mt-8 inline-block">
          Read customer stories
        </ArrowLink>
      </Section>

      {/* Who it's for */}
      <Section tone="light" >
        <Eyebrow icon="people" color="goldInk">
          Who it&apos;s for
        </Eyebrow>
        <h2 className="mb-8 text-[clamp(26px,3.0vw,42px)] leading-[1.08] font-extrabold tracking-[-0.02em]">
          Built for the people who shape teams.
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="rounded-2xl border border-rule bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <h3 className="mb-2 text-xl font-extrabold">{a.title}</h3>
              <p className="mb-4 leading-[1.7] text-ink-body">{a.text}</p>
              <ArrowLink href={a.href} tone="light">
                {a.link}
              </ArrowLink>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing call to action */}
      <Section tone="dark">
        <div className="text-center">
          <h2 className="mx-auto max-w-[780px] text-[clamp(26px,3.2vw,42px)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            Build teams on evidence, not instinct.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.7] text-on-navy">
            See Corporate Brain on your own org structure in a live walkthrough.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={routes.demo} variant="lime">
              Get a demo
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
