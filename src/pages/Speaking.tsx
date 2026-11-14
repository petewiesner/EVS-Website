import { Clock, Globe2, Newspaper, Phone, Users } from "lucide-react"
import { Eyebrow } from "@/components/Eyebrow"
import { CtaBand, PageHero } from "@/components/PageHero"
import { DevNote } from "@/components/DevNote"
import { Testimonials } from "@/components/Testimonials"
import { BUSINESS, contactLinks } from "@/lib/site"

/** Set once Pete sends the Hamilton Spectator article link. */
const SPECTATOR_URL: string | null = null
/** Set once the highlight video is edited and on YouTube (embed URL). */
const VIDEO_EMBED_URL: string | null = null

const YouGood = () => <strong className="font-extrabold uppercase text-brand">YOU GOOD?</strong>

export default function Speaking() {
  return (
    <>
      <title>You Good? Keynote on First Responder Mental Health | EVS Solutions</title>
      <PageHero eyebrow="Public speaking" title="You Good?">
        Men's mental health and suicide awareness, told by a cop, for everyone who works where trauma is part of the job.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-3xl space-y-5 px-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            Among cops, "you good?" is never small talk. It means: something's off, and we need to talk. Years ago, a
            supervisor and friend noticed Pete wasn't okay, called him into his office and asked him exactly that. Pete
            later realized those two words, <YouGood />, saved his life.
          </p>
          <p>
            In 2016, the job and life hit Pete all at once. Calls involving the deaths of children, the breakdown of his
            marriage, the weight of the job itself, from internal politics to an investigation that came at the worst
            possible time, and one heavy loss after another piled up until he was carrying more than anyone could see. It
            took a friend noticing, and asking, to pull him back.
          </p>
          <p>
            Years later, in 2023, Pete lost{" "}
            {import.meta.env.DEV ? "Greg Mills, a Hamilton police officer," : "a Hamilton police officer,"} a recruit he had trained and a
            good friend, to suicide. {import.meta.env.DEV ? "Greg" : "He"} was the twelfth officer Pete had lost to suicide in his career.
            That loss took him straight back to 2016 and to the question that saved him.
          </p>
          <DevNote>Greg is named in dev only. Get the Mills family's blessing before naming him on the live site.</DevNote>
          <p>
            Out of that came the You Good? presentation: a raw, honest and often heart-wrenching talk. Built by a cop, it
            speaks to anyone who works where trauma is part of the job: police officers, firefighters, paramedics, nurses,
            hospital staff and others who see the worst days of people's lives. No polished speeches or clinical slides,
            just real stories told the way first responders talk to each other.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          <div className="rounded-xl bg-background p-6 shadow-sm">
            <Clock className="size-7 text-brand" />
            <h3 className="mt-3 text-lg font-semibold">About an hour</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Delivered as a stand-alone keynote or added to an EVS mental health training day. The message is simple:
              learn when to ask, mean it when you do, and know how to get help for yourself or the person beside you.
            </p>
          </div>
          <div className="rounded-xl bg-background p-6 shadow-sm">
            <Users className="size-7 text-brand" />
            <h3 className="mt-3 text-lg font-semibold">Two bracelets, one message</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every audience member receives two You Good? bracelets. One is theirs to wear as a reminder to check in. The
              other is meant to be given away to someone who isn't okay. One honest check-in might be the one that saves a
              life.
            </p>
          </div>
          <div className="rounded-xl bg-background p-6 shadow-sm">
            <Globe2 className="size-7 text-brand" />
            <h3 className="mt-3 text-lg font-semibold">Where Pete has spoken</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Pete has delivered You Good? to thousands of police officers and first responders, including at the last
              five CIT International conferences, with audiences across Canada, the United States, the Cayman Islands and
              Europe.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl space-y-4 px-4">
          {VIDEO_EMBED_URL ? (
            <div className="aspect-video overflow-hidden rounded-xl">
              <iframe src={VIDEO_EMBED_URL} title="You Good? highlight video" className="size-full" allowFullScreen />
            </div>
          ) : (
            <DevNote>highlight video (YouTube) of the professionally filmed presentation, once edited. Set VIDEO_EMBED_URL in pages/Speaking.tsx.</DevNote>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Eyebrow>In the news</Eyebrow>
          {SPECTATOR_URL ? (
            <a href={SPECTATOR_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-lg font-medium text-brand hover:underline">
              <Newspaper className="size-5" /> Read Pete's story in the Hamilton Spectator
            </a>
          ) : (
            <div className="mt-4">
              <DevNote>link to the Hamilton Spectator article on police suicide featuring Pete. Set SPECTATOR_URL in pages/Speaking.tsx.</DevNote>
            </div>
          )}
        </div>
      </section>

      <Testimonials section="speaking" />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <DevNote>
            You Good? t-shirt shop (confirmed). Needs a payment provider (e.g. Shopify Buy Button, Square or Stripe Payment
            Links) set up by Pete before it can be added here.
          </DevNote>
        </div>
      </section>

      <CtaBand
        title="Bring You Good? to your team"
        text="Conferences, training days and first responder events, across Canada and internationally."
        to={contactLinks.speaking}
        label="Book Pete to speak"
      />

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-start gap-4 rounded-xl border p-6">
            <Phone className="mt-0.5 size-6 shrink-0 text-brand" />
            <div>
              <p className="font-semibold">Need to talk to someone now?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Call or text <a href="tel:988" className="font-semibold text-brand">{BUSINESS.crisisLine}</a>, the Canadian
                Suicide Crisis Helpline, any time, day or night.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
