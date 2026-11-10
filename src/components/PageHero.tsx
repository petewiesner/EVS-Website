import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow } from "@/components/Eyebrow"
import bulb from "@/assets/Bulb.svg"

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-white">
      <div className="absolute -right-24 -top-24 size-96 rounded-full bg-brand/30 blur-3xl" />
      <img src={bulb} alt="" className="pointer-events-none absolute -bottom-8 right-6 hidden h-72 opacity-15 md:block" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-24">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-white/75">{children}</div>}
      </div>
    </section>
  )
}

export function CtaBand({ title, text, to, label }: { title: string; text: string; to: string; label: string }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-brand p-8 text-white md:flex-row md:items-center md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <p className="mt-2 text-white/80">{text}</p>
          </div>
          <Link to={to} className={buttonVariants({ size: "lg", variant: "secondary" })}>
            {label} <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
