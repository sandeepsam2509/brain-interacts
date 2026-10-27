// Site-wide facts and navigation, mirrored from the Framer project so every
// existing URL keeps working.

export type NavLink = { label: string; href: string; description?: string; soon?: boolean };
export type NavGroup = { label: string; items: NavLink[] };

export const site = {
  name: "Brain Interacts",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://braininteracts.com",
  description:
    "Team analytics, behavioral analysis and workforce analytics for enterprises and growing businesses. See how your people think, decide and deliver.",
  email: "support@braininteracts.com",
  phone: "+91 93734 62454",
  address: "Survey No 43 H. No. 8/1 (P), Plot A, opp. Bhartiya Vidyapeeth School, Balewadi, Pune, Maharashtra 411045",
  signIn: "https://corporatebrain.braininteracts.com",
  privacy: "https://braininteracts.com/privacy",
  terms: "https://braininteracts.com/terms",
};

export const platforms: NavLink[] = [
  { label: "Corporate Brain", href: "/platforms/corporate-brain", description: "People analytics built on behavioral science." },
  { label: "Gamified Assessments", href: "/platforms/gamified-assessments", description: "Observe decisions in interactive challenges." },
  { label: "FinCheck", href: "/platforms/fincheck", description: "Behavioral analysis for banks and NBFCs.", soon: true },
];

export const services: NavLink[] = [
  { label: "Root Cause Analysis", href: "/services/root-cause-analysis", description: "Why projects stall and top talent leaves." },
  { label: "Psychometric Consulting", href: "/services/psychometric-consulting", description: "Measure leaders in critical roles." },
  { label: "Culture Assessment", href: "/services/organizational-culture-assessment", description: "Understand culture beyond eNPS." },
  { label: "Mental Health Workshops", href: "/services/corporate-mental-health-workshops", description: "Reduce strain at the system level." },
];

export const solutions: NavLink[] = [
  { label: "For Leadership", href: "/for/leadership", description: "Enterprise capability and people risk." },
  { label: "For Managers", href: "/for/managers", description: "Build and staff teams on evidence." },
  { label: "For Employees", href: "/for/employees", description: "Understand strengths and growth." },
];

export const navGroups: NavGroup[] = [
  {
    label: "Platforms",
    items: [
      ...platforms,
      { label: "How it works", href: "/how-it-works", description: "From kickoff to first insight." },
      { label: "Pricing", href: "/pricing", description: "Plans shaped around your organization." },
    ],
  },
  {
    label: "Services",
    items: [
      ...services,
      { label: "Schedule a diagnostic", href: "/diagnostic", description: "Start with your business question." },
    ],
  },
  { label: "Solutions", items: solutions },
];

export const navLinks: NavLink[] = [
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
];

export const footerColumns: NavGroup[] = [
  {
    label: "Platforms",
    items: [
      { label: "Corporate Brain", href: "/platforms/corporate-brain" },
      { label: "Gamified Assessments", href: "/platforms/gamified-assessments" },
      { label: "FinCheck · Soon", href: "/platforms/fincheck" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Root Cause Analysis", href: "/services/root-cause-analysis" },
      { label: "Psychometric Consulting", href: "/services/psychometric-consulting" },
      { label: "Culture Assessment", href: "/services/organizational-culture-assessment" },
      { label: "Mental Health Workshops", href: "/services/corporate-mental-health-workshops" },
      { label: "Schedule a diagnostic", href: "/diagnostic" },
    ],
  },
  { label: "Solutions", items: solutions.map(({ label, href }) => ({ label, href })) },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Resources", href: "/resources" },
      { label: "Security & privacy", href: "/security" },
      { label: "Contact", href: "/contact" },
      { label: "Sign in", href: site.signIn },
    ],
  },
];
