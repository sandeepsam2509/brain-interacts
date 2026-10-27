// Content schema for data-driven pages. Each page is a list of typed sections
// rendered in order by <Sections>.

export type Accent = "green" | "gold" | "blue" | "aqua" | "lemon";

export type Action = { label: string; href: string; variant?: "primary" | "secondary" };

export type Card = {
  title: string;
  body?: string;
  tag?: string;
  href?: string;
  accent?: Accent;
};

export type Step = { title: string; body: string };

export type Faq = { q: string; a: string };

export type Image = { src: string; alt: string; width: number; height: number };

export type Feature = {
  eyebrow?: string;
  title: string;
  body: string;
  points?: string[];
  image?: Image;
};

type Heading = { eyebrow?: string; title?: string; intro?: string; id?: string };

export type Section =
  | ({ type: "cards"; cards: Card[]; columns?: 1 | 2 | 3 | 4; links?: Action[] } & Heading)
  | ({ type: "steps"; steps: Step[]; link?: Action } & Heading)
  | ({ type: "table"; head: string[]; rows: string[][]; highlight?: number; note?: string } & Heading)
  | ({ type: "checklist"; items: string[]; glance?: Faq[]; image?: Image } & Heading)
  | ({ type: "problem"; problem: string; risk: string; solution: string } & Heading)
  | ({ type: "pills"; items: string[] } & Heading)
  | ({ type: "features"; features: Feature[]; link?: Action } & Heading)
  | ({ type: "prose"; body: string[]; links?: Action[]; tone?: "plain" | "panel" | "note" } & Heading)
  | ({ type: "faq"; items: Faq[] } & Heading)
  | ({
      type: "pricing";
      plans: { tag: string; name: string; price: string; body: string; items: string[]; action: Action }[];
    } & Heading)
  | ({ type: "dashboard" } & Heading)
  | { type: "cta"; title: string; body?: string; actions: Action[] };

export type Hero = {
  crumbs: { label: string; href?: string }[];
  eyebrow: string;
  title: string;
  lead: string;
  actions?: Action[];
  visual?: "dashboard" | "pattern" | Image;
};

export type PageContent = {
  path: string;
  title: string;
  description: string;
  hero: Hero;
  sections: Section[];
};
