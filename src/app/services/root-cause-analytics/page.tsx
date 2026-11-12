/* eslint-disable @next/next/no-img-element -- static design images */
import type { Metadata } from "next";
import Link from "next/link";
import { Band, Closing, Head, Hero, Steps, accents } from "@/components/v3";
import { findStory, storyHref } from "@/content/stories";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Root Cause Analytics",
  description: "When attrition, low productivity or conflict keep coming back, we study your people, find what is really driving it, then help you fix it.",
  alternates: { canonical: routes.rootCause },
};

const symptoms = ["High attrition in one group", "Teams that keep missing targets", "Conflict between departments", "New hires leaving early", "A change programme that stalled"];

const related = [
  { kind: "Service", title: "Corporate culture study", text: "Make culture measurable", href: routes.cultureStudy },
  { kind: "Service", title: "Custom assessment systems", text: "Built around your roles", href: routes.customAssessments },
  { kind: "Goal", title: "Reduce attrition", text: "Platform and services together", href: routes.reduceAttrition },
];

export default function RootCausePage() {
  const story = findStory("pune-techtrol-gen-z-attrition");
  return (
    <>
      <Hero
        crumbs={[{ label: "Home", href: routes.home }, { label: "Solutions" }, { label: "Root cause analytics" }]}
        eyebrow="Service · Root cause analytics"
        title="Find the cause behind the symptom."
        lead="When attrition, low productivity or conflict keep coming back, we study your people and find what is really driving it, then help you fix it."
        actions={[
          { label: "Talk to our research team", href: enquiryHref("research-team") },
          { label: "See a case study", href: "#case" },
        ]}
        side={<img src="/site/9b9a9a4e.webp" alt="A team mapping problems on sticky notes" className="aspect-[3/2] w-full rounded-2xl object-cover" />}
      />

      <Band>
        <Head eyebrow="When to use it" title="Symptoms we are often asked to look at." />
        <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
          {symptoms.map((s, i) => (
            <li key={s} className="flex items-center gap-2.5 rounded-full border border-rule-strong px-4 py-2.5 text-[15px] font-medium text-ink">
              <span aria-hidden="true" className={`h-2 w-2 rounded-full ${accents.bg[i % 3]}`} />
              {s}
            </li>
          ))}
        </ul>
      </Band>

      <Band tone="cloud">
        <Head eyebrow="How it works" title="Five steps, from symptom to fix." />
        <Steps
          cols={5}
          items={[
            { title: "Scope", text: "Agree the problem, the group to study and what success looks like." },
            { title: "Study", text: "Assessments, job games and interviews with people who stay and people who leave." },
            { title: "Find the cause", text: "We look for the behavioral pattern behind the symptom, and test it." },
            { title: "Plan the fix", text: "A practical intervention your L&D team and managers can run." },
            { title: "Measure", text: "Re-check after an agreed period to see the change." },
          ]}
        />
        <p className="mt-5 text-[13.5px] text-ink-muted">Length depends on the size of the group and the problem. We agree it with you at the scoping stage.</p>
      </Band>

      {story && (
        <Band tone="navy" id="case">
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <Head dark eyebrow={`Case study · ${story.industry}`} title="Gen Z hires were leaving. The usual reasons didn't explain it." />
              <p className="-mt-4 text-on-navy">{story.how}</p>
              <dl className="m-0 mt-6 flex flex-wrap gap-8">
                <div>
                  <dt className="font-display text-[40px] leading-none font-bold text-amber">{story.stats?.[0]?.value}</dt>
                  <dd className="m-0 mt-1 text-[13px] text-on-navy">{story.stats?.[0]?.label}</dd>
                </div>
              </dl>
              <Link href={storyHref(story)} className="mt-6 inline-block font-semibold text-amber underline">
                Read the full story →
              </Link>
            </div>
            <img src="/site/793df1a3.webp" alt="" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
        </Band>
      )}

      <Band>
        <Head eyebrow="Related" title="Other ways we help." />
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((r, i) => (
            <Link key={r.title} href={r.href} className={`block rounded-xl border-t-4 bg-cloud p-6 no-underline hover:shadow-md ${accents.bar[i]}`}>
              <span className="text-[11.5px] font-semibold tracking-[0.1em] text-ink-muted uppercase">{r.kind}</span>
              <span className="font-display mt-1 block text-[18px] font-semibold text-ink">{r.title} →</span>
              <span className="mt-1 block text-[14px] text-ink-body">{r.text}</span>
            </Link>
          ))}
        </div>
      </Band>

      <Closing
        title="Have a problem that keeps coming back?"
        text="Tell us the symptom. We'll tell you how we would study it."
        image="/site/9b9a9a4e.webp"
        actions={[
          { label: "Talk to our research team", href: enquiryHref("research-team") },
          { label: "Get a demo", href: enquiryHref("demo") },
        ]}
      />
    </>
  );
}
