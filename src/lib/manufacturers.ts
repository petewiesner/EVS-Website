/*
 * Manufacturers EVS Solutions distributes in Canada.
 *
 * Rules (see business direction notes):
 * - Only add a manufacturer once there is a signed agreement.
 * - Set `relationship` to "authorized" or "exclusive" ONLY once that is in writing.
 *   Until then leave it as "partner" and the site says "Canadian distribution partner".
 * - Agencies buy by quote / purchase order. There is no online checkout.
 */

export type Relationship = "partner" | "authorized" | "exclusive"

export interface Manufacturer {
  id: string
  name: string
  shortName?: string
  website: string
  /** One line: what the product is. */
  summary: string
  relationship: Relationship
  /** "What it is" paragraphs. */
  about: string[]
  /** Who it's for. */
  audience: string[]
  /** Highlights, e.g. scenarios or capabilities, as published by the manufacturer. */
  highlights: string[]
  /** Manufacturer's own claims, shown with attribution. */
  claims?: string
}

export const relationshipLabel: Record<Relationship, string> = {
  partner: "Canadian distribution partner",
  authorized: "Authorized Canadian distributor",
  exclusive: "Exclusive Canadian distributor",
}

export const manufacturers: Manufacturer[] = [
  {
    id: "ssvr",
    name: "Street Smarts VR",
    shortName: "SSVR",
    website: "https://streetsmartsvr.com",
    summary: "Immersive, first-person virtual reality training for law enforcement.",
    relationship: "partner",
    about: [
      "Street Smarts VR (SSVR) is a hands-on virtual reality training platform. Officers train in realistic, first-person scenarios, and every repetition is captured with performance data so trainers can see progress and prove readiness.",
      "SSVR is one of the simulation options used in Wilfrid Laurier University's Mental Health Crisis Response (MHCR) program, the de-escalation training that has been mandatory for Ontario police officers under the Community Safety and Policing Act since April 1, 2024.",
    ],
    audience: [
      "Police services and training academies",
      "MHCR instructors delivering scenario-based training",
      "Public safety, corrections and campus security organizations",
    ],
    highlights: [
      "Use of force / de-escalation",
      "Traffic stop escalation",
      "Domestic disturbance",
      "School safety / lockdown",
      "Active threat",
      "Marksmanship sustainment",
      "Creator: build your own scenarios",
    ],
    claims: "SSVR reports use by 50+ agencies across 100+ locations.",
  },
]
