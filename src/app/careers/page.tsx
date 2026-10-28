import type { Metadata } from "next";
import { CardGrid, CtaBlock, PageHero, SplitIntro } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
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

const field = "w-full rounded-lg border border-rule-strong bg-white px-4 py-3.5 text-base text-ink";
const labelCls = "mb-1.5 block text-sm font-bold";

function ApplicationForm() {
  return (
    // Submission (with CV upload) is switched on with the other forms in round 4.
    <form className="grid gap-5 md:grid-cols-2" aria-describedby="apply-note">
      <div>
        <label htmlFor="ap-name" className={labelCls}>Full name *</label>
        <input id="ap-name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="ap-email" className={labelCls}>Email *</label>
        <input id="ap-email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="ap-phone" className={labelCls}>Phone</label>
        <input id="ap-phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor="ap-link" className={labelCls}>LinkedIn or portfolio URL</label>
        <input id="ap-link" name="link" type="url" className={field} />
      </div>
      <div>
        <label htmlFor="ap-role" className={labelCls}>Role you&apos;re applying for *</label>
        <select id="ap-role" name="role" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose a role
          </option>
          {roles.map((r) => (
            <option key={r.value}>{r.value}</option>
          ))}
          <option>General application</option>
        </select>
      </div>
      <div>
        <label htmlFor="ap-cv" className={labelCls}>Resume / CV (PDF) *</label>
        <input id="ap-cv" name="cv" type="file" accept="application/pdf" required className={`${field} py-3 text-sm`} />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="ap-why" className={labelCls}>Why Brain Interacts?</label>
        <textarea id="ap-why" name="why" rows={5} className={field} />
      </div>
      <label className="flex gap-3 text-sm leading-[1.6] text-ink-body md:col-span-2">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0" />
        <span>
          I agree to Brain Interacts storing my application for recruitment purposes. See our{" "}
          <a href={routes.privacy} className="text-ink-link underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      <div className="md:col-span-2">
        <button type="submit" disabled className="rounded-lg bg-navy px-6 py-4 text-base font-bold text-white disabled:cursor-not-allowed disabled:opacity-60 max-md:w-full">
          Submit application
        </button>
        <p id="apply-note" className="mt-3 text-sm text-ink-muted">
          Online applications open at launch. Until then, email your CV to{" "}
          <a href={`mailto:${site.email}?subject=Job%20application`} className="text-ink-link underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </form>
  );
}

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
          <ApplicationForm />
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
