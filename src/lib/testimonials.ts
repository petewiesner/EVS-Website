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
}

export const testimonials: Testimonial[] = []
