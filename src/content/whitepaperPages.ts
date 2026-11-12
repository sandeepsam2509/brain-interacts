// Landing-page content for each whitepaper: key ideas, section list and the pull quote.
// All text comes from the papers' own "At a glance" pages and section headings.
import { type Topic, topics } from "./resources";
import { routes } from "@/lib/site";

export type WhitepaperPage = {
  topic: Topic;
  /** Who it is for, as shown in the hero. */
  forWho: string;
  ideas: { title: string; text: string }[];
  sections: { title: string; page: number }[];
  quote: { label: string; text: string };
  practice: { title: string; href: string; label: string };
};

export const whitepaperPages: Record<string, WhitepaperPage> = {
  "beyond-the-bonus": {
    topic: "Motivation & retention",
    forWho: "For CHROs, total rewards and talent leaders, CFOs",
    ideas: [
      { title: "Bonuses buy a short lift, then people leave", text: "When the glow fades the same people go, and the company has paid twice." },
      { title: "Commitment comes from the work itself", text: "People adapt quickly to money. Autonomy, mastery and purpose last longer." },
      { title: "Design the role, not the payout", text: "The Motivation Architecture: three pillars of role design on a floor of fair pay." },
    ],
    sections: [
      { title: "The scene", page: 3 },
      { title: "The argument", page: 4 },
      { title: "The science", page: 5 },
      { title: "Honest limits", page: 7 },
      { title: "The method", page: 9 },
      { title: "Measurement", page: 15 },
      { title: "The plan", page: 17 },
    ],
    quote: { label: "The rule of thumb", text: "Pay enough, or do not use pay as the motivator." },
    practice: { title: "See who is at risk of leaving, and why, before they resign.", href: routes.rootCause, label: "Reduce attrition" },
  },
  "the-sunk-cost-trap": {
    topic: "Teams & performance",
    forWho: "For CEOs, CFOs, strategy and PMO leaders, boards",
    ideas: [
      { title: "The money is not the only loss", text: "People and capital tied up in a doomed project cannot be used on better bets." },
      { title: "The bias is predictable, so fix the structure", text: "Stopping feels like admitting a loss. The answer is design, not a plea for more courage." },
      { title: "Make stopping a normal decision", text: "The Behavioral Stage-Gate: kill criteria agreed up front and funding released in evidence-based tranches." },
    ],
    sections: [
      { title: "The scene", page: 3 },
      { title: "The hidden cost", page: 4 },
      { title: "The science", page: 5 },
      { title: "Honest limits", page: 7 },
      { title: "Diagnosis", page: 8 },
      { title: "The method and design rules", page: 9 },
      { title: "Case illustration", page: 13 },
      { title: "Measurement and guardrails", page: 15 },
      { title: "The plan", page: 17 },
    ],
    quote: { label: "The sentence to listen for", text: "We have come too far to stop now." },
    practice: { title: "See which teams and decisions carry the most risk.", href: routes.rootCause, label: "Find the root cause" },
  },
  "the-roi-of-psychological-safety": {
    topic: "Culture",
    forWho: "For CTOs, product, R&D and engineering leaders",
    ideas: [
      { title: "Bad news travels slowly", text: "Risks a few people see in month two become launch delays and rework in month nine." },
      { title: "Silence is rational, not a flaw", text: "Teams speak up when the social cost is low, and leaders control that cost." },
      { title: "Build it as a routine", text: "The Safety Engine: Frame, Invite, Respond, Embed and Measure, repeated by leaders and teams." },
    ],
    sections: [
      { title: "The scene", page: 3 },
      { title: "The evidence", page: 4 },
      { title: "The science", page: 5 },
      { title: "Honest limits", page: 7 },
      { title: "Diagnosis", page: 8 },
      { title: "The method: the Safety Engine", page: 9 },
      { title: "Case illustration", page: 13 },
      { title: "Measurement and the business case", page: 15 },
      { title: "The plan", page: 18 },
    ],
    quote: { label: "The measurement trap", text: "A low count of reported problems can mean a safe operation or a silent one." },
    practice: { title: "Measure culture in what people do, not what they say.", href: routes.cultureStudy, label: "Study your culture" },
  },
  "culture-lasts-three-weeks": {
    topic: "Culture",
    forWho: "For CEOs, founders, CHROs, COOs",
    ideas: [
      { title: "Values launches fade within a quarter", text: "Offsites and change programmes cost a lot and rarely change daily work." },
      { title: "Culture is what people do without thinking", text: "Habits are shaped by the environment far more than by intentions." },
      { title: "Stack the habit onto the work", text: "The Culture Habit Stack: one small behavior, attached to something that already happens." },
    ],
    sections: [
      { title: "The scene", page: 3 },
      { title: "The science", page: 4 },
      { title: "The cost", page: 6 },
      { title: "Where it breaks", page: 7 },
      { title: "The fix", page: 8 },
      { title: "Proof that it works", page: 9 },
      { title: "Measurement and guardrails", page: 10 },
    ],
    quote: { label: "The idea behind the series", text: "Lasting change comes from redesigning the environment people work in, not from asking them to try harder." },
    practice: { title: "Find the gap between stated and lived values.", href: routes.cultureStudy, label: "Study your culture" },
  },
  "theyre-not-afraid-of-your-price": {
    topic: "Sales",
    forWho: "For CEOs, CROs, sales leaders, RevOps",
    ideas: [
      { title: "Deals stall on career risk, not price", text: "Buyers are asking whether they will be blamed if it goes wrong." },
      { title: "Discounts answer the wrong question", text: "Cutting price does not make the decision feel safer." },
      { title: "Frame value honestly", text: "The Value Framing Playbook: five honest ways to make a decision feel safe, clear and defensible." },
    ],
    sections: [
      { title: "The scene", page: 3 },
      { title: "The science", page: 4 },
      { title: "The cost", page: 5 },
      { title: "Where it breaks", page: 6 },
      { title: "The fix", page: 7 },
      { title: "Proof that it works", page: 8 },
      { title: "The plan and guardrails", page: 9 },
    ],
    quote: { label: "The question behind every deal", text: "If this goes wrong, will it be my name on it?" },
    practice: { title: "Hire and coach sales teams for fit, with evidence.", href: routes.gamified, label: "Try Decode" },
  },
  "the-nudge-enterprise": {
    topic: "Adoption & change",
    forWho: "For CIOs, CTOs, digital and change leaders",
    ideas: [
      { title: "Training does not drive usage", text: "Enterprises assume people will use software once told to. Usage data says otherwise." },
      { title: "People follow the path laid out", text: "Whoever designs that path, on purpose or by accident, decides adoption." },
      { title: "Audit the choice environment", text: "The DEFAULT Audit: a seven-part review of the choices built around any enterprise tool." },
    ],
    sections: [
      { title: "The scene", page: 3 },
      { title: "The argument", page: 4 },
      { title: "The science", page: 5 },
      { title: "The evidence", page: 6 },
      { title: "Honest limits", page: 8 },
      { title: "Diagnosis", page: 9 },
      { title: "The method", page: 10 },
      { title: "Case illustration", page: 14 },
      { title: "Measurement, guardrails and plan", page: 16 },
    ],
    quote: { label: "The central point", text: "No design is neutral. The only question is whether it was designed on purpose." },
    practice: { title: "Link company goals to the work each person does.", href: routes.corporateBrain, label: "See Corporate Brain" },
  },
  "the-spreadsheet-always-wins": {
    topic: "Adoption & change",
    forWho: "For CEOs, CFOs, CROs, CIOs, platform owners",
    ideas: [
      { title: "Paid-for software goes unused", text: "Being told and trained does not change what people actually open each morning." },
      { title: "Defaults beat directives", text: "People follow the path their environment lays out." },
      { title: "Make the new way the easy way", text: "The DEFAULT Audit, plus a three-question ethics test for every change." },
    ],
    sections: [
      { title: "The scene", page: 3 },
      { title: "The cost", page: 4 },
      { title: "The science", page: 5 },
      { title: "Diagnosis", page: 7 },
      { title: "The fix: the DEFAULT Audit", page: 8 },
      { title: "Proof that it works", page: 11 },
      { title: "Measuring success", page: 13 },
      { title: "The three-question ethics test", page: 14 },
    ],
    quote: { label: "The core tool", text: "Behavior responds to design far more reliably than to instructions." },
    practice: { title: "Link company goals to the work each person does.", href: routes.corporateBrain, label: "See Corporate Brain" },
  },
};

export const topicSlug = (t: string) =>
  t
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export type TopicInfo = {
  topic: Topic;
  slug: string;
  intro: string;
  image: string;
  whitepaper?: string;
  story?: string;
  cta: { title: string; text: string; href: string; label: string; image: string };
};

const t = (topic: Topic, rest: Omit<TopicInfo, "topic" | "slug">): TopicInfo => ({ topic, slug: topicSlug(topic), ...rest });

export const topicInfo: TopicInfo[] = [
  t("Teams & performance", {
    intro: "Why two teams with the same skills perform so differently, and how to staff for the work.",
    image: "/site/ee5cc825.webp",
    whitepaper: "the-sunk-cost-trap",
    story: "megamech-promoting-the-right-people-into-supervision",
    cta: { title: "Assign work by strengths, not by who is free.", text: "Corporate Brain shows working style beside every task.", href: routes.corporateBrain, label: "See Corporate Brain", image: "/site/631ec024.webp" },
  }),
  t("Hiring", {
    intro: "Hiring for role fit, with assessments that predict the job and treat candidates fairly.",
    image: "/site/44843417.webp",
    story: "megamech-promoting-the-right-people-into-supervision",
    cta: { title: "Hire on evidence, not on resumes.", text: "Decode runs skill and personality assessments, priced per candidate.", href: routes.gamified, label: "Try Decode", image: "/site/86bfbc2c.webp" },
  }),
  t("Culture", {
    intro: "Culture is what people do every day without thinking. Here is how to see it and shape it.",
    image: "/site/7e00bc9e.webp",
    whitepaper: "culture-lasts-three-weeks",
    story: "bvg-fixing-the-floor-not-the-people",
    cta: { title: "Measure culture in what people do.", text: "The Corporate Culture Study compares stated values with lived ones.", href: routes.cultureStudy, label: "Study your culture", image: "/site/8fc9f461.webp" },
  }),
  t("Motivation & retention", {
    intro: "Why good people leave, and what behavior tells you before they do.",
    image: "/site/793df1a3.webp",
    whitepaper: "beyond-the-bonus",
    story: "pune-techtrol-gen-z-attrition",
    cta: { title: "Reduce attrition with evidence, not exit interviews.", text: "Root cause analytics and Corporate Brain show who is at risk and why, early enough to act.", href: routes.rootCause, label: "Reduce attrition", image: "/site/631ec024.webp" },
  }),
  t("Adoption & change", {
    intro: "Why people ignore the tools you paid for, and how to make the new way the easy way.",
    image: "/site/bb275f24.webp",
    whitepaper: "the-nudge-enterprise",
    cta: { title: "Link company goals to everyday work.", text: "Corporate Brain turns goals into tasks matched to each person.", href: routes.corporateBrain, label: "See Corporate Brain", image: "/site/5fa91dc1.webp" },
  }),
  t("Sales", {
    intro: "B2B buyers manage career risk. How to sell, hire and coach for that.",
    image: "/site/8fc9f461.webp",
    whitepaper: "theyre-not-afraid-of-your-price",
    story: "redington-turning-the-bench-into-a-growth-engine",
    cta: { title: "Hire sales teams for fit.", text: "Decode assesses skills and working style before you hire.", href: routes.gamified, label: "Try Decode", image: "/site/dc17ab22.webp" },
  }),
  t("Science & methods", {
    intro: "The Big Five, trait interaction and the evidence behind every result, with its limits.",
    image: "/site/5fa91dc1.webp",
    cta: { title: "Read the science behind Corporate Brain.", text: "The model, the scoring, and what the evidence does and does not support.", href: routes.science, label: "Read the science", image: "/site/f694d932.webp" },
  }),
  t("Financial risk", {
    intro: "Behavior, conduct and credit: where people analytics meets risk.",
    image: "/site/03b5dbaf.webp",
    cta: { title: "Add behavior to credit decisions.", text: "FinCheck reads ability and willingness to pay.", href: routes.finCheck, label: "See FinCheck", image: "/site/dc17ab22.webp" },
  }),
];

export const findTopic = (slug: string) => topicInfo.find((x) => x.slug === slug);
export const allTopics = topics;
