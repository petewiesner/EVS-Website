/*
 * Central business details. Update facts here and they flow through the whole site.
 * Anything left as `null` / empty is hidden on the live site (and flagged in dev).
 */

export const BUSINESS = {
  name: "EVS Solutions",
  legalNote: "Ontario-registered corporation",
  city: "Hamilton",
  province: "Ontario",
  email: "contact@evssolutions.ca",
  /** TODO: add the business phone, e.g. "(905) 555-0123". Hidden while null. */
  phone: null as string | null,
  /**
   * Vendor-of-record arrangements, e.g. "Ontario Ministry of the Solicitor General VOR".
   * Only list ones you actually hold; the badge appears once this has an entry.
   */
  vendorOfRecord: [] as string[],
}

export const EMAIL = BUSINESS.email
export const PRIVACY_POLICY = "/privacy-policy.pdf"

export const routes = {
  home: "/",
  technology: "/technology",
  about: "/about",
  speaking: "/speaking-engagements",
  deEscalation: "/de-escalation",
  contact: "/contact",
} as const

/** Contact links that prefill the form's subject line. */
export const contactLinks = {
  quote: `${routes.contact}?topic=quote`,
  demo: `${routes.contact}?topic=demo`,
  manufacturer: `${routes.contact}?topic=manufacturer`,
  training: `${routes.contact}?topic=training`,
  speaking: `${routes.contact}?topic=speaking`,
} as const

export const contactTopics: Record<string, string> = {
  quote: "Request a quote",
  demo: "Book a demo",
  manufacturer: "Canadian distribution partnership",
  training: "Training enquiry",
  speaking: "Speaking engagement enquiry",
}

export const nav = [
  { to: "/#training", label: "Training" },
  { to: routes.technology, label: "Technology" },
  { to: routes.about, label: "About" },
]
