import { Award, ShieldCheck, Vote } from "lucide-react"
import { Eyebrow } from "@/components/Eyebrow"
import { CtaBand, PageHero } from "@/components/PageHero"
import { DevNote } from "@/components/DevNote"
import { Testimonials } from "@/components/Testimonials"
import { RECOGNITION, contactLinks } from "@/lib/site"

/** Nicole Riley's two-part Hamilton Spectator story on RIST. Add once Pete sends the links. */
const RIST_LINKS: { label: string; url: string }[] = []

export default function Consulting() {
  return (
    <>
      <title>Consulting &amp; Strategic Advisory | EVS Solutions</title>
      <PageHero eyebrow="Consulting" title="Consulting and strategic advisory">
        More than 30 years of public safety leadership for organizations facing complex challenges.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            As a Sergeant in the Hamilton Police Service's Crisis Response Branch, Pete Wiesner helped secure an $8.3
            million provincial grant to create the Rapid Intervention and Support Team (RIST), a model that brought police
            together with nine specialized social-service agencies. That experience in building partnerships, securing
            funding and getting programs off the ground now guides EVS clients.
          </p>
          {RIST_LINKS.length > 0 ? (
            <ul className="mt-4 space-y-1 text-base">
              {RIST_LINKS.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noreferrer" className="font-medium text-brand hover:underline">{l.label}</a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-4"><DevNote>add both parts of Nicole Riley's Hamilton Spectator story on RIST (RIST_LINKS in pages/Consulting.tsx).</DevNote></div>
          )}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          <div className="rounded-xl bg-background p-8 shadow-sm">
            <ShieldCheck className="size-8 text-brand" />
            <h2 className="mt-4 text-2xl font-bold">Security organizations</h2>
            <p className="mt-3 text-muted-foreground">
              Security teams increasingly respond to people in crisis. EVS helps security companies and the organizations
              that rely on them build safer, more confident responses through tailored training and practical advice.
            </p>
          </div>
          <div id="campaigns" className="scroll-mt-20 rounded-xl bg-background p-8 shadow-sm">
            <Vote className="size-8 text-brand" />
            <h2 className="mt-4 text-2xl font-bold">Campaigns and public leadership</h2>
            <p className="mt-3 text-muted-foreground">
              As a former candidate for provincial office in Hamilton Centre, Pete understands public life from the inside.
              He offers non-partisan guidance on campaign planning, fundraising and strategy, especially for candidates
              focused on community safety.
            </p>
          </div>
        </div>
      </section>

      <Testimonials section="consulting" title="What clients say" muted={false} />

      <section id="recognition" className="scroll-mt-16 bg-brand-ink py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <Eyebrow light>Recognition</Eyebrow>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {RECOGNITION.map((r) => (
              <li key={r.title} className="flex gap-3 rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                <Award className="size-6 shrink-0 text-brand-accent" />
                <div>
                  <p className="font-semibold">{r.title}</p>
                  {r.year && <p className="text-sm text-white/60">{r.year}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Start a conversation"
        text="Tell us about your organization, your campaign or the challenge in front of you."
        to={contactLinks.consulting}
        label="Start a conversation"
      />
    </>
  )
}
