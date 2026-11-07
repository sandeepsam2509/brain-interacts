import type { LegalDoc } from "./types";

export const dataProcessingAddendum: LegalDoc = {
  slug: "data-processing-addendum",
  title: "Data Processing Addendum",
  group: "Privacy and data",
  summary: "How we process personal data on a customer's behalf as a Data Processor under the Digital Personal Data Protection Act, 2023.",
  effective: "[date of publication]",
  intro: [
    "This Data Processing Addendum (\"DPA\") forms part of the agreement between {{entity}} (\"Brain Interacts\") and the Customer for the Services (the Main Service Agreement or the Terms of Service, the \"Agreement\"). It applies when Brain Interacts processes Personal Data on the Customer's behalf. Terms not defined here have the meaning given in the Agreement or the Digital Personal Data Protection Act, 2023 and the rules made under it (together, \"DPDP Law\").",
  ],
  sections: [
    {
      h: "1. Roles",
      p: [
        "The Customer is the Data Fiduciary: it decides why and how Personal Data of its employees, candidates and other Data Principals is processed through the Services. Brain Interacts is the Customer's Data Processor and processes that Personal Data only on the Customer's documented instructions, which are set out in the Agreement, this DPA and the Customer's use of the Services. We will tell the Customer if we believe an instruction breaches DPDP Law.",
        "Brain Interacts is a Data Fiduciary in its own right only for account, billing, website and marketing data, as described in our Privacy Policy.",
      ],
    },
    {
      h: "2. Details of processing",
      list: [
        "Subject matter: providing the Services, including assessments, profiles, team analytics and reports.",
        "Duration: the term of the Agreement plus the deletion period in section 8.",
        "Data Principals: the Customer's Users, employees, candidates, contractors and other individuals it invites to the Services.",
        "Personal Data: names, work email addresses, job titles, team and reporting lines, assessment responses, scores, working-style profiles and archetypes, and usage data.",
        "Data not to be submitted: data of children (as defined in DPDP Law) without verifiable parental consent; government identifiers; financial account or card numbers; health records; passwords.",
      ],
    },
    {
      h: "3. Customer obligations",
      p: [
        "The Customer is responsible for giving each Data Principal a notice that meets Section 5 of the DPDP Act, for obtaining valid consent or relying on another lawful ground, for handling requests to withdraw consent, and for the accuracy of the Personal Data it submits.",
      ],
    },
    {
      h: "4. Our obligations",
      list: [
        "Confidentiality: our personnel with access to Personal Data are bound by confidentiality obligations and are trained on data protection.",
        "Security: we maintain reasonable security safeguards, including encryption in transit, role-based access control, logging, backups and vulnerability management, reviewed regularly.",
        "Assistance: taking into account the nature of processing, we will help the Customer respond to Data Principals exercising their rights to information, correction, completion, erasure, grievance redressal and nomination under DPDP Law, and with any data protection assessment.",
        "Direct requests: if a Data Principal contacts us about Customer Personal Data, we will refer them to the Customer, unless the law requires otherwise.",
        "Government requests: we will notify the Customer of a legally binding request from a government authority for Customer Personal Data, unless prohibited by law, and will disclose only what the law requires.",
      ],
    },
    {
      h: "5. Personal data breaches",
      p: [
        "We will notify the Customer without undue delay, and in any event within 48 hours, after becoming aware of a personal data breach affecting Customer Personal Data. The notice will describe the nature of the breach, its likely consequences, the measures taken and a contact point. We will cooperate so the Customer can notify the Data Protection Board of India and affected Data Principals as DPDP Law requires.",
        "Where a breach is also a reportable cyber security incident under the CERT-In Directions of 28 April 2022, we will report it to CERT-In within six hours of noticing it, as those directions require.",
      ],
    },
    {
      h: "6. Sub-processors",
      p: [
        "The Customer authorises us to engage sub-processors, such as cloud hosting, email delivery and analytics providers. We will impose data protection terms on each sub-processor that are no less protective than this DPA, and remain responsible for their performance. We keep a current list of sub-processors available on request at {{privacyEmail}} and will give at least fifteen (15) days' notice of any new sub-processor. The Customer may object on reasonable data protection grounds; if we cannot resolve the objection, the Customer may terminate the affected Services and receive a refund of prepaid fees for the unused term.",
      ],
    },
    {
      h: "7. Transfers outside India",
      p: [
        "Personal Data may be processed outside India where our infrastructure or sub-processors are located. We will not transfer Personal Data to any country or territory that the Central Government has restricted under Section 16 of the DPDP Act, and will comply with any sector-specific requirement that applies to the Customer and that it tells us about in writing, including the data localisation requirements of the Reserve Bank of India for payment system data.",
      ],
    },
    {
      h: "8. Deletion and return",
      p: [
        "At the end of the Agreement, the Customer may export its Personal Data for thirty (30) days. We will then delete it, including from active systems, and from backups within the normal backup cycle, unless law requires us to retain it. On request we will confirm deletion in writing.",
      ],
    },
    {
      h: "9. Audits",
      p: [
        "On written request, no more than once a year, we will provide information reasonably needed to demonstrate compliance with this DPA, such as completed security questionnaires and summaries of independent assessments, subject to confidentiality. Where that is not enough, or a regulator requires it, the Customer may conduct an audit with thirty (30) days' notice, during business hours, at its cost, and without access to other customers' data.",
      ],
    },
    {
      h: "10. General",
      p: [
        "Liability under this DPA is subject to the limits in the Agreement. If this DPA conflicts with the Agreement on the processing of Personal Data, this DPA prevails. This DPA is governed by the law and dispute terms of the Agreement.",
      ],
    },
  ],
};

export const regulatedEntitiesFaq: LegalDoc = {
  slug: "regulated-entities-faq",
  title: "Regulated Financial Entities FAQ",
  group: "Customer agreements",
  summary: "How Brain Interacts supports banks, NBFCs, insurers and capital-market entities with their technology outsourcing obligations in India.",
  effective: "[date of publication]",
  intro: [
    "Banks, non-banking financial companies, insurers, stock-market intermediaries and other regulated entities in India must manage the risks of outsourcing technology services. This page explains how we support customers in that position. It is general information, not legal advice; each regulated entity should take its own advice on its obligations.",
  ],
  sections: [
    {
      h: "Which rules are relevant?",
      list: [
        "Reserve Bank of India (Outsourcing of Information Technology Services) Directions, 2023, for banks, NBFCs and other RBI-regulated entities.",
        "SEBI Cybersecurity and Cyber Resilience Framework (CSCRF) for SEBI-regulated entities, along with SEBI's outsourcing guidelines.",
        "IRDAI Information and Cyber Security Guidelines, 2023, and the IRDAI outsourcing regulations for insurers.",
        "CERT-In Directions of 28 April 2022 on incident reporting and log retention, which apply to all service providers in India.",
        "The Digital Personal Data Protection Act, 2023.",
      ],
    },
    {
      h: "Is Brain Interacts a material outsourcing?",
      p: [
        "Our Services support people decisions: assessments, team analytics and working-style insights. They do not process payments, customer accounts, credit decisions or other core banking, trading or insurance functions. Many regulated entities therefore classify us as a non-material technology service. The classification is the regulated entity's decision, based on its own risk assessment, and we will provide the information it needs.",
      ],
    },
    {
      h: "What do you offer regulated entities?",
      p: ["Regulated entities can sign our Regulated Entities Addendum. It adds the contract terms these frameworks expect, including:"],
      list: [
        "a clear description of the Services, service levels and locations of data processing;",
        "access, information and audit rights for the regulated entity and its regulator;",
        "incident notification on timelines that allow the regulated entity to meet its own reporting duties;",
        "business continuity and exit support, including data return in a usable format;",
        "notice and objection rights over material sub-contracting;",
        "confidentiality and security obligations, and cooperation with regulatory inspections.",
      ],
    },
    {
      h: "Will you allow our regulator to inspect you?",
      p: ["Yes. The Addendum gives the regulated entity's regulator the right to access information and premises related to the Services, as required by the applicable directions."],
    },
    {
      h: "How do we request the Addendum?",
      p: ["Write to {{email}} with your entity's name and regulator. We will send the Addendum for signature alongside, or after, your Order Form."],
    },
  ],
};

export const regulatedEntitiesAddendum: LegalDoc = {
  slug: "regulated-entities-addendum",
  title: "Regulated Entities Addendum",
  group: "Customer agreements",
  summary: "Extra contract terms for customers regulated by the RBI, SEBI or IRDAI, covering audit, incident reporting, continuity and exit.",
  effective: "[date of publication]",
  intro: [
    "This Addendum supplements the Main Service Agreement (the \"Agreement\") between {{entity}} (\"Brain Interacts\") and a Customer that is a regulated entity under the Reserve Bank of India (Outsourcing of Information Technology Services) Directions, 2023, the SEBI Cybersecurity and Cyber Resilience Framework, the IRDAI Information and Cyber Security Guidelines, 2023, or similar rules (the \"Applicable Rules\"). It applies only once signed by both parties. If it conflicts with the Agreement, this Addendum prevails for the matters it covers.",
  ],
  sections: [
    {
      h: "1. Description of the Services",
      p: ["The Services, their service levels, support and the locations from which they are provided and Customer Data is processed are described in the Agreement, the Order Form and the Documentation. We will give reasonable advance notice of any change in data processing locations."],
    },
    {
      h: "2. Security and compliance",
      p: ["We will maintain an information security programme appropriate to the Services, comply with the CERT-In Directions of 28 April 2022 that apply to us (including synchronising clocks and retaining relevant logs for 180 days), and on request complete the Customer's reasonable security due-diligence questionnaires once a year."],
    },
    {
      h: "3. Incident notification",
      p: ["We will notify the Customer of any security incident that affects the Services or Customer Data without undue delay and within six (6) hours of noticing it, so the Customer can meet its own reporting duties. We will provide updates as facts become known, a root-cause analysis after resolution, and reasonable cooperation with the Customer's regulator and CERT-In."],
    },
    {
      h: "4. Audit and access",
      p: ["The Customer, its internal and external auditors, and its regulator (including the RBI, SEBI or IRDAI, as applicable) may access books, records, information and premises relating to the Services, on reasonable notice, as required by the Applicable Rules. We will cooperate fully with regulatory inspections. Audits by the Customer are subject to reasonable confidentiality and security conditions and must not compromise other customers' data."],
    },
    {
      h: "5. Sub-contracting",
      p: ["We will give at least thirty (30) days' notice before engaging a sub-contractor that will provide a material part of the Services or process Customer Data. The Customer may object on reasonable grounds; if we cannot address the objection, the Customer may terminate the affected Services without penalty. We remain responsible for our sub-contractors."],
    },
    {
      h: "6. Business continuity",
      p: ["We will maintain and test business continuity and disaster recovery arrangements for the Services and share a summary of them with the Customer on request."],
    },
    {
      h: "7. Termination rights",
      p: ["In addition to its rights under the Agreement, the Customer may terminate the Agreement on written notice if its regulator directs it to, or if we materially breach this Addendum or the Applicable Rules and do not cure the breach within thirty (30) days. Termination under this section does not entitle us to fees for the unused term."],
    },
    {
      h: "8. Exit support",
      p: ["On expiry or termination, for up to ninety (90) days, we will provide reasonable assistance to transfer the Services to the Customer or a new provider, including exporting Customer Data in a commonly used, machine-readable format. Assistance beyond standard export is charged at our then-current Professional Services rates. We will then delete Customer Data as set out in the Data Processing Addendum."],
    },
    {
      h: "9. Confidentiality and governing law",
      p: ["The confidentiality, governing law and dispute resolution terms of the Agreement apply to this Addendum, save that nothing restricts the Customer from sharing information with its regulator."],
    },
  ],
};
