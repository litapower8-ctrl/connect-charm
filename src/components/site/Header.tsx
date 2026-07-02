import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const primaryNav = [
  { to: "/about", label: "About" },
  { to: "/impact", label: "Our Impact" },
  { to: "/programmes", label: "Programmes" },
  { to: "/organizations", label: "Organizations" },
  { to: "/sponsor-a-child", label: "Sponsor" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/partner", label: "Partner" },
  { to: "/stories", label: "Stories" },
  { to: "/transparency", label: "Transparency" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="grid place-items-center h-9 w-9 rounded-full bg-primary text-primary-foreground font-serif text-lg font-semibold">54</span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-semibold">54 Global Afrikan</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Incorporated</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {primaryNav.slice(0, 7).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/transparency">Transparency</Link>
          </Button>
          <Button asChild size="sm" className="gap-1.5">
            <Link to="/donate"><Heart className="h-4 w-4" /> Donate</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("lg:hidden overflow-hidden border-t border-border/60 transition-[max-height]", open ? "max-h-[80vh]" : "max-h-0")}>
        <div className="container-page py-4 flex flex-col gap-1">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-md text-foreground/80 hover:bg-secondary"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 gap-1.5">
            <Link to="/donate" onClick={() => setOpen(false)}><Heart className="h-4 w-4" /> Donate Today</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
