import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind-Klassen sicher zusammenführen (shadcn/ui-Standard). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
