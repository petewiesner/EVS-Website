import { Link } from "react-router-dom";
import { ArrowRight, Globe2, Phone, Watch } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { DevNote } from "@/components/DevNote";
import speakingStage from "@/assets/photos/speaking-stage.webp"
import youGoodShirt from "@/assets/photos/you-good-shirt.webp";
import DevOnly from "@/components/DevOnly";
import { contactLinks } from "@/lib/site";

const YouGood = () => (
  <strong className="font-extrabold uppercase text-brand">YOU GOOD?</strong>
);

export default function Speaking() {
  return (
    <>
      <title>You Good? | Public Speaking | EVS Solutions</title>
      <PageHero eyebrow="Public Speaking" title="You Good?">
        Mental health and suicide awareness, from a cop who has lived it.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-3xl space-y-5 px-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            Among cops, "you good?" is never small talk. It means: something's
            off, and we need to talk. Years ago, a supervisor and friend noticed
            Pete wasn't okay, called him into his office and asked him exactly
            that. Pete later realized those two words, <YouGood />, saved his
            life.
          </p>
          <p>
            In 2016, the job and life hit Pete all at once. Calls involving the
            deaths of children, the breakdown of his marriage, the weight of the
            job itself, from internal politics to an investigation that came at
            the worst possible time, and one heavy loss after another piled up
            until he was carrying more than anyone could see. It took a friend
            noticing, and asking, to pull him back.
          </p>
          {import.meta.env.DEV && (
            <DevOnly>
              {import.meta.env.DEV && (
                <DevNote>
                  hidden until the Mills family gives their blessing to name
                  Greg.
                </DevNote>
              )}
              <p className="mt-4">
                Years later, in 2023, Pete lost Greg Mills, a Hamilton police
                officer, a recruit he had trained and a good friend, to suicide.
                Greg was the twelfth officer Pete had lost to suicide in his
                career. That loss took him straight back to 2016 and to the
                question that saved him.
              </p>
            </DevOnly>
          )}
          <p>
            Out of that came the You Good? presentation: a raw, honest and often
            heart-wrenching talk. Built by a cop, it speaks to anyone who works
            where trauma is part of the job: police officers, firefighters,
            paramedics, nurses, hospital staff and others who see the worst days
            of people's lives. No polished speeches or clinical slides, just
            real stories told the way first responders talk to each other.
          </p>
          <p>
            You Good? runs about an hour and can be delivered as a stand-alone
            keynote or added to an EVS mental health training day. The message
            is simple: learn when to ask, mean it when you do, and know how to
            get help for yourself or the person beside you.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={speakingStage}
              alt="Pete Wiesner presenting You Good? on stage at a conference"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
            <img
              src={youGoodShirt}
              alt="Pete Wiesner at a ballgame with a supporter wearing a You Good? shirt"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
          <Link
            to={contactLinks.speaking}
            className={buttonVariants({ size: "lg" })}
          >
            Book Pete to Speak <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <Watch className="size-7 text-brand" />
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Two bracelets, one message
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every audience member receives two You Good? bracelets. One is
              theirs to wear as a reminder to check in. The other is meant to be
              given away to someone who isn't okay. One honest check-in might be
              the one that saves a life.
            </p>
          </div>
          <div>
            <Globe2 className="size-7 text-brand" />
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Where Pete has spoken
            </h2>
            <p className="mt-3 text-muted-foreground">
              Pete has delivered You Good? to thousands of police officers and
              first responders, including at the last five CIT International
              conferences, with audiences across Canada, the United States, the
              Cayman Islands and Europe.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-3 px-4">
          {import.meta.env.DEV && (
            <DevNote>
              In the News: add the Hamilton Spectator article link once Pete
              sends it.
            </DevNote>
          )}
          {import.meta.env.DEV && (
            <DevNote>add the YouTube highlight video once edited.</DevNote>
          )}
          {import.meta.env.DEV && (
            <DevNote>
              testimonials: Mel's quote is a draft awaiting approval. Add to
              lib/testimonials.ts only once approved.
            </DevNote>
          )}
          {import.meta.env.DEV && (
            <DevNote>
              small You Good? t-shirt shop goes here (confirmed by Pete; needs a
              store provider).
            </DevNote>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto flex max-w-3xl items-center gap-4 rounded-xl border-l-4 border-brand bg-brand/5 p-6 px-4">
          <Phone className="size-6 shrink-0 text-brand" />
          <p className="text-sm">
            <strong>Need to talk now?</strong> Call or text{" "}
            <strong>9-8-8</strong>, the Canadian Suicide Crisis Helpline, any
            time.
          </p>
        </div>
      </section>
    </>
  );
}
