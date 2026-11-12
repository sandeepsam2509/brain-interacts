/* eslint-disable @next/next/no-img-element -- static design images */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { researchHref } from "@/components/resources/parts";
import { GetPdf } from "@/components/resources/GetPdf";
import { Band, Closing, Head, Hero, Steps, accents } from "@/components/v3";
import { WhitepaperLibrary } from "@/components/WhitepaperLibrary";
import { downloadable, findWhitepaper } from "@/content/whitepapers";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Science Behind Corporate Brain",
  description:
    "Corporate Brain and Decode rest on the Big Five, the most researched model of working style, and on our own research, THE BRAIN. How it works, what the evidence supports, and its limits.",
  alternates: { canonical: routes.science },
};

const bigFive = [
  ["Openness", "Curiosity and comfort with new ideas"],
  ["Conscientiousness", "Organisation, follow-through and care"],
  ["Extraversion", "Energy from people and action"],
  ["Agreeableness", "Cooperation and trust"],
  ["Emotional stability", "Calm under pressure"],
];

const supports = [
  "The Big Five is the most widely replicated model of personality, and its traits relate to job performance, especially Conscientiousness.",
  "Traits change how one another show up at work, so reading scores one at a time misses real differences between people.",
  "Situations shape behaviour too, so results work best as a guide for a conversation, not a verdict.",
];
const testing = [
  "Test–retest reliability and agreement with established Big Five measures for THE BRAIN's own scores, and norms for Indian working populations.",
  "Pre-registered tests of whether the proposed trait interactions predict outcomes beyond single traits.",
];

const references = [
  ["Barrick & Mount (1991). The Big Five personality dimensions and job performance.", "Personnel Psychology"],
  ["Bell (2007). Deep-level composition variables as predictors of team performance.", "Journal of Applied Psychology"],
  ["Donnellan, Oswald, Baird & Lucas (2006). The Mini-IPIP scales.", "Psychological Assessment"],
  ["Goldberg (1992). The development of markers for the Big-Five factor structure.", "Psychological Assessment"],
  ["Schmidt & Hunter (1998). The validity and utility of selection methods.", "Psychological Bulletin"],
];

const deeper = [
  { title: "Validity", text: "What we have tested, and how.", href: routes.scienceValidity },
  { title: "Frameworks", text: "Trait DNA, the Interaction Matrix and the Narrative Engine.", href: routes.scienceFrameworks },
  { title: "Methodology", text: "How assessments are built and scored.", href: routes.scienceMethodology },
];

export default function SciencePage() {
  const mono = findWhitepaper("the-behavioral-enterprise");
  return (
    <>
      <Hero
        crumbs={[{ label: "Home", href: routes.home }, { label: "Platform" }, { label: "The science" }]}
        eyebrow="The science & methodology"
        title="Built on the most researched model of working style."
        lead="Corporate Brain and Decode rest on the Big Five and on our own research, THE BRAIN. Here is how it works, what the evidence supports, and where its limits are."
        actions={[
          { label: "Read the research", href: researchHref },
          { label: "See how it works", href: routes.howItWorks },
        ]}
        side={<img src="/site/1d8f1936.webp" alt="A researcher at work in a laboratory" className="aspect-[3/2] w-full rounded-2xl object-cover" />}
      />

      <Band>
        <Head eyebrow="The foundation" title="The Big Five, in plain words." lead="Five broad traits that decades of research have linked to how people work, decide and get along." />
        <ul className="m-0 grid list-none grid-cols-2 gap-4 p-0 md:grid-cols-3 lg:grid-cols-5">
          {bigFive.map(([t, d], i) => (
            <li key={t} className={`rounded-xl border-t-4 bg-cloud p-5 ${accents.bar[i % 3]}`}>
              <span className={`font-display text-[30px] font-bold ${accents.text[i % 3]}`}>{t[0]}</span>
              <h3 className="mt-1 text-[16px] font-semibold text-ink">{t}</h3>
              <p className="mt-1 text-[13.5px] text-ink-body">{d}</p>
            </li>
          ))}
        </ul>
      </Band>

      <Band tone="navy">
        <Head
          dark
          eyebrow="Our research"
          title="THE BRAIN: Behavioural Reasoning and Interaction Network."
          lead="Our own framework adds what most personality tools leave out: how people's traits interact inside a team, and how that changes with the role and the goal."
        />
        <Steps
          onDark
          cols={4}
          items={[
            { title: "Traits", text: "Each person's Big Five profile, from a short assessment or game." },
            { title: "Interactions", text: "How traits combine when people work together, not just alone." },
            { title: "Archetypes", text: "Ten Corporate Brain archetypes give a primary and secondary working style." },
            { title: "Context", text: "Role, industry and company goal shape what “good fit” means." },
          ]}
        />
      </Band>

      <Band>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-green-tint p-7">
            <h3 className="text-[18px] font-semibold text-green-ink">What the evidence supports</h3>
            <ul className="m-0 mt-4 list-none space-y-3 p-0">
              {supports.map((s) => (
                <li key={s} className="flex gap-2.5 text-[14.5px] text-ink">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-amber-tint p-7">
            <h3 className="text-[18px] font-semibold text-gold-ink">What we are still testing</h3>
            <ul className="m-0 mt-4 list-none space-y-3 p-0">
              {testing.map((s) => (
                <li key={s} className="flex gap-2.5 text-[14.5px] text-ink">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-5 text-[14px] text-ink-muted">We say so openly. Results are one source of evidence, and people make the final call.</p>
      </Band>

      <Band tone="cloud">
        <Head eyebrow="How we keep it fair" title="Science used responsibly." />
        <Steps
          cols={4}
          items={[
            { title: "Shorthand, not labels", text: "Archetypes describe a tendency today. People can retake assessments and change." },
            { title: "Reasons shown", text: "Every suggestion explains itself in plain words." },
            { title: "Fair by default", text: "Personality alone never decides hiring, promotion or termination." },
            { title: "Real roles", text: "Decode games are built around 85 roles across 14 industries." },
          ]}
        />
      </Band>

      {mono && (
        <Band>
          <div className="grid items-center gap-8 rounded-2xl bg-navy p-7 text-white md:grid-cols-[200px_1fr] md:p-10">
            <Image src={mono.cover} alt="Cover of The Behavioral Enterprise" width={200} height={283} className="mx-auto h-auto w-[150px] rounded shadow-2xl md:w-full" />
            <div>
              <p className="m-0 text-[12px] font-semibold tracking-[0.1em] text-amber uppercase">Go deeper</p>
              <h2 className="mt-2 text-[clamp(24px,2.8vw,34px)] font-bold">Read the full 104-page research.</h2>
              <p className="mt-2 text-on-navy">By Srishti Sharma and Sandeep Kumar.</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <GetPdf slug={mono.slug}>Get the PDF</GetPdf>
                <Link href={researchHref} className="font-semibold text-white underline">
                  About the research →
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {deeper.map((d, i) => (
              <Link key={d.title} href={d.href} className={`block rounded-xl border-t-4 bg-cloud p-5 no-underline hover:shadow-md ${accents.bar[i]}`}>
                <span className="font-display block text-[17px] font-semibold text-ink">{d.title} →</span>
                <span className="mt-1 block text-[14px] text-ink-body">{d.text}</span>
              </Link>
            ))}
          </div>
        </Band>
      )}

      <Band tone="cloud">
        <Head eyebrow="Key references" title="The research we build on." />
        <ul className="m-0 list-none p-0">
          {references.map(([r, j]) => (
            <li key={r} className="border-b border-rule py-3 text-[14.5px] text-ink">
              {r} <em className="text-ink-muted">{j}</em>
            </li>
          ))}
        </ul>
      </Band>

      <Closing
        title="See the science working on your team."
        text="Book a free assessment call, or a walkthrough of Corporate Brain."
        actions={[
          { label: "Book a free assessment", href: routes.snapshot },
          { label: "Get a demo", href: enquiryHref("demo") },
        ]}
      />
      <WhitepaperLibrary papers={downloadable} variant="dialog" />
    </>
  );
}
