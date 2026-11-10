import { Link } from "react-router-dom"
import {
  ArrowRight,
  Award,
  Boxes,
  Factory,
  HandHeart,
  Handshake,
  Lightbulb,
  MapPin,
  Mic,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eyebrow } from "@/components/Eyebrow"
import { ContactSection } from "@/components/ContactSection"
import { ProcurementSignals } from "@/components/ProcurementSignals"
import { Testimonials } from "@/components/Testimonials"
import { BUSINESS, contactLinks, routes } from "@/lib/site"
import { manufacturers } from "@/lib/manufacturers"
import logo from "@/assets/Logo.svg"
import bulb from "@/assets/Bulb.svg"

const trainingServices = [
  {
    icon: ShieldCheck,
    title: "De-Escalation Training",
    text: "Practical crisis intervention training, based on the Memphis Model, that prepares frontline professionals for real-world crisis situations.",
    to: routes.deEscalation,
  },
  {
    icon: Mic,
    title: "Speaking Engagements",
    text: "Authentic, experience-driven talks on trauma, resilience and mental health for conferences, agencies and communities.",
    to: routes.speaking,
  },
  {
    icon: Handshake,
    title: "Policing Consulting",
    text: "Guidance on policing transformation, mental health response and community partnerships, including CSPA compliance.",
    to: "/#approach",
  },
]

const approach = [
  {
    n: "01",
    icon: ShieldCheck,
    title: "Policing Transformation",
    text: "We work closely with police services to implement progressive strategies that build trust, enhance accountability and promote community-oriented policing. From procedural reforms to training initiatives, we help agencies adapt to modern challenges while upholding the highest standards of professionalism and integrity.",
    note: "Ontario's Community Safety and Policing Act (CSPA) came into force on April 1, 2024, and changed key legislation. We help services understand the new requirements and build a tailored plan for compliance.",
  },
  {
    n: "02",
    icon: HandHeart,
    title: "Mental Health Support",
    text: "Recognizing the complex relationship between law enforcement and mental health, we provide training and resources that equip frontline workers to interact effectively with individuals in crisis. Our evidence-based programs promote empathy, de-escalation and collaboration for positive outcomes for officers and community members alike.",
  },
  {
    n: "03",
    icon: Users,
    title: "Community Partnerships",
    text: "Strong partnerships create safer, more resilient communities. Through strategic collaboration with government agencies, nonprofits and advocacy groups, we facilitate meaningful dialogue, identify shared goals and develop sustainable solutions that address the root causes of crime and social inequality.",
  },
]

const reasons = [
  { icon: Award, title: "Real-world policing experience", text: "Expertise across policing, crisis response, and community engagement." },
  { icon: Target, title: "Customized support", text: "Training and strategies tailored to your organization's realities." },
  { icon: MapPin, title: "Canadian and local", text: `An ${BUSINESS.province}-based partner who understands Canadian policing and procurement.` },
  { icon: Lightbulb, title: "One point of contact", text: "Training expertise and technology supply from the same trusted partner." },
]

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute -right-32 -top-32 size-[28rem] rounded-full bg-brand-accent/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 size-[28rem] rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Badge variant="outline" className="mb-6 border-brand/30 text-brand">
            <MapPin className="text-brand-accent" /> {BUSINESS.city}, {BUSINESS.province} • Serving agencies across Canada
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-brand-ink md:text-5xl lg:text-6xl">
            De-escalation training and <span className="text-brand">police technology</span> for Canadian agencies.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            EVS Solutions delivers mental health and de-escalation training, speaking and policing consulting, and is the
            Canadian distribution partner for police training technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/#training" className={buttonVariants({ size: "lg" })}>
              Training and consulting <ArrowRight />
            </Link>
            <Link to={routes.technology} className={buttonVariants({ size: "lg", variant: "outline" })}>
              Police technology
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={logo} alt="EVS Solutions: Forward Together" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  )
}

function Training() {
  return (
    <section id="training" className="scroll-mt-16 bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <Eyebrow>Training and consulting</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Expertise where policing meets mental health</h2>
          <p className="mt-4 text-muted-foreground">
            We understand the critical intersection between policing, mental health, and community engagement, and offer
            practical solutions for law enforcement agencies, mental health organizations, and communities.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trainingServices.map(({ icon: Icon, title, text, to }) => (
            <Link key={title} to={to} className="group">
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="size-6" />
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription className="text-base">{text}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto text-sm font-medium text-brand">
                  Learn more <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Technology() {
  return (
    <section id="technology" className="scroll-mt-16 bg-brand-ink py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow light>Police technology distribution</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">A Canadian home for proven police technology</h2>
            <p className="mt-4 text-white/70">
              Many police technology companies have no Canadian footprint. EVS Solutions is their Canadian distribution
              partner, so agencies here can buy locally, through formal quotes and purchase orders, with a Canadian
              contact for setup and support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={routes.technology} className={buttonVariants({ size: "lg", variant: "secondary" })}>
                View technology <ArrowRight />
              </Link>
              <Link to={contactLinks.quote} className={buttonVariants({ size: "lg", variant: "outline", className: "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white" })}>
                Request a quote
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {manufacturers.map((m) => (
              <Link key={m.id} to={`${routes.technology}#${m.id}`} className="group flex gap-4 rounded-xl bg-white/5 p-5 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                <Boxes className="mt-0.5 size-6 shrink-0 text-brand-accent" />
                <div>
                  <p className="font-semibold">{m.name}{m.shortName ? ` (${m.shortName})` : ""}</p>
                  <p className="mt-1 text-sm text-white/70">{m.summary}</p>
                </div>
                <ArrowRight className="ml-auto size-5 shrink-0 self-center text-white/50 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
            <Link to={contactLinks.manufacturer} className="group flex gap-4 rounded-xl border border-dashed border-white/20 p-5 transition-colors hover:bg-white/5">
              <Factory className="mt-0.5 size-6 shrink-0 text-white/60" />
              <div>
                <p className="font-semibold">Manufacturers</p>
                <p className="mt-1 text-sm text-white/70">Looking for a Canadian distribution partner? Let's talk.</p>
              </div>
              <ArrowRight className="ml-auto size-5 shrink-0 self-center text-white/50 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section id="approach" className="scroll-mt-16 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Collaborative. Practical. Human-centred.</h2>
          <p className="mt-4 text-muted-foreground">
            Our focus is always on practical implementation, ensuring the work we do together leads to measurable
            improvements and long-term impact.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {approach.map(({ n, icon: Icon, title, text, note }) => (
            <div key={n} className="flex flex-col border-t-2 border-brand-accent pt-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-brand">{n}</span>
                <Icon className="size-5 text-brand" />
              </div>
              <h3 className="mt-2 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              {note && <p className="mt-4 rounded-md bg-brand-accent/15 p-3 text-sm text-brand-ink">{note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section id="why" className="scroll-mt-16 bg-muted/40 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-[1fr_2fr]">
        <img src={bulb} alt="" className="mx-auto h-48 w-auto md:h-64" />
        <div>
          <Eyebrow>Why choose EVS Solutions?</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Experience you can trust</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <Icon className="mt-0.5 size-6 shrink-0 text-brand" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to={routes.about} className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline">
            About EVS Solutions <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Procurement() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Eyebrow>Buying from EVS Solutions</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Built for public-sector procurement</h2>
        <ProcurementSignals className="mt-8" />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <title>EVS Solutions | De-Escalation Training & Police Technology in Canada</title>
      <Hero />
      <Training />
      <Technology />
      <Approach />
      <Why />
      <Testimonials />
      <Procurement />
      <ContactSection />
    </>
  )
}
