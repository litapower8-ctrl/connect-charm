import { Link } from "@tanstack/react-router";
import { Heart, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABand() {
  return (
    <section className="mt-24 relative overflow-hidden">
      <div className="container-page">
        <div className="relative rounded-2xl overflow-hidden bg-primary text-primary-foreground p-10 md:p-16">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,oklch(0.76_0.14_75),transparent_60%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">One act of kindness</div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight max-w-2xl">
                Can change a life forever. Join a movement bringing hope to Kenya.
              </h2>
              <p className="mt-5 text-primary-foreground/80 max-w-xl leading-relaxed">
                Pray, volunteer, sponsor a child, provide supplies, or partner with us. Together we transform lives.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" variant="secondary" className="gap-2 justify-start bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/sponsor-a-child"><Heart className="h-4 w-4" /> Sponsor a Child · $30/mo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 justify-start border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/donate"><HandHeart className="h-4 w-4" /> Give a One-Time Gift</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="gap-2 justify-start text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/volunteer">Become a Volunteer →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
