import { site } from "@/lib/site";
import type { Card, Hero } from "@/lib/types";

const home = { label: "Home", href: "/" };

type Page = { path: string; title: string; description: string; hero: Hero };

export const demoPage = {
  path: "/demo",
  title: "Request a Demo of Corporate Brain",
  description:
    "See Corporate Brain and Gamified Assessments in a 30-minute walkthrough tailored to your organization's size and goals.",
  hero: {
    crumbs: [home, { label: "Request a demo" }],
    eyebrow: "Product walkthrough",
    title: "Request a demo of Corporate Brain and Gamified Assessments",
    lead: "See how behavioral evidence connects individual strengths with team and company decisions. Tell us what you need to understand.",
  },
  aside: {
    eyebrow: "What you’ll see",
    title: "A walkthrough shaped around your questions",
    items: [
      "Corporate Brain dashboards with sample team data",
      "A gamified assessment from the candidate’s side",
      "How insight reaches managers and leaders",
      "A rollout and pricing conversation for your organization",
    ],
    link: { label: "Looking for consulting? Schedule a diagnostic.", href: "/diagnostic" },
  },
} satisfies Page & Record<string, unknown>;

export const diagnosticPage = {
  path: "/diagnostic",
  title: "Schedule a Behavioral Diagnostic",
  description:
    "Book a diagnostic call with a behavioral scientist and an enterprise strategist to scope the people problem behind your business results.",
  hero: {
    crumbs: [home, { label: "Schedule a diagnostic" }],
    eyebrow: "Organizational diagnostic",
    title: "Schedule a diagnostic: start with the problem your data can’t explain",
    lead: "Start with the business question. We’ll discuss the situation, the evidence you have, and what a focused diagnostic could uncover.",
  },
  steps: [
    { title: "Tell us the problem", body: "Share the situation and the teams involved." },
    { title: "Explore the evidence", body: "Discuss the question with our advisory team." },
    { title: "Agree the next step", body: "Receive a proposed scope, timeline and fee." },
  ],
  link: { label: "Looking for a product demo instead?", href: "/demo" },
} satisfies Page & Record<string, unknown>;

export const contactPage = {
  path: "/contact",
  title: "Contact Us",
  description:
    "Contact Brain Interacts about our platforms, consulting, partnerships or support. Choose the right route and we'll reply quickly.",
  hero: {
    crumbs: [home, { label: "Contact" }],
    eyebrow: "Contact",
    title: "Contact Brain Interacts",
    lead: "Questions about our platforms, consulting or partnerships? Choose the route that fits.",
  },
} satisfies Page;

const supportMail = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export const contactRoutes: Card[] = [
  { title: "Product demos", body: "See Corporate Brain and Gamified Assessments.", href: "/demo", accent: "green" },
  { title: "Consulting", body: "Talk to us about a people problem.", href: "/diagnostic", accent: "gold" },
  {
    title: "Customer support",
    body: "Help with your Corporate Brain account.",
    href: supportMail("Corporate Brain support"),
    accent: "blue",
  },
  {
    title: "Partnerships and media",
    body: "Start a conversation with our team.",
    href: supportMail("Partnership or media"),
    accent: "aqua",
  },
];

export const fincheckWaitlist = {
  eyebrow: "Early partners",
  title: "Become an early partner",
  items: [
    "Request access ahead of public launch",
    "Help shape the roadmap",
    "Discuss models and reporting for your institution",
  ],
};
