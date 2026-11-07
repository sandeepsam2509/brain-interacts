export type RingItem = { label: string; text: string };

/** Labels for the 3D rings graphic, one set per product. */
export const ringSets = {
  corporateBrain: [
    { label: "Leadership", text: "A 360° view of the whole company" },
    { label: "Managers", text: "Team analytics for every team" },
    { label: "Employees", text: "Relief: the right work, the right support" },
  ],
  finCheck: [
    { label: "Behaviour", text: "How the borrower thinks about money" },
    { label: "Repayment", text: "Real-time repayment signals" },
    { label: "Credit", text: "Traditional bureau checks" },
  ],
  gamified: [
    { label: "Think", text: "How they reason through a problem" },
    { label: "Recover", text: "How they bounce back under pressure" },
    { label: "Solve", text: "How they act, not just what they say" },
  ],
} satisfies Record<string, RingItem[]>;
