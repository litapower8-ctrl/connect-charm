import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ eyebrow, title, children, muted = false, className }: { eyebrow?: string; title?: string; children: ReactNode; muted?: boolean; className?: string; }) {
  return (
    <section className={cn("py-20 md:py-24", muted && "bg-secondary/40", className)}>
      <div className="container-page">
        {(eyebrow || title) && (
          <div className="max-w-2xl mb-12">
            {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">{eyebrow}</div>}
            {title && <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
