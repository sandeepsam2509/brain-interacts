import type { LegalDoc } from "./types";

export const acceptableUsePolicy: LegalDoc = {
  slug: "acceptable-use-policy",
  title: "Acceptable Use Policy",
  group: "Policies",
  summary: "What you may not do with Brain Interacts services, assessments and results.",
  effective: "26 November 2026",
  intro: [
    "This Acceptable Use Policy applies to everyone who uses the services of {{entity}} (\"Brain Interacts\"), including the website, free assessments and the platform. It forms part of your agreement with us. If you breach it, we may suspend or end access. Please report suspected misuse to {{email}}.",
  ],
  sections: [
    {
      h: "1. Unlawful or harmful use",
      p: ["You must not use the services to:"],
      list: [
        "break any law in India, including the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, the Bharatiya Nyaya Sanhita, 2023 and applicable labour laws;",
        "discriminate unlawfully against any person, including on grounds protected by the Constitution of India, the Rights of Persons with Disabilities Act, 2016 or the Transgender Persons (Protection of Rights) Act, 2019;",
        "harass, threaten, defame or intimidate anyone, or publish content that is obscene, hateful or promotes violence;",
        "submit Personal Data about anyone without giving the notice and obtaining the consent the law requires, or submit data about children without verifiable parental consent;",
        "infringe anyone's intellectual property, privacy or other rights.",
      ],
    },
    {
      h: "2. Misuse of assessments and results",
      list: [
        "Do not use assessment results as the sole basis for hiring, promotion, dismissal, pay, credit or similar decisions. Results describe tendencies and support human judgement.",
        "Do not present results as a medical, psychological or clinical diagnosis.",
        "Do not complete assessments on someone else's behalf, coach answers to manipulate results, or share an individual's results beyond those with a legitimate need to know.",
        "Do not copy, publish or resell assessment items, scoring methods, archetype descriptions or reports.",
      ],
    },
    {
      h: "3. Security and integrity",
      p: ["You must not:"],
      list: [
        "access or try to access accounts, systems or data without authorisation, or bypass authentication, CAPTCHA or other security measures;",
        "probe, scan or test our systems for vulnerabilities without written permission (responsible disclosures are welcome at {{email}});",
        "introduce viruses, malware or other harmful code, or interfere with the services through denial-of-service attacks, flooding or similar means;",
        "scrape, crawl or extract data or content using automated means, except as allowed by our robots.txt or written permission;",
        "reverse engineer the services, or use them or their outputs to build a competing product or train a competing model.",
      ],
    },
    {
      h: "4. Messaging",
      p: ["If you use the services to invite people or send messages, you must comply with the Telecom Regulatory Authority of India's Telecom Commercial Communications Customer Preference Regulations, 2018 and other applicable rules on unsolicited commercial communication. Do not send spam or misleading messages."],
    },
    {
      h: "5. Export controls and sanctions",
      p: ["You must not use or allow access to the services in breach of the Foreign Trade (Development and Regulation) Act, 1992, India's SCOMET controls or United Nations Security Council sanctions that apply in India."],
    },
    {
      h: "6. Changes",
      p: ["We may update this policy by posting a new version on this page. The updated version applies from the date posted."],
    },
  ],
};

export const eventTerms: LegalDoc = {
  slug: "event-terms",
  title: "Event Terms",
  group: "Events and careers",
  summary: "Terms for attending Brain Interacts events, workshops and webinars, in person or online.",
  effective: "26 November 2026",
  intro: [
    "These terms apply when you register for or attend an event, workshop, roundtable or webinar organised by {{entity}} (\"Brain Interacts\"), whether in person or online (an \"Event\"). By registering, you accept them.",
  ],
  sections: [
    {
      h: "1. Registration",
      p: ["Registrations are personal and may not be transferred without our consent. We may decline or cancel a registration at our discretion, for example where an Event is full or meant for a particular audience. Information you give when registering must be accurate."],
    },
    {
      h: "2. Fees and cancellation",
      p: ["Most Events are free. For paid Events, fees are shown in Indian Rupees plus GST and are payable at registration. Unless the Event page says otherwise, you may cancel for a full refund up to seven (7) days before the Event; later cancellations are not refunded, but you may nominate a colleague to attend in your place."],
    },
    {
      h: "3. Changes and cancellation by us",
      p: ["We may change the agenda, speakers, venue or format of an Event, or move it online. If we cancel an Event, we will refund any fees paid. We are not responsible for travel, accommodation or other costs you incur."],
    },
    {
      h: "4. Conduct",
      p: ["We want every Event to be safe and respectful. Harassment, discrimination or disruptive behaviour of any kind will not be tolerated, and we may remove anyone who breaches this standard without refund. Concerns can be raised with any Brain Interacts staff member at the Event or at {{email}}."],
    },
    {
      h: "5. Photography and recording",
      p: ["Events may be photographed, filmed or recorded. We will tell you when this happens. If you do not want to appear in published material, tell our staff at the Event or write to {{privacyEmail}}, and we will take reasonable steps to exclude you. You may not record sessions without permission."],
    },
    {
      h: "6. Your information",
      p: ["We use your registration details to manage the Event and, where you agree, to send you related updates, in line with our Privacy Policy. If an Event has a co-host or sponsor, we will tell you before sharing your details with them, and will do so only where you have agreed."],
    },
    {
      h: "7. Gifts and hospitality",
      p: ["Any hospitality offered at an Event is modest and offered without any expectation in return. Attendees from public bodies or organisations with gift policies are responsible for following their own rules. We comply with the Prevention of Corruption Act, 1988."],
    },
    {
      h: "8. Health, safety and liability",
      p: ["Please follow the venue's safety instructions. To the extent the law allows, we are not liable for loss of or damage to personal belongings, or for indirect losses. Nothing limits liability for death or personal injury caused by negligence. These terms are governed by the laws of India, and courts at {{city}} have jurisdiction."],
    },
  ],
};

export const applicantPrivacyNotice: LegalDoc = {
  slug: "applicant-privacy-notice",
  title: "Applicant Privacy Notice",
  group: "Events and careers",
  summary: "How we collect and use personal data when you apply for a job or internship at Brain Interacts.",
  effective: "26 November 2026",
  intro: [
    "This notice explains how {{entity}} (\"Brain Interacts\", \"we\") processes your personal data when you apply for a job or internship with us, as a Data Fiduciary under the Digital Personal Data Protection Act, 2023 (\"DPDP Act\").",
  ],
  sections: [
    {
      h: "1. What we collect",
      list: [
        "Details you give us: name, contact details, CV, cover letter, education, work history, skills, references, expected and current compensation, notice period and any portfolio.",
        "Assessment and interview information: notes from interviews, results of work samples, and, if you are invited to take one, your working-style assessment results.",
        "Information from others: feedback from referees you name, background verification results where an offer is made, and information from recruiters or job platforms you applied through.",
        "Information you choose to share for accessibility or reasonable adjustments.",
      ],
    },
    {
      h: "2. Why we use it",
      list: [
        "To assess your application and suitability for the role, and to communicate with you.",
        "To arrange interviews and any reasonable adjustments you request.",
        "To make and verify an offer, including background verification, with your consent.",
        "To meet legal obligations, such as record-keeping under labour and tax law, and to defend legal claims.",
      ],
      after: ["We process your data on the basis of your consent, which you give when you apply, and for legitimate uses permitted by Section 7 of the DPDP Act, such as complying with law."],
    },
    {
      h: "3. How we use assessments",
      p: ["If we use a working-style assessment, its results are one input among several, alongside interviews and work samples. No hiring decision is made solely by automated means. Results describe working preferences and are not a test of intelligence, health or character."],
    },
    {
      h: "4. Who we share it with",
      p: ["Your data is seen only by people involved in hiring. We share it with service providers that help us recruit (such as applicant-tracking, email and background verification providers) under contracts that protect it, and with authorities where the law requires. We do not sell it. Some providers may process data outside India, subject to Section 16 of the DPDP Act."],
    },
    {
      h: "5. How long we keep it",
      p: ["If you are not hired, we keep your application for up to twelve (12) months so we can consider you for other roles, unless you ask us to delete it sooner. If you are hired, your data becomes part of your employee record."],
    },
    {
      h: "6. Your rights",
      p: ["You may ask to access a summary of your data, correct or complete it, erase it, withdraw consent, nominate someone to act for you, and raise a grievance. Withdrawing consent will not affect processing already done, but we may be unable to continue with your application. Write to {{privacyEmail}}. If we do not resolve your grievance, you may complain to the Data Protection Board of India."],
    },
    {
      h: "7. Contact",
      p: ["Grievance Officer: {{grievanceOfficer}}, {{entity}}, {{address}}. Email: {{privacyEmail}}."],
    },
  ],
};

export const humanRightsPolicy: LegalDoc = {
  slug: "human-rights-policy",
  title: "Human Rights Policy",
  group: "Policies",
  summary: "Our commitment to respecting human rights across our workplace, products and suppliers.",
  effective: "26 November 2026",
  intro: [
    "Brain Interacts helps organisations understand and support their people. We believe that work should respect the dignity of every person. This policy sets out how {{entity}} respects human rights, guided by the Constitution of India, the laws of India and the UN Guiding Principles on Business and Human Rights. It applies to our employees, contractors and directors, and we expect our suppliers and partners to share these commitments.",
  ],
  sections: [
    {
      h: "1. Equal opportunity and non-discrimination",
      p: ["We hire, pay, train and promote people on merit. We do not discriminate on the basis of caste, religion, race, sex, gender identity, sexual orientation, age, disability, marital status, pregnancy, place of birth or any other protected characteristic. We provide reasonable accommodation as required by the Rights of Persons with Disabilities Act, 2016, and comply with the Equal Remuneration provisions of the Code on Wages, 2019."],
    },
    {
      h: "2. A workplace free from harassment",
      p: ["We do not tolerate harassment, bullying or abuse. We comply with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, including constituting an Internal Committee and training our people."],
    },
    {
      h: "3. Fair working conditions",
      p: ["We pay at least the applicable minimum wage, comply with the labour codes that apply to us on hours, leave, social security and safety, and respect our people's freedom of association."],
    },
    {
      h: "4. No forced or child labour",
      p: ["We prohibit forced, bonded and trafficked labour, in line with the Bonded Labour System (Abolition) Act, 1976, and do not employ children, in line with the Child and Adolescent Labour (Prohibition and Regulation) Act, 1986. We expect the same of our suppliers."],
    },
    {
      h: "5. Responsible products",
      p: ["Our assessments are designed to support, not replace, human judgement. We test them for fairness, tell users that results describe tendencies rather than fixed traits, and require customers not to use them as the sole basis for decisions about individuals or to discriminate unlawfully. We protect the privacy of the people who take our assessments, in line with the Digital Personal Data Protection Act, 2023."],
    },
    {
      h: "6. Ethics and anti-corruption",
      p: ["We do not offer or accept bribes, and comply with the Prevention of Corruption Act, 1988. We keep accurate records and compete fairly."],
    },
    {
      h: "7. Raising concerns",
      p: ["Anyone may raise a concern about a possible breach of this policy, confidentially, by writing to {{email}}. We will look into every concern and will not tolerate retaliation against anyone who raises one in good faith."],
    },
    {
      h: "8. Review",
      p: ["This policy is approved by our leadership and reviewed at least once a year."],
    },
  ],
};

export const securityAwareness: LegalDoc = {
  slug: "security-awareness",
  title: "Security Awareness: Recruitment and Investment Fraud",
  group: "Policies",
  summary: "How to recognise scams that misuse the Brain Interacts name, and how to report them.",
  effective: "26 November 2026",
  intro: [
    "Fraudsters sometimes pretend to be from well-known companies to trick people with fake job offers or investment schemes. This page explains how to recognise those scams when they misuse the Brain Interacts name, and what to do.",
  ],
  sections: [
    {
      h: "Fake job offers",
      p: ["Brain Interacts never asks candidates for money at any stage of hiring: not for applications, training, equipment, visas, verification or security deposits. Be suspicious if someone:"],
      list: [
        "contacts you from a personal email address or messaging app rather than an @braininteracts.com email address;",
        "offers you a job without an interview, or interviews you only by chat;",
        "asks for payment, bank details, OTPs, Aadhaar or PAN details before a genuine offer;",
        "pressures you to decide quickly or keep the offer secret.",
      ],
    },
    {
      h: "Fake investment or task schemes",
      p: ["Brain Interacts does not offer investment products, trading tips, crypto schemes or paid \"tasks\" such as rating apps or liking videos. Anyone offering these in our name is not acting for us. Never transfer money or share an OTP with someone you do not know."],
    },
    {
      h: "How to check",
      p: ["Genuine communication from us comes from an @braininteracts.com email address. Our open roles are listed on our Careers page. If you are unsure, write to {{email}} or call {{phone}} before you act."],
    },
    {
      h: "What to do if you are targeted",
      list: [
        "Stop contact and do not pay or share any more information.",
        "Report the scam on the National Cyber Crime Reporting Portal, cybercrime.gov.in, or call the cyber crime helpline 1930. Report quickly if you have lost money; it improves the chance of recovery.",
        "Report suspicious calls and messages on the Department of Telecommunications' Sanchar Saathi portal (Chakshu).",
        "If you have shared bank details, contact your bank immediately.",
        "Let us know at {{email}} so we can warn others.",
      ],
    },
  ],
};
