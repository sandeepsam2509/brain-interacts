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

export type Scores = { O: number; C: number; E: number; A: number; N: number };

export const TRAIT_NAMES: Record<keyof Scores, string> = {
  O: "Openness",
  C: "Conscientiousness",
  E: "Extraversion",
  A: "Agreeableness",
  N: "Neuroticism",
};

/** Plain descriptions, matching the Research frameworks page. */
export const TRAIT_TEXT: Record<keyof Scores, { high: string; low: string }> = {
  O: { high: "Explore, imagine, question", low: "Prefer proven methods" },
  C: { high: "Plan, finish, keep standards", low: "Work flexibly, improvise" },
  E: { high: "Speak up, take the lead", low: "Reflect first, work independently" },
  A: { high: "Cooperate, support", low: "Challenge, give blunt feedback" },
  N: { high: "React strongly to stress", low: "Stay steady when things go wrong" },
};

export const CUTOFF = 60;
export const BORDERLINE = 7;
const ORDER: (keyof Scores)[] = ["O", "C", "E", "A", "N"];

// Corporate Brain archetype scoring (see "Corporate Brain Archetypes: Scoring, Primary and
// Secondary"). Each archetype has a reference profile where High = 75 and Low = 25 on
// O-C-E-A-N. The person's distance to each profile becomes a 0-100 similarity score.
const HIGH_REF = 75;
const LOW_REF = 25;
const MAX_DISTANCE = Math.sqrt(5 * 100 * 100); // 223.6: every trait 100 points away
/** The secondary archetype is shown only when it is this close to the primary (similarity points). */
export const SECONDARY_GAP = 5;

export type ArchetypeName =
  | "Elite"
  | "Operator"
  | "Integrator"
  | "Dominant"
  | "Builder"
  | "Visionary"
  | "Rainmaker"
  | "Creator"
  | "Supporter"
  | "Executor";

/** The ten core archetypes as High/Low on O-C-E-A-N (all ten have low neuroticism), with plain guidance from the model. */
export const ARCHETYPES: { name: ArchetypeName; code: string; how: string; watch: string; manage: string }[] = [
  { name: "Elite", code: "HHHHL", how: "High energy, capable and disciplined. Drives complex initiatives.", watch: "Overcommitment and burnout", manage: "Set ambitious outcomes, avoid micromanaging and keep an eye on workload." },
  { name: "Operator", code: "LHHHL", how: "Structured and execution-focused. Turns plans into delivery.", watch: "Process rigidity and resisting ambiguity", manage: "Give clear objectives and a steady cadence, with freedom to optimise." },
  { name: "Integrator", code: "HHLHL", how: "Thinks and delivers, and coordinates people and priorities.", watch: "Avoiding confrontation and too much consensus", manage: "Give ownership of coordination and encourage open disagreement." },
  { name: "Dominant", code: "HHHLL", how: "Assertive, competitive and results-driven.", watch: "Intimidation, impatience and conflict", manage: "Set ambitious targets with clear interpersonal boundaries." },
  { name: "Builder", code: "HHLLL", how: "An independent deep worker who builds solutions.", watch: "Working in silos and under-communicating", manage: "Give independence, plus regular stakeholder checkpoints." },
  { name: "Visionary", code: "HLHHL", how: "Spots opportunities and future directions.", watch: "Too many ideas and weak follow-through", manage: "Give problems rather than instructions, with validation milestones." },
  { name: "Rainmaker", code: "HLHLL", how: "Persuasive and commercially driven. Opens markets.", watch: "Overpromising and short-termism", manage: "Set aggressive targets with quality guardrails." },
  { name: "Creator", code: "HLLHL", how: "Quietly creative. Generates original ideas.", watch: "Ideas left unimplemented and low visibility", manage: "Protect thinking time, ask for ideas and add structure to deliver them." },
  { name: "Supporter", code: "LHLHL", how: "Reliable and cooperative. Strengthens the team.", watch: "Passivity and waiting for instructions", manage: "Set clear expectations, give recognition and build ownership step by step." },
  { name: "Executor", code: "LHLLL", how: "Quiet, dependable and focused on defined tasks.", watch: "Narrow focus and reluctance to escalate", manage: "Define success clearly and give autonomy within that scope." },
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
  return { O: scale(sums.O), C: scale(sums.C), E: scale(sums.E), A: scale(sums.A), N: scale(sums.N) };
}

export function pattern(scores: Scores): string {
  return ORDER.map((k) => (scores[k] >= CUTOFF ? "H" : "L")).join("");
}

export type RankedArchetype = { name: ArchetypeName; distance: number; similarity: number };

/** Steps 3 and 4: Euclidean distance to each reference profile, turned into a similarity score and ranked. */
export function rankArchetypes(scores: Scores): RankedArchetype[] {
  return ARCHETYPES.map(({ name, code }) => {
    // Distance is rounded to one decimal first, as in the model's worked example.
    const distance = round1(Math.sqrt(ORDER.reduce((sum, k, i) => sum + (scores[k] - (code[i] === "H" ? HIGH_REF : LOW_REF)) ** 2, 0)));
    return { name, distance, similarity: round1(100 * (1 - distance / MAX_DISTANCE)) };
  }).sort((a, b) => b.similarity - a.similarity);
}

function round1(n: number) {
  return Math.round(n * 10) / 10;
}

/** Primary = most similar archetype; secondary = next one, if it is within SECONDARY_GAP points. */
export function archetypes(scores: Scores): { main: ArchetypeName; secondary: ArchetypeName | null; pattern: string; ranked: RankedArchetype[] } {
  const ranked = rankArchetypes(scores);
  const close = ranked[0].similarity - ranked[1].similarity <= SECONDARY_GAP;
  return { main: ranked[0].name, secondary: close ? ranked[1].name : null, pattern: pattern(scores), ranked };
}

export function archetypeInfo(name: ArchetypeName) {
  return ARCHETYPES.find((a) => a.name === name)!;
}

// Step 5: management modifiers. The model's
// "low confidence" modifier also needs a technical score, which a self-assessment doesn't have.
export const MODIFIERS: { name: string; effect: string; on: (s: Scores) => boolean }[] = [
  { name: "High pressure sensitivity", effect: "More support and check-ins", on: (s) => s.N >= 70 },
  { name: "Low execution orientation", effect: "More milestones and accountability", on: (s) => s.C <= 45 },
  { name: "High social drive", effect: "More collaboration opportunities", on: (s) => s.E >= 75 },
  { name: "Low social drive", effect: "Fewer unnecessary meetings", on: (s) => s.E <= 45 },
  { name: "High openness", effect: "More room to experiment", on: (s) => s.O >= 75 },
  { name: "Low openness", effect: "More structure", on: (s) => s.O <= 45 },
  { name: "High conflict risk", effect: "Explicit behavioural boundaries", on: (s) => s.A <= 45 && s.N >= 60 },
  { name: "High autonomy preference", effect: "Less micromanagement", on: (s) => s.C >= 75 && s.E <= 55 },
  { name: "High overcommitment risk", effect: "Workload controls", on: (s) => s.C >= 75 && s.N >= 60 },
];

export function activeModifiers(scores: Scores) {
  return MODIFIERS.filter((m) => m.on(scores));
}

export const traitOrder = ORDER;

/** How each trait tends to show up in leadership, for the executive report. */
export const TRAIT_LEADERSHIP: Record<keyof Scores, { high: string; low: string }> = {
  O: { high: "Sets direction through new ideas and is quick to question how things are done.", low: "Leads through proven methods and keeps the organization focused on what already works." },
  C: { high: "Builds discipline: clear plans, follow-through and high standards.", low: "Stays flexible and improvises well, but may need others to drive structure and follow-up." },
  E: { high: "Leads from the front: visible, energizing and comfortable owning the room.", low: "Leads quietly: reflects before deciding and gives others space to speak." },
  A: { high: "Builds trust and cooperation; may avoid hard conversations.", low: "Challenges directly and makes tough calls; may need to invest more in relationships." },
  N: { high: "Feels pressure strongly; benefits from routines that protect decision quality under stress.", low: "Stays steady under pressure, which calms the people around them." },
};
