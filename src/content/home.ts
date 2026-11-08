import { routes } from "@/lib/site";

export const hero = {
  eyebrow: "People analytics · workforce intelligence",
  title: "See how your people really work,",
  titleAccent: "and who should do what next.",
  lead:
    "Corporate Brain is a behavioral analytics platform for every department. It connects your company goal to each team and each person's working style, then suggests who should lead, who should take each task, and how to support each person.",
  note: "Built on the Big Five, the most widely researched model of working style.",
};

export const snapshot = {
  eyebrow: "Free working-style snapshot",
  title: "Discover your working style in 4 minutes.",
  text: "Twenty quick statements. Your scored report in your inbox within minutes. Free.",
  points: ["Your primary and secondary Corporate Brain archetype", "Your five trait scores and archetype match scores", "How you work best, and what to watch for"],
  cta: "Take the free snapshot",
};

export const products = [
  {
    tag: "Flagship",
    name: "Corporate Brain",
    text: "People analytics and task intelligence for leadership, managers and employees.",
    href: routes.corporateBrain,
    rule: "border-[#D9A21F]",
    tagColor: "text-gold-ink",
  },
  {
    tag: "Assessments · Coming soon",
    name: "Gamified Assessments",
    text: "Short simulations that show how people decide under pressure.",
    href: routes.gamified,
    rule: "border-[#2F8FD8]",
    tagColor: "text-ink-link",
  },
  {
    tag: "For lenders",
    name: "FinCheck",
    text: "Behavioral risk intelligence for banks and NBFCs.",
    href: routes.finCheck,
    rule: "border-[#7FB82E]",
    tagColor: "text-green-ink",
  },
];

// Illustrative example for the "Know who people are" section. Names and numbers are made up.
export const matches = [
  {
    task: "Plan Q1 product roadmap",
    person: "Priya Sharma",
    initial: "P",
    style: "Integrator",
    fit: 92,
    why: "Connects teams and weighs trade-offs well",
    next: "Rahul Mehta · 74%",
    dot: "bg-gold",
    ink: "text-gold-ink",
    bar: "bg-gold",
  },
  {
    task: "Open new client accounts",
    person: "Rahul Mehta",
    initial: "R",
    style: "Rainmaker",
    fit: 89,
    why: "Energised by new people, persuasive",
    next: "Priya Sharma · 68%",
    dot: "bg-sky",
    ink: "text-ink-link",
    bar: "bg-sky",
  },
  {
    task: "Ship release checklist",
    person: "Ananya Iyer",
    initial: "A",
    style: "Executor",
    fit: 94,
    why: "Detail-focused, finishes what she starts",
    next: "Priya Sharma · 71%",
    dot: "bg-lime",
    ink: "text-green-ink",
    bar: "bg-lime",
  },
];

export const matchSteps = [
  { n: "1", title: "Profile", text: "Each person takes a short assessment and gets a primary and secondary archetype." },
  { n: "2", title: "Match", text: "Brain Suggests ranks the best and second-best person for each task, with reasons." },
  { n: "3", title: "Decide", text: "A manager reviews the suggestion and assigns. Nothing is automatic." },
];

export const stories = [
  {
    industry: "Facilities management",
    title: "Staffing large, distributed teams around strengths",
    text: "A leading national facilities management firm mapped working styles across supervisors and site managers.",
    color: "text-gold",
  },
  {
    industry: "Manufacturing",
    title: "Building balanced plant leadership teams",
    text: "A global automotive manufacturer's India operations found which working styles each leadership team was missing.",
    color: "text-sky",
  },
  {
    industry: "IT services",
    title: "Assigning work by strengths across delivery teams",
    text: "A top-tier IT services enterprise ranked the best person for each workstream, with reasons.",
    color: "text-lime",
  },
];

export const audiences = [
  {
    title: "CXOs",
    text: "See organization-wide alignment, succession risk and where to deploy leaders for the biggest return.",
    link: "For CXOs",
    href: routes.ceo,
  },
  {
    title: "Managers",
    text: "Assign work by strengths, spot friction early and coach each person with context.",
    link: "For managers",
    href: routes.corporateBrain,
  },
  {
    title: "Employees",
    text: "Understand your own working style, get work that fits your strengths, and know where to grow.",
    link: "Take the free assessment",
    href: routes.snapshot,
  },
];
