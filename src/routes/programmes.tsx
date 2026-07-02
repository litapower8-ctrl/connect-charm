import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/programmes")({
  head: () => ({ meta: [
    { title: "Our Programmes — 54 Global Afrikan" },
    { name: "description", content: "Education, feeding, widow empowerment, sponsorship, housing, water, agriculture, women's economic empowerment, and church outreach across Kenya." },
    { property: "og:title", content: "Programmes — 54 Global Afrikan" },
    { property: "og:description", content: "Nine long-running community transformation programmes with measurable outcomes." },
  ]}),
  component: Programmes,
});

const list = [
  { e: "📚", t: "Education for Every Child", b: "School fees, uniforms, meals, and mentorship for children who would otherwise be out of school. Delivered through Hallel School and partner schools across Kenya." },
  { e: "🍲", t: "Feed a Family", b: "Monthly food parcels — maize flour, cooking oil, beans, rice, sanitary items — for widows and vulnerable households in urban and rural Kenya." },
  { e: "❤️", t: "Widow Empowerment", b: "Skills training in tailoring, catering, agriculture and small business, plus seed capital, counselling and a cooperative community." },
  { e: "👶", t: "Child Sponsorship", b: "Monthly sponsorship pairing a child with a caring donor for education, health, spiritual formation and dignity." },
  { e: "🏠", t: "Build a Better Home", b: "Safe, affordable housing and land access for vulnerable families in partnership with Sinap Properties." },
  { e: "💧", t: "Clean Water Initiative", b: "Boreholes, water tanks and purification systems for schools and communities without access to safe water." },
  { e: "🌱", t: "Sustainable Agriculture", b: "Seeds, tools, training and market access for smallholder farming families building food security." },
  { e: "👩", t: "Women's Economic Empowerment", b: "Business cooperatives, financial literacy, and market access for women entrepreneurs." },
  { e: "🙏", t: "Church & Community Outreach", b: "Medical camps, discipleship, worship gatherings, and community transformation through the local church." },
];

function Programmes() {
  return (
    <>
      <PageHero eyebrow="Our Programmes" title="Nine programmes. One mission: whole-life transformation." description="Every programme is designed for long-term impact — measurable, transparent, and rooted in local community and church." photoLabel="Programme collage" tone="earth" />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {list.map((p) => (
            <article key={p.t} className="bg-card border border-border rounded-xl overflow-hidden">
              <PlaceholderImage label={p.t} aspect="video" tone="green" className="rounded-none" />
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-accent font-medium mb-3"><span className="text-lg">{p.e}</span> Programme</div>
                <h3 className="font-serif text-2xl">{p.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.b}</p>
                <div className="mt-6 flex gap-3">
                  <Button asChild size="sm"><Link to="/donate">Support this programme</Link></Button>
                  <Button asChild variant="outline" size="sm"><Link to="/stories">Read stories</Link></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTABand />
      <div className="h-20" />
    </>
  );
}
