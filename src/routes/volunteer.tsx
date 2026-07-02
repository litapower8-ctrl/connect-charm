import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Stethoscope, GraduationCap, Church, Hammer, Cpu, Users2, Camera, Heart, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/volunteer")({
  head: () => ({ meta: [
    { title: "Volunteer With Us — 54 Global Afrikan" },
    { name: "description", content: "Doctors, teachers, pastors, builders, media, counsellors — Kenya needs your gifts. Volunteer with 54 Global Afrikan today." },
  ]}),
  component: Volunteer,
});

const roles = [
  { i: Stethoscope, t: "Medical Professionals", d: "Doctors, nurses, dentists for community camps." },
  { i: GraduationCap, t: "Teachers", d: "Curriculum, tutoring, teacher training." },
  { i: Church, t: "Pastors", d: "Preaching, discipleship, pastoral care." },
  { i: Hammer, t: "Builders", d: "Classroom, borehole and home construction." },
  { i: Cpu, t: "ICT Specialists", d: "Computer labs, staff systems, digital literacy." },
  { i: Users2, t: "Social Workers", d: "Family support, child welfare, counselling." },
  { i: Camera, t: "Media & Photographers", d: "Storytelling, documentation, video." },
  { i: HeartHandshake, t: "Mission Teams", d: "Short-term church and campus teams." },
  { i: Heart, t: "Counsellors", d: "Trauma care for widows, orphans, youth." },
];

function Volunteer() {
  return (
    <>
      <PageHero eyebrow="Volunteer With Us" title="Bring your skills. Change a life." description="Whether you have a week or a year, your gifts can transform lives. We host international and local volunteers across every programme." photoLabel="Volunteers in Kenya" tone="green" />

      <Section eyebrow="Roles" title="Where you can serve.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <div key={r.t} className="bg-card border border-border rounded-xl p-6 flex gap-4">
              <span className="h-11 w-11 shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center"><r.i className="h-5 w-5" /></span>
              <div>
                <h3 className="font-serif text-lg font-semibold">{r.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Apply" title="Tell us about yourself." muted>
        <form className="grid gap-5 max-w-2xl bg-card border border-border rounded-xl p-8" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch soon."); }}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2"><Label htmlFor="fn">First name</Label><Input id="fn" required maxLength={80} /></div>
            <div className="grid gap-2"><Label htmlFor="ln">Last name</Label><Input id="ln" required maxLength={80} /></div>
          </div>
          <div className="grid gap-2"><Label htmlFor="e">Email</Label><Input id="e" type="email" required maxLength={255} /></div>
          <div className="grid gap-2"><Label htmlFor="c">Country</Label><Input id="c" required maxLength={80} /></div>
          <div className="grid gap-2"><Label htmlFor="r">Role you're interested in</Label><Input id="r" required maxLength={120} /></div>
          <div className="grid gap-2"><Label htmlFor="m">Tell us about yourself</Label><Textarea id="m" rows={5} maxLength={1200} /></div>
          <Button type="submit" size="lg" className="justify-self-start">Submit Application</Button>
        </form>
      </Section>

      <CTABand />
      <div className="h-20" />
    </>
  );
}
