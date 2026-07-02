import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/partner")({
  head: () => ({ meta: [
    { title: "Partner With Us — 54 Global Afrikan" },
    { name: "description", content: "Churches, businesses, schools, foundations, embassies and NGOs — partner with a proven Kenyan movement transforming vulnerable communities." },
  ]}),
  component: Partner,
});

function Partner() {
  return (
    <>
      <PageHero eyebrow="Partnership Opportunities" title="Do more together than any of us could alone." description="We build long-term partnerships with churches, businesses, schools, foundations, embassies, mission organizations, and NGOs across the world." photoLabel="Partnership signing" tone="green" />

      <Section eyebrow="Who Partners With Us" title="A growing coalition of allies.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {["Churches","Businesses","Schools","Universities","Mission Organizations","Foundations","Embassies","NGOs","Individual Supporters"].map((p) => (
            <div key={p} className="bg-card border border-border rounded-xl p-6"><div className="font-serif text-lg">{p}</div></div>
          ))}
        </div>
      </Section>

      <Section eyebrow="How It Works" title="Three ways to build a partnership." muted>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Programme Sponsorship", d: "Fund a specific programme end-to-end — a school, borehole, widow cooperative, or feeding round." },
            { t: "Team Deployment", d: "Send your team on mission — medical, construction, teaching, media, or discipleship." },
            { t: "Strategic Alliance", d: "Multi-year partnership with joint planning, shared reporting, and shared branding." },
          ].map((p) => (
            <div key={p.t} className="bg-card border border-border rounded-xl p-7">
              <h3 className="font-serif text-xl">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10"><Button asChild size="lg">Become Our Partner</Button></div>
      </Section>

      <CTABand />
      <div className="h-20" />
    </>
  );
}
