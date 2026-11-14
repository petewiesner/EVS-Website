import type { ReactNode } from "react";
import { PencilLine } from "lucide-react";
import DevOnly from "./DevOnly";

/**
 * A reminder box for missing content. Shows only in `npm run dev`;
 * the `import.meta.env.DEV` check is removed entirely from production builds.
 */
export function DevNote({ children }: { children: ReactNode }) {
  return (
    <DevOnly hideNote>
      <div className="flex gap-3 rounded-lg border-2 border-dashed border-brand-accent bg-brand-accent/10 p-4 text-sm text-brand-ink">
        <PencilLine className="mt-0.5 size-4 shrink-0" />
        <div>
          <span className="font-semibold">
            To do (only visible in development):{" "}
          </span>
          {children}
        </div>
      </div>
    </DevOnly>
  );
}

/** A photo still awaiting consent. Renders only in dev, with who needs to sign off. */
export function PendingPhoto({ photo, className = "" }: { photo: { src: string; alt: string; consentFrom: string }; className?: string }) {
  if (!import.meta.env.DEV || !photo.src) return null
  return (
    <figure className={className}>
      <img src={photo.src} alt={photo.alt} className="w-full rounded-2xl object-cover shadow-lg" />
      <figcaption className="mt-2 text-xs text-brand-ink">
        <span className="font-semibold">Consent needed (dev only):</span> {photo.consentFrom}
      </figcaption>
    </figure>
  )
}
