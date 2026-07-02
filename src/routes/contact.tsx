import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us — 54 Global Afrikan" },
    { name: "description", content: "Get in touch with 54 Global Afrikan Incorporated. Nairobi, Kenya. Email, phone, WhatsApp, and general enquiries." },
  ]}),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." description="Questions about sponsorship, volunteering, partnership, or a specific programme? Reach out and we'll be in touch within one business day." photoLabel="Contact team" tone="gold" />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <form className="bg-card border border-border rounded-xl p-8 space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Message sent. We'll be in touch soon."); }}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2"><Label htmlFor="n">Name</Label><Input id="n" required maxLength={120} /></div>
              <div className="grid gap-2"><Label htmlFor="e">Email</Label><Input id="e" type="email" required maxLength={255} /></div>
            </div>
            <div className="grid gap-2"><Label htmlFor="s">Subject</Label><Input id="s" required maxLength={120} /></div>
            <div className="grid gap-2"><Label htmlFor="m">Message</Label><Textarea id="m" rows={6} required maxLength={1500} /></div>
            <Button type="submit" size="lg">Send Message</Button>
          </form>

          <div className="space-y-4">
            {[
              { i: MapPin, t: "Nairobi Office", d: "54 Global Afrikan HQ, Nairobi, Kenya" },
              { i: Mail, t: "Email", d: "hello@54globalafrikan.org" },
              { i: Phone, t: "Phone", d: "+254 700 000 000" },
              { i: MessageCircle, t: "WhatsApp", d: "Chat with our support team" },
            ].map((c) => (
              <div key={c.t} className="bg-card border border-border rounded-xl p-6 flex gap-4">
                <span className="h-11 w-11 shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center"><c.i className="h-5 w-5" /></span>
                <div><h3 className="font-serif text-lg">{c.t}</h3><p className="mt-1 text-sm text-muted-foreground">{c.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="h-20" />
    </>
  );
}
