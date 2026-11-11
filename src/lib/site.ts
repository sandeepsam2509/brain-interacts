// Site-wide facts and navigation. Every link on the site comes from here.

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; items: NavLink[] };

export const site = {
  name: "Brain Interacts",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://braininteracts.com",
  description:
    "Brain Interacts is a people analytics company. We research how work happens in each industry and build products, like Corporate Brain and Decode, that help workplaces flourish.",
  email: "support@braininteracts.com",
  phone: "+91 72760 69027",
  phoneHref: "tel:+917276069027",
  signIn: "https://corporatebrain.braininteracts.com",
  decode: "https://decode.braininteracts.com",
  // Company LinkedIn page. Left empty until the exact URL is confirmed; the footer hides the link while empty.
  linkedIn: "",
};

export const routes = {
  home: "/",
  corporateBrain: "https://corporatebrain.braininteracts.com/",
  finCheck: "/platforms/fincheck",
  gamified: "https://decode.braininteracts.com/",
  customAssessments: "/services/custom-assessment-systems",
  cultureStudy: "/services/corporate-culture-study",
  rootCause: "/services/root-cause-analytics",
  science: "/science",
  scienceValidity: "/science/validity",
  scienceFrameworks: "/science/frameworks",
  scienceMethodology: "/science/methodology",
  resources: "/resources",
  blog: "/resources?category=articles",
  whitepapers: "/resources?category=whitepapers",
  research: "/resources?category=research",
  scienceLibrary: "/resources?category=science",
  stories: "/customer-stories",
  pricing: "/pricing",
  about: "/about",
  brand: "/brand",
  contact: "/contact",
  unlock: "/unlock",
  demo: "/contact?enquiry=demo#enquiry",
  legal: "/legal",
  integrations: "/integrations",
  careers: "/careers",
  ceo: "/for-ceos",
  faq: "/faq",
  privacy: "/privacy",
  terms: "/legal/terms-of-service",
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
      { label: "Decode", href: routes.gamified, description: "Game-based assessments for 85 roles" },
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

  { label: "Resources", href: routes.resources },

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
      { label: "Decode", href: routes.gamified },
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
      { label: "Resource library", href: routes.resources },
      { label: "Whitepapers", href: routes.whitepapers },
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
      { label: "Brand", href: routes.brand },
      { label: "Legal", href: routes.legal },
      { label: "Integrations", href: routes.integrations },
      { label: "Careers", href: routes.careers },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy", href: routes.privacy },
  { label: "Terms", href: routes.terms },
  { label: "Cookies", href: routes.cookies },
  { label: "Legal", href: routes.legal },
];
