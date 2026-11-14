import { Link } from "react-router-dom"
import { ArrowRight, Building2, CheckCircle2, GraduationCap, MapPin } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow } from "@/components/Eyebrow"
import { PageHero } from "@/components/PageHero"
import { DevNote, PendingPhoto } from "@/components/DevNote"
import { pendingPhotos } from "@/lib/photos"
import DevOnly from "@/components/DevOnly"
import { Testimonials } from "@/components/Testimonials"
import { contactLinks } from "@/lib/site"

const audiences = ["Police services", "Fire inspectors", "Security teams", "Mental health workers"]
const includes = ["Situational awareness", "De-escalation", "Immersive virtual reality scenarios"]

export default function Training() {
  return (
    <>
      <title>Mental Health Crisis Training | EVS Solutions</title>
      <PageHero eyebrow="Training" title="Mental health crisis training, built for your front line">
        Pete Wiesner brings 30 years of law enforcement experience, including 25 years as a police officer and five in
        corrections, along with a decade of training frontline professionals.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-muted-foreground">
            <p>
              A retired Hamilton Police Sergeant, recognized subject matter expert in mental health and de-escalation, CIT
              International Master Trainer and Mental Health Crisis Response cadre trainer with Laurier University, Pete
              has trained thousands of people to handle mental health crises safely and with compassion.
            </p>
            <p>
              Every program is built around the people in the room and the calls they actually face, whether that's a fire
              inspector walking into a hoarding situation, a security team, mental health workers or a police service.
            </p>
            <Link to={contactLinks.training} className={buttonVariants({ size: "lg", className: "mt-4" })}>
              Book a Training Consultation <ArrowRight />
            </Link>
          </div>
          <div className="space-y-6">
            <PendingPhoto photo={pendingPhotos.trainingClass} />
            <div className="rounded-xl border bg-muted/40 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">Who it's for</p>
              <ul className="mt-3 grid gap-2">
                {audiences.map((a) => (
                  <li key={a} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand" /> {a}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border bg-muted/40 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">Training can include</p>
              <ul className="mt-3 grid gap-2">
                {includes.map((a) => (
                  <li key={a} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand" /> {a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <Building2 className="size-7 text-brand" />
            <h2 className="mt-3 text-2xl font-bold tracking-tight">Delivered in person, where your team works</h2>
            <p className="mt-3 text-muted-foreground">
              Crisis skills are built face to face, not through a screen. All EVS training is delivered in person, at your
              location or at a venue we arrange, so your team practises in an environment that feels real.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-brand" /> Across Ontario, with a focus on southern Ontario. Travel elsewhere
              in Canada can be arranged.
            </p>
          </div>
          <div>
            <CheckCircle2 className="size-7 text-brand" />
            <h2 className="mt-3 text-2xl font-bold tracking-tight">Why it works</h2>
            <p className="mt-3 text-muted-foreground">
              EVS training is grounded in crisis intervention models used by police services across North America. By
              building de-escalation skills, communication and confidence, these approaches aim to reduce the need for
              force, keep everyone safer and lead to better outcomes for people in crisis and the staff who respond to
              them.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-8">
        {import.meta.env.DEV && <DevNote>
          Pete to build an à la carte training menu (session formats, e.g. 3-hour, plus topics: hoarding calls, suicidal
          ideation, crisis response, de-escalation, situational awareness).
        </DevNote>}
      </div>

      <Testimonials section="training" title="What our trainees say" />

      {import.meta.env.DEV && <DevOnly>
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4">
            {import.meta.env.DEV && <DevNote>
              mentorship is hidden until Pete confirms Mohawk College has no rules against privately coaching current
              students.
            </DevNote>}
            <GraduationCap className="mt-6 size-8 text-brand" />
            <Eyebrow>Mentorship</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Mentorship for future officers</h2>
            <p className="mt-4 text-muted-foreground">
              Thinking about a career in policing? Get one-on-one mentorship and personal support from someone who spent
              25 years on the job and helped train new recruits. Pete helps candidates prepare for every step: polishing
              your resume, practising interviews and understanding the hiring process. Mentorship also builds the
              knowledge that sets strong candidates apart, including how police respond to mental health crises and what
              the job really looks like day to day.
            </p>
            <Link to={contactLinks.mentorship} className={buttonVariants({ size: "lg", className: "mt-6" })}>
              Book a Mentorship Session <ArrowRight />
            </Link>
          </div>
        </section>
      </DevOnly>}
    </>
  )
}
