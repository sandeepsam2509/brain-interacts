import type { Metadata } from "next";
import { CardGrid, PageHero, SplitIntro, SplitList, Steps } from "@/components/blocks";
import { Section } from "@/components/ui";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "FinCheck — Behavioral Credit Risk for Lenders",
  description:
    "FinCheck combines behavioral psychology, real-time repayment indexes and traditional credit checks into one risk assessment engine for banks, NBFCs and neobanks.",
  alternates: { canonical: routes.finCheck },
};

const trail = [{ label: "Home", href: routes.home }, { label: "Products", href: routes.corporateBrain }, { label: "FinCheck" }];

export default function FinCheckPage() {
  return (
    <>
      <PageHero
        trail={trail}
        label={{ icon: "grid", text: "FinCheck · credit intelligence & behavioral risk", color: "sky" }}
        title="Beyond credit scores:"
        accent="decode customer financial intent."
        accentColor="sky"
        lead="FinCheck integrates behavioral psychology, real-time repayment indexes and traditional credit checks into one multi-layered risk assessment engine for banks, NBFCs and neobanks."
        actions={[
          { label: "Get a demo", href: routes.demo, variant: "sky" },
          // API docs aren't public yet; this goes to the contact page for now.
          { label: "Explore API documentation", href: routes.contact, variant: "outlineDark" },
        ]}
      />

      <SplitIntro
        tone="light"
        label={{ icon: "grid", text: "Overview", color: "link" }}
        title="Credit scores show what a customer did. FinCheck shows how they decide today."
        paragraphs={[
          "FinCheck combines psychometric risk profiling with algorithmic analysis of financial behavior.",
          "By adding dynamic behavioral data to existing bureau checks and repayment indexes, it helps lenders underwrite with more confidence, expand their addressable market safely, and spot default risk before it happens.",
        ]}
      />

      <CardGrid
        tone="dark"
        label={{ icon: "grid", text: "Three layers", color: "gold" }}
        title="Behavior, repayment and credit — in one risk view."
        cards={[
          {
            title: "Behavioral intent & psychometric risk",
            rule: "gold",
            details: [
              { heading: "Psychometric risk profiling", text: "Captures decision-making speed, risk tolerance and impulse control through short, non-intrusive interactive assessments." },
              { heading: "Financial Intent Index", text: "Separates a borrower's ability to pay from their willingness to pay." },
            ],
          },
          {
            title: "Repayment index & alternative data",
            rule: "sky",
            details: [
              { heading: "Real-time repayment tracking", text: "Dynamic scoring that updates with micro-repayment patterns, velocity and transaction behavior." },
              { heading: "Synthetic credit history", text: "Accurate risk profiles for thin-file, new-to-credit and underserved borrowers." },
            ],
          },
          {
            title: "Multi-layered credit integration",
            rule: "lime",
            details: [
              { heading: "Bureau aggregation", text: "Harmonizes traditional bureau scores with behavioral metrics into a single unified risk score." },
              { heading: "Early Warning Indicator", text: "Alerts you in real time when a customer's behavior signals financial stress or likely default." },
            ],
          },
        ]}
      />

      <Steps
        tone="light"
        large
        label={{ icon: "flow", text: "How it works", color: "green" }}
        title="Engage. Analyze. Underwrite."
        steps={[
          { title: "Engage", subtitle: "Interactive, non-intrusive assessment", accent: "amber", text: "During an application, customers complete a quick, gamified behavioral check inside your own app flow." },
          { title: "Analyze", subtitle: "Behavior + credit, fused", accent: "blue", text: "FinCheck combines behavioral metrics, bureau history and repayment behavior into its Risk Matrix." },
          { title: "Underwrite", subtitle: "Real-time score via API", accent: "green", text: "Get a full risk profile and an approve-or-flag recommendation directly in your origination system." },
        ]}
      />

      <SplitList
        tone="dark"
        label={{ icon: "chart", text: "Enterprise scale", color: "sky" }}
        title="Built to plug into your lending stack."
        features={[
          { title: "API-first architecture", text: "Lightweight REST APIs and SDKs for fast integration into lending systems and mobile banking apps." },
          { title: "Security & compliance", text: "Encrypted connections, role-based access and privacy practices designed around India's DPDP Act." },
          { title: "Explainable models", text: "Objective behavioral frameworks, with every risk signal explained so decisions can be reviewed." },
        ]}
      />

      <CardGrid
        tone="light"
        label={{ icon: "chart", text: "Impact", color: "goldInk" }}
        title="What it changes for lenders."
        cards={[
          { title: "Reduce NPLs", text: "Detect high-risk intent early and lower default rates on unsecured loans." },
          { title: "Expand eligibility", text: "Lend safely to thin-file and new-to-credit applicants without inflating risk." },
          { title: "Convert more", text: "Friction-free, interactive onboarding keeps drop-off low compared with paper-heavy evaluations." },
        ]}
      />

      <Section tone="dark" id="early-access" className="scroll-mt-20" innerClassName="py-16 md:py-[104px]">
        <div className="text-center">
          <p className="inline-block rounded-full border border-sky px-3 py-1 font-mono text-xs text-sky">EARLY ACCESS</p>
          <h2 className="mt-5 text-[clamp(32px,4vw,52px)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            Want <span className="text-sky">early access?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-lg leading-[1.7] text-on-navy">
            We&apos;re talking to a small group of financial institutions ahead of launch.
          </p>
          {/* Takes the visitor to the demo form on the Contact page with their email and FinCheck already filled in. */}
          <form action={routes.demo} method="get" className="mx-auto mt-8 flex max-w-[520px] flex-col gap-3 sm:flex-row">
            <input type="hidden" name="interest" value="FinCheck" />
            <label htmlFor="fc-early" className="sr-only">
              Work email
            </label>
            <input
              id="fc-early"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Work email"
              className="min-w-0 flex-1 rounded-lg border border-navy-line bg-navy-raised px-4 py-4 text-base text-white placeholder:text-on-navy-muted"
            />
            <button type="submit" className="rounded-lg bg-sky px-6 py-4 text-base font-bold text-navy hover:bg-[#82cbf8]">
              Get a demo
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
