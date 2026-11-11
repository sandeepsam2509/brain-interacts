// Customer stories. Clients are anonymised unless they have agreed to be named; each result is confirmed with the client before it is published.
import { routes } from "@/lib/site";

export type Product = "Corporate Brain" | "Root Cause Analytics" | "Decode" | "Corporate Culture Study" | "Custom Psychometric Assessments";

export const productLinks: Record<Product, string> = {
  "Corporate Brain": routes.corporateBrain,
  "Root Cause Analytics": routes.rootCause,
  "Decode": routes.gamified,
  "Corporate Culture Study": routes.cultureStudy,
  "Custom Psychometric Assessments": routes.customAssessments,
};

export type Story = {
  slug: string;
  industry: string;
  title: string;
  who: string;
  /** Short anonymised name used where a logo would normally sit. */
  client: string;
  products: Product[];
  challenge: string;
  how: string;
  /** Empty until the client confirms the result. */
  result?: string;
  /** True when the client has agreed to be named. */
  named?: boolean;
  /** Client logo in /public, shown only for named clients. */
  logo?: string;
  /** Headline results, approved by the client. */
  stats?: { value: string; label: string }[];
  /** Approved client quote. */
  quote?: { text: string; by: string };
  /** Extra paragraphs, keyed by section. */
  more?: { challenge?: string[]; how?: string[] };
};

export const stories: Story[] = [
  {
    slug: "bvg-fixing-the-floor-not-the-people",
    industry: "Facilities management",
    client: "BVG",
    named: true,
    logo: "/customers/bvg.png",
    title: "Fixing the floor, not the people",
    who: "How BVG used Decode, Corporate Brain and custom psychometric assessments to find the behavioral archetypes behind workforce inefficiency, and kept operations running smoothly while it did. BVG was the first Corporate Brain customer.",
    products: ["Decode", "Corporate Brain", "Custom Psychometric Assessments"],
    challenge:
      "BVG runs a large frontline workforce managed through three layers: green-collar supervisors, floor managers and operations managers. Output was slipping and workforce management kept running into the same problems, but nobody could say why.",
    how: "Supervisors and managers at every layer played Decode, our gamified assessment, alongside custom psychometric assessments built around BVG's own roles and floor realities. Short, engaging and taken in the flow of the workday.",
    more: {
      challenge: [
        "Résumés and appraisals showed what each manager had done, not how they behave under pressure. BVG needed an objective, data-backed read on the people running its floors, without pulling them off shift for long tests or disrupting operations.",
      ],
      how: [
        "Corporate Brain brought the results together, mapped every manager to a behavioral archetype and flagged the ones resisting work and slowing their teams. BVG acted on specific behaviors instead of guessing, and operations kept running smoothly throughout.",
      ],
    },
    stats: [
      { value: "82%", label: "Improvement in operational efficiency" },
      { value: "100%", label: "Managers mapped to an archetype" },
      { value: "60%", label: "Reduction in task delays and escalations" },
      { value: "0", label: "Disruption to daily operations" },
    ],
    quote: {
      text: "We knew something was slowing the floor down, but we couldn't see it. Corporate Brain showed us exactly which management behaviors were holding teams back, and it did that without disrupting a single shift.",
      by: "Parag, BVG",
    },
  },
  {
    slug: "pune-techtrol-gen-z-attrition",
    industry: "Manufacturing",
    client: "Pune Techtrol",
    named: true,
    title: "Cutting Gen Z attrition by more than 46%",
    who: "How Pune Techtrol used Root Cause Analytics and Corporate Brain to understand why its younger employees were leaving, and act on it.",
    products: ["Root Cause Analytics", "Corporate Brain"],
    challenge: "Pune Techtrol was losing too many of its Gen Z employees, and the usual exit reasons did not explain the pattern.",
    how: "Root Cause Analytics traced the attrition back to the behaviors and working conditions driving it, then turned the findings into a solution the team could run. Corporate Brain brought the results together and showed who was best placed to do what.",
    stats: [{ value: "46%+", label: "Drop in Gen Z attrition" }],
  },
  {
    slug: "facilities-staffing-around-strengths",
    industry: "Facilities management",
    client: "National facilities management firm",
    title: "Staffing large, distributed teams around strengths",
    who: "A leading national facilities management firm with a large frontline and supervisory workforce across many client sites.",
    products: ["Corporate Brain", "Root Cause Analytics"],
    challenge: "Site supervisors were promoted for reliability, not leadership, and team performance varied widely from site to site.",
    how: "Corporate Brain mapped working styles across supervisors and site managers; Root Cause Analytics compared high- and low-performing sites.",
  },
  {
    slug: "manufacturing-balanced-plant-leadership",
    industry: "Manufacturing",
    client: "Global automotive manufacturer, India operations",
    title: "Building balanced plant leadership teams",
    who: "A global automotive manufacturer's India operations.",
    products: ["Corporate Brain"],
    challenge: "Plant and project teams were stacked with similar, execution-heavy profiles, and change initiatives stalled.",
    how: "The team composition view showed which working styles each leadership team was missing; managers used task suggestions to staff improvement projects.",
  },
  {
    slug: "manufacturing-promoting-into-supervision",
    industry: "Manufacturing",
    client: "Multi-plant Indian manufacturing group",
    title: "Promoting the right people into supervision",
    who: "A large Indian manufacturing group with multiple plants.",
    products: ["Decode", "Corporate Brain"],
    challenge: "Strong operators were being promoted into supervisor roles that did not suit them.",
    how: "Decode and Corporate Brain profiles gave HR a structured view of leadership potential, alongside interviews and performance records.",
  },
  {
    slug: "it-services-assigning-work-by-strengths",
    industry: "IT services",
    client: "Top-tier global IT services enterprise",
    title: "Assigning work by strengths across delivery teams",
    who: "A top-tier global IT services enterprise.",
    products: ["Corporate Brain"],
    challenge: "Project allocation relied on availability, leaving specialists on generalist work and key people overloaded.",
    how: "Brain suggests ranked the best and second-best person for each workstream by skills, working style and workload, with reasons managers reviewed.",
  },
  {
    slug: "technology-services-lost-momentum",
    industry: "IT services",
    client: "Fast-growing technology services company",
    title: "Understanding why a high-growth team lost momentum",
    who: "A fast-growing technology services company.",
    products: ["Corporate Culture Study", "Root Cause Analytics"],
    challenge: "Delivery slipped after rapid hiring, and exit interviews gave no clear reason.",
    how: "A Corporate Culture Study and Root Cause Analytics traced the slowdown to manager–team style mismatches and unclear handoffs.",
  },
  {
    slug: "automation-aligning-engineering-and-customer-teams",
    industry: "Industrial automation",
    client: "Industrial automation and smart-infrastructure company",
    title: "Aligning engineering and customer teams",
    who: "An industrial automation and smart-infrastructure company.",
    products: ["Corporate Brain"],
    challenge: "Engineering and customer-facing teams worked in silos, slowing installations and handovers.",
    how: "Corporate Brain mapped both teams' working styles, and Leadership seats tracked alignment against operational and customer goals.",
  },
];

export const featuredStorySlug = "bvg-fixing-the-floor-not-the-people";
export const industries = [...new Set(stories.map((s) => s.industry))];
export const allProducts = Object.keys(productLinks) as Product[];
export const findStory = (slug: string) => stories.find((s) => s.slug === slug);
export const storyHref = (s: Story) => `/customer-stories/${s.slug}`;
