"use client";

/* ════════════════════════════════════════════════════════════════
 *  SEKTION 5 · Team – "Menschen hinter Hilde"
 *  Grid mit Team-Cards (Foto, Name, Rolle, Zitat).
 *  Hover: sanfte Skalierung + Social-Icons blenden ein.
 *  Fotos: public/team – Inhalte: lib/content.ts → `team`
 * ════════════════════════════════════════════════════════════════ */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { LinkedInIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { site, team } from "@/lib/content";

export function Team() {
  return (
    <section id="ueber-uns" className="scroll-mt-24 bg-base py-20 sm:py-28">
      <div className="container flex flex-col gap-14">
        <SectionHeading
          eyebrow={team.eyebrow}
          title={team.title}
          description={team.description}
          align="center"
        />

        <motion.ul
          id="team"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto grid max-w-4xl scroll-mt-24 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.members.map((member) => (
            <motion.li key={member.name} variants={staggerItem}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative flex h-full flex-col items-center gap-3 rounded-3xl border border-border bg-card px-5 pb-5 pt-7 text-center shadow-soft transition-shadow hover:shadow-soft-lg"
              >
                {/* Runder Bildausschnitt */}
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-1 ring-border sm:h-32 sm:w-32">
                  <Image
                    src={member.image}
                    alt={`Porträt von ${member.name}`}
                    width={256}
                    height={256}
                    style={{
                      objectPosition:
                        (member as { imagePosition?: string }).imagePosition ??
                        "50% 50%",
                    }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wide text-accent-strong">
                    {member.role}
                  </p>
                  <p className="text-pretty text-sm leading-relaxed text-warm-700">
                    {member.quote}
                  </p>
                </div>

                {/* Social-Icons: erscheinen beim Hover / Fokus */}
                <div className="mt-1 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <Link
                    href={member.linkedin}
                    aria-label={`${member.name} auf LinkedIn`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-ink transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                  </Link>
                  <a
                    href={`mailto:${site.email}`}
                    aria-label={`${member.name} per E-Mail kontaktieren`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-ink transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Mail className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </motion.article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
