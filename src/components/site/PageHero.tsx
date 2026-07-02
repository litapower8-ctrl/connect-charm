import { ReactNode } from "react";
import { PlaceholderImage } from "./PlaceholderImage";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  photoLabel?: string;
  tone?: "green" | "gold" | "cream" | "earth";
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, photoLabel, tone = "green", children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="container-page py-16 md:py-24 grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
        <div>
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-medium mb-5">
              <span className="h-px w-8 bg-primary" /> {eyebrow}
            </div>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">{title}</h1>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">{description}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        <PlaceholderImage label={photoLabel ?? title} aspect="portrait" tone={tone} className="lg:h-[520px]" />
      </div>
    </section>
  );
}
