import { cn } from "@/lib/utils";

/**
 * HILDE-Wortmarke (Platzhalter).
 * Schriftzug (Helvetica Neue Bold) + Tropfen-Punkt. Später durch
 * echtes Logo/SVG ersetzen – z. B. /public/logo.svg via next/image.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-display text-2xl font-bold tracking-tight text-ink",
        className,
      )}
    >
      HILDE
      <svg
        width="10"
        height="14"
        viewBox="0 0 10 14"
        fill="none"
        aria-hidden="true"
        className="mb-2 text-accent-strong"
      >
        <path
          d="M5 0.5C5 0.5 0.5 6 0.5 9.2A4.5 4.5 0 0 0 9.5 9.2C9.5 6 5 0.5 5 0.5Z"
          fill="currentColor"
        />
      </svg>
      <span className="sr-only">HILDE – Startseite</span>
    </span>
  );
}
