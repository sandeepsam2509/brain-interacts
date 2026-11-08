import type { Metadata } from "next";
import { HeroRings } from "@/components/HeroRings";
import { WorkPeople } from "@/components/WorkPeople";
import { ArrowLink, ButtonLink, Eyebrow, H2, Section } from "@/components/ui";
import { audiences, hero, products, stories, tasks, team } from "@/content/home";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "People Analytics & Behavioral Insights Platform, Brain Interacts" },
  description:
    "Corporate Brain maps working styles and skills against your goals, then suggests who should lead, who should take each task, and how to support each person.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero with the 3D rings graphic */}
      <Section tone="dark" innerClassName="pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Eyebrow icon="people" color="lime">
              {hero.eyebrow}
            </Eyebrow>
            <h1 className="text-[clamp(29px,4.0vw,51px)] leading-[1.05] font-extrabold tracking-[-0.03em]">
              {hero.title} <span className="text-gold">{hero.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-[560px] text-[15px] leading-[1.7] text-on-navy md:text-[17px]">{hero.lead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={routes.demo}>Get a demo</ButtonLink>
            </div>
            <p className="mt-[18px] text-sm text-on-navy-muted">{hero.note}</p>
          </div>

          <div id="snapshot" className="scroll-mt-24">
            <HeroRings />
          </div>
        </div>
      </Section>

      {/* Products */}
      <Section tone="light">
        <Eyebrow icon="grid" color="link">
          Products
        </Eyebrow>
        <H2 className="mb-8 max-w-[780px]">One behavioral layer. Three products.</H2>
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
      <Section tone="light" >
        <Eyebrow icon="people" color="link">
          Archetypes × tasks
        </Eyebrow>
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-[clamp(26px,3.0vw,42px)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            Know who people are. <span className="text-ink-link">Give them work that fits.</span>
          </h2>
          <p className="text-[15px] leading-[1.7] text-ink-body">
            Every employee&apos;s behavioral archetype sits right beside the task board, so managers assign work by strengths
            and work style, not just availability.
          </p>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-2 text-[13px] tracking-[0.1em] text-ink-muted uppercase">Team archetypes</p>
            {team.map((person) => (
              <div key={person.name} className="flex items-center gap-3.5 border-b border-rule py-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full font-extrabold text-navy ${person.dot}`}>
                  {person.initial}
                </span>
                <div>
                  <strong className="block">{person.name}</strong>
                  <span className={`text-sm font-semibold ${person.color}`}>{person.style}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="mb-2 text-[13px] tracking-[0.1em] text-ink-muted uppercase">Task assignment</p>
            {tasks.map((t) => (
              <div key={t.task} className="flex items-center justify-between gap-4 border-b border-rule py-3.5">
                <span>{t.task}</span>
                <span className={`shrink-0 rounded-full px-2.5 py-1.5 text-[13px] font-bold ${t.pill}`}>→ {t.style}</span>
              </div>
            ))}
            <p className="mt-[18px] text-[13px] text-ink-muted">
              With Brain Suggests, every recommendation shows its reasons. A manager decides.
            </p>
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
