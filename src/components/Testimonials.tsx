import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Eyebrow } from "@/components/Eyebrow"
import { DevNote } from "@/components/DevNote"
import { testimonials } from "@/lib/testimonials"

/** Hidden on the live site until lib/testimonials.ts has at least one approved entry. */
export function Testimonials() {
  if (testimonials.length === 0) {
    return import.meta.env.DEV ? (
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <DevNote>
            testimonials section. Add quotes or case studies to lib/testimonials.ts once each agency has given permission.
            This section appears automatically when the list has entries.
          </DevNote>
        </div>
      </section>
    ) : null
  }

  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Eyebrow>What clients say</Eyebrow>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Trusted by public safety professionals</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name + t.quote.slice(0, 20)}>
              <CardContent className="flex h-full flex-col">
                <Quote className="size-7 text-brand-accent" />
                <blockquote className="mt-4 flex-1 text-muted-foreground">"{t.quote}"</blockquote>
                <div className="mt-6">
                  <p className="font-semibold">{t.name}</p>
                  {(t.role || t.organization) && (
                    <p className="text-sm text-muted-foreground">{[t.role, t.organization].filter(Boolean).join(", ")}</p>
                  )}
                  {t.caseStudyUrl && (
                    <a href={t.caseStudyUrl} className="mt-2 inline-block text-sm font-medium text-brand hover:underline">
                      Read the case study
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
