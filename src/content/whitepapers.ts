// Whitepapers in The Behavioral Enterprise Series. PDFs live in public/whitepapers.
export type Whitepaper = { title: string; summary: string; audience: string; pages: number; file?: string };

export const whitepapers: Whitepaper[] = [
  {
    title: "The Sunk Cost Trap",
    summary: "Why enterprises fail to kill doomed projects, and how to fix it with the Behavioral Stage-Gate.",
    audience: "CEOs, CFOs, strategy and PMO leaders, boards",
    pages: 19,
    file: "/whitepapers/the-sunk-cost-trap.pdf",
  },
  {
    title: "Beyond the Bonus",
    summary: "The behavioral economics of employee motivation and retention, and the Motivation Architecture.",
    audience: "CHROs, total rewards and talent leaders, CFOs",
    pages: 19,
    file: "/whitepapers/beyond-the-bonus.pdf",
  },
  {
    title: "The ROI of Psychological Safety",
    summary: "A behavioral approach to high-velocity innovation, built on the five-step Safety Engine.",
    audience: "CTOs, product, R&D and engineering leaders",
    pages: 20,
    file: "/whitepapers/the-roi-of-psychological-safety.pdf",
  },
  {
    title: "Culture Lasts Three Weeks",
    summary: "Why values fade after the town hall, and how the Culture Habit Stack builds them into daily work.",
    audience: "CEOs, founders, CHROs, COOs",
    pages: 13,
    file: "/whitepapers/culture-lasts-three-weeks.pdf",
  },
  {
    title: "They're Not Afraid of Your Price",
    summary: "Why B2B deals stall on career risk, not price, and the Value Framing Playbook for the real decision.",
    audience: "CEOs, CROs, sales leaders, RevOps",
    pages: 11,
    file: "/whitepapers/theyre-not-afraid-of-your-price.pdf",
  },
  {
    title: "The Nudge Enterprise",
    summary: "Using choice architecture to drive software adoption, with the seven-part DEFAULT Audit.",
    audience: "CIOs, CTOs, digital and change leaders",
    pages: 20,
    file: "/whitepapers/the-nudge-enterprise.pdf",
  },
  {
    title: "The Spreadsheet Always Wins",
    summary: "Why people ignore the software you paid for, and how to make the new way the easy way.",
    audience: "CEOs, CFOs, CROs, CIOs, platform owners",
    pages: 16,
    file: "/whitepapers/the-spreadsheet-always-wins.pdf",
  },
  {
    title: "Archetypes and the Research Behind Them",
    summary: "The Big Five, the ten archetypes, scoring, and responsible use.",
    audience: "HR leaders and managers",
    pages: 12,
  },
];
