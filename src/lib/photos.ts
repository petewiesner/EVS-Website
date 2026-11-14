/*
 * Photos awaiting consent. Each photo only appears in `npm run dev` until it's approved.
 *
 * Compressed copies live in context/photos-pending/ (originals in context/img/).
 * To publish one: get written consent from everyone identifiable in it, move the .webp into
 * src/assets/, import it normally and render a plain <img> in place of <PendingPhoto>.
 */

export interface Photo {
  src: string
  alt: string
  /** Who must consent before this goes live. */
  consentFrom: string
}

// Served straight from the project folder by the dev server; nothing here is bundled into dist/.
const file = (name: string) => (import.meta.env.DEV ? `/context/photos-pending/${name}.webp` : "")

export const pendingPhotos = {
  trainingClass: {
    src: file("training-class"),
    alt: "Pete with a class of trainees",
    consentFrom: "Pete + class (faces small/blurred; confirm with host org)",
  },
  peteCommunity: {
    src: file("pete-community"),
    alt: "Pete in uniform with a community member",
    consentFrom: "Pete + the community member",
  },
} satisfies Record<string, Photo>
