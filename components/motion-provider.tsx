"use client";

import { MotionConfig } from "framer-motion";

/**
 * Kapselt Framer Motion global. `reducedMotion="user"` sorgt dafür,
 * dass alle Animationen die System-Einstellung „Bewegung reduzieren“
 * respektieren (WCAG 2.3.3).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
