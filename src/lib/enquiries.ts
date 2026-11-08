// Every kind of enquiry a button on the site can start. Each one opens the same pop-up form
// with its own title, and the email to the team carries its own subject, so a security
// question never arrives labelled as a demo request.

export type EnquiryKey =
  | "demo"
  | "corporate-brain-demo"
  | "security"
  | "security-docs"
  | "data-protection"
  | "quote"
  | "integration"
  | "compatibility"
  | "fincheck-pilot"
  | "sample-assessment"
  | "early-access"
  | "technical-assessment"
  | "assessment-requirements"
  | "culture-proposal"
  | "diagnostic"
  | "validation-report"
  | "research-team"
  | "frameworks-brief"
  | "question"
  | "executive-briefing"
  | "full-report"
  | "results"
  | "partnership";

export type Enquiry = {
  /** Button text. */
  label: string;
  /** Pop-up heading and the small line above it. */
  title: string;
  eyebrow: string;
  intro: string;
  /** Email subject prefix, e.g. "Security & privacy enquiry". */
  subject: string;
  /** Label for the free-text box. */
  messageLabel: string;
  messageRequired?: boolean;
  /** Show the "What would you like to see?" product checkboxes (demo requests only). */
  products?: boolean;
  submit: string;
  thanks: string;
};

const THANKS = "Thanks, we'll get back to you within one working day.";

export const enquiries: Record<EnquiryKey, Enquiry> = {
  demo: {
    label: "Get a demo",
    eyebrow: "Get a demo",
    title: "See Brain Interacts in action",
    intro: "Tell us a little about your team and we'll set up a walkthrough.",
    subject: "Demo request",
    messageLabel: "Anything we should know?",
    products: true,
    submit: "Get a demo",
    thanks: "Thanks, we'll be in touch within one working day to set up your walkthrough.",
  },
  "corporate-brain-demo": {
    label: "Book a Corporate Brain demo",
    eyebrow: "Corporate Brain",
    title: "Book a Corporate Brain demo",
    intro: "A live walkthrough built around your org structure.",
    subject: "Corporate Brain demo request",
    messageLabel: "Anything we should know about your teams?",
    submit: "Book a demo",
    thanks: "Thanks, we'll be in touch within one working day to book your walkthrough.",
  },
  security: {
    label: "Submit a Data Protection Enquiry",
    eyebrow: "Security & privacy",
    title: "Submit a security & privacy enquiry",
    intro: "Tell us what your IT, security or legal reviewers need to know. Our team will respond directly.",
    subject: "Security & privacy enquiry",
    messageLabel: "Your question",
    messageRequired: true,
    submit: "Submit enquiry",
    thanks: THANKS,
  },
  "security-docs": {
    label: "Request our security documentation",
    eyebrow: "Security & privacy",
    title: "Request our security documentation",
    intro: "We'll send the documentation your reviewers need, such as our data handling and access controls overview.",
    subject: "Security documentation request",
    messageLabel: "Which documents or questionnaires do you need?",
    submit: "Request documentation",
    thanks: THANKS,
  },
  "data-protection": {
    label: "Contact our Data Protection team",
    eyebrow: "Data protection",
    title: "Contact our Data Protection team",
    intro: "Ask about your data, or request access, correction or erasure under India's DPDP Act. We respond within 90 days, usually much sooner.",
    subject: "Data protection request",
    messageLabel: "Your request",
    messageRequired: true,
    submit: "Send request",
    thanks: "Thanks, our Data Protection team has your request and will reply by email.",
  },
  quote: {
    label: "Get a custom quote",
    eyebrow: "Pricing",
    title: "Get a custom quote",
    intro: "Tell us roughly how many leaders, managers and employees you have, and we'll recommend the right mix of seats.",
    subject: "Custom quote request",
    messageLabel: "Team size and seats you're considering",
    submit: "Get my quote",
    thanks: "Thanks, we'll send your quote within one working day.",
  },
  integration: {
    label: "Request an integration",
    eyebrow: "Integrations",
    title: "Request an integration",
    intro: "Tell us which system you'd like Brain Interacts to connect with.",
    subject: "Integration request",
    messageLabel: "Which system, and what should it do?",
    messageRequired: true,
    submit: "Request integration",
    thanks: THANKS,
  },
  compatibility: {
    label: "Check compatibility with your stack",
    eyebrow: "Integrations",
    title: "Check compatibility with your stack",
    intro: "List the HR, hiring or lending tools you use and we'll tell you how Brain Interacts fits.",
    subject: "Compatibility check",
    messageLabel: "The tools in your stack",
    messageRequired: true,
    submit: "Check compatibility",
    thanks: THANKS,
  },
  "fincheck-pilot": {
    label: "Request a FinCheck pilot",
    eyebrow: "FinCheck",
    title: "Request a FinCheck pilot",
    intro: "Test FinCheck on your own applicant data before you commit. Tell us about your lending book.",
    subject: "FinCheck pilot request",
    messageLabel: "Loan products and monthly application volume",
    submit: "Request a pilot",
    thanks: "Thanks, our FinCheck team will be in touch within one working day.",
  },
  "sample-assessment": {
    label: "Try a sample assessment",
    eyebrow: "Gamified Assessments",
    title: "Try a sample assessment",
    intro: "We'll send you a sample simulation to play, so you can see what candidates experience.",
    subject: "Sample assessment request",
    messageLabel: "Which roles are you hiring for?",
    submit: "Send me a sample",
    thanks: "Thanks, we'll email your sample assessment within one working day.",
  },
  "early-access": {
    label: "Get early access",
    eyebrow: "Gamified Assessments · Coming soon",
    title: "Get early access",
    intro: "Gamified Assessments is launching soon. Tell us about your hiring and we'll invite you to the early access programme.",
    subject: "Gamified Assessments early access",
    messageLabel: "Which roles are you hiring for?",
    submit: "Request early access",
    thanks: "Thanks, you're on the early access list. We'll be in touch within one working day.",
  },
  "technical-assessment": {
    label: "Free technical assessment",
    eyebrow: "Free technical assessment",
    title: "Get a free technical assessment",
    intro: "Tell us the role and skills you want to test. We'll set up a free technical assessment for one of your openings.",
    subject: "Free technical assessment request",
    messageLabel: "Which role and skills should we assess?",
    messageRequired: true,
    submit: "Request my free assessment",
    thanks: "Thanks, we'll email you within one working day to set up your free technical assessment.",
  },
  "assessment-requirements": {
    label: "Discuss your assessment requirements",
    eyebrow: "Custom assessment systems",
    title: "Discuss your assessment requirements",
    intro: "Tell us about the roles and decisions you want to get right. Our experts will follow up.",
    subject: "Assessment requirements",
    messageLabel: "Roles and decisions you want to assess",
    submit: "Start the conversation",
    thanks: THANKS,
  },
  "culture-proposal": {
    label: "Request a culture study proposal",
    eyebrow: "Corporate culture study",
    title: "Request a culture study proposal",
    intro: "Tell us what's prompting the study and we'll send a proposal.",
    subject: "Culture study proposal request",
    messageLabel: "What's prompting the study?",
    submit: "Request a proposal",
    thanks: "Thanks, we'll be in touch within one working day to scope your proposal.",
  },
  diagnostic: {
    label: "Book a diagnostic consultation",
    eyebrow: "Root cause analytics",
    title: "Book a diagnostic consultation",
    intro: "A confidential conversation with our workforce experts about the symptoms you're seeing.",
    subject: "Diagnostic consultation request",
    messageLabel: "The symptoms you're seeing (turnover, delays, productivity)",
    submit: "Book a consultation",
    thanks: THANKS,
  },
  "validation-report": {
    label: "Request the validation report",
    eyebrow: "The science",
    title: "Request the validation report",
    intro: "We'll send our report on how the assessments are built, scored and validated.",
    subject: "Validation report request",
    messageLabel: "Anything specific you'd like covered?",
    submit: "Request the report",
    thanks: "Thanks, we'll email the validation report within one working day.",
  },
  "research-team": {
    label: "Talk to our research team",
    eyebrow: "The science",
    title: "Talk to our research team",
    intro: "Questions about our methods, frameworks or limits? Our research team will reply directly.",
    subject: "Question for the research team",
    messageLabel: "Your question",
    messageRequired: true,
    submit: "Send question",
    thanks: THANKS,
  },
  "frameworks-brief": {
    label: "Request the frameworks brief",
    eyebrow: "Research frameworks",
    title: "Request the frameworks brief",
    intro: "A short brief on the Big Five, the item pool and how archetypes link to company goals.",
    subject: "Frameworks brief request",
    messageLabel: "Anything specific you'd like covered?",
    submit: "Request the brief",
    thanks: "Thanks, we'll email the frameworks brief within one working day.",
  },
  question: {
    label: "Ask us a question",
    eyebrow: "FAQ",
    title: "Ask us a question",
    intro: "Didn't find your answer? Ask us directly.",
    subject: "Question from the FAQ page",
    messageLabel: "Your question",
    messageRequired: true,
    submit: "Send question",
    thanks: THANKS,
  },
  "executive-briefing": {
    label: "Book an executive briefing",
    eyebrow: "For CEOs",
    title: "Book an executive briefing",
    intro: "A short, focused session on what Corporate Brain would show about your organization.",
    subject: "Executive briefing request",
    messageLabel: "What would you like to cover?",
    submit: "Book a briefing",
    thanks: "Thanks, we'll be in touch within one working day to schedule your briefing.",
  },
  "full-report": {
    label: "Unlock the full report and action framework",
    eyebrow: "Full report · INR 999",
    title: "Unlock your full report and action framework",
    intro: "Your detailed Corporate Brain report and a personal action framework, for INR 999. Leave your details and we'll send you the payment link and next steps.",
    subject: "Full report request (INR 999)",
    messageLabel: "Anything you'd like the report to focus on? (optional)",
    submit: "Request my full report",
    thanks: "Thanks, we'll email you the payment link and next steps within one working day.",
  },
  results: {
    label: "See results like these for your team",
    eyebrow: "Customer stories",
    title: "See results like these for your team",
    intro: "Tell us about your teams and the problem you'd like to solve.",
    subject: "Results enquiry (customer stories)",
    messageLabel: "The problem you'd like to solve",
    submit: "Talk to us",
    thanks: THANKS,
  },
  partnership: {
    label: "Partner with us",
    eyebrow: "Partnerships",
    title: "Partner with us",
    intro: "Consultancies, HR tech platforms and research partners: tell us what you have in mind.",
    subject: "Partnership enquiry",
    messageLabel: "What kind of partnership?",
    messageRequired: true,
    submit: "Send enquiry",
    thanks: THANKS,
  },
};

export const isEnquiryKey = (v: unknown): v is EnquiryKey => typeof v === "string" && v in enquiries;

/** Link that opens the enquiry pop-up (or, without JavaScript, the Contact page form). */
export const enquiryHref = (key: EnquiryKey, extra?: Record<string, string>) => {
  const q = new URLSearchParams({ enquiry: key, ...extra });
  return `/contact?${q.toString()}#enquiry`;
};
