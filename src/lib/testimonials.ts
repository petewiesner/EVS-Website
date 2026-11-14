/*
 * Testimonials and case studies.
 * Only add an entry once the person / agency has given written permission to be quoted.
 * The section stays hidden on the live site while this list is empty.
 */

export interface Testimonial {
  quote: string
  name: string
  role?: string
  organization?: string
  /** Optional link to a fuller case study. */
  caseStudyUrl?: string
  /** Which page shows it. */
  section: "training" | "speaking" | "consulting"
  /**
   * Set to true ONLY once Pete confirms the person approved the exact wording.
   * Unapproved quotes appear in development only.
   */
  approved: boolean
}

// Drafts live inside the DEV branch so unapproved wording is stripped from production builds entirely.
// When one is approved, set approved: true and move it outside the DEV branch.
const approvedTestimonials: Testimonial[] = []

export const testimonials: Testimonial[] = !import.meta.env.DEV ? approvedTestimonials : [...approvedTestimonials,
  {
    section: "speaking",
    approved: false,
    quote:
      "Watching Pete share his real, raw story was unforgettable. He brought the whole room to the same realization: any one of us could be the person who needs to hear 'you good?', or the one who needs to ask it.",
    name: "Mel [last name to confirm]",
    role: "[role to confirm]",
  },
  {
    section: "consulting",
    approved: false,
    quote:
      "I brought Pete in to help with personal business matters and municipal political issues. He knows how the system really works, and he guided me to a better solution than I'd have found on my own.",
    name: "Ian [last name to confirm]",
    role: "[role to confirm]",
  },
  {
    section: "consulting",
    approved: false,
    quote:
      "Having run for office himself, Pete brought real professionalism and insight to my campaign. His guidance helped me win Ward 9 councillor in the 2026 municipal election.",
    name: "Jonathan Stathikos",
    role: "Ward 9 Councillor",
  },
]
