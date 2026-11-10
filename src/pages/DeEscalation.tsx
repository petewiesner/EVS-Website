import { BookOpenCheck, FlaskConical, MapPin, Building2, CheckCircle2 } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eyebrow } from "@/components/Eyebrow"
import { CtaBand, PageHero } from "@/components/PageHero"
import { contactLinks } from "@/lib/site"

const features = [
  {
    icon: BookOpenCheck,
    title: "Comprehensive Training and Resources",
    text: "Our tailored approach provides a wealth of resources so frontline workers are well prepared for crisis situations, with a thorough understanding of crisis intervention and the knowledge and skills to navigate complex situations effectively.",
  },
  {
    icon: FlaskConical,
    title: "Evidence-Based Programs",
    text: "Grounded in evidence-based practices that promote empathy, de-escalation techniques, and collaborative approaches. Together they ensure positive outcomes for officers and community members, foster understanding and respect, and reduce the potential for conflict.",
  },
]

const pillars = ["Empathy", "De-escalation techniques", "Collaborative problem-solving"]

export default function DeEscalation() {
  return (
    <>
      <title>De-Escalation Training | EVS Solutions</title>
      <PageHero eyebrow="De-Escalation Training" title="The Memphis Model approach">
        Our Specialized Crisis Intervention Training equips frontline workers with the skills to interact effectively
        with individuals in crisis.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <Eyebrow>Specialized Crisis Intervention Training</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Built on a proven model</h2>
            <p className="mt-4 text-muted-foreground">
              This comprehensive program is based on the renowned Memphis Model, a proven approach to crisis intervention
              that puts people first. It prioritizes:
            </p>
          </div>
          <ul className="grid gap-4">
            {pillars.map((p) => (
              <li key={p} className="flex items-center gap-4 rounded-xl border bg-muted/40 p-5 text-lg font-semibold">
                <CheckCircle2 className="size-6 shrink-0 text-brand" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-6" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <Eyebrow>Flexible Training Options</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Training that fits your organization</h2>
            <p className="mt-4 text-muted-foreground">
              Every organization has unique needs and constraints. Wherever the training happens, our commitment to
              quality and effectiveness stays the same.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex gap-4 rounded-xl border-l-4 border-brand-accent bg-background p-6 shadow-sm">
              <Building2 className="size-7 shrink-0 text-brand" />
              <div>
                <h3 className="text-lg font-semibold">In-house</h3>
                <p className="mt-1 text-sm text-muted-foreground">Your team learns in a familiar environment.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border-l-4 border-brand-accent bg-background p-6 shadow-sm">
              <MapPin className="size-7 shrink-0 text-brand" />
              <div>
                <h3 className="text-lg font-semibold">At a location of your choice</h3>
                <p className="mt-1 text-sm text-muted-foreground">We bring the training to a specified venue.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Join us in creating safer, more understanding environments"
        text="With our Specialized Crisis Intervention Training, we can work together to make a positive impact in our communities."
        to={contactLinks.training}
        label="Request training"
      />
    </>
  )
}
