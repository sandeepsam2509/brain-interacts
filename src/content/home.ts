import type { PageContent } from "@/lib/types";
import { renders } from "./images";

export const homePage: PageContent = {
  path: "/",
  title: "Brain Interacts",
  description:
    "Team analytics, behavioral analysis and workforce analytics for enterprises and growing businesses. See how your people think, decide and deliver.",
  hero: {
    crumbs: [],
    eyebrow: "Team analytics · Behavioral analysis · Workforce analytics",
    title: "See how your teams actually work.",
    lead: "Your org chart shows who reports to whom. Brain Interacts shows how people think, decide and collaborate, and connects it to delivery, attrition and growth.",
    actions: [
      { label: "Request a Demo", href: "/demo" },
      { label: "Schedule a Diagnostic", href: "/diagnostic", variant: "secondary" },
    ],
    visual: renders.home,
  },
  sections: [
    {
      type: "cards",
      eyebrow: "Platforms",
      title: "One behavioral analytics engine. Three platforms.",
      intro:
        "Every Brain Interacts product reads the same signals: how people decide, collaborate and perform under pressure. The difference is where you apply them.",
      columns: 3,
      cards: [
        {
          tag: "Flagship platform",
          title: "Corporate Brain",
          body: "Team analytics, behavioral and technical assessments, and operations management in one view.",
          href: "/platforms/corporate-brain",
          accent: "green",
        },
        {
          tag: "Coming soon",
          title: "Gamified Assessments",
          body: "Interactive challenges that capture how people really decide, solve problems and adapt, without self-report or rehearsed answers.",
          href: "/platforms/gamified-assessments",
          accent: "gold",
        },
        {
          tag: "Coming soon",
          title: "FinCheck",
          body: "Behavioral analysis built for neo-banks, NBFCs and banks.",
          href: "/platforms/fincheck",
          accent: "blue",
        },
      ],
      links: [{ label: "Compare platforms", href: "/platforms" }],
    },
    {
      type: "cards",
      eyebrow: "Services",
      title: "Expert help for the problems dashboards can’t explain",
      intro:
        "Our organizational psychologists and strategists use your team data to diagnose the human causes behind business results, then help you fix them.",
      columns: 2,
      cards: [
        {
          tag: "01",
          title: "Root Cause Analysis",
          body: "Find the real reason behind turnover, stalled projects and missed targets.",
          href: "/services/root-cause-analysis",
          accent: "blue",
        },
        {
          tag: "02",
          title: "Psychometric Consulting",
          body: "Expert leadership assessment for hiring, promotion and succession decisions.",
          href: "/services/psychometric-consulting",
          accent: "gold",
        },
        {
          tag: "03",
          title: "Corporate Culture Study",
          body: "Map how your culture really works, beyond engagement scores.",
          href: "/services/organizational-culture-assessment",
          accent: "green",
        },
        {
          tag: "04",
          title: "Mental Health Workshops",
          body: "Reduce burnout at its source and measure whether it worked.",
          href: "/services/corporate-mental-health-workshops",
          accent: "aqua",
        },
      ],
      links: [{ label: "See all services", href: "/services" }],
    },
    {
      type: "cards",
      eyebrow: "Who it’s for",
      title: "Evidence for every people decision, at every level",
      columns: 3,
      cards: [
        {
          title: "For Leadership",
          body: "Workforce analytics that show capability, culture and people risk across the business.",
          href: "/for/leadership",
          accent: "green",
        },
        {
          title: "For Managers",
          body: "Team analytics that help you staff work on evidence, not instinct.",
          href: "/for/managers",
          accent: "gold",
        },
        {
          title: "For Employees",
          body: "Understand how you think and work, and where to grow next.",
          href: "/for/employees",
          accent: "blue",
        },
      ],
    },
    {
      type: "steps",
      eyebrow: "How it works",
      title: "From first signal to board-ready insight",
      steps: [
        {
          title: "Define the question",
          body: "We agree the decision in front of you: a hire, a restructure, a delivery or retention problem.",
        },
        {
          title: "Capture how teams work",
          body: "People complete short behavioral and gamified assessments. Corporate Brain connects them to skills and project data.",
        },
        {
          title: "See the patterns",
          body: "Team and workforce analytics show strengths, gaps and risks across people, teams and projects.",
        },
        { title: "Act and track", body: "Leaders act on the findings and watch the metrics move." },
      ],
      link: { label: "See the full process", href: "/how-it-works" },
    },
    {
      type: "cards",
      eyebrow: "Why Brain Interacts",
      title: "Why enterprises and growing businesses choose us",
      columns: 3,
      cards: [
        {
          title: "Scientific rigour",
          body: "Every measure is built on established organizational psychology and validated psychometric models, applied with research discipline.",
          accent: "green",
        },
        {
          title: "Behavior, not opinion",
          body: "We capture what people do, not only what they say, which reduces self-report and interviewer bias.",
          accent: "gold",
        },
        {
          title: "Built to scale with you",
          body: "Start with one team, then roll out across business units. Pricing and setup work for a 50-person company and a 5,000-person enterprise.",
          accent: "blue",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      title: "Questions about team and workforce analytics",
      items: [
        {
          q: "What is team analytics?",
          a: "Team analytics measures how a team works together: how its members make decisions, share load, collaborate and deliver. Corporate Brain combines behavioral data with project and skills data to show this at team and company level.",
        },
        {
          q: "What is behavioral analysis at work?",
          a: "Behavioral analysis studies how people actually act at work, such as how they decide under pressure, solve problems and respond to change. It explains the “why” behind performance and attrition numbers.",
        },
        {
          q: "How is workforce analytics different from people analytics?",
          a: "People analytics usually focuses on HR data such as headcount, pay and engagement. Workforce analytics connects people data to the work itself, so leaders can plan capacity, capability and risk.",
        },
        {
          q: "Do we need a large company to start?",
          a: "No. Most organizations start with one team or one business question, then extend once the first findings are in use.",
        },
      ],
    },
    {
      type: "cta",
      title: "See your organization the way the data does.",
      body: "Book a Corporate Brain demo, or start with a behavioral diagnostic of one team.",
      actions: [
        { label: "Request a Demo", href: "/demo" },
        { label: "Schedule a Diagnostic", href: "/diagnostic", variant: "secondary" },
      ],
    },
  ],
};
