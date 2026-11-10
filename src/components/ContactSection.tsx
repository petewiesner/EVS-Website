import { useState, type FormEvent } from "react"
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { DevNote } from "@/components/DevNote"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Eyebrow } from "@/components/Eyebrow"
import { BUSINESS, EMAIL, PRIVACY_POLICY, contactTopics } from "@/lib/site"

export function ContactSection({ defaultSubject = "" }: { defaultSubject?: string }) {
  // /contact?topic=quote etc. prefills the subject line
  const [params] = useSearchParams()
  const subject = contactTopics[params.get("topic") ?? ""] ?? defaultSubject
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const sent = status === "sent"
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY)
    data.append("from_name", "EVS Solutions Website")
    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
      const json = await res.json()
      if (!json.success) throw new Error(json.message)
      form.reset()
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Let's start the conversation</h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're looking for specialized training, a keynote speaker, strategic guidance, a product demo or a
            formal quote, EVS Solutions is ready to partner with you.
          </p>
          <div className="mt-8 space-y-4 text-sm font-medium">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-brand">
              <Mail className="size-5 text-brand" /> {EMAIL}
            </a>
            {BUSINESS.phone && (
              <a href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-3 hover:text-brand">
                <Phone className="size-5 text-brand" /> {BUSINESS.phone}
              </a>
            )}
            <p className="flex items-center gap-3">
              <MapPin className="size-5 text-brand" /> {BUSINESS.city}, {BUSINESS.province}
            </p>
            {!BUSINESS.phone && <DevNote>add your phone number in lib/site.ts (BUSINESS.phone).</DevNote>}
          </div>
        </div>
        <Card>
          <CardContent>
            {sent ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto size-10 text-brand" />
                <p className="mt-4 font-medium">Thanks! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" name="email" type="email" required placeholder="user@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company name (optional)</Label>
                    <Input id="company" name="company" placeholder="e.g. EVS Solutions" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number (optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="e.g. (000) 000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" required placeholder="e.g. Inquiry" key={subject} defaultValue={subject} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} required placeholder="Enter your message here..." />
                </div>
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" required className="size-4 accent-[#0073cc]" />
                  I agree to the{" "}
                  <a href={PRIVACY_POLICY} target="_blank" className="underline hover:text-brand">privacy policy</a>
                </label>
                {status === "error" && (
                  <p className="text-sm text-destructive">Something went wrong. Please try again or email us at {EMAIL}.</p>
                )}
                <Button type="submit" className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Submit"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
