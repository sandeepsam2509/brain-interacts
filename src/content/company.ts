import type { PageContent } from "@/lib/types";
import { renders } from "./images";
import { site } from "@/lib/site";

const home = { label: "Home", href: "/" };
const solutions = { label: "Solutions" };

export const howItWorksPage: PageContent = {
  path: "/how-it-works",
  title: "How It Works: Psychometric Assessment Process",
  description:
    "See how Corporate Brain and Gamified Assessments roll out: set up, invite, assess and act on people analytics, with nothing to install.",
  hero: {
    crumbs: [home, { label: "How it works" }],
    eyebrow: "How it works",
    title: "How it works: the psychometric assessment process, from kickoff to insight",
    lead: "Corporate Brain and Gamified Assessments run in the browser, so there is nothing to install. Here is what rollout looks like for your organization.",
    actions: [
      { label: "Request a Demo", href: "/demo" },
      { label: "See the timeline", href: "/how-it-works#timeline" },
    ],
    visual: renders.flow,
  },
  sections: [
    {
      type: "steps",
      eyebrow: "Rollout",
      title: "Six steps to your first insight",
      steps: [
        { title: "Kickoff", body: "We agree on your goals, the teams to start with and how success will be measured." },
        { title: "Set up your organization", body: "Create teams and roles, and choose who gets admin, manager and employee access." },
        { title: "Invite people", body: "Employees and candidates receive an email and sign in from any browser." },
        {
          title: "Run assessments",
          body: "Assign behavioral, technical and gamified assessments by role. The expected time is confirmed for the chosen assessment.",
        },
        { title: "Review profiles", body: "Each person sees their own results. Managers see their team’s, as your admins decide." },
        {
          title: "Act on analytics",
          body: "Leaders get a live view of capability, gaps and team makeup to guide hiring, staffing and development.",
        },
      ],
    },
    {
      type: "table",
      eyebrow: "Roles",
      title: "Who does what",
      head: ["Role", "During rollout", "After rollout"],
      rows: [
        ["HR or admin", "Sets up teams, roles and access; sends invites", "Assigns new assessments and runs reports"],
        ["Managers", "Encourage their team to complete assessments", "Use team profiles to staff and develop people"],
        ["Employees", "Complete the assigned assessments at the agreed time", "See their profile and development path"],
        ["Brain Interacts", "Onboarding, configuration and training", "Support and optional consulting"],
      ],
    },
    {
      type: "cards",
      id: "timeline",
      eyebrow: "Timeline",
      title: "A typical timeline",
      intro: "Every rollout is planned with you before kickoff. This is how a first team usually moves from setup to decisions.",
      cards: [
        { tag: "Week 1", title: "Set up and invite", body: "Kickoff, organization setup and invitations." },
        { tag: "Weeks 2–3", title: "Assess", body: "Assessments completed and profiles available." },
        { tag: "Week 4 onwards", title: "Decide", body: "Team analytics, leadership dashboards and first decisions." },
      ],
    },
    {
      type: "prose",
      tone: "panel",
      eyebrow: "Add consulting",
      title: "Want expert help reading the data?",
      body: ["Our behavioral scientists can run a diagnostic alongside your rollout, so the first insights come with a plan attached."],
      links: [{ label: "Explore consulting", href: "/services" }],
    },
    {
      type: "faq",
      title: "Rollout questions",
      items: [
        {
          q: "How long does setup take?",
          a: "Setup timing depends on team structure, access requirements and the chosen assessments. We agree a rollout plan before kickoff.",
        },
        {
          q: "Do employees need training?",
          a: "We explain the assessment format and participation requirements before rollout. Ask about any training or accessibility needs.",
        },
        { q: "Can we start with one team?", a: "Yes. Many organizations start with one team or business unit and expand from there." },
        {
          q: "What do employees see?",
          a: "Employees see their own profile and development suggestions. They never see colleagues’ individual results.",
        },
      ],
    },
    {
      type: "cta",
      title: "See the rollout plan for your organization.",
      actions: [
        { label: "Request a Demo", href: "/demo" },
        { label: "Schedule a Diagnostic", href: "/diagnostic" },
      ],
    },
  ],
};

export const leadershipPage: PageContent = {
  path: "/for/leadership",
  title: "People Analytics for Executives & CHROs",
  description:
    "Give your leadership team a live view of capability, culture and people risk across the enterprise, built on behavioral science.",
  hero: {
    crumbs: [home, solutions, { label: "For leadership" }],
    eyebrow: "For leadership",
    title: "Workforce analytics for executives: build strategy on the team you actually have",
    lead: "Brain Interacts gives CEOs, CHROs and COOs a continuously updated view of capability, culture and people risk across the enterprise.",
    actions: [
      { label: "Request an Enterprise Demo", href: "/demo" },
      { label: "Schedule a Diagnostic", href: "/diagnostic" },
    ],
    visual: renders.leadership,
    tint: "gold",
  },
  sections: [
    {
      type: "cards",
      eyebrow: "Questions",
      title: "Questions your leadership team can finally answer",
      columns: 2,
      cards: [
        { tag: "01", title: "Do we have the leaders to deliver this strategy?", body: "See bench strength and readiness for every critical role." },
        { tag: "02", title: "Where is attrition risk concentrated?", body: "Spot the teams and dynamics behind regretted exits before they spread." },
        { tag: "03", title: "Which teams are under-powered for what’s next?", body: "Compare capability against the plan, team by team." },
        { tag: "04", title: "Are our people investments working?", body: "Track development metrics over time instead of counting training hours." },
      ],
    },
    {
      type: "checklist",
      eyebrow: "What you get",
      title: "What leadership gets",
      items: [
        "An enterprise capability dashboard in Corporate Brain",
        "A succession and leadership pipeline view",
        "Culture and network insights from a Corporate Culture Study",
        "Board-ready reports on people risk and capability",
      ],
    },
    {
      type: "cards",
      eyebrow: "Where to start",
      title: "Where leadership teams start",
      cards: [
        {
          tag: "Platform",
          title: "Corporate Brain",
          body: "The people analytics platform behind the enterprise capability view.",
          href: "/platforms/corporate-brain",
        },
        {
          tag: "Service",
          title: "Psychometric Consulting",
          body: "Evidence for critical leadership hires, promotions and succession.",
          href: "/services/psychometric-consulting",
        },
        {
          tag: "Service",
          title: "Corporate Culture Study",
          body: "Map how decisions and influence really flow before a major change.",
          href: "/services/organizational-culture-assessment",
        },
      ],
    },
    {
      type: "faq",
      title: "Questions from leadership teams",
      items: [
        {
          q: "How is this different from our HRIS reports?",
          a: "Your HRIS records who people are on paper: role, tenure, pay. Brain Interacts adds how they think, decide and work together, which is what predicts performance.",
        },
        {
          q: "Can we start with the leadership team only?",
          a: "Yes. Many organizations begin with a leadership assessment and extend to the wider organization later.",
        },
      ],
    },
    {
      type: "cta",
      title: "Lead with evidence about your people.",
      actions: [
        { label: "Request an Enterprise Demo", href: "/demo" },
        { label: "Schedule a Diagnostic", href: "/diagnostic" },
      ],
    },
  ],
};

export const managersPage: PageContent = {
  path: "/for/managers",
  title: "Team Assessment for Managers",
  description:
    "Understand how each person on your team works, staff projects on evidence and spot strain early with Corporate Brain team analytics.",
  hero: {
    crumbs: [home, solutions, { label: "For managers" }],
    eyebrow: "For managers",
    title: "Team assessment for managers: put the right person on every task",
    lead: "Understand how each person on your team works, staff projects on evidence, and spot who needs support before it becomes a resignation.",
    actions: [
      { label: "Request a Demo", href: "/demo" },
      { label: "Sign in", href: site.signIn },
    ],
    visual: renders.managers,
    tint: "green",
  },
  sections: [
    {
      type: "cards",
      eyebrow: "What changes",
      title: "What changes for managers",
      columns: 2,
      cards: [
        { tag: "01", title: "Build balanced teams", body: "See which working styles and skills a team has, and which it lacks." },
        { tag: "02", title: "Staff projects with confidence", body: "Match tasks to the people whose strengths and skills fit them." },
        { tag: "03", title: "Give feedback grounded in data", body: "Base development conversations on measured strengths, not impressions." },
        { tag: "04", title: "Spot strain early", body: "Notice overload and role confusion before they turn into exits." },
      ],
    },
    {
      type: "dashboard",
      eyebrow: "Team view",
      title: "Your team, on one screen",
      intro: "Corporate Brain’s team view shows every member’s profile, the skills the team covers and the gaps it needs to fill.",
    },
    {
      type: "cards",
      eyebrow: "Related",
      title: "Useful for managers",
      columns: 2,
      cards: [
        {
          tag: "Platform",
          title: "Gamified Assessments",
          body: "Hire your next team member on observed decision-making, not rehearsed answers.",
          href: "/platforms/gamified-assessments",
        },
        {
          tag: "Service",
          title: "Mental Health Workshops",
          body: "Practical tools for managers to spot strain and hold clear conversations about workload.",
          href: "/services/corporate-mental-health-workshops",
        },
      ],
    },
    {
      type: "faq",
      title: "Questions from managers",
      items: [
        {
          q: "What can managers see?",
          a: "Managers see the profiles of the people on their team, as set by your administrators. They don’t see other teams’ individual results.",
        },
        {
          q: "Will this add work for my team?",
          a: "Assessment time depends on the selected modules. We confirm the expected commitment before rollout.",
        },
      ],
    },
    {
      type: "cta",
      title: "Know your team. Move faster.",
      actions: [
        { label: "Request a Demo", href: "/demo" },
        { label: "Sign in", href: site.signIn },
      ],
    },
  ],
};

export const employeesPage: PageContent = {
  path: "/for/employees",
  title: "Employee Strengths Assessment",
  description:
    "Your Corporate Brain profile shows how you think, work and decide, with a clear path to grow. Here’s what to expect and who sees your results.",
  hero: {
    crumbs: [home, solutions, { label: "For employees" }],
    eyebrow: "For employees",
    title: "Your strengths assessment: know how you work and grow on purpose",
    lead: "Your Corporate Brain profile shows how you think, work and decide, and gives you a clear path to grow.",
    actions: [{ label: "Sign in to Corporate Brain", href: site.signIn }],
    visual: renders.employees,
    tint: "blue",
  },
  sections: [
    {
      type: "cards",
      eyebrow: "For you",
      title: "What’s in it for you",
      columns: 2,
      cards: [
        { tag: "01", title: "A personal profile", body: "See your working style, strengths and how you make decisions." },
        { tag: "02", title: "A development path", body: "Get suggestions for where to grow next." },
        { tag: "03", title: "Work that fits", body: "Help your manager match you with projects that use your strengths." },
        { tag: "04", title: "Control over your data", body: "Your results are protected, and you can ask to see, correct or delete them." },
      ],
    },
    {
      type: "steps",
      eyebrow: "What to expect",
      title: "What to expect",
      steps: [
        { title: "You get an invite", body: "Your organization sends you an email with a link." },
        {
          title: "You take the assessments",
          body: "Complete your assigned assessment in your browser. Your invitation will explain the format and expected time.",
        },
        { title: "You see your profile", body: "Your organization will explain when results and feedback become available." },
        { title: "You talk it through", body: "Discuss your profile with your manager, if you choose." },
      ],
    },
    {
      type: "prose",
      tone: "panel",
      eyebrow: "Privacy",
      title: "Who sees your results",
      body: [
        "Before you begin, your organization should explain the assessment’s purpose, who can access the results and how the information will be used. Contact your administrator with questions about your access.",
      ],
      links: [{ label: "Read how we protect your data", href: "/security" }],
    },
    {
      type: "faq",
      title: "Questions from employees",
      items: [
        { q: "Can I fail the assessment?", a: "No. Assessments describe how you work; they have no pass mark and no right answers." },
        { q: "How long does it take?", a: "The invitation explains the expected time for the assessment you have been assigned." },
        { q: "Who do I contact with questions?", a: `Your HR team, or ${site.email}.` },
      ],
    },
    {
      type: "cta",
      title: "Ready to see your profile?",
      actions: [
        { label: "Sign in to Corporate Brain", href: site.signIn },
        { label: "Recommend us to your HR team", href: "/demo" },
      ],
    },
  ],
};

export const securityPage: PageContent = {
  path: "/security",
  title: "Security & Privacy for Assessment Data",
  description:
    "How Brain Interacts stores, protects and limits access to psychometric and people data: role-based access, consent, encryption and your data rights.",
  hero: {
    crumbs: [home, { label: "Security & privacy" }],
    eyebrow: "Trust",
    title: "Security and privacy built to protect the people behind the data",
    lead: "Behavioral and assessment data is personal. Here is how Brain Interacts stores it, protects it and limits who can see it.",
    actions: [
      { label: "Contact Our Team", href: "/contact" },
      { label: "Who sees what", href: "/security#access" },
    ],
  },
  sections: [
    {
      type: "cards",
      eyebrow: "Principles",
      title: "Three principles for people data",
      cards: [
        {
          tag: "01",
          title: "Participant visibility",
          body: "Confirm which results participants can access and when feedback is provided.",
        },
        {
          tag: "02",
          title: "Role-based access",
          body: "Agree access permissions for employees, managers, HR and leadership before rollout.",
        },
        { tag: "03", title: "Purpose-limited use", body: "Review the purposes of processing and data-sharing terms in your agreement." },
      ],
    },
    {
      type: "table",
      id: "access",
      eyebrow: "Access",
      title: "Who sees what",
      head: ["Role", "Can see"],
      rows: [
        ["Employee or candidate", "Their own results and profile"],
        ["Manager", "Profiles of people on their team"],
        ["HR admin", "All profiles in their organization, plus settings"],
        ["Leadership", "Aggregated team and organization analytics"],
        ["Brain Interacts staff", "Only what’s needed for support, with permission"],
      ],
      note: "Illustrative access model. Final permissions, participant visibility and processing terms are confirmed for your organization before rollout.",
    },
    {
      type: "cards",
      eyebrow: "Controls",
      title: "How your data is protected",
      cards: [
        { title: "Access controls", body: "Agree role-based permissions and review authentication options for your organization." },
        { title: "Encryption", body: "Request current controls for data in transit and at rest." },
        { title: "Hosting and residency", body: "Review the hosting provider and data residency details during your security assessment." },
        {
          title: "Consent and purpose",
          body: "Make the assessment purpose, participant information and result visibility clear before rollout.",
        },
        { title: "Retention and deletion", body: "Agree retention periods, export processes and contract-end deletion procedures." },
        { title: "Assessment fairness", body: "Review instrument validity, intended use, limitations and bias monitoring." },
      ],
    },
    {
      type: "checklist",
      eyebrow: "Compliance",
      title: "Compliance and documents",
      intro: "Your security, legal and procurement teams can request the following during review.",
      items: [
        "The current list of certifications and supporting evidence",
        "Data Processing Agreement requirements and availability",
        "The current list of sub-processors",
        "Data-use terms, including any AI-related processing",
      ],
      glance: [
        {
          q: "Your data rights",
          a: "Contact us about access, correction, export or deletion requests. The applicable process and legal obligations are confirmed with your organization.",
        },
        { q: "Found a security issue?", a: `Report potential security issues to ${site.email} so our team can route your report.` },
      ],
    },
    {
      type: "faq",
      title: "Security questions",
      items: [
        {
          q: "Is assessment data used to train AI models?",
          a: "Request our current data-use terms and discuss whether any AI-related processing applies to your intended use.",
        },
        {
          q: "Can we sign a data processing agreement?",
          a: "Contact our team to review Data Processing Agreement requirements and availability.",
        },
        { q: "Where is our data stored?", a: "Request the current hosting provider and region during your security review." },
      ],
    },
    {
      type: "cta",
      title: "Questions from your security or legal team?",
      body: "We’ll route your questionnaire to the right people and share documents under NDA where needed.",
      actions: [
        { label: "Contact Our Team", href: "/contact" },
        { label: "Read the Privacy Policy", href: site.privacy },
      ],
    },
  ],
};

export const pricingPage: PageContent = {
  path: "/pricing",
  title: "Pricing: Psychometric Assessments & Consulting",
  description:
    "How Brain Interacts prices Corporate Brain, Gamified Assessments and consulting engagements, what drives the price, and how to start with a pilot.",
  hero: {
    crumbs: [home, { label: "Pricing" }],
    eyebrow: "Pricing",
    title: "Pricing for psychometric assessments, people analytics and consulting",
    lead: "Every organization measures different things at a different scale. We quote to fit, and we’re clear about what drives the price.",
    actions: [
      { label: "Get a Quote", href: "/demo" },
      { label: "Start with a pilot", href: "/pricing#pilot" },
    ],
  },
  sections: [
    {
      type: "pricing",
      eyebrow: "Plans",
      title: "Three ways to work with us",
      plans: [
        {
          tag: "Flagship platform",
          name: "Corporate Brain",
          price: "Custom quote",
          body: "For organizations that want a continuous view of their workforce.",
          items: [
            "Behavioral and technical assessments",
            "Team and group analytics",
            "Company development metrics",
            "Role-based access for admins, managers and employees",
            "Onboarding and support",
          ],
          action: { label: "Request a Demo", href: "/demo" },
        },
        {
          tag: "Enterprise offering",
          name: "Gamified Assessments",
          price: "Custom quote",
          body: "For hiring and talent teams.",
          items: [
            "Library of interactive challenges",
            "Role-based scoring",
            "Candidate and hiring-team reports",
            "Integration requirements confirmed in your quote",
          ],
          action: { label: "Try a Gamified Assessment", href: "/demo" },
        },
        {
          tag: "Enterprise offering",
          name: "Consulting",
          price: "Fixed-scope engagements",
          body: "For a specific business problem, with a clear deliverable.",
          items: ["Root Cause Analysis", "Psychometric Consulting", "Corporate Culture Study", "Mental Health Workshops"],
          action: { label: "Schedule a Diagnostic", href: "/diagnostic" },
        },
      ],
    },
    {
      type: "cards",
      eyebrow: "Price drivers",
      title: "What affects the price",
      columns: 4,
      cards: [
        { tag: "01", title: "Number of people", body: "How many employees or candidates you assess." },
        { tag: "02", title: "Modules", body: "Which assessments and analytics you use." },
        { tag: "03", title: "Support", body: "Whether you add consulting or a dedicated success manager." },
        { tag: "04", title: "Term", body: "Annual and multi-year agreements are priced differently." },
      ],
    },
    {
      type: "prose",
      id: "pilot",
      tone: "panel",
      eyebrow: "Pilot",
      title: "Start with a pilot",
      body: [
        "Try Corporate Brain with one team or business unit before you roll it out. A pilot shows you the data, the reports and the effort involved, so the wider decision rests on evidence.",
      ],
      links: [{ label: "Ask about a pilot", href: "/demo" }],
    },
    {
      type: "faq",
      title: "Pricing questions",
      items: [
        { q: "Is there a free trial?", a: "Ask our team about current trial or pilot options for your organization." },
        { q: "Which currencies do you bill in?", a: "Billing currency and payment terms are specified in your proposal." },
        { q: "Is FinCheck pricing available?", a: "Not yet. Join the FinCheck waitlist to hear about founding-partner pricing." },
      ],
    },
    {
      type: "cta",
      title: "Get a quote for your organization.",
      actions: [
        { label: "Request a Demo", href: "/demo" },
        { label: "Talk to Our Team", href: "/contact" },
      ],
    },
  ],
};

export const aboutPage: PageContent = {
  path: "/about",
  title: "About Brain Interacts | Team Analytics & Behavioral Analysis Company",
  description:
    "Brain Interacts is a team analytics and behavioral analysis company bridging psychological science, interactive technology and organizational strategy.",
  hero: {
    crumbs: [home, { label: "About Us" }],
    eyebrow: "About us",
    title: "Organizations are human systems, and we measure them that way.",
    lead: "Brain Interacts is a behavioral analysis company. We bridge psychological science, interactive technology and organizational strategy so leaders can manage people with the same rigor they apply to capital.",
    actions: [
      { label: "Request an Enterprise Demo", href: "/demo" },
      { label: "Contact Our Team", href: "/contact" },
    ],
  },
  sections: [
    {
      type: "cards",
      eyebrow: "Three disciplines",
      title: "Where our work sits",
      cards: [
        {
          title: "Psychological science",
          body: "Validated psychometric models and cognitive frameworks are the measurement core of everything we build.",
          accent: "gold",
        },
        {
          title: "Interactive technology",
          body: "Platforms and gamified assessments that capture behavior as it happens, at enterprise scale.",
          accent: "green",
        },
        {
          title: "Organizational strategy",
          body: "Every finding is tied to a business decision, so insight turns into action leaders can track.",
          accent: "blue",
        },
      ],
    },
    {
      type: "prose",
      tone: "panel",
      eyebrow: "Mission",
      title: "Make human behavior the most understood asset in every organization.",
      body: [
        "Enterprises measure revenue to the decimal and inventory to the unit, yet the behavior that drives both is left to guesswork. We close that gap with science leaders can trust and tools teams want to use.",
      ],
    },
    {
      type: "prose",
      eyebrow: "Our story",
      title: "From assumptions to evidence",
      body: [
        "Brain Interacts connects psychological science, interactive technology and organizational strategy. We focus on the behavior behind business outcomes, helping leaders replace assumptions with evidence.",
        "Our team brings together psychologists, data scientists, technologists and enterprise strategists, working side by side on every platform and engagement.",
      ],
    },
    {
      type: "cards",
      eyebrow: "Methodology",
      title: "Where psychological science meets enterprise strategy",
      columns: 2,
      cards: [
        {
          tag: "01",
          title: "Grounded in psychometric science",
          body: "We build on established psychometric models and cognitive frameworks, not personality fads.",
        },
        {
          tag: "02",
          title: "Measured through behavior",
          body: "Interactive and gamified mechanics observe what people do, reducing self-report and evaluator bias.",
        },
        {
          tag: "03",
          title: "Connected to the organization",
          body: "Individual data is analyzed alongside team structure and network data, because performance happens between people.",
        },
        {
          tag: "04",
          title: "Translated into strategy",
          body: "Every finding is tied to a business decision and a metric, so insight becomes action.",
        },
      ],
    },
    {
      type: "prose",
      eyebrow: "Vision",
      title: "The future of human capital is measurable",
      body: [
        "We see a near future where every major people decision, from a hire to a merger, is informed by behavioral evidence. Where assessments feel like experiences, not exams. Where well-being is designed into how work happens. And where leaders understand their organizations as clearly as their balance sheets.",
      ],
    },
    {
      type: "cards",
      eyebrow: "Values",
      title: "Our values",
      cards: [
        { tag: "01", title: "Rigor", body: "We follow the evidence, including when it’s inconvenient." },
        { tag: "02", title: "Fairness", body: "We design out bias at every step of measurement." },
        { tag: "03", title: "Responsibility", body: "Behavioral data is personal. We protect it and use it to help people grow." },
      ],
    },
    {
      type: "cta",
      title: "Let’s understand your organization together.",
      body: `Reach us at ${site.email}, or start with a demo or a diagnostic call.`,
      actions: [
        { label: "Request an Enterprise Demo", href: "/demo" },
        { label: "Contact Our Team", href: "/contact" },
      ],
    },
  ],
};
