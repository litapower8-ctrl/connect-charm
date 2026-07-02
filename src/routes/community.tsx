import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [
    { title: "Community Programmes — 54 Global Afrikan" },
    { name: "description", content: "Medical outreach, clean-up campaigns, discipleship, community gatherings, and church partnerships across Kenya." },
  ]}),
  component: Community,
});

function Community() {
  return (
    <>
      <PageHero eyebrow="Community Programmes" title="Serving neighbourhoods, block by block." description="Medical camps, community clean-ups, holiday feeding, youth conferences and church partnerships that root transformation in the local community." photoLabel="Community medical camp" tone="green" />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Medical Outreach Camps", b: "Free clinics offering primary care, dental, eye and maternal health." },
            { t: "Community Clean-Up Days", b: "Neighbourhood clean-ups, tree planting, waste management education." },
            { t: "Youth Conferences", b: "Leadership, faith and career development for teens and young adults." },
            { t: "Holiday Feeding", b: "Christmas and Easter meal programmes for street families and orphanages." },
            { t: "Prayer & Worship Nights", b: "Community-wide gatherings for prayer, worship and encouragement." },
            { t: "Local Church Partnerships", b: "Training and resourcing pastors and lay leaders across Kenya." },
          ].map((c, i) => (
            <div key={c.t} className="bg-card border border-border rounded-xl overflow-hidden">
              <PlaceholderImage label={c.t} aspect="video" tone={i % 2 === 0 ? "green" : "gold"} className="rounded-none" />
              <div className="p-6">
                <h3 className="font-serif text-xl">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.b}</p>
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
