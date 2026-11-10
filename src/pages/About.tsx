import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck, Boxes, HeartHandshake, MapPin, ShieldCheck } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow } from "@/components/Eyebrow"
import { CtaBand, PageHero } from "@/components/PageHero"
import { DevNote } from "@/components/DevNote"
import { Testimonials } from "@/components/Testimonials"
import { ProcurementSignals } from "@/components/ProcurementSignals"
import { BUSINESS, CAREER, FOUNDER_NAME, dateRange, routes, yearsIn } from "@/lib/site"

const policing = CAREER[0]
import bulb from "@/assets/Bulb.svg"
import headshot from "@/assets/pete-headshot.webp"

const values = [
  { icon: ShieldCheck, title: "Policing first", text: "Everything we do starts from the realities of frontline police work." },
  { icon: HeartHandshake, title: "People-centred", text: "Empathy, dignity and mental health are at the core of safer outcomes." },
  { icon: BadgeCheck, title: "Practical", text: "Solutions that work on the street and in the training room, not just on paper." },
  { icon: Boxes, title: "Canadian", text: `Based in ${BUSINESS.city}, ${BUSINESS.province}, working with agencies across the country.` },
]

export default function About() {
  return (
    <>
      <title>About | EVS Solutions</title>
      <PageHero eyebrow="About EVS Solutions" title="Built on a career in policing">
        EVS Solutions was founded by {FOUNDER_NAME} after {yearsIn(policing)} years with the {policing.name}, to bring real-world
        policing experience to the challenges agencies face today, from mental health crisis response to the technology
        officers train with.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[2fr_1fr]">
          <div>
            <Eyebrow>Our founder</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{FOUNDER_NAME}</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Pete served with the {policing.name} from {policing.start} to {policing.end}. He began in uniformed patrol, worked as a
                detective in Vice and Drugs, served with the ACTION Team, and finished his career as supervisor of the
                Crisis Response Branch.
              </p>
              <p>
                Leading the Crisis Response Branch, he saw first-hand how crisis calls, trauma and mental health shape
                outcomes for officers and the people they serve, and how much the right training changes those outcomes.
              </p>
              <p>
                His own journey, from trauma survivor to advocate, made him a passionate voice for officer wellness and
                for transparency about mental health. He has shared that message on stages internationally, with a simple
                and vital lesson: it's okay to ask, "YOU GOOD?"
              </p>
              <p>
                Today, EVS Solutions brings that experience to agencies in two ways: de-escalation and mental health
                training, speaking and consulting, and supplying Canadian agencies with proven police training
                technology.
              </p>
            </div>
            {CAREER.map((job) => (
              <div key={job.name + job.start} className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
                  {job.name}, {dateRange(job.start, job.end)}
                </h3>
                <ol className="mt-5 space-y-5 border-l-2 border-brand-accent pl-6">
                  {job.details.map((d) => (
                    <li key={d.title} className="relative">
                      <span className="absolute -left-7.75 top-1.5 size-3 rounded-full bg-brand ring-4 ring-background" />
                      <p className="font-semibold text-foreground">
                        {d.title}
                        {(d.start || d.end) && (
                          <span className="ml-2 text-sm font-normal text-muted-foreground">{dateRange(d.start, d.end)}</span>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">{d.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
            <div className="mt-6">
              <DevNote>
                optional: add certifications (e.g. MHCR instructor) and other relevant timeline details.
              </DevNote>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={routes.speaking} className={buttonVariants()}>Speaking engagements <ArrowRight /></Link>
              <Link to={routes.technology} className={buttonVariants({ variant: "outline" })}>Police technology</Link>
            </div>
          </div>
          <figure className="self-start overflow-hidden rounded-2xl bg-brand-ink text-white shadow-lg lg:sticky lg:top-24">
            <img
              src={headshot}
              alt={`${FOUNDER_NAME}, founder of EVS Solutions`}
              className="aspect-square w-full object-cover"
            />
            <figcaption className="flex items-center gap-4 p-5">
              <img src={bulb} alt="" className="h-10 w-auto" />
              <div>
                <p className="font-semibold">{FOUNDER_NAME}</p>
                <p className="text-sm text-white/70">Director of Operations • EVS Solutions</p>
                {[...CAREER].reverse().map((c, i) => 
                <p key={i} className="text-[10px] text-white/50">{[c.position, c.name].filter(Boolean).join(" • ")} ({dateRange(c.start, c.end)})</p>
                )}
                <p className="mt-1 flex items-center gap-1 text-xs text-white/60">
                  <MapPin className="size-3" /> {BUSINESS.city}, {BUSINESS.province}
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Eyebrow>What guides us</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Our values</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="size-7 text-brand" />
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Eyebrow>The company</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">Working with EVS Solutions</h2>
          <ProcurementSignals className="mt-8" />
        </div>
      </section>

      <CtaBand title="Let's work together" text="Training, speaking, consulting or technology: tell us what you need." to={routes.contact} label="Get in touch" />
    </>
  )
}
