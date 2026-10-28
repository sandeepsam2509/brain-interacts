// The free working-style snapshot: 20 statements, Big Five scoring and the
// nearest Corporate Brain archetype. Used by the bot (browser) and the API (server),
// so the score in the email always matches the method on the Science pages.

export type Trait = "O" | "C" | "E" | "A" | "N";

/** [statement, trait, reverse-worded] */
export const QUESTIONS: [string, Trait, boolean][] = [
  ["I have a vivid imagination and enjoy abstract ideas.", "O", false],
  ["I am curious about how things work and like exploring complex topics.", "O", false],
  ["I enjoy artistic experiences, poetry, or creative outlets.", "O", false],
  ["I prefer sticking to familiar routines rather than trying new ways of doing things.", "O", true],
  ["I pay attention to details and keep my environment organized.", "C", false],
  ["I complete my tasks thoroughly and rarely leave work unfinished.", "C", false],
  ["I set clear goals for myself and work systematically to achieve them.", "C", false],
  ["I tend to procrastinate or get easily distracted when working on important tasks.", "C", true],
  ["I feel energized when spending time in dynamic, social settings.", "E", false],
  ["I am quick to start conversations and comfortable taking charge in groups.", "E", false],
  ["I express my opinions openly and with confidence.", "E", false],
  ["I prefer spending time alone or keeping to a small circle of close acquaintances.", "E", true],
  ["I am genuinely interested in other people’s feelings and well-being.", "A", false],
  ["I try to find common ground and avoid unnecessary conflict.", "A", false],
  ["I am willing to set aside my own priorities to assist someone in need.", "A", false],
  ["I am skeptical of others’ intentions and slow to trust new people.", "A", true],
  ["I frequently feel stressed, anxious, or overwhelmed by pressure.", "N", false],
  ["I often worry about things that might go wrong.", "N", false],
  ["My mood changes quickly when faced with unexpected setbacks.", "N", false],
  ["I remain calm, composed, and grounded even in difficult situations.", "N", true],
];

export const ANSWER_LABELS = ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"];

export type Scores = { O: number; C: number; E: number; A: number; ES: number };

export const TRAIT_NAMES: Record<keyof Scores, string> = {
  O: "Openness",
  C: "Conscientiousness",
  E: "Extraversion",
  A: "Agreeableness",
  ES: "Emotional stability",
};

/** Plain descriptions, matching the Research frameworks page. */
export const TRAIT_TEXT: Record<keyof Scores, { high: string; low: string }> = {
  O: { high: "Explore, imagine, question", low: "Prefer proven methods" },
  C: { high: "Plan, finish, keep standards", low: "Work flexibly, improvise" },
  E: { high: "Speak up, take the lead", low: "Reflect first, work independently" },
  A: { high: "Cooperate, support", low: "Challenge, give blunt feedback" },
  ES: { high: "Stay steady when things go wrong", low: "React strongly to stress" },
};

export const CUTOFF = 60;
export const BORDERLINE = 7;
const ORDER: (keyof Scores)[] = ["O", "C", "E", "A", "ES"];

/** The ten base archetypes, as High/Low on O-C-E-A-ES (see Psychometric methodologies). */
export const ARCHETYPES: [string, string][] = [
  ["Driver", "HHHHH"],
  ["Operator", "LHHHH"],
  ["Integrator", "HHLHH"],
  ["Dominant", "HHHLH"],
  ["Builder", "HHLLH"],
  ["Visionary", "HLHHH"],
  ["Rainmaker", "HLHLH"],
  ["Creator", "HLLHH"],
  ["Supporter", "LHLHH"],
  ["Executor", "LHLLH"],
];

export function isValidAnswers(answers: unknown): answers is number[] {
  return Array.isArray(answers) && answers.length === QUESTIONS.length && answers.every((v) => Number.isInteger(v) && v >= 1 && v <= 5);
}

/** Mini-IPIP style scoring: flip reverse-worded items, average four per trait, scale to 0–100. */
export function scoreAnswers(answers: number[]): Scores {
  const sums: Record<Trait, number> = { O: 0, C: 0, E: 0, A: 0, N: 0 };
  answers.forEach((v, i) => {
    const [, trait, reverse] = QUESTIONS[i];
    sums[trait] += reverse ? 6 - v : v;
  });
  const scale = (sum: number) => Math.round(((sum / 4 - 1) / 4) * 100);
  return { O: scale(sums.O), C: scale(sums.C), E: scale(sums.E), A: scale(sums.A), ES: 100 - scale(sums.N) };
}

export function pattern(scores: Scores): string {
  return ORDER.map((k) => (scores[k] >= CUTOFF ? "H" : "L")).join("");
}

/** Main archetype = closest base pattern; secondary = next closest. */
export function archetypes(scores: Scores): { main: string; secondary: string; pattern: string } {
  const p = pattern(scores);
  // Distance counts mismatched traits; ties broken by how far the mismatched scores sit from the cut-off.
  const ranked = ARCHETYPES.map(([name, code]) => {
    let distance = 0;
    let margin = 0;
    ORDER.forEach((k, i) => {
      if (code[i] !== p[i]) {
        distance += 1;
        margin += Math.abs(scores[k] - CUTOFF);
      }
    });
    return { name, distance, margin };
  }).sort((a, b) => a.distance - b.distance || a.margin - b.margin);
  return { main: ranked[0].name, secondary: ranked[1].name, pattern: p };
}

export const traitOrder = ORDER;
