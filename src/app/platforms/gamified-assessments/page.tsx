import type { Metadata } from "next";
import { HeroRings } from "@/components/HeroRings";
import { ringSets } from "@/content/rings";
import { CardGrid, CtaBlock, PageHero } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gamified Assessments (Coming Soon), Game-Based Hiring Assessments",
  description:
    "Short, game-based assessments that show how candidates think, decide and recover, built on the Big Five and the Corporate Brain model. Coming soon; join the early access programme.",
  alternates: { canonical: routes.gamified },
};

const trail = [{ label: "Home", href: routes.home }, { label: "Products", href: routes.corporateBrain }, { label: "Gamified Assessments" }];

const compare = [
  { q: "Candidates can guess the answer you want", g: "Candidates show you what they do, choice by choice" },
  { q: "Only the final answer is scored", g: "The path matters: how they plan, adjust and recover" },
  { q: "Long, text-heavy and tiring", g: "Short, visual and designed to be finished" },
  { q: "The same questions for every role", g: "Scenarios matched to the job you are hiring for" },
];

const signals = [
  { title: "Planning", trait: "Conscientiousness", accent: "text-gold", text: "Do they map out a route before acting, or work it out as they go?" },
  { title: "Recovery", trait: "Emotional steadiness", accent: "text-sky", text: "After a setback, how quickly and calmly do they get back on track?" },
  { title: "Exploration", trait: "Openness", accent: "text-lime", text: "Do they try new options and test limits, or stick to what they know?" },
  { title: "Collaboration", trait: "Agreeableness", accent: "text-white", text: "When others are involved, do they hold their ground or look for a shared outcome?" },
];

const principles = [
  { title: "People decide, not the game", text: "Results are one input alongside interviews, work samples and references. No candidate is accepted or rejected automatically." },
  { title: "Clear consent", text: "Candidates are told what is measured and why before they start, in line with India's Digital Personal Data Protection Act, 2023." },
  { title: "Built to be fair", text: "Scenarios avoid trivia, cultural in-jokes and heavy reading, so results reflect behaviour rather than background." },
  { title: "Works on any device", text: "Designed for phones as well as laptops, so candidates can take part wherever they are." },
];

const earlyAccess = [
  "Pilot the assessment on one or two of your real openings",
  "Help shape the first role tracks and what the report shows",
  "Work directly with our research team on how to read the results",
  "Be first to know the launch date and pricing",
];

const faqs = [
  {
    q: "When will Gamified Assessments launch?",
    a: "We are finalising the first role tracks with early access partners. Join the programme and we will share the timeline with you directly.",
  },
  {
    q: "Does it replace interviews?",
    a: "No. It gives you a clearer picture of how a candidate works before you meet them, so interviews can go deeper. The hiring decision stays with your team.",
  },
  {
    q: "How does it connect to Corporate Brain?",
    a: "Results use the same working-style model as Corporate Brain, so a new hire's profile sits alongside their future team's from day one.",
  },
  {
    q: "Can we try it before it launches?",
    a: "Yes. Request a sample and we will send you a preview, or join early access to pilot it with real candidates.",
  },
];

export default function GamifiedPage() {
  return (
    <>
      <PageHero
        trail={trail}
        badge="Coming soon"
        title="Hiring assessments candidates"
        accent="actually want to finish."
        lead="Short, game-based scenarios that show how people think, decide and bounce back, so you hire for how someone works, not just how well they answer a questionnaire."
        actions={[
          { label: "Get early access", href: enquiryHref("early-access"), variant: "gold" },
          { label: "Request a sample", href: enquiryHref("sample-assessment"), variant: "outlineDark" },
        ]}
        aside={<HeroRings items={ringSets.gamified} />}
      />

      {/* Why games */}
      <Section tone="light">
        <Eyebrow icon="target" color="link">
          Why a game
        </Eyebrow>
        <H2 className="mb-8 max-w-[820px]">Questionnaires record what people say. A game shows what they do.</H2>
        <div className="overflow-hidden rounded-2xl border border-rule bg-white">
          <div className="hidden grid-cols-2 border-b border-rule bg-[#F4F6F9] md:grid">
            <p className="px-6 py-3 font-mono text-[12px] text-ink-muted uppercase">Traditional questionnaire</p>
            <p className="px-6 py-3 font-mono text-[12px] text-ink-link uppercase">Gamified assessment</p>
          </div>
          {compare.map((row) => (
            <div key={row.q} className="grid border-b border-rule last:border-b-0 md:grid-cols-2">
              <p className="flex gap-3 px-6 pt-4 text-[15px] text-ink-body md:py-4">
                <span aria-hidden="true" className="text-ink-muted">✕</span>
                {row.q}
              </p>
              <p className="flex gap-3 px-6 pt-2 pb-4 text-[15px] font-semibold md:py-4">
                <span aria-hidden="true" className="text-green-ink">✓</span>
                {row.g}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <CardGrid
        tone="dark"
        label={{ icon: "flow", text: "How it works", color: "lime" }}
        title="Three steps, from invite to insight."
        cards={[
          { tag: "Step 1", title: "Invite", rule: "gold", text: "Send candidates a link from Corporate Brain. They play on a phone or laptop, with no download and no long instructions." },
          { tag: "Step 2", title: "Play", rule: "sky", text: "A warm-up scenario builds a working-style baseline, then a short scenario matched to the role shows how they handle real situations." },
          { tag: "Step 3", title: "Review", rule: "lime", text: "You get a clear profile: their archetype, the strengths they showed and what to explore in the interview." },
        ]}
      />

      {/* Role tracks */}
      <CardGrid
        tone="light"
        columns={4}
        label={{ icon: "briefcase", text: "First role tracks", color: "goldInk" }}
        title="Scenarios built around the job."
        cards={[
          { title: "Sales & business development", text: "A client conversation where they must listen, persuade and decide what to give away." },
          { title: "People management", text: "A stretched team, competing deadlines and someone close to burnout. What do they prioritise?" },
          { title: "Technology", text: "A puzzle that rewards tracing the cause over guessing at fixes." },
          { title: "Operations", text: "Shifting priorities under time pressure, where calm and order matter." },
        ]}
      />

      {/* What we measure */}
      <Section tone="dark">
        <Eyebrow icon="chart" color="sky">
          What we measure
        </Eyebrow>
        <H2 className="mb-3 max-w-[820px]">We look at how they play, not just the final score.</H2>
        <p className="mb-8 max-w-[680px] text-[15px] leading-[1.7] text-on-navy">
          Each choice adds to a picture of working style, mapped to the Big Five and the Corporate Brain archetypes.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s) => (
            <div key={s.title} className="rounded-2xl border border-navy-line bg-navy-raised p-6">
              <p className={`font-mono text-[12px] uppercase ${s.accent}`}>{s.trait}</p>
              <h3 className="mt-2 text-lg font-extrabold text-white">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-on-navy">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Principles */}
      <Section tone="light">
        <Eyebrow icon="people" color="green">
          Built responsibly
        </Eyebrow>
        <H2 className="mb-8 max-w-[820px]">Fair to candidates. Useful to recruiters.</H2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-rule bg-white p-6">
              <h3 className="text-[17px] font-extrabold">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-body">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Early access */}
      <Section tone="dark">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow icon="spark" color="lime">
              Early access programme
            </Eyebrow>
            <H2 className="mb-4">Help us shape it, and use it first.</H2>
            <p className="text-[15px] leading-[1.7] text-on-navy">
              We are working with a small group of organisations before launch. Early partners pilot the assessment on real hiring and
              tell us what they need to see.
            </p>
          </div>
          <ul className="m-0 grid list-none gap-3 p-0">
            {earlyAccess.map((e) => (
              <li key={e} className="flex gap-3 rounded-xl border border-navy-line bg-navy-raised px-5 py-4 text-[15px] text-white">
                <span aria-hidden="true" className="text-lime">✓</span>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="light">
        <Eyebrow icon="quote" color="link">
          Questions
        </Eyebrow>
        <H2 className="mb-6">Common questions</H2>
        <div className="max-w-[860px]">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-rule py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                {f.q}
                <span aria-hidden="true" className="text-ink-muted transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-[15px] leading-[1.7] text-ink-body">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBlock
        tone="dark"
        title="Coming soon. Want early access?"
        accent="Be among the first to use it."
        actions={[
          { label: "Get early access", href: enquiryHref("early-access") },
          { label: "See the science", href: routes.science, variant: "outlineDark" },
        ]}
      />
    </>
  );
}
