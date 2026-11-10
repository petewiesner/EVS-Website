import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck, Boxes, HeartHandshake, MapPin, ShieldCheck } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow } from "@/components/Eyebrow"
import { CtaBand, PageHero } from "@/components/PageHero"
import { DevNote } from "@/components/DevNote"
import { Testimonials } from "@/components/Testimonials"
import { ProcurementSignals } from "@/components/ProcurementSignals"
import { BUSINESS, routes } from "@/lib/site"
import bulb from "@/assets/Bulb.svg"

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
        EVS Solutions was founded by Pete Wiesner to bring real-world policing experience to the challenges agencies face
        today, from mental health crisis response to the technology officers train with.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[2fr_1fr]">
          <div>
            <Eyebrow>Our founder</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Pete Wiesner</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Pete's understanding of public safety comes from policing itself. He has seen first-hand how crisis
                calls, trauma and mental health shape outcomes for officers and the people they serve, and how much the
                right training changes those outcomes.
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
            <div className="mt-6">
              <DevNote>
                add specifics of your policing career: years of service, police service(s), roles and units, and any
                certifications (e.g. MHCR instructor). Also consider adding a professional headshot.
              </DevNote>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={routes.speaking} className={buttonVariants()}>Speaking engagements <ArrowRight /></Link>
              <Link to={routes.technology} className={buttonVariants({ variant: "outline" })}>Police technology</Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-brand-ink p-10 text-center text-white">
            <img src={bulb} alt="" className="h-40 w-auto" />
            <p className="mt-6 text-2xl font-bold">Forward Together</p>
            <p className="mt-2 flex items-center gap-1 text-sm text-white/70">
              <MapPin className="size-4" /> {BUSINESS.city}, {BUSINESS.province}
            </p>
          </div>
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
