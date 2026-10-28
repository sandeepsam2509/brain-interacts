import { routes } from "@/lib/site";

export const hero = {
  eyebrow: "People analytics · workforce intelligence",
  title: "See how your people really work",
  titleAccent: "— and who should do what next.",
  lead:
    "Corporate Brain is a behavioral analytics platform for every department. It maps working styles and skills against your goals, then suggests who should lead, who should take each task, and how to support each person.",
  note: "Built on the Big Five, the most widely researched model of working style.",
};

export const snapshot = {
  eyebrow: "Free working-style snapshot",
  title: "Discover your working style in 4 minutes.",
  text: "Twenty quick statements. A personal working-style report in your inbox. Free.",
  points: ["Your main and secondary working style", "Your five trait scores, explained", "Strengths and how you work best"],
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
    tag: "Assessments",
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

export const team = [
  { initial: "A", name: "Priya Sharma", style: "Integrator", dot: "bg-gold", color: "text-gold-ink" },
  { initial: "B", name: "Rahul Mehta", style: "Rainmaker", dot: "bg-sky", color: "text-ink-link" },
  { initial: "C", name: "Ananya Iyer", style: "Executor", dot: "bg-lime", color: "text-green-ink" },
];

export const tasks = [
  { task: "Plan Q1 product roadmap", style: "Integrator", pill: "bg-[#FCEFC9] text-gold-ink" },
  { task: "Open new client accounts", style: "Rainmaker", pill: "bg-[#E3F1FC] text-ink-link" },
  { task: "Ship release checklist", style: "Executor", pill: "bg-[#EDF7DC] text-green-ink" },
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
    title: "Team Managers",
    text: "Assign work by strengths, spot friction early and coach each person with context.",
    link: "For managers",
    href: routes.corporateBrain,
  },
  {
    title: "Executives",
    text: "Track team health across departments and make structural calls with evidence.",
    link: "For executives",
    href: routes.corporateBrain,
  },
];
