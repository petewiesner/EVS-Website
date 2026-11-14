import { Link } from "react-router-dom"
import { ArrowRight, Boxes, Briefcase, MapPin, Mic, ShieldCheck, type LucideIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eyebrow } from "@/components/Eyebrow"
import { ContactSection } from "@/components/ContactSection"
import { BUSINESS, FOUNDER_NAME, routes } from "@/lib/site"
import bulb from "@/assets/Bulb.svg"
import headshot from "@/assets/pete-headshot.webp"

interface Topic {
  icon: LucideIcon
  title: string
  text: string
  to: string
}

/** Pete's four sections, in brief order. Distribution is dev-only (partnerships not public yet). */
const topics: Topic[] = [
  {
    icon: ShieldCheck,
    title: "Training",
    text: "In-person mental health crisis and de-escalation training for your front line.",
    to: routes.training,
  },
  {
    icon: Mic,
    title: "Public Speaking",
    text: "You Good? A raw, honest talk on first responder mental health and suicide awareness.",
    to: routes.speaking,
  },
  ...(import.meta.env.DEV
    ? [
        {
          icon: Boxes,
          title: "Distribution",
          text: "Proven training technology for Canadian police and public safety agencies.",
          to: routes.distribution,
        },
      ]
    : []),
  {
    icon: Briefcase,
    title: "Consulting",
    text: "Strategic advice on crisis programs, security teams and public leadership.",
    to: routes.consulting,
  },
]

function TopicCard({ icon: Icon, title, text, to }: Topic) {
  return (
    <Link
      to={to}
      className="group flex gap-4 rounded-2xl border bg-background p-5 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="flex items-center gap-1 font-semibold">
          {title}
          <ArrowRight className="size-4 text-brand transition-transform group-hover:translate-x-1" />
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{text}</p>
      </div>
    </Link>
  )
}

/** The bulb in the centre with the topics evenly spaced around it (stacked list on small screens). */
function TopicHub() {
  const n = topics.length
  const start = -90 - 180 / n // 3 topics: top-left, top-right, bottom. 4: the four corners.
  return (
    <>
      <div className="relative mx-auto hidden h-[540px] max-w-5xl lg:block">
        <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-brand/20" />
        <div className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/20 blur-2xl" />
        <img
          src={bulb}
          alt=""
          className="absolute left-1/2 top-1/2 h-44 -translate-x-1/2 -translate-y-1/2"
        />
        {topics.map((t, i) => {
          // With 4, swap the bottom two so the cards read left-to-right in brief order.
          const slot = n === 4 && i >= 2 ? 5 - i : i
          const a = ((start + (360 / n) * slot) * Math.PI) / 180
          return (
            <div
              key={t.title}
              className="absolute w-80 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${50 + 36 * Math.cos(a)}%`, top: `${50 + 40 * Math.sin(a)}%` }}
            >
              <TopicCard {...t} />
            </div>
          )
        })}
      </div>
      <div className="grid gap-4 lg:hidden">
        <img src={bulb} alt="" className="mx-auto mb-2 h-28" />
        {topics.map((t) => (
          <TopicCard key={t.title} {...t} />
        ))}
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <title>EVS Solutions | Mental Health Crisis Training & Speaking in Ontario</title>

      <section className="relative overflow-hidden">
        <div className="absolute -right-32 -top-32 size-[28rem] rounded-full bg-brand-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 pb-8 pt-20 text-center md:pt-24">
          <Badge variant="outline" className="mb-6 border-brand/30 text-brand">
            <MapPin className="text-brand-accent" /> {BUSINESS.city}, {BUSINESS.province}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-brand-ink md:text-5xl lg:text-6xl">
            30 years on the front line, <span className="text-brand">now working for yours.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Retired Hamilton Police Sergeant {FOUNDER_NAME} helps frontline teams handle mental health crises safely and
            with compassion.
          </p>
        </div>
      </section>

      <section id="services" className="scroll-mt-16 pb-20 pt-4">
        <div className="mx-auto max-w-6xl px-4">
          <TopicHub />
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 md:grid-cols-[1fr_2fr]">
          <img
            src={headshot}
            alt={`${FOUNDER_NAME}, founder of EVS Solutions`}
            className="mx-auto aspect-square w-56 rounded-2xl object-cover shadow-lg"
          />
          <div>
            <Eyebrow>Meet the founder</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">{FOUNDER_NAME}</h2>
            <p className="mt-3 text-muted-foreground">
              CIT International Master Trainer, Laurier MHCR cadre instructor and recognized subject matter expert in
              mental health and de-escalation. Pete has trained thousands of frontline professionals and spoken to
              audiences across North America and Europe.
            </p>
            <Link to={routes.about} className={buttonVariants({ variant: "outline", className: "mt-6" })}>
              About Pete <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
