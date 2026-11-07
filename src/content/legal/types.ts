// Shared shape for the legal documents. Text may use these tokens, filled in from `legal`
// (src/components/LegalPage.tsx) when the page renders: {{entity}} {{address}} {{city}}
// {{grievanceOfficer}} {{privacyEmail}} {{email}} {{phone}}.

export type LegalSection = {
  h: string;
  p?: string[];
  list?: string[];
  /** Paragraphs shown after the list. */
  after?: string[];
};

export type LegalGroup = "Customer agreements" | "Privacy and data" | "Policies" | "Events and careers";

export type LegalDoc = {
  slug: string;
  title: string;
  group: LegalGroup;
  summary: string;
  effective: string;
  intro?: string[];
  sections: LegalSection[];
};
