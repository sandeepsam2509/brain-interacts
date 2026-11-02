// Whitepapers in The Behavioral Enterprise Series. PDFs live in public/whitepapers.
export type Whitepaper = { slug: string; title: string; summary: string; audience: string; pages: number; file?: string; cover?: string };

export const whitepapers: Whitepaper[] = [
  {
    slug: "the-sunk-cost-trap",
    title: "The Sunk Cost Trap",
    summary: "Why enterprises fail to kill doomed projects, and how to fix it with the Behavioral Stage-Gate.",
    audience: "CEOs, CFOs, strategy and PMO leaders, boards",
    pages: 19,
    file: "/whitepapers/the-sunk-cost-trap.pdf",
    cover: "/whitepapers/covers/the-sunk-cost-trap.webp",
  },
  {
    slug: "beyond-the-bonus",
    title: "Beyond the Bonus",
    summary: "The behavioral economics of employee motivation and retention, and the Motivation Architecture.",
    audience: "CHROs, total rewards and talent leaders, CFOs",
    pages: 19,
    file: "/whitepapers/beyond-the-bonus.pdf",
    cover: "/whitepapers/covers/beyond-the-bonus.webp",
  },
  {
    slug: "the-roi-of-psychological-safety",
    title: "The ROI of Psychological Safety",
    summary: "A behavioral approach to high-velocity innovation, built on the five-step Safety Engine.",
    audience: "CTOs, product, R&D and engineering leaders",
    pages: 20,
    file: "/whitepapers/the-roi-of-psychological-safety.pdf",
    cover: "/whitepapers/covers/the-roi-of-psychological-safety.webp",
  },
  {
    slug: "culture-lasts-three-weeks",
    title: "Culture Lasts Three Weeks",
    summary: "Why values fade after the town hall, and how the Culture Habit Stack builds them into daily work.",
    audience: "CEOs, founders, CHROs, COOs",
    pages: 13,
    file: "/whitepapers/culture-lasts-three-weeks.pdf",
    cover: "/whitepapers/covers/culture-lasts-three-weeks.webp",
  },
  {
    slug: "theyre-not-afraid-of-your-price",
    title: "They're Not Afraid of Your Price",
    summary: "Why B2B deals stall on career risk, not price, and the Value Framing Playbook for the real decision.",
    audience: "CEOs, CROs, sales leaders, RevOps",
    pages: 11,
    file: "/whitepapers/theyre-not-afraid-of-your-price.pdf",
    cover: "/whitepapers/covers/theyre-not-afraid-of-your-price.webp",
  },
  {
    slug: "the-nudge-enterprise",
    title: "The Nudge Enterprise",
    summary: "Using choice architecture to drive software adoption, with the seven-part DEFAULT Audit.",
    audience: "CIOs, CTOs, digital and change leaders",
    pages: 20,
    file: "/whitepapers/the-nudge-enterprise.pdf",
    cover: "/whitepapers/covers/the-nudge-enterprise.webp",
  },
  {
    slug: "the-spreadsheet-always-wins",
    title: "The Spreadsheet Always Wins",
    summary: "Why people ignore the software you paid for, and how to make the new way the easy way.",
    audience: "CEOs, CFOs, CROs, CIOs, platform owners",
    pages: 16,
    file: "/whitepapers/the-spreadsheet-always-wins.pdf",
    cover: "/whitepapers/covers/the-spreadsheet-always-wins.webp",
  },
  {
    slug: "archetypes-research",
    title: "Archetypes and the Research Behind Them",
    summary: "The Big Five, the ten archetypes, scoring, and responsible use.",
    audience: "HR leaders and managers",
    pages: 12,
  },
];

export const downloadable = whitepapers.filter((w): w is Whitepaper & { file: string; cover: string } => Boolean(w.file && w.cover));
export const findWhitepaper = (slug: string) => downloadable.find((w) => w.slug === slug);
