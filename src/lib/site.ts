// Site-wide facts and navigation. Every link on the site comes from here.

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; items: NavLink[] };

export const site = {
  name: "Brain Interacts",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://braininteracts.com",
  description:
    "Behavioral analytics and people analytics for organizations that build teams on evidence. See how your people really work, and who should do what next.",
  email: "support@braininteracts.com",
  phone: "+91 72760 69027",
  phoneHref: "tel:+917276069027",
  signIn: "https://corporatebrain.braininteracts.com",
  // Company LinkedIn page. Left empty until the exact URL is confirmed; the footer hides the link while empty.
  linkedIn: "",
};

export const routes = {
  home: "/",
  corporateBrain: "/platforms/corporate-brain",
  finCheck: "/platforms/fincheck",
  gamified: "/platforms/gamified-assessments",
  customAssessments: "/services/custom-assessment-systems",
  cultureStudy: "/services/corporate-culture-study",
  rootCause: "/services/root-cause-analytics",
  science: "/science",
  scienceValidity: "/science/validity",
  scienceFrameworks: "/science/frameworks",
  scienceMethodology: "/science/methodology",
  resources: "/resources",
  blog: "/resources/blog",
  stories: "/customer-stories",
  pricing: "/pricing",
  about: "/about",
  contact: "/contact",
  demo: "/contact#demo",
  security: "/security",
  integrations: "/integrations",
  careers: "/careers",
  ceo: "/for-ceos",
  faq: "/faq",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  snapshot: "/#snapshot",
} as const;

export type MenuItem = { label: string; href: string; description?: string; badge?: string };
export type MainNavItem = { label: string; href: string; children?: MenuItem[] };

/** Top menu. Items with children open a dropdown on desktop and a sub-list on phones. */
export const mainNav: MainNavItem[] = [
  {
    label: "Products",
    href: routes.corporateBrain,
    children: [
      { label: "Corporate Brain", href: routes.corporateBrain, description: "People analytics and task intelligence for every level" },
      { label: "Gamified Assessments", href: routes.gamified, description: "Simulations that show how people decide" },
      { label: "FinCheck", href: routes.finCheck, description: "Behavioral risk intelligence for lenders", badge: "Soon" },
    ],
  },
  {
    label: "Solutions",
    href: routes.customAssessments,
    children: [
      { label: "Custom Psychological Assessment Systems", href: routes.customAssessments, description: "Assessments built around your roles" },
      { label: "Corporate Culture Study", href: routes.cultureStudy, description: "Make culture something you can measure" },
      { label: "Root Cause Analytics", href: routes.rootCause, description: "Find the causes behind the symptoms" },
    ],
  },
  {
    label: "Science",
    href: routes.science,
    children: [
      { label: "The Science", href: routes.science, description: "The research behind Corporate Brain" },
      { label: "Scientific validity", href: routes.scienceValidity, description: "What the research supports, and its limits" },
      { label: "Research frameworks", href: routes.scienceFrameworks, description: "The Big Five, the item pool and company goals" },
      { label: "Psychometric methodologies", href: routes.scienceMethodology, description: "How answers become scores and suggestions" },
    ],
  },
  {
    label: "Resources",
    href: routes.resources,
    children: [
      { label: "Resources", href: routes.resources, description: "Research, articles and stories" },
      { label: "Blogs & Whitepapers", href: routes.blog, description: "Articles and in-depth papers" },
      { label: "FAQ", href: routes.faq, description: "Answers buyers ask before a demo" },
      { label: "For CEOs", href: routes.ceo, description: "Your whole organization at a glance" },
    ],
  },
  { label: "Customer Stories", href: routes.stories },
  { label: "Pricing", href: routes.pricing },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
];

export const footerColumns: NavGroup[] = [
  {
    label: "Products",
    items: [
      { label: "Corporate Brain", href: routes.corporateBrain },
      { label: "FinCheck", href: routes.finCheck },
      { label: "Gamified Assessments", href: routes.gamified },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "Custom Psychological Assessment Systems", href: routes.customAssessments },
      { label: "Corporate Culture Study", href: routes.cultureStudy },
      { label: "Root Cause Analytics", href: routes.rootCause },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "The Science", href: routes.science },
      { label: "Blogs & Whitepapers", href: routes.blog },
      { label: "Customer Stories", href: routes.stories },
      { label: "Pricing", href: routes.pricing },
      { label: "FAQ", href: routes.faq },
      { label: "For CEOs", href: routes.ceo },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: routes.about },
      { label: "Contact", href: routes.contact },
      { label: "Security & Privacy", href: routes.security },
      { label: "Integrations", href: routes.integrations },
      { label: "Careers", href: routes.careers },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy", href: routes.privacy },
  { label: "Terms", href: routes.terms },
  { label: "Cookies", href: routes.cookies },
];
