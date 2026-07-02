import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, ShieldCheck, RefreshCcw, Receipt } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/donate")({
  head: () => ({ meta: [
    { title: "Donate — 54 Global Afrikan" },
    { name: "description", content: "Give a one-time or monthly gift. Sponsor a child, feed a family, build a classroom, or fund emergency medical care in Kenya." },
    { property: "og:title", content: "Donate to 54 Global Afrikan" },
    { property: "og:description", content: "Your gift transforms lives across Kenya." },
  ]}),
  component: Donate,
});

const currencies = ["USD","GBP","EUR","CAD","AUD","KES"];
const amounts = [30, 50, 100, 250, 500, 1000];
const designations = [
  { id: "greatest", label: "Where most needed" },
  { id: "sponsor", label: "Child Sponsorship" },
  { id: "feed", label: "Feed a Family" },
  { id: "widow", label: "Widow Empowerment" },
  { id: "school", label: "Build a Classroom" },
  { id: "water", label: "Clean Water" },
  { id: "medical", label: "Emergency Medical Fund" },
  { id: "bibles", label: "Bible Distribution" },
];

function Donate() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState<number | "">(30);
  const [designation, setDesignation] = useState("sponsor");

  return (
    <>
      <PageHero eyebrow="Give a Gift" title="Your gift transforms a life." description="Every donation is stewarded with transparency and accountability. Secure processing via Stripe, PayPal, M-PESA, and bank transfer." photoLabel="Community celebrating gifts" tone="gold" />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form className="bg-card border border-border rounded-xl p-8 space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Payment processing goes live once Stripe is enabled."); }}>
            <div>
              <Label className="mb-3 block">Give</Label>
              <div className="grid grid-cols-2 gap-2 max-w-xs">
                {(["once","monthly"] as const).map((f) => (
                  <button key={f} type="button" onClick={() => setFrequency(f)} className={cn("py-3 rounded-lg border text-sm font-medium capitalize transition-colors", frequency === f ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-secondary")}>
                    {f === "once" ? "One-time" : "Monthly"}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Currency</Label>
              <div className="flex flex-wrap gap-2">
                {currencies.map((c) => (
                  <button key={c} type="button" onClick={() => setCurrency(c)} className={cn("px-4 py-2 rounded-lg border text-sm font-medium transition-colors", currency === c ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-secondary")}>{c}</button>
                ))}
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Amount</Label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
                {amounts.map((a) => (
                  <button key={a} type="button" onClick={() => setAmount(a)} className={cn("py-3 rounded-lg border text-sm font-medium transition-colors", amount === a ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-secondary")}>{currency === "KES" ? a * 130 : a}</button>
                ))}
              </div>
              <Input type="number" min={1} placeholder="Or enter custom amount" value={amount === "" ? "" : amount} onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))} />
            </div>

            <div>
              <Label className="mb-3 block">Where should your gift go?</Label>
              <div className="grid gap-2 sm:grid-cols-2">
                {designations.map((d) => (
                  <button key={d.id} type="button" onClick={() => setDesignation(d.id)} className={cn("text-left px-4 py-3 rounded-lg border text-sm font-medium transition-colors", designation === d.id ? "bg-accent/20 border-accent text-accent-foreground" : "border-border hover:bg-secondary")}>{d.label}</button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2"><Label htmlFor="name">Full name</Label><Input id="name" required maxLength={120} /></div>
              <div className="grid gap-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" required maxLength={255} /></div>
            </div>

            <Button type="submit" size="lg" className="w-full gap-2">
              <Heart className="h-4 w-4" /> Give {currency} {amount || 0} {frequency === "monthly" ? "per month" : "now"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">Secure payment processing. Payments go live once Stripe is enabled on this project.</p>
          </form>

          <div className="space-y-4">
            {[
              { i: ShieldCheck, t: "Secure & Encrypted", d: "SSL processing via Stripe, PayPal & M-PESA." },
              { i: Receipt, t: "Tax-Deductible Receipts", d: "Instant email receipt for every gift." },
              { i: RefreshCcw, t: "Cancel Anytime", d: "Monthly gifts can be paused or cancelled anytime." },
            ].map((b) => (
              <div key={b.t} className="bg-card border border-border rounded-xl p-6 flex gap-4">
                <span className="h-11 w-11 shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center"><b.i className="h-5 w-5" /></span>
                <div><h3 className="font-serif text-lg">{b.t}</h3><p className="mt-1 text-sm text-muted-foreground">{b.d}</p></div>
              </div>
            ))}
            <div className="bg-primary text-primary-foreground rounded-xl p-6">
              <h3 className="font-serif text-lg">Donate goods instead</h3>
              <p className="mt-2 text-sm text-primary-foreground/85">Computers, books, uniforms, medical supplies, seeds, water tanks, vehicles and more.</p>
              <Button asChild variant="secondary" size="sm" className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"><a href="/contact">Donate Items</a></Button>
            </div>
          </div>
        </div>
      </Section>

      <div className="h-20" />
    </>
  );
}
