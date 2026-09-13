import { cn } from "@/lib/utils";

/** Kleiner Kategorie-/Status-Tag (z. B. in News-Cards). */
export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink",
        className,
      )}
      {...props}
    />
  );
}
