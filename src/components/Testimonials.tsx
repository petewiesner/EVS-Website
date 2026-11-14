import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Eyebrow } from "@/components/Eyebrow"
import { DevNote } from "@/components/DevNote"
import { testimonials, type Testimonial } from "@/lib/testimonials"

/**
 * Testimonials for one section. Unapproved quotes show in development only (marked as drafts);
 * on the live site the section is hidden until at least one approved quote exists.
 */
export function Testimonials({
  section,
  title = "What people are saying",
  muted = true,
}: {
  section: Testimonial["section"]
  title?: string
  muted?: boolean
}) {
  const list = testimonials.filter((t) => t.section === section && (t.approved || import.meta.env.DEV))

  if (list.length === 0) {
    return import.meta.env.DEV ? (
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <DevNote>
            {section} testimonials. Add quotes to lib/testimonials.ts (name, role, organization) and set approved: true once
            the person has given permission.
          </DevNote>
        </div>
      </section>
    ) : null
  }

  return (
    <section className={`py-20 ${muted ? "bg-muted/40" : ""}`}>
      <div className="mx-auto max-w-6xl px-4">
        <Eyebrow>Testimonials</Eyebrow>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <Card key={t.name + t.quote.slice(0, 20)} className={t.approved ? "" : "border-2 border-dashed border-brand-accent"}>
              <CardContent className="flex h-full flex-col">
                {!t.approved && (
                  <p className="mb-3 text-xs font-semibold uppercase text-brand-ink">Draft, awaiting approval (dev only)</p>
                )}
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
