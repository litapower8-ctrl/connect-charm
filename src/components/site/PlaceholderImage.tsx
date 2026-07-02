import { cn } from "@/lib/utils";

interface Props {
  label: string;
  aspect?: "square" | "video" | "portrait" | "wide" | "hero";
  tone?: "green" | "gold" | "cream" | "earth";
  className?: string;
}

const aspects: Record<NonNullable<Props["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
  hero: "aspect-[16/9] md:aspect-[21/9]",
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  green: "bg-[linear-gradient(135deg,oklch(0.34_0.07_155),oklch(0.22_0.04_150))] text-primary-foreground",
  gold: "bg-[linear-gradient(135deg,oklch(0.76_0.14_75),oklch(0.62_0.14_55))] text-accent-foreground",
  cream: "bg-[linear-gradient(135deg,oklch(0.94_0.03_85),oklch(0.88_0.04_75))] text-foreground",
  earth: "bg-[linear-gradient(135deg,oklch(0.55_0.09_60),oklch(0.38_0.07_45))] text-primary-foreground",
};

export function PlaceholderImage({ label, aspect = "video", tone = "green", className }: Props) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg flex items-end p-6",
        aspects[aspect],
        tones[tone],
        className,
      )}
    >
      <div className="absolute inset-0 opacity-25 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
      <div className="relative z-10 text-xs uppercase tracking-[0.2em] font-medium opacity-80">
        Photo placeholder · {label}
      </div>
    </div>
  );
}
