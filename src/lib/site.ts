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
  /** Shown in the contact section and footer. Set to null to hide. */
  phone: "(905) 869-5297" as string | null,
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

export interface TimelineDetail {
  title: string
  description: string
  /** Optional dates, free text so months work too, e.g. "2015" or "March 2015". */
  start?: string
  end?: string
}

export interface TimelineJob {
  /** Organization, e.g. "Hamilton Police Service". */
  name: string
  /** Free text, e.g. "2001" or "September 2001". */
  start: string
  end: string
  /** Optional position or rank, e.g. "Sgt. (Ret.)". */
  position?: string
  /** Roles or milestones within the job, oldest first. */
  details: TimelineDetail[]
}

export const FOUNDER_NAME = "Pete Wiesner"

/**
 * The founder's career timeline on the About page, oldest job first.
 * The first job is also used for the photo caption and the "N years with ..." line.
 */
export const CAREER: TimelineJob[] = [
  {
    name: "Hamilton Police Service",
    start: "2001",
    end: "2024",
    position: "Sgt. (Ret.)",
    details: [
      { title: "Uniformed Patrol Constable", description: "Where his career began, on the front line.", start: "Sept. 2001" },
      { title: "Detective, Vice and Drugs", description: "Investigative work in vice and drug enforcement.", start: "2007", end: "2011" },
      { title: "ACTION Team", description: "Focused on intervention, prevention, enforcement and community mobilization in Hamilton's most vulnerable neighbourhoods." },
      { title: "Supervisor, Crisis Response Branch", description: "Leading the service's mental health crisis response to close his career." },
    ],
  },
  {
    name: "Street Smarts VR",
    start: "2024",
    end: "Present",
    position: "Canadian Business Development Lead",
    details: [
      { title: "Uniformed Patrol Constable", description: "Where his career began, on the front line.", start: "Sept. 2001" },
      { title: "Detective, Vice and Drugs", description: "Investigative work in vice and drug enforcement.", start: "2007", end: "2011" },
      { title: "ACTION Team", description: "Focused on intervention, prevention, enforcement and community mobilization in Hamilton's most vulnerable neighbourhoods." },
      { title: "Supervisor, Crisis Response Branch", description: "Leading the service's mental health crisis response to close his career." },
    ],
  },
]

/** "2001–2024", or just "2001" when start and end are the same. */
export const dateRange = (start?: string, end?: string) =>
  start && end && start !== end ? `${start}–${end}` : (start ?? end ?? "")

/** Whole years between a job's start and end (uses the 4-digit year in each). */
export const yearsIn = (job: TimelineJob) => {
  const year = (s: string) => Number(s.match(/\d{4}/)?.[0])
  return year(job.end) - year(job.start)
}
