import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/stories")({
  head: () => ({ meta: [
    { title: "News & Stories — 54 Global Afrikan" },
    { name: "description", content: "Meet Faith, Mama Jane, Brian, and hundreds more whose lives are being transformed across Kenya. Real stories, real change." },
  ]}),
  component: Stories,
});

const stories = [
  { n: "Faith", tag: "Sponsored Student", c: "An orphan whose education at Hallel School has inspired her dream of becoming a doctor.", t: "green" as const },
  { n: "Mama Jane", tag: "Widow Entrepreneur", c: "Received a sewing machine and now supports her family through tailoring.", t: "gold" as const },
  { n: "Brian", tag: "Former Street Child", c: "Returned to school and now hopes to become an engineer.", t: "earth" as const },
  { n: "Grace", tag: "Widow Cooperative", c: "Leads a group of ten widows running a poultry business in Kajiado.", t: "green" as const },
  { n: "David", tag: "Youth Leader", c: "From gang life to leading a youth football and mentorship programme.", t: "earth" as const },
  { n: "Amina", tag: "Sponsored Student", c: "First in her class three terms in a row. Wants to be a teacher.", t: "gold" as const },
];

function Stories() {
  return (
    <>
      <PageHero eyebrow="News & Stories" title="Real people. Real transformation." description="Every gift, every prayer, every hour of volunteer time becomes a story of restored hope. Meet some of the people your generosity touches." photoLabel="Faces of transformation" tone="gold" />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <article key={s.n} className="group">
              <PlaceholderImage label={s.n} aspect="portrait" tone={s.t} />
              <div className="mt-5">
                <div className="text-xs uppercase tracking-wider text-accent font-medium">{s.tag}</div>
                <h3 className="mt-1 font-serif text-2xl">Meet {s.n}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.c}</p>
                <Button variant="link" className="mt-2 px-0">Read full story →</Button>
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
