import type { PageContent } from "@/lib/types";
import { site } from "@/lib/site";
import { renders, screenshots } from "./images";

const home = { label: "Home", href: "/" };
const platformsCrumb = { label: "Platforms", href: "/platforms" };

export const platformsPage: PageContent = {
  path: "/platforms",
  title: "Team & Workforce Analytics Platforms",
  description:
    "Corporate Brain team analytics, Gamified Assessments and FinCheck. Behavioral analytics platforms for enterprises and growing businesses.",
  hero: {
    crumbs: [home, { label: "Platforms" }],
    eyebrow: "Platforms",
    title: "One behavioral engine. Three platforms for the decisions in front of you.",
    lead: "Validated psychometric models, cognitive frameworks and people analytics, built once and applied where you need them: running your teams, hiring, and financial decision-making.",
    actions: [
      { label: "Request a Demo", href: "/demo" },
      { label: "Compare the platforms", href: "/platforms#compare" },
    ],
    visual: renders.people,
  },
  sections: [
    {
      type: "cards",
      eyebrow: "The shared engine",
      title: "One engine, three ways to measure behavior",
      intro: "Every platform draws on the same three layers, so the data from one makes the others more useful.",
      cards: [
        {
          tag: "01",
          title: "Validated psychometric models",
          body: "Established models of personality, cognition and decision-making form the measurement core of every assessment.",
        },
        {
          tag: "02",
          title: "Behavioral data capture",
          body: "Our assessments record how people respond, from timing to changes in strategy, not only what they answer.",
        },
        {
          tag: "03",
          title: "Enterprise people analytics",
          body: "Results roll up from the individual to the team and the organization, with access controlled by role.",
        },
      ],
    },
    {
      type: "features",
      eyebrow: "Platforms",
      title: "Choose the platform for the decision in front of you",
      features: [
        {
          eyebrow: "Flagship platform · Available now",
          title: "Corporate Brain",
          body: "Leadership, managers and employees, connected by one brain. Psychometrics, technical assessments and project management in one secure workspace.",
          points: [
            "Assessments, team analytics and development metrics in one record",
            "Separate portals for leadership, managers and employees",
            "Runs in the browser, with nothing to install",
          ],
          image: screenshots.signIn,
        },
      ],
      link: { label: "Explore Corporate Brain", href: "/platforms/corporate-brain" },
    },
    {
      type: "cards",
      cards: [
        {
          tag: "Flagship platform",
          title: "Corporate Brain",
          body: "For leaders who need a continuous view of capability across the organization: assessments, team analytics and development metrics in one people analytics platform.",
          href: "/platforms/corporate-brain",
          accent: "green",
        },
        {
          tag: "Coming soon",
          title: "Gamified Assessments",
          body: "For hiring and talent teams who need signal candidates can’t rehearse. Interactive challenges replace static questionnaires.",
          href: "/platforms/gamified-assessments",
          accent: "gold",
        },
        {
          tag: "Coming soon",
          title: "FinCheck",
          body: "For banks, NBFCs and neo-banks that need behavioral evidence designed for regulated financial work.",
          href: "/platforms/fincheck",
          accent: "blue",
        },
      ],
    },
    {
      type: "table",
      id: "compare",
      eyebrow: "Compare",
      title: "Which platform fits?",
      intro: "A side-by-side view of what each platform measures, who uses it and when it is available.",
      head: ["", "Corporate Brain", "Gamified Assessments", "FinCheck"],
      highlight: 1,
      rows: [
        ["Best for", "Workforce planning, team design, development", "Hiring, campus and volume recruitment, high-potential identification", "Banks, NBFCs and neo-banks"],
        ["What it measures", "Behavior, technical skills, team dynamics, organizational metrics", "Decision-making, problem-solving, cognitive agility", "Behavioral patterns behind financial decisions"],
        ["Format", "Web platform with dashboards", "Browser-based interactive challenges", "Shaped with early partners"],
        ["Main users", "CHROs, executives, managers, employees", "Talent acquisition and L&D teams", "Confirmed with early partners"],
        ["Status", "Available now", "Coming soon", "Coming soon · Waitlist open"],
      ],
    },
    {
      type: "prose",
      tone: "panel",
      eyebrow: "With consulting",
      title: "Platforms and consulting, used together",
      body: [
        "Our consulting teams run their diagnostics on the same platforms you license. Findings from a root cause analysis or culture study keep updating after the engagement ends, so you can see whether the changes worked.",
      ],
      links: [{ label: "Explore our consulting services", href: "/services" }],
    },
    {
      type: "faq",
      title: "Questions about our assessment software",
      items: [
        {
          q: "What is psychometric assessment software?",
          a: "Psychometric assessment software delivers, scores and reports on psychometric tests online, so an organization can assess many people consistently and compare the results on one scale.",
        },
        {
          q: "Can Gamified Assessments and Corporate Brain be used together?",
          a: "Yes. Gamified assessment results can sit alongside behavioral and technical assessment data in Corporate Brain, so a hiring decision and later development planning use the same record.",
        },
        {
          q: "Is FinCheck available now?",
          a: "FinCheck is in development. Banks, NBFCs and neo-banks can join the waitlist for early access.",
        },
      ],
    },
    {
      type: "cta",
      title: "See the platforms with your own use case in mind.",
      body: "A 30-minute walkthrough of Corporate Brain and Gamified Assessments, tailored to your size and goals.",
      actions: [
        { label: "Request a Demo", href: "/demo" },
        { label: "Talk to Our Team", href: "/contact" },
      ],
    },
  ],
};

export const corporateBrainPage: PageContent = {
  path: "/platforms/corporate-brain",
  title: "Corporate Brain: People Analytics Platform",
  description:
    "Behavioral and technical assessments, team analytics and company development metrics in one people analytics platform for enterprise leaders.",
  hero: {
    crumbs: [home, platformsCrumb, { label: "Corporate Brain" }],
    eyebrow: "Flagship platform",
    title: "Know your team. Move faster.",
    lead: "Leadership, managers and employees, connected by one brain. Corporate Brain joins psychometrics, technical assessments and project management so problems are solved where they start.",
    actions: [
      { label: "Request a Corporate Brain Demo", href: "/demo" },
      { label: "Sign in", href: site.signIn },
    ],
    visual: renders.leadership,
  },
  sections: [
    {
      type: "prose",
      eyebrow: "The problem",
      title: "Your people data is scattered. Your decisions shouldn’t be.",
      body: [
        "Personality results sit in one tool, skills tests in another and team structure in a spreadsheet that is already out of date. Managers staff projects on instinct, and leadership can’t see where the organization is strong or stretched.",
        "Corporate Brain joins all of it into one record per person.",
      ],
    },
    {
      type: "features",
      eyebrow: "Three portals, one company",
      title: "Each level gets the view it needs.",
      intro: "Everyone signs in at the same address and sees only what their role needs: the whole company, the team, or their own work.",
      features: [
        {
          eyebrow: "Leadership portal",
          title: "See the whole company, decide with evidence.",
          body: "CEOs, CHROs and department heads get one view of people, skills and projects.",
          points: ["Team fit, bench and hiring in one place", "Assessments across every team", "Reports ready for the next board conversation"],
          image: screenshots.dashboard,
        },
        {
          eyebrow: "Manager portal",
          title: "Know your team, coach them better.",
          body: "Managers see what their people are good at, who has spare capacity and what needs a conversation.",
          points: [
            "A short list of actions waiting on you",
            "Reassessments and 1:1 check-ins, never forgotten",
            "Board, calendar, agenda, list and timeline views of the team’s work",
          ],
          image: screenshots.board,
        },
        {
          eyebrow: "Employee portal",
          title: "Know what is expected and how you are growing.",
          body: "Employees see their own work, their plan and the next thing to do, without chasing anyone.",
          points: ["One clear next action", "My work plan: progress, SWOT and alerts", "Find a teammate, request time away, see who reports to whom"],
        },
      ],
    },
    {
      type: "features",
      eyebrow: "Inside the Leadership portal",
      title: "What leaders get that a spreadsheet can’t give them",
      intro: "Every page tells you what needs you first, then lets you act on it, share it or download it as a PDF.",
      features: [
        {
          eyebrow: "Bench",
          title: "Spare capacity, matched to open work.",
          body: "See everyone free for work right now, why they are free, and the project where they fit best, with a fit score out of 100. Deploy them from the same card.",
          image: screenshots.bench,
        },
        {
          eyebrow: "People",
          title: "One directory with availability and assessment status.",
          body: "Search by name, role, skill, team or manager. Send an assessment, move someone to the bench or switch to the hierarchy view without leaving the list.",
          image: screenshots.people,
        },
        {
          eyebrow: "Projects",
          title: "Know which project is slipping, and why.",
          body: "Progress by project, status by vertical and a timeline. Corporate Brain flags work that is behind its calendar, like “27% of the time has passed but only 0% is done”.",
          image: screenshots.projects,
        },
        {
          eyebrow: "Hiring",
          title: "Hire for fit to the project, not just the CV.",
          body: "Add candidates, send each a private test link, and see competency, archetype and a written fit to the project’s goal before moving them to Offer.",
          image: screenshots.candidates,
        },
        {
          eyebrow: "Reports",
          title: "The report writes the first sentence for you.",
          body: "Progress, Teams and people, and Psychometric analysis, each summarised in plain words and exportable as PDF or Excel.",
          image: screenshots.teamsReport,
        },
      ],
    },
    {
      type: "checklist",
      eyebrow: "Team analytics",
      title: "Compare every team on the same facts.",
      intro: "Because assessments, skills and team structure share one record, Corporate Brain answers questions separate tools can’t.",
      items: [
        "Who has the skills and working style a new project needs",
        "Which teams lack a type of thinker, or depend on a single person",
        "Where training will pay off first",
        "Whether development programs are changing capability over time",
      ],
      image: screenshots.teamAnalytics,
    },
    {
      type: "cards",
      eyebrow: "The science behind the scores",
      title: "Built on the Big Five, read as ten working styles.",
      intro: "A 20-statement personality check (the Mini-IPIP) and a technical check for each function. Results show tendencies and current skills, never worth or potential, and every suggestion lists its reasons.",
      cards: [
        {
          title: "Five traits, scored 0 to 100",
          body: "Openness, conscientiousness, extraversion, agreeableness and emotional stability. 60 and above reads as High; scores near the cut-off are marked borderline.",
        },
        {
          title: "Ten base archetypes",
          body: "Driver, Operator, Integrator, Dominant, Builder, Visionary, Rainmaker, Creator, Supporter and Executor. Everyone gets a main and a secondary type.",
        },
        {
          title: "Technical score bands",
          body: "Each skill area is scored 0 to 100: Strong is 75 or more, Working is 50 to 74, and Gap is below 50, a training signal rather than a verdict.",
        },
      ],
    },
    {
      type: "steps",
      eyebrow: "Getting started",
      title: "First sign-in in four steps.",
      intro: "Your administrator creates your sign-in and you get an email with a temporary password. Everyone signs in at the same address and sees only what their role needs.",
      steps: [
        { title: "Open your address", body: "Go to your company’s Corporate Brain address and choose Sign in." },
        { title: "Enter your details", body: "Your email and the temporary password from your welcome email." },
        { title: "Set a new password", body: "Plus a code from your authenticator app or email, if two-step sign-in is on." },
        { title: "Take the tour", body: "A short tour opens the first time. Replay it any time from Help and Support." },
      ],
      link: { label: "Sign in to Corporate Brain", href: site.signIn },
    },
    {
      type: "cards",
      eyebrow: "Trust",
      title: "Rollout and trust",
      columns: 2,
      cards: [
        {
          tag: "01",
          title: "Live in weeks, not quarters",
          body: "Corporate Brain runs in the browser, with nothing to install. Most organizations start with one team and expand once the first insights land.",
        },
        {
          tag: "02",
          title: "People data, handled with care",
          body: "Employees see their own results and access is set by role. Permissions are agreed with your administrators before anyone is invited.",
        },
      ],
      links: [
        { label: "See how rollout works", href: "/how-it-works" },
        { label: "Read about security and privacy", href: "/security" },
      ],
    },
    {
      type: "faq",
      title: "Corporate Brain questions",
      items: [
        {
          q: "What does Corporate Brain measure?",
          a: "Behavioral traits such as working style, decision-making and stress response; role-specific technical skills; how team profiles combine; and organizational development metrics over time.",
        },
        {
          q: "Who sees individual assessment results?",
          a: "Employees see their own results. Managers see their team’s profiles, and leaders see aggregated analytics. Your administrators set these permissions.",
        },
        {
          q: "Can Corporate Brain assess candidates as well as current employees?",
          a: "Yes. Technical and behavioral assessments can be used in hiring and for the people you already employ.",
        },
        {
          q: "Does Corporate Brain integrate with our HR systems?",
          a: "Integration needs are reviewed during scoping. We confirm what is possible with your HR systems, along with the rollout plan, before kickoff.",
        },
      ],
    },
    {
      type: "cta",
      title: "See Corporate Brain with your own teams in mind.",
      body: "A 30-minute walkthrough, tailored to your size and goals.",
      actions: [
        { label: "Request a Corporate Brain Demo", href: "/demo" },
        { label: "Sign in", href: site.signIn },
      ],
    },
  ],
};

export const gamifiedPage: PageContent = {
  path: "/platforms/gamified-assessments",
  title: "Gamified Assessments for Hiring & Talent",
  description:
    "Game-based psychometric assessments that measure decision-making, problem-solving and cognitive agility without bias. A better alternative to questionnaires.",
  hero: {
    crumbs: [home, platformsCrumb, { label: "Gamified Assessments" }],
    eyebrow: "Coming soon",
    title: "Gamified assessments: people can rehearse answers, not instinct",
    lead: "Static questionnaires measure what candidates think you want to hear. Our game-based assessments embed psychometric models and cognitive frameworks inside interactive visual challenges, so behavior is observed as it happens.",
    actions: [
      { label: "Try a Gamified Assessment", href: "/demo" },
      { label: "See how it compares", href: "/platforms/gamified-assessments#compare" },
    ],
    visual: "pattern",
  },
  sections: [
    {
      type: "steps",
      eyebrow: "The session",
      title: "How a game-based assessment works",
      steps: [
        { title: "Open the link", body: "Candidates start in the browser, with nothing to download." },
        { title: "Play the challenges", body: "Candidates work through a short sequence of visual challenges. Session length depends on the assessment selected." },
        { title: "Behavior is captured", body: "Every move, hesitation and change of strategy is recorded." },
        { title: "Models score it", body: "Psychometric and cognitive models turn that behavior into a profile." },
        { title: "You get the report", body: "Results are compared against what the role needs." },
      ],
    },
    {
      type: "cards",
      eyebrow: "Features",
      title: "Behavior, observed as it happens",
      cards: [
        {
          tag: "01",
          title: "Interactive visual challenges",
          body: "Levels and scenarios replace multiple-choice forms. Engagement rises; social-desirability bias falls.",
        },
        { tag: "02", title: "Real-time decision mechanics", body: "Every move, hesitation and change of strategy is captured as behavioral data." },
        {
          tag: "03",
          title: "Gamified cognitive assessment",
          body: "Measure problem-solving strategy, learning speed and cognitive agility under changing conditions.",
        },
      ],
    },
    {
      type: "table",
      id: "compare",
      eyebrow: "Comparison",
      title: "Gamified assessment vs. traditional psychometric test",
      head: ["", "Traditional questionnaire", "Gamified assessment"],
      highlight: 2,
      rows: [
        ["What it captures", "Self-reported preferences", "Observed behavior and decisions"],
        ["Exposure to bias", "High: answers can be rehearsed", "Low: mechanics reveal natural patterns"],
        ["Candidate experience", "Repetitive forms", "Engaging challenges"],
        ["Depth of signal", "One answer per question", "Continuous, real-time data"],
      ],
    },
    {
      type: "pills",
      eyebrow: "What it measures",
      title: "What a gamified cognitive assessment measures",
      items: [
        "Problem-solving strategy",
        "Learning speed",
        "Cognitive agility",
        "Decision-making under pressure",
        "Risk appetite",
        "Attention and persistence",
      ],
    },
    {
      type: "cards",
      eyebrow: "Use cases",
      title: "Where teams use gamified assessments",
      columns: 2,
      cards: [
        { tag: "01", title: "Graduate and campus hiring", body: "Compare candidates with little work history on how they think, not on their CV." },
        { tag: "02", title: "Volume recruitment", body: "Screen large applicant pools consistently, with a process candidates finish." },
        { tag: "03", title: "Leadership pipeline", body: "Identify high-potential employees on observed decision-making." },
        { tag: "04", title: "Team composition and reskilling", body: "Find who can learn new roles fastest." },
      ],
    },
    {
      type: "cards",
      eyebrow: "Fairness",
      title: "Fairer for candidates, clearer for you",
      cards: [
        {
          tag: "01",
          title: "A better candidate experience",
          body: "Short, engaging challenges respect candidates’ time and reflect well on your employer brand. Works on desktop and mobile.",
        },
        {
          tag: "02",
          title: "Designed to reduce bias",
          body: "Scoring uses observed behavior instead of self-description, and prior gaming experience is not what’s measured.",
        },
        {
          tag: "03",
          title: "Accessible by design",
          body: "Discuss accessibility and device requirements with our team before assigning an assessment.",
        },
      ],
    },
    {
      type: "faq",
      title: "Gamified assessment questions",
      items: [
        {
          q: "Can candidates fake a gamified assessment?",
          a: "It is much harder than with a questionnaire. Scoring is based on how people make decisions throughout each challenge, not on answers they can prepare in advance.",
        },
        {
          q: "How long does a gamified assessment take?",
          a: "Session length depends on the assessment. Our team will confirm the expected time before participants begin.",
        },
        {
          q: "Do candidates need to be good at video games?",
          a: "No. The challenges are simple to learn, and scoring looks at decision patterns, not gaming skill.",
        },
        {
          q: "Can we use gamified assessments for current employees?",
          a: "Yes. Teams use them to identify high-potential employees and to plan reskilling.",
        },
      ],
    },
    {
      type: "cta",
      title: "See how your candidates think, not what they rehearse.",
      body: "Take a sample challenge yourself, then see the report your hiring team would get.",
      actions: [
        { label: "Try a Gamified Assessment", href: "/demo" },
        { label: "Talk to Our Team", href: "/contact" },
      ],
    },
  ],
};

export const fincheckPage: PageContent = {
  path: "/platforms/fincheck",
  title: "FinCheck: Behavioral Analysis for Banks & NBFCs",
  description:
    "Coming soon: FinCheck brings psychometric and behavioral analysis to banks, NBFCs and neo-banks. Join the early access list.",
  hero: {
    crumbs: [home, platformsCrumb, { label: "FinCheck" }],
    eyebrow: "Coming soon",
    title: "FinCheck: behavioral analysis for banks and NBFCs",
    lead: "Financial institutions run on decisions made under pressure: about risk, about customers, about compliance. FinCheck brings Brain Interacts’ behavioral science and psychometric testing to neo-banks, NBFCs and banks, with models built for regulated, high-stakes financial work.",
    actions: [{ label: "Request Early Access", href: "/platforms/fincheck#waitlist" }],
  },
  sections: [
    {
      type: "prose",
      eyebrow: "Why it matters",
      title: "Why behavioral evidence matters in financial services",
      body: [
        "Most financial decisions are made by people, under time pressure, with incomplete information. Behavior shapes how risk is judged, how rules are followed and how trust is built.",
        "FinCheck measures those patterns with models designed for the realities of financial institutions.",
      ],
    },
    {
      type: "cards",
      eyebrow: "Who it’s for",
      title: "Built for three kinds of institution",
      cards: [
        { tag: "01", title: "Neo-banks", body: "Scale fast without diluting judgment.", accent: "blue" },
        { tag: "02", title: "NBFCs", body: "Strengthen decision quality across distributed operations.", accent: "green" },
        { tag: "03", title: "Banks", body: "Bring behavioral evidence to high-stakes decisions.", accent: "gold" },
      ],
    },
    {
      type: "cards",
      eyebrow: "What to expect",
      title: "What to expect from FinCheck",
      cards: [
        { tag: "01", title: "Built for regulated environments", body: "Data handling designed around the expectations of financial regulators." },
        {
          tag: "02",
          title: "The science behind Corporate Brain",
          body: "FinCheck runs on the same validated psychometric models and behavioral analytics as our flagship platform.",
        },
        {
          tag: "03",
          title: "Shaped with early partners",
          body: "The first institutions to join help decide which models and reports come first.",
        },
      ],
    },
  ],
};

export const fincheckAfterForm: PageContent["sections"] = [
  {
    type: "faq",
    title: "FinCheck questions",
    items: [
      { q: "When will FinCheck launch?", a: "A launch date has not been announced. Join the waitlist to receive availability updates." },
      { q: "Who is FinCheck for?", a: "Neo-banks, NBFCs and banks that want behavioral evidence in their decisions." },
      {
        q: "Is FinCheck part of Corporate Brain?",
        a: "FinCheck is a separate platform built on the same behavioral science engine as Corporate Brain.",
      },
    ],
  },
  {
    type: "cta",
    title: "Be among the first institutions to use FinCheck.",
    actions: [
      { label: "Request Early Access", href: "/platforms/fincheck#waitlist" },
      { label: "Talk to Our Team", href: "/contact" },
    ],
  },
];
