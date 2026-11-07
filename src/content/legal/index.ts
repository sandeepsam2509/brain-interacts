import { legal } from "@/components/LegalPage";
import { site } from "@/lib/site";
import { mainServiceAgreement, subscriptionAddendum, termsOfService } from "./agreements";
import { dataProcessingAddendum, regulatedEntitiesAddendum, regulatedEntitiesFaq } from "./data";
import { acceptableUsePolicy, applicantPrivacyNotice, eventTerms, humanRightsPolicy, securityAwareness } from "./policies";
import type { LegalDoc, LegalGroup } from "./types";

export type { LegalDoc, LegalGroup } from "./types";

export const legalDocs: LegalDoc[] = [
  mainServiceAgreement,
  termsOfService,
  subscriptionAddendum,
  regulatedEntitiesFaq,
  regulatedEntitiesAddendum,
  dataProcessingAddendum,
  acceptableUsePolicy,
  humanRightsPolicy,
  securityAwareness,
  eventTerms,
  applicantPrivacyNotice,
];

export const legalGroups: LegalGroup[] = ["Customer agreements", "Privacy and data", "Policies", "Events and careers"];

export const legalDocHref = (slug: string) => `/legal/${slug}`;

const tokens: Record<string, string> = {
  entity: legal.entity,
  address: legal.address,
  city: legal.city,
  grievanceOfficer: legal.grievanceOfficer,
  privacyEmail: legal.privacyEmail,
  email: site.email,
  phone: site.phone,
};

/** Replace {{token}} placeholders with the values from `legal` and `site`. */
export const fillLegal = (text: string) => text.replace(/\{\{(\w+)\}\}/g, (m, k: string) => tokens[k] ?? m);
