import { Link } from "react-router-dom"
import { ArrowRight, Award, Landmark, ShieldCheck } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { PageHero } from "@/components/PageHero"
import { DevNote } from "@/components/DevNote"
import { Testimonials } from "@/components/Testimonials"
import { AWARDS, contactLinks } from "@/lib/site"


export default function Consulting() {
  return (
    <>
      <title>Consulting and Strategic Advisory | EVS Solutions</title>
      <PageHero eyebrow="Consulting" title="Consulting and strategic advisory">
        More than 30 years of public safety leadership for organizations facing complex challenges.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-3xl space-y-4 px-4 text-muted-foreground">
          <p>
            As a Sergeant in the Hamilton Police Service's Crisis Response Branch, Pete Wiesner helped secure an $8.3
            million provincial grant to create the Rapid Intervention and Support Team (RIST), a model that brought police
            together with nine specialized social-service agencies. That experience in building partnerships, securing
            funding and getting programs off the ground now guides EVS clients.
          </p>
          {import.meta.env.DEV && <DevNote>add both parts of Nicole Riley's Hamilton Spectator story on RIST once Pete sends the links.</DevNote>}
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <ShieldCheck className="size-7 text-brand" />
            <h2 className="mt-3 text-xl font-bold">Security organizations</h2>
            <p className="mt-2 text-muted-foreground">
              Security teams increasingly respond to people in crisis. EVS helps security companies and the organizations
              that rely on them build safer, more confident responses through tailored training and practical advice.
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <Landmark className="size-7 text-brand" />
            <h2 className="mt-3 text-xl font-bold">Campaigns and public leadership</h2>
            <p className="mt-2 text-muted-foreground">
              As a former candidate for provincial office in Hamilton Centre, Pete understands public life from the
              inside. He offers non-partisan guidance on campaign planning, fundraising and strategy, especially for
              candidates focused on community safety.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-4">
          <Link to={contactLinks.consulting} className={buttonVariants({ size: "lg", className: "mt-6" })}>
            Start a Conversation <ArrowRight />
          </Link>
        </div>
      </section>

      <Testimonials section="consulting" />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Award className="size-6 text-brand" /> Recognition
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {AWARDS.map((a) => (
              <li key={a} className="rounded-lg bg-background p-4 text-sm shadow-sm">{a}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
