import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { Button } from "@/components/ui/button";

const orgs: Record<string, { name: string; type: string; tagline: string; description: string; details: string[]; }> = {
  "praise-church-nairobi": {
    name: "Praise Church Nairobi",
    type: "Christian Church",
    tagline: "A house of worship, discipleship, and community transformation.",
    description: "Praise Church Nairobi is the spiritual heart of the 54 Global Afrikan movement — a vibrant Christian community where families gather for worship, discipleship, and to serve the vulnerable in Nairobi and beyond.",
    details: ["Sunday services and midweek ministries","Discipleship and leadership training","Weddings, baby dedications, and pastoral care","Community outreach and medical camps","Church planting across Kenya"],
  },
  "hallel-school-nairobi": {
    name: "Hallel School Nairobi",
    type: "Christian School",
    tagline: "Where vulnerable children discover their God-given potential.",
    description: "Hallel School is a Christ-centred school offering quality education to sponsored, orphaned, and vulnerable children alongside fee-paying students — creating a diverse, faith-shaped learning community.",
    details: ["Pre-primary through secondary education","Boarding facilities for orphaned students","Character formation and biblical worldview","Meals, healthcare, uniforms and books","Sports, music, and creative arts programmes"],
  },
  "sinap-properties": {
    name: "Sinap Properties",
    type: "Housing & Land",
    tagline: "Dignified homes and affordable land for Kenyan families.",
    description: "Sinap Properties delivers safe, affordable housing and access to land — enabling vulnerable families to own homes and giving diaspora Kenyans a trusted partner to invest back home.",
    details: ["Affordable housing developments","Land parcels for families and diaspora","Community-integrated design","Ethical, transparent transactions","Partnerships with the Build a Better Home programme"],
  },
  "praise-adventures-tours": {
    name: "Praise Adventures & Tours",
    type: "Missions & Travel",
    tagline: "Travel that connects the world to the work.",
    description: "Praise Adventures & Tours organizes mission trips, pilgrimages, and cultural travel — connecting international friends to Kenya and enabling Kenyans to encounter the wider Church.",
    details: ["Short-term mission trips","Kenya safari and heritage tours","Pilgrimages to the Holy Land","Youth and church group travel","Group logistics, visas, and hospitality"],
  },
  "54-global-foundation": {
    name: "54 Global Foundation",
    type: "Humanitarian Foundation",
    tagline: "The charitable engine of the movement.",
    description: "54 Global Foundation is the registered charitable arm — receiving and stewarding donations, running the child sponsorship programme, and delivering humanitarian relief and community projects at scale.",
    details: ["Child sponsorship programme","Emergency food and medical relief","Widow and orphan care","Grants to partner ministries","Donor stewardship and transparency reporting"],
  },
};

export const Route = createFileRoute("/organizations/$slug")({
  loader: ({ params }) => {
    const org = orgs[params.slug];
    if (!org) throw notFound();
    return org;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.name} — 54 Global Afrikan` },
      { name: "description", content: loaderData.tagline },
      { property: "og:title", content: loaderData.name },
      { property: "og:description", content: loaderData.tagline },
    ] : [],
  }),
  component: OrgPage,
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="font-serif text-4xl">Organization not found</h1>
      <Button asChild className="mt-6"><Link to="/organizations">Back to organizations</Link></Button>
    </div>
  ),
  errorComponent: () => <div className="container-page py-32">Something went wrong.</div>,
});

function OrgPage() {
  const org = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={org.type} title={org.name} description={org.tagline} photoLabel={org.name} tone="green" />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{org.description}</p>
            <ul className="space-y-3 text-base">
              {org.details.map((d: string) => (
                <li key={d} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> {d}</li>
              ))}
            </ul>
            <div className="pt-2 flex gap-3">
              <Button asChild><Link to="/donate">Support this work</Link></Button>
              <Button asChild variant="outline"><Link to="/contact">Get in touch</Link></Button>
            </div>
          </div>
          <div className="space-y-4">
            <PlaceholderImage label={`${org.name} · community`} aspect="portrait" tone="gold" />
            <PlaceholderImage label={`${org.name} · daily life`} aspect="video" tone="earth" />
          </div>
        </div>
      </Section>

      <CTABand />
      <div className="h-20" />
    </>
  );
}
