import type { ReactNode } from "react"

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-wider ${light ? "text-brand-accent" : "text-brand"}`}>
      {children}
    </p>
  )
}
