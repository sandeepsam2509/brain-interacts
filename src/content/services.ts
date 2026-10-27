import type { Card, Faq, PageContent, Section } from "@/lib/types";

const home = { label: "Home", href: "/" };
const servicesCrumb = { label: "Services", href: "/services" };

const glance: Faq[] = [
  { q: "Duration", a: "Agreed after the diagnostic call, once we know the question and the teams involved." },
  { q: "Your team’s time", a: "Assessment and interview time scoped to your teams, confirmed in the proposal." },
  { q: "Deliverables", a: "Evidence report, recommended actions and an executive readout." },
];

const related = (cards: Omit<Card, "body">[], bodies: string[]): Section => ({
  type: "cards",
  eyebrow: "Related",
  title: "Often paired with",
  cards: cards.map((c, i) => ({ ...c, body: bodies[i] })),
});

const seeAll = { label: "See all services", href: "/services" };

export const servicesPage: PageContent = {
  path: "/services",
  title: "Organizational Psychology Consulting & Workforce Diagnostics",
  description:
    "Root cause analysis, psychometric consulting, culture assessment and mental health workshops, powered by team and workforce analytics.",
  hero: {
    crumbs: [home, { label: "Services" }],
    eyebrow: "Consulting",
    title: "Organizational psychology consulting that finds the human cause behind the numbers.",
    lead: "Our advisory teams pair behavioral scientists with enterprise strategists. We measure what conventional HR analytics miss, then translate it into decisions your leadership team can act on.",
    actions: [
      { label: "Schedule a Diagnostic", href: "/diagnostic" },
      { label: "Find the right service", href: "/services#which-service" },
    ],
  },
  sections: [
    {
      type: "cards",
      eyebrow: "Services",
      title: "Four diagnostics for four expensive problems",
      columns: 2,
      cards: [
        {
          tag: "01",
          title: "Root Cause Analysis",
          body: "When projects stall or regretted attrition rises, and no one can say why.",
          href: "/services/root-cause-analysis",
          accent: "blue",
        },
        {
          tag: "02",
          title: "Psychometric Consulting",
          body: "When a leadership hire, promotion or succession decision is too costly to get wrong.",
          href: "/services/psychometric-consulting",
          accent: "gold",
        },
        {
          tag: "03",
          title: "Corporate Culture Study",
          body: "When engagement scores look fine but integrations, silos or conduct say otherwise.",
          href: "/services/organizational-culture-assessment",
          accent: "green",
        },
        {
          tag: "04",
          title: "Mental Health Workshops",
          body: "When strain, burnout and absenteeism rise faster than wellness programs can absorb.",
          href: "/services/corporate-mental-health-workshops",
          accent: "aqua",
        },
      ],
    },
    {
      type: "table",
      id: "which-service",
      eyebrow: "Which service fits",
      title: "Start with the symptom you’re seeing",
      head: ["What you’re seeing", "Where to start"],
      highlight: 1,
      rows: [
        ["High performers resigning, or projects that keep slipping", "Root Cause Analysis"],
        ["A leadership role to fill, promote or plan succession for", "Psychometric Consulting"],
        ["A merger, restructure or new leadership team", "Corporate Culture Study"],
        ["Rising burnout, sick leave or disengagement", "Mental Health Workshops"],
        ["Several of these, or you’re not sure", "Schedule a Diagnostic"],
      ],
    },
    {
      type: "cards",
      eyebrow: "Approach",
      title: "What makes our consulting different",
      cards: [
        { tag: "01", title: "Measured, not assumed", body: "Every engagement starts with assessment and network data, not opinion surveys alone." },
        {
          tag: "02",
          title: "Scientists and strategists together",
          body: "Behavioral scientists find the pattern; enterprise strategists turn it into a plan the business can run.",
        },
        {
          tag: "03",
          title: "Measurement continues after we leave",
          body: "Corporate Brain keeps tracking the metrics, so you can see whether the changes worked.",
        },
      ],
    },
    {
      type: "steps",
      eyebrow: "Engagement model",
      title: "How a consulting engagement works",
      steps: [
        { title: "Scope", body: "We define the business question with your executive sponsor." },
        { title: "Measure", body: "We deploy assessments, network analysis and interviews." },
        { title: "Diagnose", body: "Our scientists and strategists analyze the data together." },
        { title: "Advise", body: "You receive findings and a prioritized action plan." },
        { title: "Track", body: "Corporate Brain keeps measuring, so you see whether it worked." },
      ],
    },
    {
      type: "faq",
      title: "Consulting questions",
      items: [
        {
          q: "What is organizational psychology consulting?",
          a: "Organizational psychology consulting applies the science of human behavior at work to business problems such as attrition, leadership selection, culture and well-being, using measurement rather than opinion.",
        },
        {
          q: "How long does an engagement take?",
          a: "Engagement duration depends on the question, the number of teams and the evidence available. Your proposal sets out the timeline before work begins.",
        },
        {
          q: "Can we combine services?",
          a: "Yes. A root cause analysis often leads into a culture study or leadership assessment, and we scope combined engagements as one project.",
        },
      ],
    },
    {
      type: "cta",
      title: "Bring us the problem your data can’t explain.",
      body: "A diagnostic call with a behavioral scientist and an enterprise strategist, focused on your business question.",
      actions: [
        { label: "Schedule a Diagnostic", href: "/diagnostic" },
        { label: "Talk to Our Team", href: "/contact" },
      ],
    },
  ],
};

export const rootCausePage: PageContent = {
  path: "/services/root-cause-analysis",
  title: "Root Cause Analysis for Employee Turnover",
  description:
    "Find out why top talent leaves and projects stall. Behavioral root cause analysis using psychometrics and organizational network data.",
  hero: {
    crumbs: [home, servicesCrumb, { label: "Root Cause Analysis" }],
    eyebrow: "Root Cause Analysis",
    title: "Root cause analysis: find out why projects stall and top talent leaves",
    lead: "A behavioral diagnostic that traces turnover, delays and friction back to their cause, using psychometrics, technical assessments and organizational network analysis.",
    actions: [
      { label: "Find the Root Cause", href: "/diagnostic" },
      { label: "How we work", href: "/services/root-cause-analysis#method" },
    ],
  },
  sections: [
    {
      type: "problem",
      problem:
        "Corporate metrics track results, not causes. Your dashboards report that a project slipped or a high performer resigned. They cannot tell you why.",
      risk: "Without the cause, leaders apply generic fixes: new tools, reorganizations, retention bonuses. The real friction stays, and the same failures return with a new budget attached.",
      solution:
        "We combine psychological science, technical assessments and organizational network analysis to map how work and influence actually flow. Bottlenecks, overloaded connectors and hidden friction become visible and measurable.",
    },
    {
      type: "checklist",
      eyebrow: "Signs",
      title: "Signs you need a root cause analysis",
      items: [
        "Regretted attrition is concentrated in certain teams or under certain managers",
        "Projects keep slipping even though headcount looks sufficient",
        "Exit interviews give vague reasons like “better opportunity”",
        "New tools or reorganizations haven’t changed the results",
        "A few people everyone depends on are close to burnout",
      ],
    },
    {
      type: "cards",
      id: "method",
      eyebrow: "Method",
      title: "How we find the root cause",
      cards: [
        {
          tag: "01",
          title: "Psychometric and technical assessment",
          body: "We check whether people sit in roles that fit their strengths, skills and working style.",
        },
        {
          tag: "02",
          title: "Organizational network analysis",
          body: "We map how work and information actually flow, revealing overloaded connectors, isolated teams and hidden influencers.",
        },
        {
          tag: "03",
          title: "Interviews and data review",
          body: "Structured interviews and your attrition, performance and project data are matched to the patterns we find.",
        },
      ],
    },
    {
      type: "checklist",
      eyebrow: "Deliverables",
      title: "What you get",
      items: [
        "The root cause of employee turnover, by team and by dynamic",
        "Why specific projects stall, and who can unblock them",
        "Bottlenecks hidden in informal networks",
        "A prioritized intervention plan tied to business metrics",
      ],
      glance,
    },
    {
      type: "faq",
      title: "Root cause analysis questions",
      items: [
        {
          q: "What is the root cause of employee turnover?",
          a: "It is rarely pay alone. Most regretted attrition traces back to role mismatch, manager dynamics, overload or culture friction. Our analysis measures which of these is driving it in your organization.",
        },
        {
          q: "What is organizational network analysis?",
          a: "Organizational network analysis maps who works with whom and how information moves through a company. It shows bottlenecks, overloaded people and isolated teams that an org chart hides.",
        },
        {
          q: "Are individual responses kept confidential?",
          a: "Yes. Reports show patterns at team level, and individual answers are never shared with managers.",
        },
      ],
    },
    related(
      [
        { tag: "Service", title: "Corporate Culture Study", href: "/services/organizational-culture-assessment" },
        { tag: "Service", title: "Psychometric Consulting", href: "/services/psychometric-consulting" },
        { tag: "Platform", title: "Corporate Brain", href: "/platforms/corporate-brain" },
      ],
      [
        "When the cause turns out to be how decisions and influence flow across the organization.",
        "When the friction sits in a leadership role that needs the right person in it.",
        "Keep tracking the same metrics after the engagement, so you can see the fix working.",
      ],
    ),
    {
      type: "cta",
      title: "Stop treating symptoms. Find the cause.",
      actions: [{ label: "Find the Root Cause", href: "/diagnostic" }, seeAll],
    },
  ],
};

export const psychometricPage: PageContent = {
  path: "/services/psychometric-consulting",
  title: "Psychometric Assessment Consultants",
  description:
    "Psychometric consultants who measure cognitive speed, behavioral archetypes and decision bias to prevent costly leadership mismatches.",
  hero: {
    crumbs: [home, servicesCrumb, { label: "Psychometric Consulting" }],
    eyebrow: "Psychometric Consulting",
    title: "Psychometric consulting: measure the leader, not the résumé",
    lead: "Psychometric assessment consultants who measure cognitive speed, behavioral archetypes and decision bias, so your leadership decisions rest on evidence.",
    actions: [
      { label: "Talk to a Psychometric Consultant", href: "/diagnostic" },
      { label: "What we measure", href: "/services/psychometric-consulting#measure" },
    ],
  },
  sections: [
    {
      type: "problem",
      problem:
        "Résumés reflect past exposure. Interviews reflect presentation skill. Neither predicts how a person handles stress, aligns with peers or executes under uncertainty.",
      risk: "Without scientific measurement of cognitive speed, behavioral archetypes and decision-making biases, enterprises make costly leadership mismatches: stalled strategy, team attrition and expensive replacement cycles.",
      solution:
        "Our psychometric assessment consultants bridge human science and corporate strategy. We design and interpret assessments for your critical roles and give leadership clarity on capability: who is ready, who is at risk, and where the gaps are.",
    },
    {
      type: "cards",
      eyebrow: "Decisions",
      title: "Decisions we help leadership teams make",
      columns: 2,
      cards: [
        { tag: "01", title: "Executive hiring", body: "Compare finalists for C-suite and senior roles on the same evidence." },
        { tag: "02", title: "Promotion and succession", body: "Know who is ready now, who is ready soon and who needs support." },
        { tag: "03", title: "Leadership team design", body: "See how a leadership team’s profiles combine, and where it is exposed." },
        { tag: "04", title: "High-potential programs", body: "Select participants on measured potential, not visibility." },
      ],
    },
    {
      type: "pills",
      id: "measure",
      eyebrow: "What we measure",
      title: "Five dimensions of leadership capability",
      items: [
        "Cognitive speed and reasoning",
        "Behavioral archetypes and working style",
        "Decision-making biases",
        "Stress response and resilience",
        "Values and motivational drivers",
      ],
    },
    {
      type: "steps",
      eyebrow: "Process",
      title: "How a leadership assessment runs",
      steps: [
        { title: "Role profile", body: "We define what success in the role requires." },
        { title: "Assessment design", body: "We choose and tailor the psychometric tests for that profile." },
        { title: "Assess and interview", body: "Candidates complete assessments and a structured interview." },
        { title: "Interpret", body: "Our consultants analyze results against the role profile." },
        { title: "Report and debrief", body: "Leadership receives a capability report; candidates receive feedback." },
      ],
    },
    {
      type: "checklist",
      eyebrow: "Deliverables",
      title: "What you get",
      items: [
        "Leadership assessment and succession planning for critical roles",
        "Psychometric tests for management positions, designed around your context",
        "Cognitive speed, archetype and decision-bias profiling",
        "Executive-ready capability reports",
      ],
      glance,
    },
    {
      type: "prose",
      tone: "note",
      eyebrow: "Ethics",
      title: "Fair, confidential and explained",
      body: [
        "Results are used only for the purpose agreed in advance, every candidate is offered feedback, and assessments are reviewed for adverse impact.",
      ],
    },
    {
      type: "faq",
      title: "Psychometric consulting questions",
      items: [
        {
          q: "What is a psychometric test for management positions?",
          a: "It is a set of assessments that measures the reasoning, judgment, working style and stress response a management role demands. Results are compared against a profile of what success looks like in that role.",
        },
        {
          q: "Can psychometric assessments predict leadership performance?",
          a: "Validated cognitive and personality measures add real predictive value, especially when combined with structured interviews. They are one strong input to a decision, not the whole decision.",
        },
        {
          q: "Do you use off-the-shelf tests or design your own?",
          a: "Our consultants discuss the instruments, their relevance and the assessment design with you during scoping.",
        },
      ],
    },
    related(
      [
        { tag: "Service", title: "Root Cause Analysis", href: "/services/root-cause-analysis" },
        { tag: "Platform", title: "Gamified Assessments", href: "/platforms/gamified-assessments" },
        { tag: "Solution", title: "For leadership", href: "/for/leadership" },
      ],
      [
        "Find out whether a leadership gap is behind attrition or stalled delivery.",
        "Observe decision-making in interactive challenges, alongside consultant-led assessment.",
        "See how assessment fits into a wider view of capability and people risk.",
      ],
    ),
    {
      type: "cta",
      title: "Make your next leadership decision on evidence.",
      actions: [{ label: "Talk to a Psychometric Consultant", href: "/diagnostic" }, seeAll],
    },
  ],
};

export const culturePage: PageContent = {
  path: "/services/organizational-culture-assessment",
  title: "Organizational Culture Assessment",
  description:
    "Go beyond eNPS. A data-backed organizational culture assessment that maps power dynamics, silos, value gaps and subcultures.",
  hero: {
    crumbs: [home, servicesCrumb, { label: "Corporate Culture Study" }],
    eyebrow: "Corporate Culture Study",
    title: "Corporate Culture Study: an organizational culture assessment built on evidence",
    lead: "Go beyond eNPS. We measure how decisions are really made, who holds influence and where stated values and everyday behavior diverge.",
    actions: [
      { label: "Commission a Culture Study", href: "/diagnostic" },
      { label: "Survey vs. study", href: "/services/organizational-culture-assessment#compare" },
    ],
  },
  sections: [
    {
      type: "problem",
      problem:
        "eNPS scores and annual surveys capture surface sentiment and temporary morale. They do not explain how workforce behavior drives performance.",
      risk: "Leaders stay unaware of informal power dynamics, communication silos, value misalignment and toxic subcultures until they surface as attrition, failed integrations or reputational damage.",
      solution:
        "We give executive teams an empirical, data-backed culture and climate assessment. Behavioral measurement and network analysis reveal how decisions are made, who holds influence, and where stated values and lived behavior diverge.",
    },
    {
      type: "cards",
      eyebrow: "When it matters",
      title: "When a culture study pays for itself",
      columns: 2,
      cards: [
        { tag: "01", title: "Mergers and acquisitions", body: "Find the cultural fault lines before integration, not after the first resignations." },
        { tag: "02", title: "Restructures and leadership changes", body: "Know where influence really sits before you redraw the org chart." },
        { tag: "03", title: "Rapid growth", body: "Keep what made the company work as new teams, offices and managers arrive." },
        { tag: "04", title: "Conduct and ethics concerns", body: "Locate the subcultures where problems start." },
      ],
    },
    {
      type: "pills",
      eyebrow: "What we measure",
      title: "Six dimensions of culture we measure",
      items: [
        "How decisions get made",
        "Informal influence networks",
        "Communication flow and silos",
        "Value alignment, stated vs. lived",
        "Psychological safety",
        "Subcultures by function and location",
      ],
    },
    {
      type: "table",
      id: "compare",
      eyebrow: "Survey vs. study",
      title: "Engagement survey vs. Corporate Culture Study",
      head: ["", "Engagement survey", "Corporate Culture Study"],
      highlight: 2,
      rows: [
        ["What it measures", "How people feel", "How people behave and interact"],
        ["Informal networks", "Not visible", "Mapped"],
        ["Output", "Scores and trends", "Causes and prioritized actions"],
        ["Over time", "Annual snapshot", "Baseline, then tracking in Corporate Brain"],
      ],
    },
    {
      type: "checklist",
      eyebrow: "Deliverables",
      title: "What you get",
      items: [
        "A map of informal influence and communication networks",
        "Silos and subcultures located by function and location",
        "The measured gap between stated and lived values",
        "Lower risk in mergers, restructures and leadership transitions",
      ],
      glance,
    },
    {
      type: "faq",
      title: "Culture assessment questions",
      items: [
        {
          q: "How is this different from an engagement survey?",
          a: "Surveys ask people how they feel. Our organizational culture assessment measures how people actually behave and interact, so it explains performance instead of just reporting mood.",
        },
        {
          q: "What is a culture and climate assessment?",
          a: "Culture is the shared norms and values that guide behavior; climate is how people experience them day to day. A culture and climate assessment measures both and shows where they differ.",
        },
        {
          q: "How do you protect anonymity?",
          a: "Results are only reported for groups above a minimum size, so no individual can be identified.",
        },
      ],
    },
    related(
      [
        { tag: "Service", title: "Root Cause Analysis", href: "/services/root-cause-analysis" },
        { tag: "Service", title: "Mental Health Workshops", href: "/services/corporate-mental-health-workshops" },
        { tag: "Platform", title: "Corporate Brain", href: "/platforms/corporate-brain" },
      ],
      [
        "Trace a specific attrition or delivery problem back to the cultural pattern behind it.",
        "Act on strain and psychological-safety findings with every level of the organization.",
        "Track culture against the baseline after the study ends.",
      ],
    ),
    {
      type: "cta",
      title: "See the culture you actually have.",
      actions: [{ label: "Commission a Culture Study", href: "/diagnostic" }, seeAll],
    },
  ],
};

export const workshopsPage: PageContent = {
  path: "/services/corporate-mental-health-workshops",
  title: "Corporate Mental Health Workshops",
  description:
    "Science-backed corporate mental health workshops that tackle cognitive load, role ambiguity and burnout at the source, not just the symptoms.",
  hero: {
    crumbs: [home, servicesCrumb, { label: "Mental Health Workshops" }],
    eyebrow: "Mental Health Workshops",
    title: "Corporate mental health workshops that fix strain at the system level",
    lead: "Science-backed corporate mental health training that targets cognitive load, role ambiguity and weak boundaries, the causes of burnout rather than its symptoms.",
    actions: [
      { label: "Plan a Workshop", href: "/diagnostic" },
      { label: "Workshop topics", href: "/services/corporate-mental-health-workshops#topics" },
    ],
  },
  sections: [
    {
      type: "problem",
      problem:
        "Standard EAPs and generic wellness apps treat well-being as an afterthought. They ignore the root drivers: chronic cognitive load, role ambiguity, poor boundaries and unsupportive team dynamics.",
      risk: "Strain compounds quietly into absenteeism, presenteeism and workplace burnout. Your strongest performers often carry the heaviest load and are the first to leave.",
      solution:
        "Structured, science-backed corporate mental health training that addresses the systemic causes of strain. Teams and leaders learn behavioral strategies to manage cognitive load, clarify roles and set sustainable boundaries.",
    },
    {
      type: "cards",
      eyebrow: "Formats",
      title: "Workshops for every level",
      cards: [
        { tag: "01", title: "For leadership teams", body: "Design work, goals and meeting load so they don’t burn people out." },
        { tag: "02", title: "For managers", body: "Spot early signs of strain and hold clear conversations about roles and workload." },
        { tag: "03", title: "For teams", body: "Practical strategies for cognitive load, focus and sustainable boundaries." },
      ],
    },
    {
      type: "pills",
      id: "topics",
      eyebrow: "Topics",
      title: "Workshop topics",
      items: [
        "Managing cognitive load",
        "Role clarity",
        "Sustainable boundaries",
        "Psychological safety in teams",
        "Recognizing early signs of burnout",
        "Returning well after leave",
      ],
    },
    {
      type: "prose",
      tone: "panel",
      eyebrow: "Measuring change",
      title: "We measure whether it worked",
      body: [
        "Before each program, short pulse assessments set a baseline for strain, clarity and load. We repeat them afterwards, so you see the change in data, not only in feedback forms.",
        "Workshops are led by qualified practitioners in organizational psychology, workplace well-being and behavioral facilitation. Their names and credentials are shared when we scope your program.",
      ],
    },
    {
      type: "checklist",
      eyebrow: "Deliverables",
      title: "What you get",
      items: [
        "Workshops for leaders, managers and teams",
        "Tools to measure and reduce cognitive load",
        "Practical frameworks for role clarity and boundaries",
        "Follow-up measurement to track change",
      ],
      glance: [
        { q: "Format", a: "Agreed when we plan your program, around your teams, locations and schedule." },
        { q: "Your team’s time", a: "Session length and pulse assessments are scoped to your teams." },
        { q: "Deliverables", a: "Workshops, toolkits and a before-and-after measurement report." },
      ],
    },
    {
      type: "prose",
      tone: "note",
      body: [
        "These workshops are educational and preventive. They do not replace clinical care, and we can help you connect employees with appropriate professional support.",
      ],
    },
    {
      type: "faq",
      title: "Mental health workshop questions",
      items: [
        {
          q: "Do these workshops replace an EAP?",
          a: "No. An EAP supports individuals who are already struggling. Our workshops reduce the workplace causes of strain, so both work best together.",
        },
        {
          q: "Can workshops run virtually?",
          a: "Tell us what works for your teams when we plan the program. The delivery format is agreed during scoping.",
        },
        {
          q: "How do you measure impact?",
          a: "We compare pulse assessments taken before and after the program on cognitive load, role clarity and strain.",
        },
      ],
    },
    related(
      [
        { tag: "Service", title: "Corporate Culture Study", href: "/services/organizational-culture-assessment" },
        { tag: "Service", title: "Root Cause Analysis", href: "/services/root-cause-analysis" },
        { tag: "Solution", title: "For managers", href: "/for/managers" },
      ],
      [
        "Understand the norms and psychological safety that shape strain across teams.",
        "Find out whether burnout is behind attrition or stalled delivery in specific teams.",
        "Give managers the team view to spot overload and role confusion early.",
      ],
    ),
    {
      type: "cta",
      title: "Design well-being into how work happens.",
      actions: [{ label: "Plan a Workshop", href: "/diagnostic" }, seeAll],
    },
  ],
};
