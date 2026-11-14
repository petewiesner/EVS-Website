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
  phone: "905-869-5297" as string | null,
  /** Service area for in-person training. */
  serviceArea: "Ontario, with a focus on southern Ontario. Travel elsewhere in Canada can be arranged.",
  /** Canadian Suicide Crisis Helpline. */
  crisisLine: "9-8-8",
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
  technology: "/technology",
  about: "/about",
  speaking: "/speaking-engagements",
  deEscalation: "/training",
  consulting: "/consulting",
  contact: "/contact",
  politics: "/consulting#campaigns",
} as const;

/** Contact links that prefill the form's subject line. */
export const contactLinks = {
  quote: `${routes.contact}?topic=quote`,
  demo: `${routes.contact}?topic=demo`,
  manufacturer: `${routes.contact}?topic=manufacturer`,
  training: `${routes.contact}?topic=training`,
  mentorship: `${routes.contact}?topic=mentorship`,
  consulting: `${routes.contact}?topic=consulting`,
  speaking: `${routes.contact}?topic=speaking`,
  campaign: `${routes.contact}?topic=campaign`,
} as const;

export const contactTopics: Record<string, string> = {
  quote: "Request a quote",
  demo: "Book a demo",
  manufacturer: "Become a partner",
  training: "Training consultation",
  mentorship: "Mentorship session",
  speaking: "Book Pete to speak",
  consulting: "Consulting enquiry",
  campaign: "Campaign strategy enquiry",
};

/** Message-box prompts per topic, so visitors tell us what we need to know. */
export const contactPrompts: Record<string, string> = {
  training:
    "Tell us about your team (who they are, how many) and the types of calls they face...",
  mentorship: "Tell us where you are in the hiring process and what you'd like help with...",
  speaking: "Event name, date, location and expected audience...",
  quote: "Which product, how many units, and your agency...",
  demo: "Which product, your agency, and when suits you...",
};

export const nav = [
  { to: routes.deEscalation, label: "Training" },
  { to: routes.speaking, label: "Speaking" },
  { to: routes.technology, label: "Technology", devOnly: true },
  { to: routes.consulting, label: "Consulting" },
  { to: routes.about, label: "About" },
];

/** Footer / email-signature credentials block. */
export const CREDENTIALS = {
  title: "Founder & Principal Consultant, EVS Solutions",
  lines: [
    "Retired Sergeant, Hamilton Police Service",
    "Mental Health & De-escalation Subject Matter Expert",
    "CIT International Master Trainer | Laurier MHCR Cadre Instructor",
  ],
  email: "pete@evssolutions.ca",
};

/** Awards shown on the Consulting and About pages. Add more as Pete confirms them. */
export const RECOGNITION = [
  { year: "2023", title: "CACP–Motorola Solutions Community Safety and Well-Being Award" },
  { year: "2012, 2021", title: "Leonard G. Lawrence Award" },
  { year: "2019", title: "YMCA Peace Medal" },
  { year: "", title: "Sixteen Level 1 and two Level 2 commendations, Hamilton Police Service" },
];

export interface TimelineDetail {
  title: string;
  description: string;
  /** Optional dates, free text so months work too, e.g. "2015" or "March 2015". */
  start?: string;
  end?: string;
}

export interface TimelineJob {
  /** Organization, e.g. "Hamilton Police Service". */
  name: string;
  /** Free text, e.g. "2001" or "September 2001". */
  start: string;
  end: string;
  /** Optional position or rank, e.g. "Sgt. (Ret.)". */
  position?: string;
  /** Hide on the live site (e.g. unconfirmed company relationships). */
  devOnly?: boolean;
  /** Roles or milestones within the job, oldest first. */
  details: TimelineDetail[];
}

export const FOUNDER_NAME = "Pete Wiesner";

/** CAREER filtered for the current environment (drops devOnly jobs on the live site). */
export const visibleCareer = () =>
  CAREER.filter((j) => !j.devOnly || import.meta.env.DEV);

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
        start: "2007",
        end: "2011",
      },
      {
        title: "ACTION Team",
        description:
          "Focused on intervention, prevention, enforcement and community mobilization in Hamilton's most vulnerable neighbourhoods.",
      },
      {
        title: "Sergeant, Crisis Response Branch",
        description:
          "Supervised the service's mental health crisis response and helped secure an $8.3 million provincial grant to create the Rapid Intervention and Support Team (RIST), bringing police together with nine specialized social-service agencies. Left the Sergeant role in 2024 and officially retired in 2025.",
        start: "2019",
        end: "2024",
      },
    ],
  },
  {
    name: "Ontario Provincial By-election, Hamilton Centre",
    start: "2023",
    end: "2023",
    position: "Candidate",
    details: [
      {
        title: "Candidate for provincial office, Hamilton Centre",
        description:
          "Ran in the March 2023 provincial by-election while still serving with the Hamilton Police Service: building a campaign team, fundraising, canvassing and speaking for the riding.",
        start: "Feb. 2023",
        end: "Mar. 2023",
      },
      {
        title: "Ongoing campaign involvement",
        description:
          "Continued work on election campaigns, fundraising and political strategy, keeping connections built during the run.",
        start: "2023",
        end: "Present",
      },
    ],
  },
  {
    // Another company: hidden on the live site until the relationship is confirmed.
    devOnly: true,
    name: "Street Smarts VR",
    start: "2024",
    end: "Present",
    position: "Canadian Business Development Lead",
    details: [
      {
        title: "Canadian Business Development Lead",
        description:
          "Bringing SSVR's virtual reality police training to Canadian agencies.",
        start: "2024",
      },
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
