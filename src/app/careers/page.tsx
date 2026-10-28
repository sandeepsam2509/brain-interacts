import type { Metadata } from "next";
import { CardGrid, CtaBlock, PageHero, SplitIntro } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Brain Interacts and help teams understand the people behind the work. See open roles and how we hire.",
  alternates: { canonical: routes.careers },
};

// Open roles still to be confirmed before launch.
const roles = [
  { team: "Engineering", title: "Full-Stack Engineer (Next.js, Node)", value: "Full-Stack Engineer" },
  { team: "Science", title: "Behavioral Data Scientist", value: "Behavioral Data Scientist" },
  { team: "Sales", title: "Enterprise Account Executive — People Analytics", value: "Enterprise Account Executive" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "Careers" }]}
        label={{ icon: "briefcase", text: "Careers", color: "lime" }}
        title="Help teams understand"
        accent="the people behind the work."
        accentColor="lime"
        lead="We're building tools that turn behavioral science into better decisions about people. If that excites you, we'd like to meet you."
        actions={[
          { label: "See open roles", href: "#open-roles" },
          { label: "Send a general application", href: "#apply", variant: "outlineDark" },
        ]}
      />

      <SplitIntro
        tone="light"
        label={{ icon: "target", text: "Why join us", color: "link" }}
        title="Small team. Big problem. Real science."
        paragraphs={[
          "Most workplace problems are really fit problems — and we're building the platform that helps companies see them.",
          "You'll work across products used by HR leaders, founders and lenders, with a team that cares about getting the science right and using it fairly.",
        ]}
      />

      <CardGrid
        tone="dark"
        columns={4}
        label={{ icon: "flow", text: "How we work", color: "gold" }}
        title="What we value."
        cards={[
          { title: "Evidence over opinion", rule: "gold", text: "We test ideas, cite our sources and change our minds when the data says so." },
          { title: "Fair by default", rule: "sky", text: "We hold our own hiring to the standards we ask of our customers." },
          { title: "Explain the why", rule: "lime", text: "Every decision — like every recommendation in our product — comes with its reasons." },
          { title: "Grow on purpose", rule: "white", text: "Strengths and development areas are things we talk about openly." },
        ]}
      />

      <CardGrid
        tone="light"
        columns={4}
        label={{ icon: "people", text: "How we hire", color: "green" }}
        title="We practice what we build."
        cards={[
          { tag: "Step 01", title: "Apply", rule: "amber", text: "Send your CV and a few lines on why you're interested." },
          { tag: "Step 02", title: "Intro call", rule: "blue", text: "A short conversation about you and the role." },
          { tag: "Step 03", title: "Assess", rule: "green", text: "A working-style assessment and a role-relevant task." },
          { tag: "Step 04", title: "Meet the team", rule: "navy", text: "Structured interviews, then a decision with reasons." },
        ]}
        footnote="Our process is structured and the same for every candidate. Assessments are one input — never the only one."
      />

      <Section tone="dark" id="open-roles" className="scroll-mt-20">
        <Eyebrow icon="briefcase" color="sky">
          Open roles
        </Eyebrow>
        <H2 className="mb-10">Current openings.</H2>
        <ul className="m-0 list-none border-t border-navy-line p-0">
          {roles.map((r) => (
            <li key={r.title} className="grid items-center gap-2 border-b border-navy-line py-6 md:grid-cols-[160px_1fr_220px_120px] md:gap-6">
              <span className="font-mono text-xs text-sky uppercase">{r.team}</span>
              <strong className="text-lg">{r.title}</strong>
              <span className="text-on-navy">India / Remote · Full-time</span>
              <a href="#apply" className="font-bold text-lime no-underline hover:underline md:text-right">
                Apply <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-on-navy">Don&apos;t see your role? Send a general application below.</p>
      </Section>

      <Section tone="light" id="apply" className="scroll-mt-20">
        <Eyebrow icon="spark" color="goldInk">
          Apply
        </Eyebrow>
        <H2 className="mb-10">Apply now.</H2>
        <div className="max-w-[860px]">
          <ApplicationForm roles={roles.map((r) => r.value)} />
        </div>
      </Section>

      <CtaBlock
        tone="dark"
        title="Questions about working with us?"
        text="Write to us and we'll get back to you."
        actions={[{ label: "Email the team", href: `mailto:${site.email}` }]}
      />
    </>
  );
}
