import { Link } from "react-router-dom"
import { ArrowRight, Building2, CheckCircle2, Compass, MapPin, Users } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow } from "@/components/Eyebrow"
import { PageHero } from "@/components/PageHero"
import { DevNote } from "@/components/DevNote"
import { Testimonials } from "@/components/Testimonials"
import { BUSINESS, contactLinks } from "@/lib/site"

const audiences = [
  "Police services",
  "Fire services and inspectors",
  "Security teams",
  "Mental health and social service workers",
]

const topics = ["Mental health crisis response", "De-escalation", "Situational awareness", "Immersive virtual reality scenarios"]

export default function DeEscalation() {
  return (
    <>
      <title>Mental Health Crisis &amp; De-Escalation Training | EVS Solutions</title>
      <PageHero eyebrow="Training" title="Mental health crisis training, built for your front line">
        Practical, in-person crisis training from a retired Hamilton Police Sergeant with 30 years of law enforcement
        experience.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[3fr_2fr]">
          <div>
            <Eyebrow>Who leads the training</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Built around the calls your team actually faces</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Pete Wiesner brings 30 years of law enforcement experience, including 25 years as a police officer and five
                in corrections, along with a decade of training frontline professionals. A retired Hamilton Police
                Sergeant, recognized subject matter expert in mental health and de-escalation, CIT International Master
                Trainer and Mental Health Crisis Response cadre trainer with Laurier University, Pete has trained thousands
                of people to handle mental health crises safely and with compassion.
              </p>
              <p>
                Every program is built around the people in the room and the calls they actually face, whether that's a
                fire inspector walking into a hoarding situation, a security team, mental health workers or a police
                service.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-muted/40 p-6">
              <div className="flex items-center gap-2 font-semibold"><Users className="size-5 text-brand" /> Who we train</div>
              <ul className="mt-4 space-y-2 text-sm">
                {audiences.map((a) => (
                  <li key={a} className="flex gap-2"><CheckCircle2 className="size-4 shrink-0 text-brand" /> {a}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border bg-muted/40 p-6">
              <div className="flex items-center gap-2 font-semibold"><Compass className="size-5 text-brand" /> Training can include</div>
              <ul className="mt-4 space-y-2 text-sm">
                {topics.map((a) => (
                  <li key={a} className="flex gap-2"><CheckCircle2 className="size-4 shrink-0 text-brand" /> {a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl px-4">
          <DevNote>
            à la carte training menu (Pete, another day): sample formats such as a 3-hour session, plus topics clients can
            pick (hoarding calls, suicidal ideation, crisis response, de-escalation, situational awareness).
          </DevNote>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
          <div>
            <Eyebrow>Delivered in person</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Where your team works</h2>
            <p className="mt-4 text-muted-foreground">
              Crisis skills are built face to face, not through a screen. All EVS training is delivered in person, at your
              location or at a venue we arrange, so your team practises in an environment that feels real.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 rounded-xl border-l-4 border-brand-accent bg-background p-4 shadow-sm">
                <Building2 className="size-6 shrink-0 text-brand" />
                <p className="text-sm">At your location, or a venue we arrange</p>
              </div>
              <div className="flex gap-3 rounded-xl border-l-4 border-brand-accent bg-background p-4 shadow-sm">
                <MapPin className="size-6 shrink-0 text-brand" />
                <p className="text-sm">{BUSINESS.serviceArea}</p>
              </div>
            </div>
          </div>
          <div>
            <Eyebrow>Why it works</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Proven crisis intervention models</h2>
            <p className="mt-4 text-muted-foreground">
              EVS training is grounded in crisis intervention models used by police services across North America. By
              building de-escalation skills, communication and confidence, these approaches aim to reduce the need for
              force, keep everyone safer and lead to better outcomes for people in crisis and the staff who respond to
              them.
            </p>
            <Link to={contactLinks.training} className={buttonVariants({ size: "lg", className: "mt-8" })}>
              Book a training consultation <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials section="training" title="What our trainees say" muted={false} />

      <section id="mentorship" className="scroll-mt-16 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-brand-ink p-8 text-white md:flex-row md:items-center md:p-10">
            <div className="max-w-2xl">
              <Eyebrow light>Mentorship for future officers</Eyebrow>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">Thinking about a career in policing?</h2>
              <p className="mt-3 text-white/75">
                Get one-on-one mentorship and personal support from someone who spent 25 years on the job and helped train
                new recruits. Pete helps candidates prepare for every step: polishing your resume, practising interviews
                and understanding the hiring process. Mentorship also builds the knowledge that sets strong candidates
                apart, including how police respond to mental health crises and what the job really looks like day to
                day.
              </p>
            </div>
            <Link to={contactLinks.mentorship} className={buttonVariants({ size: "lg", variant: "secondary" })}>
              Book a mentorship session <ArrowRight />
            </Link>
          </div>
          <div className="mt-4">
            <DevNote>Pete: check whether Mohawk College has rules about privately coaching current Police Foundations students.</DevNote>
          </div>
        </div>
      </section>
    </>
  )
}
