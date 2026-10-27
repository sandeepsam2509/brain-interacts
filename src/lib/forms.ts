// Enquiry forms carried over from Framer. The same definitions drive the form UI
// and the server-side validation in /api/enquiry.

export type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  autoComplete?: string;
  half?: boolean;
};

export type FormDef = {
  id: "demo" | "diagnostic" | "contact" | "fincheck" | "newsletter";
  title: string;
  submit: string;
  success: string;
  fields: Field[];
  consent: boolean;
};

const name: Field = { name: "name", label: "Full name", type: "text", required: true, autoComplete: "name", half: true };
const email: Field = {
  name: "email",
  label: "Work email",
  type: "email",
  required: true,
  placeholder: "you@company.com",
  autoComplete: "email",
  half: true,
};
const company = (required: boolean): Field => ({
  name: "company",
  label: "Company",
  type: "text",
  required,
  autoComplete: "organization",
  half: true,
});
const jobTitle: Field = { name: "jobTitle", label: "Job title", type: "text", autoComplete: "organization-title", half: true };
const size: Field = {
  name: "companySize",
  label: "Company size",
  type: "select",
  options: ["1–200", "201–1,000", "1,001–5,000", "5,000+"],
  half: true,
};

export const forms: Record<FormDef["id"], FormDef> = {
  demo: {
    id: "demo",
    title: "Demo",
    submit: "Request My Demo",
    success: "Thanks. We’ll be in touch shortly to schedule your walkthrough.",
    consent: true,
    fields: [
      name,
      email,
      company(true),
      jobTitle,
      size,
      {
        name: "interest",
        label: "Interested in",
        type: "select",
        options: ["Corporate Brain", "Gamified Assessments", "Both", "Not sure yet"],
        half: true,
      },
      { name: "message", label: "What would you like to improve?", type: "textarea" },
    ],
  },
  diagnostic: {
    id: "diagnostic",
    title: "Diagnostic call",
    submit: "Request a Diagnostic Call",
    success: "Thanks. One of our advisors will reply shortly to arrange the call.",
    consent: true,
    fields: [
      name,
      email,
      company(true),
      jobTitle,
      size,
      {
        name: "concern",
        label: "Main concern",
        type: "select",
        options: [
          "Turnover or attrition",
          "Stalled projects or execution",
          "Leadership decisions",
          "Culture or integration",
          "Burnout or well-being",
          "Not sure yet",
        ],
        half: true,
      },
      { name: "message", label: "Tell us about the situation", type: "textarea" },
      { name: "timing", label: "Timing", type: "select", options: ["This month", "Next quarter", "Just exploring"] },
    ],
  },
  contact: {
    id: "contact",
    title: "Contact",
    submit: "Send Message",
    success: "Thanks for getting in touch. We’ll reply to your email shortly.",
    consent: true,
    fields: [
      name,
      email,
      company(false),
      {
        name: "topic",
        label: "Topic",
        type: "select",
        options: ["General question", "Partnership", "Media", "Careers", "Other"],
        half: true,
      },
      { name: "message", label: "Message", type: "textarea", required: true },
    ],
  },
  fincheck: {
    id: "fincheck",
    title: "FinCheck early access",
    submit: "Request Early Access",
    success: "You’re on the list. We’ll contact you as FinCheck opens to early partners.",
    consent: false,
    fields: [
      email,
      { name: "institution", label: "Institution name", type: "text", required: true, autoComplete: "organization", half: true },
      { name: "institutionType", label: "Institution type", type: "select", options: ["Neo-bank", "NBFC", "Bank"] },
    ],
  },
  newsletter: {
    id: "newsletter",
    title: "Newsletter",
    submit: "Subscribe",
    success: "You’re subscribed. Look out for the next guide in your inbox.",
    consent: false,
    fields: [{ ...email, half: false }],
  },
};
