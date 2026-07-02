import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Target, Eye, Sparkles, Users, TrendingUp, Award, Rocket, Building2, GraduationCap, Landmark, Cpu, Home as HomeIcon, ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg.asset.json";
import trainingImg from "@/assets/training.jpg.asset.json";
import workshopImg from "@/assets/workshop.jpg.asset.json";
import conferenceImg from "@/assets/conference.jpg.asset.json";
import teamImg from "@/assets/team.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "54 Global Ltd — We Don't Train. We Transform." },
      { name: "description", content: "Kenyan corporate training and consultancy firm transforming underperforming sales teams into high-impact, results-driven units across real estate, FMCG, finance and more." },
      { property: "og:title", content: "54 Global Ltd — Sales Transformation Partner" },
      { property: "og:description", content: "Africa's most impactful sales transformation partner. Training, coaching, strategy, and leadership development." },
      { property: "og:image", content: heroImg.url },
    ],
  }),
  component: Home,
});

const coreValues = [
  { title: "Excellence", body: "We commit to delivering high-quality training solutions." },
  { title: "Integrity", body: "Our engagements are built on honesty, trust, and transparency." },
  { title: "Innovation", body: "We use cutting-edge sales methodologies and digital tools." },
  { title: "Results-Oriented", body: "We measure our success by your business performance." },
  { title: "Partnership", body: "We walk with our clients before, during, and after implementation." },
];

const services = [
  { title: "Sales Training & Capacity Building", body: "Customized, high-impact sales training programs designed to improve selling skills, confidence, and results — from prospecting to closing." },
  { title: "Sales Performance Coaching", body: "Targeted coaching for individuals and teams to overcome sales plateaus, build momentum, and stay accountable to performance goals." },
  { title: "Sales Strategy & Process Optimization", body: "We assess and refine your sales process to align with best practices, customer expectations, and evolving market dynamics." },
  { title: "Sales Leadership Development", body: "We empower team leaders and sales managers with leadership skills, performance management tools, and coaching capabilities." },
  { title: "Real Estate Sales Mastery", body: "Tailored training for real estate teams — relationship building, objection handling, and high-conversion closing techniques." },
  { title: "Interactive Workshops & Seminars", body: "Engaging, action-oriented sessions that ignite motivation and provide practical tools for immediate sales improvement." },
];

const deliveryModes = [
  { title: "In-Person Training", body: "Face-to-face sessions on-site or at designated venues. Ideal for immersive workshops, roleplays, and hands-on coaching." },
  { title: "Virtual Training (Live Online)", body: "Interactive live sessions via Zoom, Teams, or Google Meet — cost-effective, remote learning for distributed teams." },
  { title: "Hybrid Training", body: "Flexible combination of in-person and online sessions for organizations with field and remote staff." },
  { title: "On-the-Job Coaching", body: "One-on-one or small group coaching in the actual work environment. Real-time feedback, shadowing, and performance improvement." },
  { title: "Workshops & Bootcamps", body: "High-energy, short-format 1-3 day intensive sessions addressing closing skills, lead generation, and objection handling." },
  { title: "Customized Learning Journeys", body: "Tailor-made programs around your sales cycle, industry, and team structure — with assessments, tracking, and reviews." },
];

const industries = [
  { icon: HomeIcon, title: "Real Estate", body: "Mastering Property Sales. Prospect effectively, build trust, handle objections, and close high-value property deals." },
  { icon: Building2, title: "FMCG & Retail", body: "Fast-Paced Sales Mastery. Train frontline teams to deliver product knowledge, upsell, and drive in-store or field performance." },
  { icon: GraduationCap, title: "Education Services", body: "Enrolment & Admissions Acceleration. Value-based selling for private schools, academies, and education consultants." },
  { icon: Cpu, title: "Technology & SaaS", body: "Simplifying Complex Sales. Understand customer pain points, present solutions clearly, and shorten the B2B/B2C sales cycle." },
  { icon: ShieldCheck, title: "Insurance", body: "Driving Policy Conversions. Persuasive communication, needs-based selling, and follow-up techniques that boost conversions." },
  { icon: Landmark, title: "Financial Services", body: "Consultative Selling for Growth. Client engagement, needs analysis, and relationship-based selling for banking and investment." },
];

const benefits = [
  { title: "Increased Sales Performance", body: "Your team will sell more, close faster, and consistently hit or exceed targets." },
  { title: "Higher Team Confidence & Motivation", body: "We build skills, plus the mindset required to perform under pressure." },
  { title: "Customized Sales Systems", body: "Processes, scripts, trackers, and tools that standardize excellence across your team." },
  { title: "Stronger Sales Leadership", body: "Coaching, tracking, and leadership tools for sustainable performance." },
  { title: "Better Lead Conversion", body: "Handle objections, qualify leads, and close deals — improving marketing ROI." },
  { title: "Improved Accountability", body: "Performance dashboards, goal-setting templates, and follow-ups build responsibility." },
  { title: "Faster Onboarding", body: "Sales playbooks and structured training make new hires productive faster." },
  { title: "Long-Term Sales Growth", body: "Lasting transformation — habits and systems that deliver continued success." },
];

const future = [
  { icon: Rocket, title: "Scaling Regional Impact", body: "Expanding across Kenya and East Africa with localized training that speaks to market realities." },
  { icon: Cpu, title: "Technology-Enabled Learning", body: "Digital platforms offering flexible, self-paced, and blended learning for modern sales teams." },
  { icon: Award, title: "Sales Excellence Centers", body: "Physical and virtual hubs to support ongoing learning, coaching, and industry collaboration." },
  { icon: Users, title: "Strategic Partnerships", body: "Collaborations with associations, corporates, and development partners to deepen impact." },
  { icon: TrendingUp, title: "Data-Driven Outcomes", body: "Analytics and performance dashboards that track ROI and guide coaching decisions in real time." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg.url} alt="Kenyan cityscape" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.2_0.02_25/0.55)_0%,oklch(0.2_0.02_25/0.9)_100%)]" />
        </div>
        <div className="relative container-page py-24 md:py-36 lg:py-44 text-primary-foreground">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-accent mb-6">
              <span className="h-px w-10 bg-accent" /> 54 Global Ltd · Kenya
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] font-medium">
              We Don't Train.<br />
              <span className="text-accent">We Transform.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
              A Kenyan corporate training and consultancy firm specializing in transforming underperforming sales teams into high-impact, results-driven units — for real estate, FMCG, financial services, and beyond.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">Book a Consultation <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/40 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15">
                <Link to="/programmes">Our Services</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/80">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Tailored & impactful trainings</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Integrity and customer focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 md:py-28 border-b border-border/60">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] items-center">
          <img src={trainingImg.url} alt="Customer service training session" className="rounded-xl shadow-[var(--shadow-lift)] w-full h-auto object-cover" />
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Introduction</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Transforming dormant sales departments into high-performing teams.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Initially founded as a real estate solutions provider, 54 Global has evolved to serve a broader clientele including FMCG distributors, household product suppliers, construction companies, and other product-based businesses.
            </p>
            <ul className="mt-6 space-y-3 text-base">
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Committed to tailored and impactful trainings</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Operate with integrity and customer focus</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <div className="bg-card border border-border rounded-xl p-10">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center mb-6"><Target className="h-6 w-6" /></div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Our Mission</div>
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              To design and deliver transformational training and business strategies that convert dormant sales departments into high-performing teams.
            </p>
          </div>
          <div className="bg-primary text-primary-foreground rounded-xl p-10">
            <div className="h-12 w-12 rounded-full bg-accent/20 text-accent grid place-items-center mb-6"><Eye className="h-6 w-6" /></div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-3">Our Vision</div>
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              To be Africa's most impactful sales transformation partner, equipping businesses with the tools and mindset to thrive in competitive markets.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Core Values</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">The values that define us.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-[var(--shadow-lift)] transition-shadow">
                <Sparkles className="h-5 w-5 text-accent mb-4" />
                <h3 className="font-serif text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Our Services & Expertise</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">Practical programmes for real sales results.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-[var(--shadow-lift)] transition-shadow">
                <div className="text-accent font-serif text-xl mb-2">◆</div>
                <h3 className="font-serif text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <img src={workshopImg.url} alt="Training session in progress" className="rounded-xl w-full h-72 object-cover" />
            <img src={conferenceImg.url} alt="Corporate workshop" className="rounded-xl w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* DELIVERY MODES */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Our Delivery Mode</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">Flexible, practical, results-oriented.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">Whether your team is in the office, in the field, or spread across multiple regions, we ensure every session is impactful and engaging.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliveryModes.map((d) => (
              <div key={d.title} className="border-l-2 border-accent pl-6 py-2">
                <h3 className="font-serif text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_85%_20%,oklch(0.62_0.22_27),transparent_55%)]" />
        <div className="container-page relative">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">Industries We Serve</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">Industry-specific sales training solutions.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <div key={i.title} className="bg-primary-foreground/5 border border-primary-foreground/15 backdrop-blur rounded-xl p-6">
                <i.icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="font-serif text-xl">{i.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Benefits to Your Company</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">Partnering with us means investing in results — not just training.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, idx) => (
              <div key={b.title} className="bg-card border border-border rounded-xl p-6">
                <div className="font-serif text-3xl text-accent font-semibold mb-3">{String(idx + 1).padStart(2, "0")}</div>
                <h3 className="font-serif text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-page grid gap-14 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Our Team & Leadership</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">Passionate professionals driving our mission forward.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our strength lies in the people behind our work — sales professionals, experienced trainers, and business strategists with a proven track record in sales transformation and industry-specific training.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-serif text-xl">Robert Wekesa Simiyu</h3>
                <div className="text-sm text-accent font-medium">Founder & Lead Trainer</div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">Over 10 years of experience in real estate and insurance sales, leading high-performing teams and managing multimillion-shilling sales portfolios.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl">Facilitators & Coaches</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">A network of trainers and performance coaches drawn from real estate, retail, finance and education — handpicked to inspire action and deliver lasting results.</p>
              </div>
            </div>
          </div>
          <img src={teamImg.url} alt="54 Global leadership" className="rounded-xl w-full h-auto object-cover shadow-[var(--shadow-lift)]" />
        </div>
      </section>

      {/* FUTURE */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Looking Ahead</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">Shaping the future of sales performance across Africa.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {future.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-xl p-6">
                <f.icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="font-serif text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">Don't wish for a better sales team — train one.</h2>
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-xl">If your sales team isn't performing at 100%, you're leaving money on the table. We're here to change that.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/contact">Talk to Us</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15"><Link to="/programmes">Explore Programmes</Link></Button>
            </div>
          </div>
          <div className="bg-primary-foreground/5 border border-primary-foreground/15 rounded-xl p-8 space-y-4 text-sm">
            <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" /><div><div className="font-medium">Head Office · Nairobi</div><div className="text-primary-foreground/75">Westlands, Nairobi, Kenya</div></div></div>
            <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" /><div><div className="font-medium">Kisumu Office</div><div className="text-primary-foreground/75">Jubilee House, Oginga Odinga Street, Kisumu</div></div></div>
            <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" /><div><div className="font-medium">Mombasa Office</div><div className="text-primary-foreground/75">Links Road, Nyali, Mombasa</div></div></div>
            <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" /><div><div className="font-medium">Kakamega Office</div><div className="text-primary-foreground/75">Opposite County Government HQ, Kakamega Town</div></div></div>
            <div className="pt-3 border-t border-primary-foreground/15 flex flex-col gap-2">
              <a href="tel:+254742080666" className="inline-flex items-center gap-2 hover:text-accent"><Phone className="h-4 w-4" /> +254 742 080 666</a>
              <a href="mailto:info@54global.com" className="inline-flex items-center gap-2 hover:text-accent"><Mail className="h-4 w-4" /> info@54global.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
