import type { Variants } from "framer-motion";

/* ── Zentrale Animations-Presets ────────────────────────────────
 * Alle Sektionen nutzen dieselben, ruhigen Bewegungsmuster.
 * Dauer/Distanz hier anpassen wirkt sich global aus.
 * "prefers-reduced-motion" wird von Framer Motion automatisch
 * respektiert (MotionConfig in components/motion-provider.tsx).
 * ────────────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/** Sanftes Einblenden von unten – Standard beim Scrollen. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Container, der seine Kinder nacheinander einblendet (Stagger). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Einzelnes Stagger-Kind. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Viewport-Optionen für whileInView – einmalig, leicht vorgezogen. */
export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;
