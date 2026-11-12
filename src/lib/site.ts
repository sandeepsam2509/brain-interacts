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
  blog: "/resources/library?category=articles",
  whitepapers: "/resources/library?category=whitepapers",
  research: "/resources/research/the-behavioral-enterprise",
  scienceLibrary: "/resources/library?category=science",
  stories: "/customer-stories",
  pricing: "/pricing",
  about: "/about",
  brand: "/brand",
  industries: "/industries",
  contact: "/contact",
  unlock: "/unlock",
  demo: "/contact?enquiry=demo#enquiry",
  legal: "/legal",
  integrations: "/integrations",
  careers: "/careers",
  ceo: "/solutions/for-cxos",
  reduceAttrition: "/solutions/reduce-attrition",
  howItWorks: "/how-it-works",
  faq: "/faq",
  privacy: "/privacy",
  terms: "/legal/terms-of-service",
  cookies: "/cookies",
  snapshot: "/contact?enquiry=technical-assessment#enquiry",
  payback: "/pricing#payback",
  trust: "/trust",
} as const;

export type MenuItem = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  /** Coloured dot before the label: red, amber or green. */
  dot?: "red" | "amber" | "green";
  /** Small chips under the item, e.g. the Corporate Brain views. */
  chips?: string[];
};
export type MenuGroup = { title: string; items: MenuItem[] };
export type MenuFeature = { image: string; title: string; text: string; href: string; accent: "red" | "amber" | "green" };
export type MainNavItem = { label: string; href: string; groups?: MenuGroup[]; feature?: MenuFeature };

/** Top menu, built around how buyers decide: problem, industry, proof, trust. */
export const mainNav: MainNavItem[] = [
  {
    label: "Platform",
    href: routes.corporateBrain,
    groups: [
      {
        title: "Products",
        items: [
          { label: "Corporate Brain", href: routes.corporateBrain, description: "People analytics and task intelligence", dot: "red", chips: ["Leadership view", "Manager view", "Employee view"] },
          { label: "Decode", href: routes.gamified, description: "Game-based assessments for 85 roles", dot: "amber" },
          { label: "FinCheck", href: routes.finCheck, description: "Behavioral risk intelligence for lenders", dot: "green", badge: "Coming soon" },
        ],
      },
      {
        title: "Why trust it",
        items: [
          { label: "How it works", href: routes.howItWorks, description: "From profile to match to decision" },
          { label: "The science", href: routes.science, description: "THE BRAIN and the Big Five" },
          { label: "Trust & security", href: routes.trust, description: "How we protect your data under DPDP" },
          { label: "Integrations", href: routes.integrations, description: "Connect your HR tools" },
        ],
      },
    ],
    feature: { image: "/site/631ec024.webp", title: "See Corporate Brain live", text: "A 30-minute walkthrough on your own org →", href: routes.demo, accent: "red" },
  },
  {
    label: "Solutions",
    href: routes.customAssessments,
    groups: [
      {
        title: "By goal",
        items: [
          { label: "Hire the right people", href: routes.gamified },
          { label: "Assign work by strengths", href: routes.corporateBrain },
          { label: "Build leaders & succession", href: routes.customAssessments },
          { label: "Reduce attrition", href: routes.reduceAttrition },
          { label: "Measure & fix culture", href: routes.cultureStudy },
        ],
      },
      {
        title: "By role",
        items: [
          { label: "For CXOs", href: routes.ceo, description: "Alignment and succession risk", dot: "red" },
          { label: "For HR heads", href: routes.gamified, description: "Hiring, retention, development", dot: "amber" },
          { label: "For managers", href: routes.corporateBrain, description: "Team fit and coaching", dot: "green" },
        ],
      },
      {
        title: "Services",
        items: [
          { label: "Custom assessment systems", href: routes.customAssessments, description: "Built around your roles" },
          { label: "Corporate culture study", href: routes.cultureStudy, description: "Make culture measurable" },
          { label: "Root cause analytics", href: routes.rootCause, description: "Find the cause behind the symptom" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: routes.industries,
    groups: [
      {
        title: "Financial services",
        items: [
          { label: "Banking & financial services", href: "/industries/banking-and-financial-services" },
          { label: "Insurance", href: "/industries/insurance" },
        ],
      },
      {
        title: "Goods & supply",
        items: [
          { label: "FMCG & consumer goods", href: "/industries/fmcg-and-consumer-goods" },
          { label: "Retail & e-commerce", href: "/industries/retail-and-e-commerce" },
          { label: "Logistics & supply chain", href: "/industries/logistics-and-supply-chain" },
          { label: "Healthcare & pharma", href: "/industries/healthcare-and-pharmaceuticals" },
        ],
      },
      {
        title: "Services",
        items: [
          { label: "ITES", href: "/industries/ites" },
          { label: "Telecommunication", href: "/industries/telecommunication" },
          { label: "Hospitality & travel", href: "/industries/hospitality-and-travel" },
          { label: "Education", href: "/industries/education" },
        ],
      },
    ],
    feature: { image: "/site/ee5cc825.webp", title: "10 industries researched", text: "How work happens in each one →", href: routes.industries, accent: "amber" },
  },
  { label: "Customers", href: routes.stories },
  {
    label: "Resources",
    href: routes.resources,
    groups: [
      {
        title: "Learn",
        items: [
          { label: "Resource library", href: routes.blog, description: "Articles on behavior at work" },
          { label: "Whitepapers", href: routes.whitepapers, description: "The Behavioral Enterprise Series" },
          { label: "Research", href: routes.research, description: "The Behavioral Enterprise monograph" },
          { label: "The science & methodology", href: routes.science },
          { label: "FAQ", href: routes.faq },
        ],
      },
      {
        title: "Proof",
        items: [
          { label: "Customer stories", href: routes.stories, description: "Results by industry and problem" },
          { label: "Payback estimator", href: routes.payback, description: "On the Pricing page" },
        ],
      },
    ],
    feature: { image: "/site/9b9a9a4e.webp", title: "The Behavioral Enterprise", text: "Research monograph · Download PDF →", href: routes.research, accent: "green" },
  },
  { label: "Pricing", href: routes.pricing },
];

export const footerColumns: NavGroup[] = [
  {
    label: "Platform",
    items: [
      { label: "Corporate Brain", href: routes.corporateBrain },
      { label: "Decode", href: routes.gamified },
      { label: "FinCheck", href: routes.finCheck },
      { label: "How it works", href: routes.howItWorks },
      { label: "Integrations", href: routes.integrations },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "Hire the right people", href: routes.gamified },
      { label: "Reduce attrition", href: routes.reduceAttrition },
      { label: "Leaders & succession", href: routes.customAssessments },
      { label: "For CXOs", href: routes.ceo },
      { label: "Culture study", href: routes.cultureStudy },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Banking", href: "/industries/banking-and-financial-services" },
      { label: "Insurance", href: "/industries/insurance" },
      { label: "FMCG & consumer goods", href: "/industries/fmcg-and-consumer-goods" },
      { label: "ITES", href: "/industries/ites" },
      { label: "All industries", href: routes.industries },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Library", href: routes.resources },
      { label: "Whitepapers", href: routes.whitepapers },
      { label: "Research", href: routes.research },
      { label: "The science", href: routes.science },
      { label: "FAQ", href: routes.faq },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: routes.about },
      { label: "Careers", href: routes.careers },
      { label: "Contact", href: routes.contact },
      { label: "Brand", href: routes.brand },
      { label: "Legal", href: routes.legal },
    ],
  },
  {
    label: "Trust",
    items: [
      { label: "Security", href: routes.trust },
      { label: "DPDP & privacy", href: routes.privacy },
      { label: "Data policy", href: routes.cookies },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy", href: routes.privacy },
  { label: "Terms", href: routes.terms },
  { label: "Cookies", href: routes.cookies },
  { label: "Legal", href: routes.legal },
];
