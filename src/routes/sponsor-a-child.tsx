import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { Button } from "@/components/ui/button";
import { Heart, Check } from "lucide-react";

export const Route = createFileRoute("/sponsor-a-child")({
  head: () => ({ meta: [
    { title: "Sponsor a Child — 54 Global Afrikan" },
    { name: "description", content: "For $30 a month you provide education, meals, uniforms, healthcare and hope to a vulnerable child in Kenya. Sponsor a child today." },
    { property: "og:title", content: "Sponsor a Child · $30/month" },
    { property: "og:description", content: "Change a child's life through monthly sponsorship." },
  ]}),
  component: Sponsor,
});

const children = [
  { n: "Faith, 11", d: "Loves science and dreams of becoming a doctor.", t: "green" as const },
  { n: "Brian, 13", d: "A former street child now excelling in maths.", t: "earth" as const },
  { n: "Amina, 9", d: "Reader and artist, first in her class this term.", t: "gold" as const },
  { n: "David, 14", d: "A young leader passionate about football and faith.", t: "green" as const },
  { n: "Grace, 8", d: "Curious, kind, and full of laughter.", t: "gold" as const },
  { n: "Samuel, 12", d: "An aspiring engineer who loves to build.", t: "earth" as const },
];

function Sponsor() {
  return (
    <>
      <PageHero eyebrow="Child Sponsorship Programme" title="$30 a month. One child. A lifetime of change." description="Your monthly sponsorship provides education, meals, uniforms, healthcare, counselling, and personal connection through progress reports, photographs, and letters." photoLabel="Sponsored child" tone="gold">
        <Button asChild size="lg" className="gap-2"><Link to="/donate"><Heart className="h-4 w-4" /> Sponsor Now</Link></Button>
        <Button asChild size="lg" variant="outline"><Link to="/stories">Read sponsor stories</Link></Button>
      </PageHero>

      <Section eyebrow="What's Included" title="Every sponsorship covers eight essentials.">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {["Education","School meals","Uniforms","Healthcare","Counselling","Progress reports","Photographs","Personal letters"].map((i) => (
            <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
              <span className="h-8 w-8 grid place-items-center rounded-full bg-primary/10 text-primary"><Check className="h-4 w-4" /></span>
              <span className="font-medium">{i}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Meet Some Children" title="Children waiting for a sponsor." muted>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {children.map((c) => (
            <div key={c.n} className="bg-card border border-border rounded-xl overflow-hidden">
              <PlaceholderImage label={c.n} aspect="portrait" tone={c.t} className="rounded-none" />
              <div className="p-6">
                <h3 className="font-serif text-xl">{c.n}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                <Button asChild className="mt-4 w-full"><Link to="/donate">Sponsor {c.n.split(",")[0]}</Link></Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
      <div className="h-20" />
    </>
  );
}
