import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock, FaqList, PageHero } from "@/components/blocks";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — People Analytics and Corporate Brain",
  description:
    "Answers to common questions about people analytics and Corporate Brain: how the science works, accuracy, using it in your organization, data privacy and pricing.",
  alternates: { canonical: routes.faq },
};

type Group = { label: string; title: string; items: { q: string; a: string }[] };

const groups: Group[] = [
  {
    label: "About Corporate Brain",
    title: "About Corporate Brain",
    items: [
      { q: "What is Corporate Brain?", a: "Corporate Brain is a behavioral analytics and people management platform. It maps each person's working style and skills against company goals, then suggests who should lead projects, who should take tasks, and how managers can support each person." },
      { q: "What is people analytics?", a: "People analytics is the use of data about how people work — their skills, working styles, workload and collaboration — to make better decisions about teams, hiring and leadership." },
      { q: "How is Corporate Brain different from a psychometric test?", a: "A test gives a one-off score. Corporate Brain uses working-style data as one input into ongoing workforce intelligence: team composition, task allocation, leadership insights and progress over time." },
      { q: "Which departments can use Corporate Brain?", a: "All of them. Sales, operations, engineering, HR, finance and leadership teams each get views suited to how they work." },
      { q: "What is a working-style archetype?", a: "An archetype is a short name for how someone tends to work, such as Driver, Integrator or Executor. Every person gets a main and a secondary one." },
    ],
  },
  {
    label: "Results and accuracy",
    title: "Results and accuracy",
    items: [
      { q: "Is the Big Five reliable for workplace decisions?", a: "The Big Five is the most widely researched model of personality. Corporate Brain treats results as one input alongside interviews, work samples and performance records — never the only one." },
      { q: "Can employees fake their answers?", a: "Self-reported answers can be shaded, especially in hiring. Corporate Brain marks borderline scores and offers Gamified Assessments, which observe behavior directly." },
      { q: "How long does the questionnaire take?", a: "About 4 minutes: 20 short statements rated from very inaccurate to very accurate." },
      { q: "Do results change over time?", a: "Yes. Employees can retake the questionnaire and see what changed." },
    ],
  },
  {
    label: "Using it",
    title: "Using it in your organization",
    items: [
      { q: "How does AI task allocation work?", a: "For each task, Brain suggests ranks the best and second-best person by skill fit, working style and current workload, and shows the reasons. A manager always decides." },
      { q: "Can we use Corporate Brain for hiring?", a: "Yes. Create an opening, send matching assessments, move candidates from Applied to Hired and compare fit." },
      { q: "Can we export reports?", a: "Yes. Reports export to PDF or Excel, and every Excel file includes a Read me sheet." },
      { q: "Does it integrate with our ATS or HRMS?", a: "Corporate Brain connects to other systems through its API. Get a demo to check your tools." },
    ],
  },
  {
    label: "Data and privacy",
    title: "Data and privacy",
    items: [
      { q: "Is employee data secure?", a: "Every customer gets a separate database, results are shown by role, and admins can require two-step sign-in." },
      { q: "Is Corporate Brain aligned with India's DPDP Act?", a: "Our privacy practices are designed around the DPDP Act, including notice, consent, correction and erasure, and a grievance contact." },
      { q: "Who can see an employee's results?", a: "The employee sees their own profile first. Managers and leaders see only what their role requires." },
    ],
  },
  {
    label: "Pricing",
    title: "Pricing",
    items: [
      { q: "How much does Corporate Brain cost?", a: "₹10,000 per Leadership seat, ₹5,000 per Manager seat and ₹2,000 per Employee seat, per month, plus optional credits." },
      { q: "Is there a free version?", a: "You can take the free 4-minute working-style snapshot on our website. For your team, get a demo." },
    ],
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) => g.items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } }))),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "FAQ" }]}
        label={{ icon: "target", text: "Frequently asked questions", color: "gold" }}
        title="Answers about people analytics and"
        accent="Corporate Brain."
        lead="Everything buyers usually ask before a demo — from how the science works to pricing and data privacy."
      >
        <p className="mt-6 text-on-navy-muted">
          Jump to:{" "}
          {groups.map((g, i) => (
            <span key={g.title}>
              {i > 0 && " · "}
              <Link href={`#faq-${i}`} className="text-on-navy-soft underline">
                {g.title}
              </Link>
            </span>
          ))}
        </p>
      </PageHero>
      {groups.map((g, i) => (
        <div key={g.title} id={`faq-${i}`} className="scroll-mt-20">
          <FaqList tone={i % 2 === 0 ? "light" : "dark"} label={{ icon: "target", text: g.label, color: i % 2 === 0 ? "link" : "lime" }} title={g.title} items={g.items} />
        </div>
      ))}
      <CtaBlock tone="dark" title="Still have a question?" text="Our team will answer it on a short call." actions={[{ label: "Get a demo", href: routes.demo }]} />
    </>
  );
}
