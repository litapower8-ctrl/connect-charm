import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/organizations/")({
  head: () => ({ meta: [
    { title: "Our Organizations — 54 Global Afrikan" },
    { name: "description", content: "Praise Church Nairobi, Hallel School, Sinap Properties, Praise Adventures & Tours, and 54 Global Foundation — one family, one mission." },
  ]}),
  component: Organizations,
});

const orgs = [
  { slug: "praise-church-nairobi", n: "Praise Church Nairobi", t: "Church", d: "A vibrant Christian community and the spiritual heart of the movement." },
  { slug: "hallel-school-nairobi", n: "Hallel School Nairobi", t: "Education", d: "A Christ-centred school where vulnerable and sponsored children thrive academically and spiritually." },
  { slug: "sinap-properties", n: "Sinap Properties", t: "Housing & Land", d: "Affordable housing, land access, and dignified homes for Kenyan families." },
  { slug: "praise-adventures-tours", n: "Praise Adventures & Tours", t: "Missions & Travel", d: "Mission trips, pilgrimages and travel that connect the world to the work in Kenya." },
  { slug: "54-global-foundation", n: "54 Global Foundation", t: "Humanitarian", d: "The charitable arm delivering emergency aid, sponsorship and programmes at scale." },
];

function Organizations() {
  return (
    <>
      <PageHero eyebrow="Our Organizations" title="One movement. Five organizations. A whole-life ecosystem." description="Church, school, foundation, housing and missions — each carrying a distinct part of the mandate, together forming a complete ecosystem of transformation." photoLabel="Ecosystem overview" tone="green" />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {orgs.map((o, i) => (
            <Link key={o.slug} to={`/organizations/$slug`} params={{ slug: o.slug }} className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-[var(--shadow-lift)] transition-shadow">
              <PlaceholderImage label={o.n} aspect="wide" tone={i % 2 === 0 ? "green" : i === 1 ? "gold" : "earth"} className="rounded-none" />
              <div className="p-7">
                <div className="text-xs uppercase tracking-wider text-accent font-medium">{o.t}</div>
                <h3 className="mt-2 font-serif text-2xl">{o.n}</h3>
                <p className="mt-3 text-muted-foreground">{o.d}</p>
                <div className="mt-5 text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">Visit organization <ArrowRight className="h-3.5 w-3.5" /></div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
      <div className="h-20" />
    </>
  );
}
