import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type MediaFrameProps = Omit<ImageProps, "placeholder"> & {
  /** Zeigt einen dezenten „Platzhalter"-Hinweis über dem Bild. */
  showTag?: boolean;
  wrapperClassName?: string;
};

/**
 * Einheitlicher Bild-Rahmen: runde Ecken, weicher Schatten, Overlay-Tag.
 * Wird aktuell nicht zwingend gebraucht – praktisch, wenn du an weiteren
 * Stellen Bilder mit gleichem Look einbauen willst.
 * Für echte Fotos `src` in lib/content.ts tauschen und `showTag` weglassen.
 */
export function MediaFrame({
  showTag = false,
  wrapperClassName,
  className,
  alt,
  ...props
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-warm-100 shadow-soft-lg",
        wrapperClassName,
      )}
    >
      <Image
        alt={alt}
        className={cn("h-full w-full object-cover", className)}
        {...props}
      />
      {showTag && (
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-base/85 px-3 py-1 text-xs font-medium uppercase tracking-wide text-warm-600 backdrop-blur-sm">
          Platzhalter
        </span>
      )}
    </div>
  );
}
