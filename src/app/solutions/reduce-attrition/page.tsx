/* eslint-disable @next/next/no-img-element -- static design images */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleCard, wpHref } from "@/components/resources/parts";
import { Band, Closing, Head, Hero, Steps, btn } from "@/components/v3";
import { resources } from "@/content/resources";
import { findStory, storyHref } from "@/content/stories";
import { findWhitepaper } from "@/content/whitepapers";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reduce Attrition",
  description: "Exit interviews tell you too late. Behavioral evidence shows who is at risk and why, early enough for managers to act.",
  alternates: { canonical: routes.reduceAttrition },
};

export default function ReduceAttritionPage() {
  const story = findStory("pune-techtrol-gen-z-attrition");
  const paper = findWhitepaper("beyond-the-bonus");
  const reads = resources.filter((r) => r.type === "articles" && r.topic === "Motivation & retention" && r.cover).slice(0, 2);

  return (
    <>
      <Hero
        crumbs={[{ label: "Home", href: routes.home }, { label: "Solutions" }, { label: "Reduce attrition" }]}
        eyebrow="Solution · Reduce attrition"
        title="Keep good people, by knowing why they leave."
        lead="Exit interviews tell you too late. Behavioral evidence shows who is at risk and why, early enough for managers to act."
        actions={[
          { label: "Get a demo", href: enquiryHref("demo") },
          { label: "Estimate your payback", href: routes.payback },
        ]}
        side={
          <div className="relative">
            <img src="/site/793df1a3.webp" alt="Colleagues talking at work" className="aspect-[3/2] w-full rounded-2xl object-cover" />
            <div className="absolute -bottom-5 left-5 max-w-[300px] rounded-xl bg-white p-4 text-ink shadow-xl">
              <p className="m-0 text-[11px] font-semibold tracking-[0.1em] text-brand-red uppercase">Early signal</p>
              <p className="m-0 mt-1 font-semibold">3 people in Ops show flight-risk patterns</p>
              <p className="m-0 mt-1 text-[13px] text-ink-muted">Cause: role mismatch, not pay · Example</p>
            </div>
          </div>
        }
      />

      <Band>
        <Head eyebrow="The problem" title="Attrition is usually a fit problem in disguise." />
        <Steps
          items={[
            { title: "Exits you didn't see coming", text: "Strong performers resign and nobody saw the signs." },
            { title: "Wrong fixes", text: "Pay rises and perks, when the real cause is the role, the manager or the team mix." },
            { title: "The first 90 days", text: "New hires leave before they ever become productive." },
          ]}
        />
      </Band>

      <Band tone="navy">
        <Head dark eyebrow="How we help" title="Cause, signal, hire, act." />
        <Steps
          onDark
          cols={4}
          items={[
            { title: "Find the real cause", text: "Root cause analytics studies the people who stay and the people who leave, and finds the pattern.", link: { label: "Root cause analytics", href: routes.rootCause } },
            { title: "See risk early", text: "Corporate Brain flags role and team mismatches before they turn into resignations.", link: { label: "Corporate Brain", href: routes.corporateBrain } },
            { title: "Hire for fit", text: "Decode job games check fit for the real role before the offer letter.", link: { label: "Decode", href: routes.gamified } },
            { title: "Act and measure", text: "Managers get coaching guides for each working style, and you track the change.", link: { label: "Corporate Brain", href: routes.corporateBrain } },
          ]}
        />
      </Band>

      {story && (
        <Band tone="cloud">
          <Link href={storyHref(story)} className="grid overflow-hidden rounded-2xl bg-white no-underline hover:shadow-lg md:grid-cols-[1fr_1.3fr]">
            <img src="/site/793df1a3.webp" alt="" className="h-full min-h-[220px] w-full object-cover" />
            <span className="flex flex-col justify-center p-7 md:p-10">
              <span className="text-[12px] font-semibold tracking-[0.1em] text-brand-red uppercase">Customer story · {story.industry}</span>
              <span className="font-display mt-2 block text-[clamp(22px,2.4vw,30px)] font-bold text-ink">{story.title}</span>
              <span className="mt-2 block text-ink-body">{story.challenge}</span>
              <span className="font-display mt-4 block text-[40px] leading-none font-bold text-gold-ink">{story.stats?.[0]?.value}</span>
              <span className="mt-4 font-semibold text-ink underline">Read the story →</span>
            </span>
          </Link>
        </Band>
      )}

      <Band>
        <div className="grid items-center gap-8 rounded-2xl bg-amber-tint p-7 md:grid-cols-[1.4fr_1fr] md:p-10">
          <div>
            <Head eyebrow="What is it costing you?" color="amber" title="Every regretted exit costs you hiring, training and lost output." />
            <p className="-mt-4 text-ink-body">Our payback estimator shows how fewer regretted exits could pay for Corporate Brain.</p>
          </div>
          <Link href={routes.payback} className={`${btn.red} justify-self-start md:justify-self-end`}>
            Try the payback estimator
          </Link>
        </div>
      </Band>

      <Band tone="cloud">
        <Head eyebrow="Read more" title="On motivation and retention." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {paper && (
            <Link href={wpHref(paper.slug)} className="group flex flex-col rounded-xl border border-rule bg-white p-5 no-underline">
              <Image src={paper.cover} alt={`Cover of ${paper.title}`} width={160} height={226} className="h-auto w-[110px] rounded shadow" />
              <span className="mt-4 text-[11.5px] font-semibold tracking-[0.1em] text-gold-ink uppercase">Whitepaper</span>
              <span className="font-display mt-1 text-[17px] font-semibold text-ink">{paper.title}</span>
              <span className="mt-auto pt-3 text-[14px] font-semibold text-ink underline">Get the PDF →</span>
            </Link>
          )}
          {reads.map((r, i) => (
            <ArticleCard key={r.id} item={r} i={i} />
          ))}
          <Link href="/resources/topics/motivation-and-retention" className="flex flex-col justify-end rounded-xl bg-navy p-5 text-white no-underline">
            <span className="text-[11.5px] font-semibold tracking-[0.1em] text-amber uppercase">Topic</span>
            <span className="font-display mt-1 text-[18px] font-semibold">All motivation &amp; retention resources →</span>
            <span className="mt-1 text-[13px] text-on-navy">Articles, whitepaper, story</span>
          </Link>
        </div>
      </Band>

      <Closing
        title="See who is at risk, before they resign."
        text="A live walkthrough of Corporate Brain on your own teams."
        actions={[
          { label: "Get a demo", href: enquiryHref("demo") },
          { label: "Talk to us about attrition", href: routes.contact },
        ]}
      />
    </>
  );
}
