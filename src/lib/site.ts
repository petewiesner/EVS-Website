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
};

export const EMAIL = BUSINESS.email;
export const PRIVACY_POLICY = "/privacy-policy.pdf";

export const routes = {
  home: "/",
  training: "/training",
  speaking: "/you-good",
  /** Partner/distribution content: dev only until partnerships can be public. */
  distribution: "/distribution",
  consulting: "/consulting",
  about: "/about",
  contact: "/contact",
} as const;

/** Contact links that prefill the form's subject line. */
export const contactLinks = {
  quote: `${routes.contact}?topic=quote`,
  demo: `${routes.contact}?topic=demo`,
  manufacturer: `${routes.contact}?topic=manufacturer`,
  training: `${routes.contact}?topic=training`,
  mentorship: `${routes.contact}?topic=mentorship`,
  speaking: `${routes.contact}?topic=speaking`,
  consulting: `${routes.contact}?topic=consulting`,
} as const;

export const contactTopics: Record<string, string> = {
  quote: "Request a quote",
  demo: "Book a demo",
  manufacturer: "Become a partner",
  training: "Training consultation",
  mentorship: "Mentorship session",
  speaking: "Book Pete to speak",
  consulting: "Consulting enquiry",
};

/** The four sections from Pete's content brief, in order. */
export const nav = [
  { to: routes.training, label: "Training" },
  { to: routes.speaking, label: "Public Speaking" },
  { to: routes.distribution, label: "Distribution", devOnly: true },
  { to: routes.consulting, label: "Consulting" },
  { to: routes.about, label: "About" },
];

export interface TimelineDetail {
  title: string;
  description: string;
  /** Optional dates, free text so months work too, e.g. "2015" or "March 2015". */
  start?: string;
  end?: string;
  link?: string
}

export interface TimelineJob {
  /** Organization, e.g. "Hamilton Police Service". */
  name: string;
  /** Free text, e.g. "2001" or "September 2001". */
  start: string;
  end: string;
  /** Optional position or rank, e.g. "Sgt. (Ret.)". */
  position?: string;
  /** Roles or milestones within the job, oldest first. */
  details: TimelineDetail[];
}

export const FOUNDER_NAME = "Pete Wiesner";

/** Footer credentials block, from Pete's brief. */
export const CREDENTIALS = [
  "Founder & Principal Consultant, EVS Solutions",
  "Retired Sergeant, Hamilton Police Service",
  "Mental Health & De-escalation Subject Matter Expert",
  "CIT International Master Trainer",
  "Laurier MHCR Cadre Instructor",
];

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
      {
        title: "Uniformed Patrol Constable",
        description: "Where his career began, on the front line.",
        start: "Sept. 2001",
      },
      {
        title: "Detective, Vice and Drugs",
        description: "Investigative work in vice and drug enforcement.",
        start: "2006",
        end: "2011",
      },
      {
        title: "ACTION Team",
        description:
          "Focused on intervention, prevention, enforcement and community mobilization in Hamilton's most vulnerable neighbourhoods.",
        start: "2013",
        end: "2016"
      },
      {
        title: "Supervisor, Crisis Response Branch",
        description:
          "Leading the service's mental health crisis response to close his career.",
        start: "2016",
        end: "2024"
      },
    ],
  },
  {
    name: "Post-Policing",
    start: "2024",
    end: "Present",
    details: [
      {
        title: "Street Smarts VR",
        description: "Canadian Sales Lead / Distribution & Training.",
        link: "https://streetsmartsvr.com"
      },
      {
        title: "Wilfrid Laurier University",
        description: "MHCR Cadre Instructor / SME on Mental Health & De-Escalation.",
        link: "https://www.wlu.ca/academics/faculties/faculty-of-human-and-social-sciences/centre-for-public-safety-and-well-being/mental-health-crisis-response/index.html"
      },
      {
        title: "CIT International",
        description: "Master T3 Instructor / SME on Mental Health & De-Escalation.",
        link: "https://citinternational.org"
      },
      {
        title: "Mohawk College",
        description: "Part-time Professor in the Police Foundations program.",
        link: "https://www.mohawkcollege.ca/programs/community-services/police-foundations"
      }
    ],
  },
];

/** "2001–2024", or just "2001" when start and end are the same. */
export const dateRange = (start?: string, end?: string) =>
  start && end && start !== end ? `${start}–${end}` : (start ?? end ?? "");

/** Whole years between a job's start and end (uses the 4-digit year in each). */
export const yearsIn = (job: TimelineJob) => {
  const year = (s: string) => Number(s.match(/\d{4}/)?.[0]);
  return year(job.end) - year(job.start);
};

/** Pete's recognition; shown on Consulting and About. */
export const AWARDS = [
  "2023 CACP–Motorola Solutions Community Safety and Well-Being Award",
  "Leonard G. Lawrence Award (2012 and 2021)",
  "YMCA Peace Medal (2019)",
  "Sixteen Level 1 and two Level 2 commendations with the Hamilton Police Service",
]
