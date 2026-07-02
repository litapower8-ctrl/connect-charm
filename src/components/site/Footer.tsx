import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

const columns = [
  {
    heading: "Get Involved",
    links: [
      { to: "/sponsor-a-child", label: "Sponsor a Child" },
      { to: "/volunteer", label: "Volunteer" },
      { to: "/donate", label: "Donate" },
      { to: "/partner", label: "Partner With Us" },
    ],
  },
  {
    heading: "Our Work",
    links: [
      { to: "/programmes", label: "Programmes" },
      { to: "/impact", label: "Our Impact" },
      { to: "/community", label: "Community Programmes" },
      { to: "/organizations", label: "Our Organizations" },
    ],
  },
  {
    heading: "About",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/stories", label: "News & Stories" },
      { to: "/annual-reports", label: "Annual Reports" },
      { to: "/transparency", label: "Transparency" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-sidebar text-sidebar-foreground">
      <div className="container-page py-16 grid gap-12 lg:grid-cols-[1.4fr_2fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-10 w-10 rounded-full bg-sidebar-primary text-sidebar-primary-foreground font-serif text-lg font-semibold">54</span>
            <div className="leading-tight">
              <div className="font-serif text-lg font-semibold">54 Global Afrikan</div>
              <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">Incorporated</div>
            </div>
          </div>
          <p className="mt-5 text-sm opacity-80 max-w-sm leading-relaxed">
            Restoring hope and transforming communities across Kenya through faith, education, enterprise, and humanitarian service.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="grid place-items-center h-9 w-9 rounded-full bg-sidebar-accent hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-serif text-sm font-semibold text-sidebar-primary mb-4 uppercase tracking-wider">{col.heading}</h4>
              <ul className="space-y-2.5 text-sm opacity-85">
                {col.links.map((l) => (
                  <li key={l.to}><Link to={l.to} className="hover:text-sidebar-primary transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold text-sidebar-primary mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm opacity-85">
            <li className="flex gap-2.5"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Nairobi, Kenya</li>
            <li className="flex gap-2.5"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> hello@54globalafrikan.org</li>
            <li className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +254 700 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sidebar-border/40">
        <div className="container-page py-5 flex flex-col md:flex-row gap-3 justify-between text-xs opacity-70">
          <div>© {new Date().getFullYear()} 54 Global Afrikan Incorporated. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/transparency">Privacy</Link>
            <Link to="/transparency">Terms</Link>
            <Link to="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
