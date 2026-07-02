import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, HandHeart, Users, PlayCircle, ArrowRight, GraduationCap, Utensils, Home as HomeIcon, Droplets, Sprout, Church, Baby, Accessibility, HeartHandshake, MapPin, ShieldCheck, FileText, Video, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/")({
  component: Home,
});

const whoWeServe = [
  { icon: Baby, title: "Vulnerable Children", stat: "1,500+ supported", copy: "Education, meals, uniforms, books, mentorship, and hope." },
  { icon: HeartHandshake, title: "Widows", stat: "350+ empowered", copy: "Business training, food support, counselling, financial empowerment." },
  { icon: Users, title: "Orphans", stat: "Safe homes & schooling", copy: "Education sponsorship, healthcare, safe homes, mentorship." },
  { icon: HomeIcon, title: "Street Children", stat: "Rescue & rehabilitation", copy: "Rescue, rehabilitation, education, and life skills training." },
  { icon: GraduationCap, title: "Youth", stat: "Leaders in the making", copy: "Leadership, entrepreneurship, employment skills, sports, mentorship." },
  { icon: Accessibility, title: "Persons with Disabilities", stat: "Inclusive programmes", copy: "Inclusive education, assistive devices, empowerment opportunities." },
  { icon: Utensils, title: "Vulnerable Families", stat: "Emergency & long-term care", copy: "Food assistance, rent support, healthcare, small business grants." },
];

const programmes = [
  { icon: GraduationCap, emoji: "📚", title: "Education for Every Child", body: "School fees, uniforms, meals and mentorship for children who would otherwise be out of school." },
  { icon: Utensils, emoji: "🍲", title: "Feed a Family", body: "Monthly food parcels for widows and vulnerable households across Nairobi and beyond." },
  { icon: HeartHandshake, emoji: "❤️", title: "Widow Empowerment", body: "Skills training, seed capital, counselling and community for widows rebuilding their lives." },
  { icon: Baby, emoji: "👶", title: "Child Sponsorship", body: "Monthly sponsorship pairing a child with a caring donor for education, health and hope." },
  { icon: HomeIcon, emoji: "🏠", title: "Build a Better Home", body: "Safe, dignified housing and land access for families through Sinap Properties." },
  { icon: Droplets, emoji: "💧", title: "Clean Water Initiative", body: "Wells, tanks and purification for schools and communities without safe water." },
  { icon: Sprout, emoji: "🌱", title: "Sustainable Agriculture", body: "Seeds, training and smallholder farming for food security and family income." },
  { icon: Users, emoji: "👩", title: "Women's Economic Empowerment", body: "Cooperatives, financial literacy, and market access for women in business." },
  { icon: Church, emoji: "🙏", title: "Church & Community Outreach", body: "Medical camps, discipleship, worship, and community transformation through the local church." },
];

const stats = [
  { value: "15,000+", label: "Lives Impacted" },
  { value: "1,500+", label: "Children Supported" },
  { value: "350+", label: "Widows Empowered" },
  { value: "45", label: "Community Projects" },
  { value: "12", label: "Schools Supported" },
  { value: "250+", label: "Active Volunteers" },
];

const stories = [
  { name: "Faith", tag: "Sponsored Student", copy: "An orphan whose education at Hallel School has inspired her dream of becoming a doctor." },
  { name: "Mama Jane", tag: "Widow Entrepreneur", copy: "Received a sewing machine and now supports her family through tailoring in her community." },
  { name: "Brian", tag: "Former Street Child", copy: "Returned to school through our rescue programme and now hopes to become an engineer." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderImage label="Cinematic hero video · children, worship, community" aspect="hero" tone="green" className="h-full rounded-none" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.22_0.03_155/0.4)_0%,oklch(0.22_0.03_155/0.75)_100%)]" />
        </div>
        <div className="relative container-page py-24 md:py-36 lg:py-44 text-primary-foreground">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-accent mb-6">
              <span className="h-px w-10 bg-accent" /> A Christian community transformation movement
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] font-medium">
              Restoring Hope.<br />Transforming Communities.<br />
              <span className="text-accent">Building Africa's Future.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
              54 Global Afrikan Incorporated empowers vulnerable children, widows, youth, families, and communities through education, faith, economic empowerment, and sustainable development.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/sponsor-a-child"><Heart className="h-4 w-4" /> Sponsor a Child</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/40 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15">
                <Link to="/volunteer">Become a Volunteer</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="gap-2 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/donate"><HandHeart className="h-4 w-4" /> Donate Today</Link>
              </Button>
            </div>
            <button className="mt-10 inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
              <PlayCircle className="h-5 w-5" /> Watch our story
            </button>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 md:py-28 border-b border-border/60">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.3fr] items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Our Mission</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Long-term transformation through faith, education, enterprise, and service.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              We exist to see communities across Kenya restored — where every child learns, every widow thrives, every family has dignity, and every neighbourhood knows the love of Christ in tangible ways.
            </p>
            <p>
              Working through a family of organizations — church, school, foundation, properties, and mission travel — we deliver holistic, measurable, and lasting change.
            </p>
            <div className="pt-2">
              <Button asChild variant="link" className="gap-1 px-0 text-primary">
                <Link to="/about">Read our story <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Who We Serve</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">The people at the heart of our work.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeServe.map((g) => (
              <div key={g.title} className="group bg-card border border-border rounded-xl p-6 hover:shadow-[var(--shadow-lift)] transition-shadow">
                <div className="flex items-start justify-between mb-5">
                  <div className="h-11 w-11 rounded-full bg-primary/10 text-primary grid place-items-center"><g.icon className="h-5 w-5" /></div>
                  <span className="text-xs uppercase tracking-wider text-accent-foreground bg-accent/30 px-2.5 py-1 rounded-full">{g.stat}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Our Programmes</div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">Nine long-running programmes, measurable outcomes.</h2>
            </div>
            <Button asChild variant="outline"><Link to="/programmes">All programmes <ArrowRight className="h-4 w-4 ml-1" /></Link></Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p) => (
              <Link key={p.title} to="/programmes" className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-[var(--shadow-lift)] transition-shadow">
                <PlaceholderImage label={p.title} aspect="video" tone={Math.random() > 0.5 ? "green" : "earth"} className="rounded-none" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-accent font-medium uppercase tracking-wider mb-2">
                    <span className="text-base">{p.emoji}</span> Programme
                  </div>
                  <h3 className="font-serif text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                  <div className="mt-4 text-sm text-primary group-hover:gap-2 transition-all inline-flex items-center gap-1 font-medium">Learn more <ArrowRight className="h-3.5 w-3.5" /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORSHIP FEATURE */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_15%_50%,oklch(0.76_0.14_75),transparent_60%)]" />
        <div className="container-page relative grid gap-14 lg:grid-cols-2 items-center">
          <PlaceholderImage label="Sponsored child · classroom portrait" aspect="portrait" tone="gold" className="max-w-md" />
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-accent mb-5">Child Sponsorship Programme</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">$30 a month changes a child's life forever.</h2>
            <p className="mt-6 text-lg text-primary-foreground/85 leading-relaxed max-w-xl">
              Your monthly sponsorship covers education, school meals, uniforms, healthcare and counselling — plus progress reports, photographs and personal letters from your child.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 max-w-md text-sm text-primary-foreground/90">
              {["Education","School meals","Uniforms","Healthcare","Counselling","Progress reports","Photographs","Personal letters"].map((i) => (
                <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{i}</li>
              ))}
            </ul>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                <Link to="/sponsor-a-child"><Heart className="h-4 w-4" /> Sponsor a Child Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT DASHBOARD */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Impact Dashboard</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">The measurable difference your generosity makes.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="font-serif text-3xl md:text-4xl text-primary font-semibold">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <PlaceholderImage label="Interactive Kenya impact map · project GPS locations" aspect="wide" tone="green" />
            <div className="bg-secondary rounded-xl p-8 flex flex-col justify-between">
              <div>
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-serif text-2xl">Projects across Kenya</h3>
                <p className="mt-2 text-sm text-muted-foreground">See exactly where our schools, homes, farms, and outreach programmes are transforming communities.</p>
              </div>
              <Button asChild variant="outline" className="mt-6 self-start"><Link to="/impact">Explore the map <ArrowRight className="h-4 w-4 ml-1" /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* GIVING CAMPAIGNS */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Help Us Change a Life</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">Active giving campaigns.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Build a Classroom", goal: 18000, raised: 12400, unit: "$", copy: "New classroom block at Hallel School for 40 additional students." },
              { title: "Feed a Family", goal: 5000, raised: 3120, unit: "$", copy: "Monthly food parcels for widows and vulnerable households." },
              { title: "School Uniform Package", goal: 4000, raised: 1550, unit: "$", copy: "Uniforms, shoes and school supplies for 100 sponsored students." },
              { title: "Emergency Medical Fund", goal: 10000, raised: 6800, unit: "$", copy: "Life-saving treatment for children and widows in medical crisis." },
              { title: "Bible Distribution", goal: 2000, raised: 1240, unit: "$", copy: "250 Bibles for churches and community outreach in rural Kenya." },
              { title: "Girls' Dignity Project", goal: 3500, raised: 2100, unit: "$", copy: "Reusable sanitary kits and dignity training for 500 schoolgirls." },
            ].map((c) => {
              const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));
              return (
                <div key={c.title} className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
                  <PlaceholderImage label={c.title} aspect="video" tone="cream" className="rounded-none" />
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-1">{c.copy}</p>
                    <div className="mt-5">
                      <div className="flex justify-between text-xs mb-2"><span className="font-medium">{c.unit}{c.raised.toLocaleString()} raised</span><span className="text-muted-foreground">of {c.unit}{c.goal.toLocaleString()}</span></div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-accent" style={{ width: `${pct}%` }} /></div>
                      <div className="mt-1 text-xs text-muted-foreground">{pct}% funded</div>
                    </div>
                    <Button asChild size="sm" className="mt-5 self-start"><Link to="/donate">Give to this campaign</Link></Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Real Stories of Transformation</div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">The faces behind the numbers.</h2>
            </div>
            <Button asChild variant="outline"><Link to="/stories">All stories <ArrowRight className="h-4 w-4 ml-1" /></Link></Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((s) => (
              <div key={s.name} className="group">
                <PlaceholderImage label={`Portrait · ${s.name}`} aspect="portrait" tone={s.name === "Faith" ? "green" : s.name === "Mama Jane" ? "gold" : "earth"} />
                <div className="mt-5">
                  <div className="text-xs uppercase tracking-wider text-accent font-medium">{s.tag}</div>
                  <h3 className="mt-1 font-serif text-2xl">Meet {s.name}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.copy}</p>
                  <Link to="/stories" className="mt-3 inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">Read her story <ArrowRight className="h-3.5 w-3.5" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPARENCY STRIP */}
      <section className="py-20 bg-primary/5 border-y border-border/60">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_2fr] items-center">
          <div>
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">Transparency you can trust.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">Annual reports, audited accounts, project photographs, and impact updates — everything open, everything traceable.</p>
            <Button asChild variant="outline" className="mt-6"><Link to="/transparency">Transparency Centre <ArrowRight className="h-4 w-4 ml-1" /></Link></Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FileText, label: "Annual Reports" },
              { icon: LineChart, label: "Audited Accounts" },
              { icon: Video, label: "Video Updates" },
              { icon: MapPin, label: "GPS Locations" },
            ].map((i) => (
              <div key={i.label} className="bg-card border border-border rounded-xl p-5 text-center">
                <i.icon className="h-6 w-6 mx-auto text-primary" />
                <div className="mt-3 text-sm font-medium">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <div className="h-20" />
    </>
  );
}
