import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";

export const Route = createFileRoute("/impact")({
  head: () => ({ meta: [
    { title: "Our Impact — 54 Global Afrikan" },
    { name: "description", content: "15,000+ lives impacted, 1,500+ children supported, 350+ widows empowered. Live impact dashboard and project map across Kenya." },
    { property: "og:title", content: "Our Impact — 54 Global Afrikan" },
    { property: "og:description", content: "Live impact metrics, project locations, and stories of transformation across Kenya." },
  ]}),
  component: Impact,
});

const bigStats = [
  { v: "15,000+", l: "Lives Impacted" },
  { v: "1,500+", l: "Children Supported" },
  { v: "350+", l: "Widows Empowered" },
  { v: "45", l: "Community Projects" },
  { v: "12", l: "Schools Supported" },
  { v: "250+", l: "Active Volunteers" },
  { v: "94%", l: "Programme Spend" },
  { v: "8 yrs", l: "Serving Kenya" },
];

function Impact() {
  return (
    <>
      <PageHero eyebrow="Our Impact" title="Real numbers. Real communities. Real transformation." description="Every statistic represents a name, a story, and a life restored. Explore our live impact dashboard and see where your generosity is at work across Kenya." photoLabel="Community celebration" tone="gold" />

      <Section eyebrow="Impact Dashboard" title="Live metrics from the field.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bigStats.map((s) => (
            <div key={s.l} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="font-serif text-3xl md:text-4xl text-primary font-semibold">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Where We Work" title="Projects across Kenya." muted>
        <PlaceholderImage label="Interactive project map · Nairobi, Kisumu, Mombasa, Eldoret, rural communities" aspect="wide" tone="green" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { r: "Nairobi", n: "Headquarters, Hallel School, Praise Church, widow programmes" },
            { r: "Central Kenya", n: "Rural schools, clean water, agriculture" },
            { r: "Coastal & Western", n: "Medical outreach, church partnerships, sponsorship" },
          ].map((r) => (
            <div key={r.r} className="bg-card border border-border rounded-xl p-6">
              <div className="font-serif text-xl">{r.r}</div>
              <p className="mt-2 text-sm text-muted-foreground">{r.n}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Before & After" title="What transformation looks like.">
        <div className="grid gap-8 md:grid-cols-2">
          {["Classroom rebuild · Kajiado","Widow tailoring cooperative · Kibera","Clean water borehole · Machakos","Family home rebuild · Kiambu"].map((c, i) => (
            <div key={c} className="grid grid-cols-2 gap-3">
              <PlaceholderImage label={`Before · ${c}`} tone="earth" />
              <PlaceholderImage label={`After · ${c}`} tone={i % 2 === 0 ? "green" : "gold"} />
              <div className="col-span-2 text-sm font-medium">{c}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
      <div className="h-20" />
    </>
  );
}
