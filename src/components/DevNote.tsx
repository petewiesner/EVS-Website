import type { ReactNode } from "react"
import { PencilLine } from "lucide-react"

/**
 * A reminder box for missing content. Shows only in `npm run dev`;
 * the `import.meta.env.DEV` check is removed entirely from production builds.
 */
export function DevNote({ children }: { children: ReactNode }) {
  if (!import.meta.env.DEV) return null
  return (
    <div className="flex gap-3 rounded-lg border-2 border-dashed border-brand-accent bg-brand-accent/10 p-4 text-sm text-brand-ink">
      <PencilLine className="mt-0.5 size-4 shrink-0" />
      <div>
        <span className="font-semibold">To do (only visible in dev): </span>
        {children}
      </div>
    </div>
  )
}
