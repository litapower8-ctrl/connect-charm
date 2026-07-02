import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us — 54 Global Afrikan" },
    { name: "description", content: "A Christian community transformation movement built on faith, education, enterprise, and service — restoring hope across Kenya." },
    { property: "og:title", content: "About 54 Global Afrikan" },
    { property: "og:description", content: "A movement of churches, schools, foundations, and enterprises transforming communities across Kenya." },
  ]}),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A movement of hope for Africa's next generation." description="54 Global Afrikan Incorporated is a family of Christian organizations working together to transform vulnerable communities across Kenya through education, faith, enterprise, and humanitarian service." photoLabel="Founders and community leaders" />

      <Section eyebrow="Our Story" title="From a single congregation to a nationwide movement.">
        <div className="grid gap-10 lg:grid-cols-2 text-lg text-muted-foreground leading-relaxed">
          <p>What began as a local church committed to serving the vulnerable has grown into an ecosystem of organizations: a church, a school, a foundation, a real estate arm, and a missions & tours company — each carrying part of the mandate.</p>
          <p>Today, our combined work reaches over fifteen thousand lives every year. We believe transformation happens when the gospel, education, economic opportunity, and dignity meet in the life of one person, one family, and one community at a time.</p>
        </div>
      </Section>

      <Section eyebrow="What We Believe" title="Four convictions shape everything we do." muted>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Faith", b: "The gospel of Jesus Christ is the foundation of lasting transformation." },
            { t: "Dignity", b: "Every child, widow, and family bears the image of God and deserves opportunity." },
            { t: "Excellence", b: "Poverty deserves world-class solutions — education, enterprise, and care." },
            { t: "Community", b: "Change is sustainable when it is rooted in local church and local leadership." },
          ].map((v) => (
            <div key={v.t} className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-serif text-xl font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Led by pastors, educators, and community builders.">
        <div className="grid gap-8 md:grid-cols-3">
          {["Founder & President","Executive Director","Programmes Director"].map((role, i) => (
            <div key={role}>
              <PlaceholderImage label={role} aspect="portrait" tone={i === 0 ? "green" : i === 1 ? "gold" : "earth"} />
              <div className="mt-4">
                <div className="text-xs uppercase tracking-wider text-accent font-medium">{role}</div>
                <div className="mt-1 font-serif text-xl">Leader Name</div>
                <p className="mt-2 text-sm text-muted-foreground">Short biography and calling to serve the vulnerable across Kenya.</p>
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
