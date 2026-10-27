// Resources articles, migrated from the Framer CMS. Slugs are cleaned up where the
// Framer slug contained punctuation; next.config.ts redirects the old URLs.

export type Category = "Guides" | "Research" | "Case studies";

export type Article = {
  slug: string;
  legacySlug?: string;
  title: string;
  excerpt: string;
  category: Category;
  readTime: string;
  related: { label: string; href: string };
  body: { heading: string; paragraphs: string[] }[];
};

export const categories: ("All" | Category)[] = ["All", "Guides", "Research", "Case studies"];

export const author = {
  name: "Brain Interacts Editorial",
  bio: "Practical perspectives on psychological measurement and organizational decisions.",
};

export const disclaimer = "This guide provides general information rather than context-specific professional advice.";

export const articles: Article[] = [
  {
    slug: "what-is-a-psychometric-assessment-a-guide-for-employers",
    title: "What is a psychometric assessment? A guide for employers.",
    excerpt: "What psychometric tests measure, how they are validated and how to use them fairly.",
    category: "Guides",
    readTime: "3 min read",
    related: { label: "Corporate Brain", href: "/platforms/corporate-brain" },
    body: [
      {
        heading: "What a score can tell you",
        paragraphs: [
          "Psychometric assessment uses standardized tasks or questions to measure constructs such as reasoning, personality and working style. A useful instrument makes its purpose clear. It should support a defined decision, not reduce a person to a permanent label.",
        ],
      },
      {
        heading: "Choosing an assessment responsibly",
        paragraphs: [
          "Review reliability, validity and the relevance of the comparison group. Combine assessment results with structured interviews and work samples. Tell participants how results will be used, who can access them and what feedback they can expect.",
        ],
      },
    ],
  },
  {
    slug: "gamified-assessment-vs-psychometric-test",
    legacySlug: "gamified-assessment-vs.-psychometric-test-what’s-the-difference",
    title: "Gamified assessment vs. psychometric test: what’s the difference?",
    excerpt: "How game-based assessments work, where they beat questionnaires and where they don’t.",
    category: "Guides",
    readTime: "3 min read",
    related: { label: "Gamified Assessments", href: "/platforms/gamified-assessments" },
    body: [
      {
        heading: "Different formats, the same measurement challenge",
        paragraphs: [
          "A questionnaire asks people to describe themselves or choose answers. A game-based assessment observes choices within a task. Timing, strategy changes and responses to feedback can add signals. The format alone does not make an assessment valid or fair.",
        ],
      },
      {
        heading: "Choose for the decision",
        paragraphs: [
          "Ask what each task measures, how scores are calculated and whether the assessment has been evaluated for the intended use. Consider accessibility, device requirements and familiarity with games. Use multiple sources of evidence rather than treating one score as a verdict.",
        ],
      },
    ],
  },
  {
    slug: "how-to-do-an-organizational-culture-assessment",
    title: "How to do an organizational culture assessment.",
    excerpt: "A step-by-step method, from defining culture dimensions to acting on results.",
    category: "Guides",
    readTime: "3 min read",
    related: { label: "Corporate Culture Study", href: "/services/organizational-culture-assessment" },
    body: [
      {
        heading: "Define culture through observable behavior",
        paragraphs: [
          "Culture is expressed through repeated decisions: who gets heard, how trade-offs are made and what happens when someone raises a concern. Start by defining the behaviors that matter to the organization, rather than copying a generic list of values.",
        ],
      },
      {
        heading: "Connect measurement to action",
        paragraphs: [
          "Combine surveys, structured interviews and organizational data. Compare stated values with everyday experience and examine differences between groups without exposing individuals. Select a small number of interventions, assign ownership and repeat measurement.",
        ],
      },
    ],
  },
  {
    slug: "the-real-root-causes-of-employee-turnover",
    title: "The real root causes of employee turnover.",
    excerpt: "Why pay is rarely the whole story, and how to find what is.",
    category: "Research",
    readTime: "3 min read",
    related: { label: "Root Cause Analysis", href: "/services/root-cause-analysis" },
    body: [
      {
        heading: "Attrition is an outcome, not an explanation",
        paragraphs: [
          "A resignation can reflect role fit, workload, manager relationships, career opportunities and compensation. Exit interviews often capture the final explanation rather than the full sequence of experiences. Company averages can conceal a concentrated team problem.",
        ],
      },
      {
        heading: "Test competing explanations",
        paragraphs: [
          "Compare patterns by role, tenure and work context. Combine operational evidence with structured listening and assessment data. Treat correlations as leads to investigate, not proof of causation. Choose a clear intervention hypothesis and track outcomes over time.",
        ],
      },
    ],
  },
  {
    slug: "psychometric-tests-for-management-positions-what-they-measure",
    title: "Psychometric tests for management positions: what they measure.",
    excerpt: "The traits that predict management performance, and how to assess them.",
    category: "Guides",
    readTime: "3 min read",
    related: { label: "Psychometric Consulting", href: "/services/psychometric-consulting" },
    body: [
      {
        heading: "Begin with the role",
        paragraphs: [
          "Management roles differ in their reasoning, judgment and interpersonal demands. Define success in the context of the actual role before choosing an instrument. A profile designed for one role should not become a universal definition of leadership.",
        ],
      },
      {
        heading: "Add signal without replacing judgment",
        paragraphs: [
          "Reasoning measures, personality evidence and structured interviews contribute different information. Examine instrument quality and relevant norms. Explain uncertainty, offer appropriate feedback and avoid making high-stakes decisions from one score alone.",
        ],
      },
    ],
  },
  {
    slug: "what-is-a-people-analytics-platform",
    title: "What is a people analytics platform?",
    excerpt: "What these platforms do, what to look for and how behavioral data changes the picture.",
    category: "Guides",
    readTime: "3 min read",
    related: { label: "Corporate Brain", href: "/platforms/corporate-brain" },
    body: [
      {
        heading: "Connect individual and organizational evidence",
        paragraphs: [
          "People analytics brings workforce information into a form that supports decisions. Headcount and retention describe what is happening. Skills and behavioral evidence can add context about capability and collaboration, provided it is relevant and interpreted carefully.",
        ],
      },
      {
        heading: "Start with a question, not a dashboard",
        paragraphs: [
          "Choose a business question first: where to develop capability, how to staff a project or which teams need support. Establish data quality, permissions and review responsibilities. A useful dashboard leads to a named action and a way to evaluate it.",
        ],
      },
    ],
  },
  {
    slug: "workplace-burnout-the-causes-leaders-can-fix",
    title: "Workplace burnout: the causes leaders can fix.",
    excerpt: "Cognitive load, role ambiguity and boundaries, and what to do about each.",
    category: "Guides",
    readTime: "3 min read",
    related: { label: "Mental Health Workshops", href: "/services/corporate-mental-health-workshops" },
    body: [
      {
        heading: "Look beyond individual resilience",
        paragraphs: [
          "Workplace strain can be shaped by excessive demands, conflicting priorities, unclear roles and limited control. Asking people to manage stress does not remove these conditions. Leaders should examine work design and whether resources match expectations.",
        ],
      },
      {
        heading: "Make the system easier to work in",
        paragraphs: [
          "Clarify priorities, define decision rights and set realistic availability boundaries. Give managers tools to discuss workload and respond to concerns. Workshops can support change, but they do not replace organizational action or clinical care when needed.",
        ],
      },
    ],
  },
  {
    slug: "psychometric-assessment-in-banking-and-nbfcs",
    title: "Psychometric assessment in banking and NBFCs.",
    excerpt: "How financial institutions are starting to use behavioral evidence.",
    category: "Research",
    readTime: "3 min read",
    related: { label: "FinCheck", href: "/platforms/fincheck" },
    body: [
      {
        heading: "Behavioral evidence in high-stakes settings",
        paragraphs: [
          "Financial decisions are made under uncertainty and regulatory constraints. Assessment may contribute to understanding how people process information and respond to pressure. Its intended use, limitations and governance should be explicit before deployment.",
        ],
      },
      {
        heading: "Build governance into a pilot",
        paragraphs: [
          "Define the decision the evidence supports and establish the legal and ethical basis for collection. Evaluate fairness, relevance and explainability. Do not use a score as an unexplained substitute for a regulated process. FinCheck is coming soon; scope will be confirmed with early partners.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
