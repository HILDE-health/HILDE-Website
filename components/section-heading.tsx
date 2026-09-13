import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Kleiner Label-Text über der Headline (Kicker). */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Einheitlicher Section-Intro-Block (Kicker + Headline + Text). */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-accent-strong">
          <span className="h-px w-6 bg-accent-strong" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}
