import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Video, HandHeart, Heart, HandHelping, Globe2, Gift, ArrowRight } from "lucide-react";

type ExtraSection = { eyebrow?: string; title: string; blurb?: string; items: string[]; muted?: boolean };

type Hero = { title: string; subtitle?: string; ctas?: string[] };

type Org = {
  name: string;
  type: string;
  tagline: string;
  description: string;
  details: string[];
  themeQuote?: string;
  pageMenu?: string[];
  hero?: Hero;
  extraSections?: ExtraSection[];
  closingNote?: { title: string; body: string };
  welcome?: { heading: string; body: string };
  ministries?: string[];
  outreach?: string[];
  missions?: string[];
  give?: string[];
};

const orgs: Record<string, Org> = {
  "praise-church-nairobi": {
    name: "Praise Church Nairobi",
    type: "Christian Church",
    tagline: "A house of worship, discipleship, and community transformation.",
    description: "Praise Church Nairobi is the spiritual heart of the 54 Global Afrikan movement — a vibrant Christian community where families gather for worship, discipleship, and to serve the vulnerable in Nairobi and beyond.",
    details: ["Sunday services and midweek ministries", "Discipleship and leadership training", "Weddings, baby dedications, and pastoral care", "Community outreach and medical camps", "Church planting across Kenya"],
    welcome: {
      heading: "Welcome Home",
      body: "A church where everyone belongs.",
    },
    ministries: ["Children Ministry", "Youth Ministry", "Campus Ministry", "Men Fellowship", "Women's Fellowship", "Singles Ministry", "Couples Ministry", "Senior Adults", "Worship Team", "Media Team", "Ushering", "Intercessors", "Counselling Ministry", "Evangelism Team", "Community Care"],
    outreach: ["Food distribution", "Hospital ministry", "Prison ministry", "Street outreach", "School ministry", "Widow support", "Youth mentorship", "Drug rehabilitation", "Medical camps", "Disaster response", "Community clean-up"],
    missions: ["Support missionaries", "Mission trips", "Plant churches", "Train pastors", "Sponsor evangelism", "Support rural churches"],
    give: ["Tithes", "Offering", "Building Fund", "Mission Fund", "Feed the Hungry", "Sponsor a Widow", "Sponsor a Child", "Pastors Support Fund", "Emergency Relief Fund"],
  },
  "hallel-school-nairobi": {
    name: "Hallel School Nairobi",
    type: "Christian School",
    tagline: "Where vulnerable children discover their God-given potential.",
    description: "Hallel School is a Christ-centred school offering quality education to sponsored, orphaned, and vulnerable children alongside fee-paying students — creating a diverse, faith-shaped learning community.",
    details: ["Pre-primary through secondary education", "Boarding facilities for orphaned students", "Character formation and biblical worldview", "Meals, healthcare, uniforms and books", "Sports, music, and creative arts programmes"],
    themeQuote: "Raising Godly Leaders. Inspiring Academic Excellence.",
    pageMenu: ["Home", "About", "Admissions", "Academics", "CBC Curriculum", "Student Life", "Parents", "Gallery", "Transport", "Fees", "News", "Contact"],
    hero: {
      title: "Welcome to Hallel School Nairobi",
      subtitle: "Learning with Excellence. Growing with Character.",
      ctas: ["Apply Now", "Book a School Tour", "Download Prospectus"],
    },
    extraSections: [
      { eyebrow: "About", title: "Who We Are", items: ["Mission", "Vision", "Christian Values", "Why Parents Choose Us", "Our Teachers", "Our History"] },
      { eyebrow: "Academics", title: "Grades & Levels", muted: true, items: ["Playgroup", "PP1", "PP2", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Junior School"] },
      { eyebrow: "Student Life", title: "Beyond the Classroom", items: ["Sports", "Music", "Drama", "Swimming", "Computer Club", "Bible Club", "Art", "Debate", "Leadership", "Scouts", "Environmental Club"] },
      { eyebrow: "Parents Portal", title: "Everything Parents Need", muted: true, items: ["Homework", "School Calendar", "Fee Payment", "Transport", "Newsletters", "Academic Reports", "Parent Handbook"] },
      { eyebrow: "Sponsor A Child", title: "Change a Child's Story", blurb: "Many children in our community cannot afford quality education. Your sponsorship covers everything they need to thrive.", items: ["School Fees", "Uniform", "Books", "Meals", "Transport", "Healthcare", "Progress Reports", "Letters from the Child"] },
    ],
  },
  "sinap-properties": {
    name: "Sinap Properties",
    type: "Housing & Land",
    tagline: "Dignified homes and affordable land for Kenyan families.",
    description: "Sinap Properties delivers safe, affordable housing and access to land — enabling vulnerable families to own homes and giving diaspora Kenyans a trusted partner to invest back home.",
    details: ["Affordable housing developments", "Land parcels for families and diaspora", "Community-integrated design", "Ethical, transparent transactions", "Partnerships with the Build a Better Home programme"],
    themeQuote: "Creating Wealth Through Smart Property Investment.",
    pageMenu: ["Home", "Projects", "Investment", "Buy Land", "Sell Property", "Property Management", "Construction", "Gallery", "FAQs", "Contact"],
    hero: {
      title: "Secure Your Future Through Land Ownership.",
      ctas: ["Available Plots", "Book Site Visit", "Talk to an Advisor"],
    },
    extraSections: [
      { eyebrow: "Services", title: "What We Offer", items: ["Land Sales", "Residential Plots", "Commercial Plots", "Affordable Housing", "Property Management", "Construction Consultancy", "Investment Advisory", "Title Processing", "Land Survey", "Property Valuation"] },
      { eyebrow: "Current Projects", title: "Where We're Building", muted: true, items: ["Kamulu", "Athi River", "Kitengela", "Machakos", "Kajiado"] },
      { eyebrow: "Investors", title: "Invest With Confidence", items: ["ROI Calculator", "Investment Guide", "Payment Plans", "Customer Testimonials"] },
      { eyebrow: "Community Impact", title: "Business That Transforms Lives", muted: true, blurb: "A percentage of every property sale supports the wider work of 54 Global Afrikan — linking business success with community transformation.", items: ["Education", "Widows", "Orphans", "Church missions", "Youth empowerment"] },
    ],
    closingNote: {
      title: "A unique investment story",
      body: "This is a unique feature that links business success with community transformation — every plot you own helps write a better future for a Kenyan family.",
    },
  },
  "praise-adventures-tours": {
    name: "Praise Adventures & Tours",
    type: "Missions & Travel",
    tagline: "Travel that connects the world to the work.",
    description: "Praise Adventures & Tours organizes mission trips, pilgrimages, and cultural travel — connecting international friends to Kenya and enabling Kenyans to encounter the wider Church.",
    details: ["Short-term mission trips", "Kenya safari and heritage tours", "Pilgrimages to the Holy Land", "Youth and church group travel", "Group logistics, visas, and hospitality"],
    themeQuote: "Discover Kenya. Experience Africa. Travel With Purpose.",
    pageMenu: ["Home", "Safaris", "Holiday Packages", "Pilgrimage Tours", "School Trips", "Corporate Travel", "Visa Services", "Hotels", "Car Hire", "Gallery", "Book Now"],
    hero: {
      title: "Explore God's Beautiful Creation.",
      ctas: ["Book Safari", "Holiday Packages", "Church Tours"],
    },
    extraSections: [
      { eyebrow: "Tour Packages", title: "Destinations We Love", items: ["Maasai Mara", "Amboseli", "Tsavo", "Diani", "Watamu", "Naivasha", "Nakuru", "Mt Kenya", "Uganda", "Tanzania", "Rwanda", "Israel Pilgrimage"] },
      { eyebrow: "Services", title: "Travel Made Simple", muted: true, items: ["Hotel Booking", "Air Ticketing", "Visa Assistance", "Airport Transfers", "Travel Insurance", "Conference Travel", "School Excursions", "Mission Trips"] },
    ],
    closingNote: {
      title: "Mission Tourism",
      body: "Every trip booked with Praise Adventures contributes to community transformation by helping educate vulnerable children, supporting widows, and funding outreach programs through 54 Global Afrikan. This gives travelers a purpose beyond sightseeing.",
    },
  },
  "54-global-foundation": {
    name: "54 Global Foundation",
    type: "Humanitarian Foundation",
    tagline: "The charitable engine of the movement.",
    description: "54 Global Foundation is the registered charitable arm — receiving and stewarding donations, running the child sponsorship programme, and delivering humanitarian relief and community projects at scale.",
    details: ["Child sponsorship programme", "Emergency food and medical relief", "Widow and orphan care", "Grants to partner ministries", "Donor stewardship and transparency reporting"],
  },
};

export const Route = createFileRoute("/organizations/$slug")({
  loader: ({ params }) => {
    const org = orgs[params.slug];
    if (!org) throw notFound();
    return org;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — 54 Global Afrikan` },
          { name: "description", content: loaderData.tagline },
          { property: "og:title", content: loaderData.name },
          { property: "og:description", content: loaderData.tagline },
        ]
      : [],
  }),
  component: OrgPage,
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="font-serif text-4xl">Organization not found</h1>
      <Button asChild className="mt-6">
        <Link to="/organizations">Back to organizations</Link>
      </Button>
    </div>
  ),
  errorComponent: () => <div className="container-page py-32">Something went wrong.</div>,
});

function ChipGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div key={it} className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 hover:border-accent hover:shadow-[var(--shadow-soft)] transition-all">
          <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
          <span className="text-sm font-medium">{it}</span>
        </div>
      ))}
    </div>
  );
}

function OrgPage() {
  const org = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={org.type} title={org.name} description={org.tagline} photoLabel={org.name} tone="green" />

      {org.themeQuote && (
        <section className="border-b border-border/60 bg-secondary/40">
          <div className="container-page py-6 text-center">
            <p className="font-serif text-lg md:text-xl italic text-foreground/80">
              "{org.themeQuote}"
            </p>
          </div>
        </section>
      )}

      {org.pageMenu && (
        <div className="border-b border-border/60">
          <div className="container-page py-3 flex flex-wrap gap-x-5 gap-y-2 justify-center text-sm text-muted-foreground">
            {org.pageMenu.map((m) => (
              <span key={m} className="hover:text-foreground transition-colors">{m}</span>
            ))}
          </div>
        </div>
      )}

      {org.hero && (
        <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20">
          <div className="container-page text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">{org.hero.title}</h2>
            {org.hero.subtitle && (
              <p className="mt-5 text-lg md:text-xl text-muted-foreground">{org.hero.subtitle}</p>
            )}
            {org.hero.ctas && org.hero.ctas.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                {org.hero.ctas.map((cta, i) => (
                  <Button key={cta} asChild size="lg" variant={i === 0 ? "default" : "outline"} className="gap-2">
                    <Link to="/contact">{cta} <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{org.description}</p>
            <ul className="space-y-3 text-base">
              {org.details.map((d: string) => (
                <li key={d} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> {d}
                </li>
              ))}
            </ul>
            <div className="pt-2 flex gap-3">
              <Button asChild>
                <Link to="/donate">Support this work</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <PlaceholderImage label={`${org.name} · community`} aspect="portrait" tone="gold" />
            <PlaceholderImage label={`${org.name} · daily life`} aspect="video" tone="earth" />
          </div>
        </div>
      </Section>

      {org.welcome && (
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="container-page text-center max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-[0.24em] text-accent mb-5">{org.welcome.heading}</div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">{org.welcome.body}</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact"><CalendarCheck className="h-4 w-4" /> Plan Your Visit</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/40 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15">
                <Link to="/contact"><Video className="h-4 w-4" /> Watch Live</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/40 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15">
                <Link to="/contact"><HandHeart className="h-4 w-4" /> Prayer Request</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {org.ministries && (
        <Section eyebrow="Get Involved" title="Ministries">
          <div className="mb-6 flex items-center gap-3 text-muted-foreground">
            <Heart className="h-5 w-5 text-accent" />
            <p>A place to belong, grow, and serve — for every age and season of life.</p>
          </div>
          <ChipGrid items={org.ministries} />
        </Section>
      )}

      {org.outreach && (
        <Section eyebrow="Serve" title="Community Outreach" muted>
          <div className="mb-6 flex items-center gap-3 text-muted-foreground">
            <HandHelping className="h-5 w-5 text-accent" />
            <p>Practical ways we love and serve our city and beyond.</p>
          </div>
          <ChipGrid items={org.outreach} />
        </Section>
      )}

      {org.missions && (
        <Section eyebrow="Go" title="Missions">
          <div className="mb-6 flex items-center gap-3 text-muted-foreground">
            <Globe2 className="h-5 w-5 text-accent" />
            <p>Taking the gospel and hope to Kenya, Africa, and the nations.</p>
          </div>
          <ChipGrid items={org.missions} />
        </Section>
      )}

      {org.give && (
        <Section eyebrow="Partner" title="Give" muted>
          <div className="mb-6 flex items-center gap-3 text-muted-foreground">
            <Gift className="h-5 w-5 text-accent" />
            <p>Your generosity fuels every ministry, mission, and act of care.</p>
          </div>
          <ChipGrid items={org.give} />
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link to="/donate"><Gift className="h-4 w-4" /> Give Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact the Church Office</Link>
            </Button>
          </div>
        </Section>
      )}

      {org.extraSections?.map((s) => (
        <Section key={s.title} eyebrow={s.eyebrow} title={s.title} muted={s.muted}>
          {s.blurb && (
            <p className="mb-6 text-muted-foreground max-w-3xl">{s.blurb}</p>
          )}
          <ChipGrid items={s.items} />
        </Section>
      ))}

      {org.closingNote && (
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container-page text-center max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-[0.24em] text-accent mb-4">{org.closingNote.title}</div>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed">
              {org.closingNote.body}
            </p>
          </div>
        </section>
      )}

      <CTABand />
      <div className="h-20" />
    </>
  );
}
