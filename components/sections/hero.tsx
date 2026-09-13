"use client";

/* ════════════════════════════════════════════════════════════════
 *  SEKTION 2 · Hero – Das Produkt
 *  Split-Layout: links Claim + Subline + 2 CTAs,
 *  rechts Produkt-Zeichnung mit sanfter Float-/Parallax-Bewegung.
 *  Darunter: Trust-Bar mit Logo-Platzhaltern.
 *  Inhalte: lib/content.ts → `hero` (+ `heroClaimVarianten`)
 * ════════════════════════════════════════════════════════════════ */

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { hero } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  // Dezente Parallax: Bild wandert beim Scrollen leicht nach oben
  const y = useTransform(scrollYProgress, [0, 0.3], [0, reduce ? 0 : -60]);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-warm-gradient pt-28 sm:pt-32 lg:pt-40"
    >
      {/* weiche Farbflächen im Hintergrund */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container relative grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        {/* ── Linke Spalte: Text ──────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex min-w-0 flex-col items-start gap-6"
        >
          <motion.h1
            variants={staggerItem}
            className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {hero.claim}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="max-w-xl text-pretty text-lg leading-relaxed text-warm-700"
          >
            {hero.subline}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col gap-3 pt-2 sm:flex-row"
          >
            <Button asChild variant="accent" size="lg">
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* ── Rechte Spalte: Produkt-Zeichnung ────────────────── */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full">
            <motion.div
              animate={reduce ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center p-8"
            >
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                priority
                className="h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(1,79,123,0.15)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Trust-Bar ─────────────────────────────────────────── */}
      <div className="border-t border-border/70 bg-base/70 backdrop-blur-sm">
        <div className="container py-8">
          <p className="text-center text-sm font-medium uppercase tracking-[0.14em] text-warm-500">
            {hero.trustBar.label}
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {hero.trustBar.logos.map((logo) => (
              <li
                key={logo}
                className="flex h-10 items-center rounded-lg bg-warm-200/60 px-5 font-display text-base text-warm-600"
              >
                {logo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
