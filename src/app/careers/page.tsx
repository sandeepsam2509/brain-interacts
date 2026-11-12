/* eslint-disable @next/next/no-img-element -- static design image */
import type { Metadata } from "next";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { Band, Head, Hero, Steps } from "@/components/v3";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Brain Interacts: a small team of researchers, engineers and sellers building people analytics for Indian companies.",
  alternates: { canonical: routes.careers },
};

// Open roles still to be confirmed before launch.
const roles = [
  { team: "Engineering", title: "Full-Stack Engineer (Next.js, Node)", value: "Full-Stack Engineer" },
  { team: "Science", title: "Behavioral Data Scientist", value: "Behavioral Data Scientist" },
  { team: "Sales", title: "Enterprise Account Executive, People Analytics", value: "Enterprise Account Executive" },
];

export default function CareersPage() {
  return (
    <>
      <Hero
        crumbs={[{ label: "Home", href: routes.home }, { label: "Careers" }]}
        eyebrow="Careers"
        title="Help workplaces understand their people."
        lead="We are a small team of researchers, engineers and sellers building people analytics for Indian companies. Come build it with us."
        actions={[{ label: "See open roles", href: "#open-roles" }]}
        side={<img src="/site/7e00bc9e.webp" alt="Colleagues working together in an office" className="aspect-[3/2] w-full rounded-2xl object-cover" />}
      />

      <Band>
        <Head eyebrow="How we work" title="What you can expect here." />
        <Steps
          items={[
            { title: "Research first", text: "We start from evidence, and we say what we don't know." },
            { title: "Built for the role", text: "We design for the real job, not a generic user." },
            { title: "Growth, not judgement", text: "We give each other the same feedback we'd want our customers to get." },
          ]}
        />
        <p className="mt-5 text-[14px] text-ink-muted">Our hiring process is structured and the same for every candidate. Assessments are one input, never the only one.</p>
      </Band>

      <Band tone="cloud" id="open-roles">
        <Head eyebrow="Open roles" title={`${roles.length} open roles.`} />
        <ul className="m-0 list-none space-y-3 p-0">
          {roles.map((r) => (
            <li key={r.title}>
              <a href="#apply" className="flex flex-col justify-between gap-2 rounded-xl bg-white p-5 no-underline hover:shadow-md md:flex-row md:items-center">
                <span>
                  <span className="font-display block text-[18px] font-semibold text-ink">{r.title}</span>
                  <span className="text-[14px] text-ink-muted">{r.team} · India / Remote · Full-time</span>
                </span>
                <span className="font-semibold text-ink underline">Apply →</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-ink-body">
          Don&apos;t see your role? Send a general application below, or{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline">
            write to us
          </a>
          .
        </p>
      </Band>

      <Band id="apply">
        <Head eyebrow="Apply" title="Apply now." />
        <div className="max-w-[860px]">
          <ApplicationForm roles={roles.map((r) => r.value)} />
        </div>
      </Band>
    </>
  );
}
