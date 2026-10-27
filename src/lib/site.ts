// Site map mirrored from the Framer project so every existing URL keeps working.

export type NavItem = { label: string; href: string };

export const site = {
  name: "Brain Interacts",
  description:
    "Team analytics, behavioral analysis and workforce analytics for enterprises and growing businesses. See how your people think, decide and deliver.",
};

export const platforms: NavItem[] = [
  { label: "Corporate Brain", href: "/platforms/corporate-brain" },
  { label: "Gamified Assessments", href: "/platforms/gamified-assessments" },
  { label: "FinCheck", href: "/platforms/fincheck" },
];

export const services: NavItem[] = [
  { label: "Root Cause Analysis", href: "/services/root-cause-analysis" },
  { label: "Psychometric Consulting", href: "/services/psychometric-consulting" },
  { label: "Corporate Culture Study", href: "/services/organizational-culture-assessment" },
  { label: "Mental Health Workshops", href: "/services/corporate-mental-health-workshops" },
];

export const audiences: NavItem[] = [
  { label: "For leadership", href: "/for/leadership" },
  { label: "For managers", href: "/for/managers" },
  { label: "For employees", href: "/for/employees" },
];

export const mainNav: NavItem[] = [
  { label: "Platforms", href: "/platforms" },
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const companyLinks: NavItem[] = [
  { label: "Security & privacy", href: "/security" },
  { label: "Contact", href: "/contact" },
  { label: "Schedule a diagnostic", href: "/diagnostic" },
];
