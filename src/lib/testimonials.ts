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
  /** Which page it belongs on. About shows them all. */
  section: "training" | "speaking" | "consulting"
  /** Optional link to a fuller case study. */
  caseStudyUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    section: "consulting",
    quote:
      "I brought Pete in to help with personal business matters and municipal political issues. He knows how the system really works, and he guided me to a better solution than I'd have found on my own.",
    name: "Ian Lawson",
  },
  {
    section: "consulting",
    quote:
      "Having run for office himself, Pete brought real professionalism and insight to my campaign. His guidance helped me win Ward 9 councillor in the 2026 municipal election.",
    name: "Jonathan Stathakos",
    role: "Ward 9 Councillor - Hamilton, ON",
  },
]
