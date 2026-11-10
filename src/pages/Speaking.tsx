import { BookOpen, Globe2, HeartHandshake, Flame, Quote } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CtaBand, PageHero } from "@/components/PageHero"
import { contactLinks } from "@/lib/site"

const pillars = [
  {
    icon: BookOpen,
    title: "Storytelling Mastery",
    text: "Pete weaves narratives that resonate deeply with listeners. His personal experiences, including overcoming adversity, dealing with trauma, and advocating for mental health, form the backbone of his powerful speeches. Through vivid anecdotes, he invites empathy and understanding.",
  },
  {
    icon: HeartHandshake,
    title: "Connecting with Audiences",
    text: "Pete's charisma extends beyond the stage. He effortlessly establishes rapport with his listeners, making them feel seen and heard. His authenticity and vulnerability create an atmosphere of trust, allowing people to open up about their own struggles. His message becomes more than words: it becomes a lifeline for those who need it most.",
  },
  {
    icon: Globe2,
    title: "International Impact",
    text: "Pete has graced stages across the globe, sharing his triumphs, challenges, and insights. From conference halls to community centres, his voice resonates, breaking down barriers and fostering conversations around mental health.",
  },
  {
    icon: Flame,
    title: "Passion and Purpose",
    text: "Pete's commitment to his cause is unwavering. His passion for transparency about personal mental health is contagious. His journey from trauma survivor to advocate inspires others to seek help, support one another, and prioritize their well-being.",
  },
]

export default function Speaking() {
  return (
    <>
      <title>Speaking Engagements | EVS Solutions</title>
      <PageHero eyebrow="Speaking Engagements" title="Authentic stories that open conversations about mental health">
        Pete Wiesner is a charismatic public speaker with an innate ability to captivate audiences of all sizes. His
        talent lies not only in his storytelling but in his genuine interaction with the crowd, whether addressing a
        small gathering or an international audience.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          {pillars.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="transition-shadow hover:shadow-lg">
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

      <section className="bg-brand-accent/15 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Quote className="mx-auto size-10 text-brand" />
          <p className="mt-6 text-lg text-muted-foreground">Pete's core message is simple and vital:</p>
          <p className="mt-2 text-5xl font-extrabold tracking-tight text-brand-ink md:text-7xl">
            It's okay to ask, <span className="text-brand">"YOU GOOD?"</span>
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
            Pete Wiesner's impactful presence, heartfelt storytelling, and dedication to mental health advocacy leave an
            indelible mark on every audience fortunate enough to hear him speak.
          </p>
        </div>
      </section>

      <CtaBand
        title="Book Pete for your next event"
        text="Conferences, training days, community events and keynotes, in person or across borders."
        to={contactLinks.speaking}
        label="Enquire about speaking"
      />
    </>
  )
}
