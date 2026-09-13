"use client";

/* ════════════════════════════════════════════════════════════════
 *  SEKTION 4 · News & Projekte
 *  Karten-Liste (aktuell ein Eintrag). Bild links, Text rechts;
 *  stapelt auf Mobil. Inhalte: lib/content.ts → `newsSection`
 * ════════════════════════════════════════════════════════════════ */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { newsSection } from "@/lib/content";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function News() {
  return (
    <section id="news" className="scroll-mt-24 bg-warm-50 py-20 sm:py-28">
      <div className="container flex flex-col gap-12">
        <SectionHeading
          eyebrow={newsSection.eyebrow}
          title={newsSection.title}
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto flex w-full max-w-3xl flex-col gap-6"
        >
          {newsSection.items.map((item) => (
            <motion.li key={item.title} variants={staggerItem}>
              <article className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-soft-lg sm:grid-cols-[14rem_1fr]">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    width={816}
                    height={1048}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-full"
                  />
                </div>
                <div className="flex flex-col gap-3 p-7">
                  <div className="flex items-center gap-3">
                    <Badge>{item.category}</Badge>
                    <time className="text-sm text-warm-500">
                      {formatDate(item.date)}
                    </time>
                  </div>
                  <h3 className="text-balance font-display text-xl font-bold leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="text-pretty leading-relaxed text-warm-700">
                    {item.teaser}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent-strong hover:underline"
                  >
                    Weiterlesen
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
