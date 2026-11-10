import { Link } from "react-router-dom"
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  Factory,
  FileCheck2,
  GraduationCap,
  Headset,
  PackageCheck,
  Settings2,
  Target,
  Users,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Eyebrow } from "@/components/Eyebrow"
import { CtaBand, PageHero } from "@/components/PageHero"
import { ProcurementSignals } from "@/components/ProcurementSignals"
import { DevNote } from "@/components/DevNote"
import { contactLinks } from "@/lib/site"
import { manufacturers, relationshipLabel, type Manufacturer } from "@/lib/manufacturers"

const MHCR_URL =
  "https://www.wlu.ca/academics/faculties/faculty-of-human-and-social-sciences/centre-for-public-safety-and-well-being/mental-health-crisis-response/index.html"

/** What every agency gets when buying through EVS, whatever the manufacturer. */
const included = [
  { icon: GraduationCap, title: "Operator training", text: "We get your instructors comfortable running the system and its scenarios." },
  { icon: Settings2, title: "Setup", text: "Help unboxing, configuring and commissioning equipment at your facility." },
  { icon: Headset, title: "Canadian support", text: "A Canadian first point of contact, coordinating with the manufacturer when needed." },
]

const steps = [
  { icon: CalendarCheck, title: "Book a demo", text: "See the technology in action with your team." },
  { icon: ClipboardList, title: "Formal quote", text: "An itemized written quote for your approval process." },
  { icon: FileCheck2, title: "Purchase order", text: "Order through your agency's standard PO process." },
  { icon: PackageCheck, title: "Delivery and setup", text: "We deliver, set up and train your operators." },
]

const faqs = [
  {
    q: "Can we buy online?",
    a: "No. Agencies buy through a formal quote and purchase order, so pricing, terms and delivery fit your procurement rules. Request a quote to get started.",
  },
  {
    q: "Why buy through a Canadian partner?",
    a: "You deal with a Canadian company for quotes, invoicing, delivery and support, instead of managing a cross-border purchase yourself.",
  },
  {
    q: "Is MHCR certification included with SSVR equipment?",
    a: "No. Equipment and MHCR training are separate. In Ontario, MHCR must be delivered by an instructor certified through Wilfrid Laurier University's Train-the-Trainer (T3) program. We train your operators on the equipment itself.",
  },
]

function ManufacturerSection({ m, index }: { m: Manufacturer; index: number }) {
  return (
    <section id={m.id} className={`scroll-mt-16 py-20 ${index % 2 ? "bg-muted/40" : ""}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline" className="border-brand/30 text-brand">{relationshipLabel[m.relationship]}</Badge>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          {m.name}
          {m.shortName && <span className="text-brand"> ({m.shortName})</span>}
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">{m.summary}</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">What it is</h3>
            <div className="mt-3 space-y-4 text-muted-foreground">
              {m.about.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
            </div>
            {m.id === "ssvr" && (
              <a href={MHCR_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline">
                About MHCR at Laurier <ExternalLink className="size-3.5" />
              </a>
            )}

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-brand">Training scenarios</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {m.highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 rounded-lg border bg-background p-3 text-sm font-medium">
                  <Target className="size-4 shrink-0 text-brand" /> {h}
                </div>
              ))}
            </div>
            {m.claims && <p className="mt-4 text-xs text-muted-foreground">{m.claims}</p>}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="size-5 text-brand" />
                  <CardTitle>Who it's for</CardTitle>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {m.audience.map((a) => (
                    <li key={a} className="flex gap-2"><CheckCircle2 className="size-4 shrink-0 text-brand" /> {a}</li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <PackageCheck className="size-5 text-brand" />
                  <CardTitle>What comes with it</CardTitle>
                </div>
                <ul className="mt-3 space-y-3 text-sm">
                  {included.map(({ icon: Icon, title, text }) => (
                    <li key={title} className="flex gap-3">
                      <Icon className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span><span className="font-medium">{title}.</span> <span className="text-muted-foreground">{text}</span></span>
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
            <div className="flex flex-wrap gap-3">
              <Link to={contactLinks.demo} className={buttonVariants({ size: "lg" })}>Book a demo</Link>
              <Link to={contactLinks.quote} className={buttonVariants({ size: "lg", variant: "outline" })}>Request a quote</Link>
            </div>
            <a href={m.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand">
              Manufacturer website <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
        {m.id === "ssvr" && (
          <div className="mt-8">
            <DevNote>confirm with SSVR the exact operator training, setup and support you will provide, and get their OK to use their name and the "50+ agencies" figure.</DevNote>
          </div>
        )}
      </div>
    </section>
  )
}

export default function Technology() {
  return (
    <>
      <title>Police Technology Distribution in Canada | EVS Solutions</title>
      <PageHero eyebrow="Police technology" title="Proven police technology, supplied by a Canadian partner">
        EVS Solutions is the Canadian distribution partner for police technology companies without a Canadian footprint.
        Agencies buy locally through formal quotes and purchase orders, with Canadian setup and support.
      </PageHero>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Eyebrow>Our technology partners</Eyebrow>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {manufacturers.map((m) => (
              <a key={m.id} href={`#${m.id}`} className="group rounded-xl border p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold">{m.name}{m.shortName ? ` (${m.shortName})` : ""}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand">
                  Details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {manufacturers.map((m, i) => <ManufacturerSection key={m.id} m={m} index={i + 1} />)}

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Eyebrow>How buying works</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">From demo to day one</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="border-t-2 border-brand-accent pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-brand">0{i + 1}</span>
                  <Icon className="size-5 text-brand" />
                </div>
                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <ProcurementSignals className="mt-12" />
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Common questions</h2>
          <dl className="mt-8 divide-y rounded-xl border bg-background">
            {faqs.map(({ q, a }) => (
              <div key={q} className="p-6">
                <dt className="font-semibold">{q}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border-2 border-dashed p-8 md:flex-row md:items-center">
            <div className="flex gap-4">
              <Factory className="size-8 shrink-0 text-brand" />
              <div>
                <h2 className="text-xl font-bold">Are you a police technology manufacturer?</h2>
                <p className="mt-1 text-muted-foreground">
                  If you have no Canadian presence, we can be your Canadian distribution partner: local sales, quoting,
                  delivery and support.
                </p>
              </div>
            </div>
            <Link to={contactLinks.manufacturer} className={buttonVariants({ size: "lg", variant: "outline" })}>
              Talk to us <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Bring this technology to your agency"
        text="Book a demo, or tell us what you need and we'll send a formal quote."
        to={contactLinks.quote}
        label="Request a quote"
      />
    </>
  )
}
