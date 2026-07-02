import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/ui/button";
import { FileText, LineChart, Video, MapPin, Image, Users, Mail, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/transparency")({
  head: () => ({ meta: [
    { title: "Transparency & Accountability — 54 Global Afrikan" },
    { name: "description", content: "Annual reports, audited accounts, GPS project locations, video updates, and beneficiary testimonials. Full transparency for every donor." },
    { property: "og:title", content: "Transparency Centre" },
    { property: "og:description", content: "Everything open, everything traceable." },
  ]}),
  component: Transparency,
});

const pillars = [
  { i: FileText, t: "Annual Reports", d: "Full impact and programme reporting, published every year." },
  { i: LineChart, t: "Audited Financials", d: "Independent annual audit with certified statements." },
  { i: Image, t: "Project Photographs", d: "Before-and-after documentation of every major project." },
  { i: Video, t: "Video Updates", d: "Regular field videos from programme leaders." },
  { i: MapPin, t: "GPS Project Locations", d: "Every project pinned and publicly viewable on our map." },
  { i: Users, t: "Beneficiary Testimonials", d: "First-person stories from the people your gifts serve." },
  { i: Mail, t: "Monthly Newsletters", d: "Impact updates delivered to every donor's inbox." },
  { i: ShieldCheck, t: "Donor Bill of Rights", d: "Your rights as a supporter, in plain language." },
];

function Transparency() {
  return (
    <>
      <PageHero eyebrow="Transparency & Accountability" title="Nothing to hide. Everything to share." description="International donors deserve international standards. Our transparency centre gives you the full picture — financial, operational, and human." photoLabel="Open ledger, community meeting" tone="green" />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.t} className="bg-card border border-border rounded-xl p-6">
              <span className="h-11 w-11 rounded-full bg-primary/10 text-primary grid place-items-center"><p.i className="h-5 w-5" /></span>
              <h3 className="mt-4 font-serif text-lg">{p.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Where Every Dollar Goes" title="94¢ of every dollar reaches programmes." muted>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { pct: "94%", l: "Programmes" },
            { pct: "4%", l: "Administration" },
            { pct: "2%", l: "Fundraising" },
          ].map((s) => (
            <div key={s.l} className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="font-serif text-5xl text-primary">{s.pct}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center"><Button asChild><Link to="/annual-reports">See full financials</Link></Button></div>
      </Section>

      <CTABand />
      <div className="h-20" />
    </>
  );
}
