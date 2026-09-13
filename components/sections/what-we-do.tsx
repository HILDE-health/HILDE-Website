"use client";

/* ════════════════════════════════════════════════════════════════
 *  SEKTION 3 · Was wir machen
 *  - Section-Intro (ruhige Headline)
 *  - 3-spaltiges Grid mit Feature-Cards (Icon, Titel, Text)
 *  - "So funktioniert es" in 3 nummerierten Schritten (Stagger)
 *  Inhalte: lib/content.ts → `whatWeDo`
 * ════════════════════════════════════════════════════════════════ */

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, HeartHandshake, LayoutDashboard, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { whatWeDo } from "@/lib/content";

// Icon-Namen aus lib/content.ts → Komponenten
const ICONS: Record<string, LucideIcon> = {
  Cpu,
  LayoutDashboard,
  HeartHandshake,
};

export function WhatWeDo() {
  return (
    <section id="produkt" className="scroll-mt-24 bg-base py-20 sm:py-28">
      <div className="container flex flex-col gap-16">
        <SectionHeading
          eyebrow={whatWeDo.eyebrow}
          title={whatWeDo.title}
          description={whatWeDo.description}
        />

        {/* ── Feature-Cards ─────────────────────────────────── */}
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-3"
        >
          {whatWeDo.features.map((feature) => {
            const Icon = ICONS[feature.icon] ?? Cpu;
            return (
              <motion.li key={feature.title} variants={staggerItem}>
                <Card className="group h-full transition-shadow duration-300 hover:shadow-soft-lg">
                  <CardContent className="flex h-full flex-col gap-4 p-7">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-ink transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="font-display text-xl font-bold text-ink">
                      {feature.title}
                    </h3>
                    <p className="text-pretty leading-relaxed text-warm-700">
                      {feature.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* ── So funktioniert es ────────────────────────────── */}
        <div className="rounded-3xl border border-border bg-warm-50 p-8 sm:p-12">
          <Reveal>
            <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              {whatWeDo.howItWorks.title}
            </h3>
          </Reveal>

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 grid gap-8 md:grid-cols-3"
          >
            {whatWeDo.howItWorks.steps.map((step, i) => (
              <motion.li
                key={step.title}
                variants={staggerItem}
                className="flex flex-col gap-4"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <Image
                    src={step.image}
                    alt=""
                    width={900}
                    height={700}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-display text-lg text-accent-foreground">
                    {i + 1}
                  </span>
                  <h4 className="font-display text-lg font-bold text-ink">
                    {step.title}
                  </h4>
                </div>
                <p className="text-pretty leading-relaxed text-warm-700">
                  {step.text}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
