// Customer stories. Clients are anonymised; each result is confirmed with the client before it is published.
import { routes } from "@/lib/site";

export type Product = "Corporate Brain" | "Root Cause Analytics" | "Gamified Assessments" | "Corporate Culture Study";

export const productLinks: Record<Product, string> = {
  "Corporate Brain": routes.corporateBrain,
  "Root Cause Analytics": routes.rootCause,
  "Gamified Assessments": routes.gamified,
  "Corporate Culture Study": routes.cultureStudy,
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
};

export const stories: Story[] = [
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
    products: ["Gamified Assessments", "Corporate Brain"],
    challenge: "Strong operators were being promoted into supervisor roles that did not suit them.",
    how: "Gamified Assessments and Corporate Brain profiles gave HR a structured view of leadership potential, alongside interviews and performance records.",
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

export const featuredStorySlug = "facilities-staffing-around-strengths";
export const industries = [...new Set(stories.map((s) => s.industry))];
export const allProducts = Object.keys(productLinks) as Product[];
export const findStory = (slug: string) => stories.find((s) => s.slug === slug);
export const storyHref = (s: Story) => `/customer-stories/${s.slug}`;
