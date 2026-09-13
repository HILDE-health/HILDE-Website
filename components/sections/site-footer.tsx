"use client";

/* ════════════════════════════════════════════════════════════════
 *  SEKTION 7 · Footer
 *  Vier Spalten: Über Hilde · Produkt · Rechtliches · Newsletter
 *  + Copyright-Zeile. Inhalte: lib/content.ts → `footer`, `site`
 * ════════════════════════════════════════════════════════════════ */

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { footer, site } from "@/lib/content";

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="border-t border-border bg-warm-50">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.6fr]">
        {/* Über Hilde */}
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-warm-600">
            {footer.tagline}
          </p>
          <address className="text-sm not-italic text-warm-600">
            {site.address.line1}
            <br />
            {site.address.line2}
          </address>
        </div>

        {/* Link-Spalten */}
        {footer.columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
            <h2 className="font-display text-base font-bold text-ink">
              {col.title}
            </h2>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-600 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Newsletter */}
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-base font-bold text-ink">
            {footer.newsletter.title}
          </h2>
          <p className="text-sm leading-relaxed text-warm-600">
            {footer.newsletter.text}
          </p>
          {subscribed ? (
            <p className="rounded-xl bg-primary/5 px-4 py-3 text-sm text-ink">
              Danke! Bitte bestätigen Sie die E-Mail in Ihrem Postfach.
              (Demo-Modus)
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true); // [PLATZHALTER] an Newsletter-Dienst anbinden
              }}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                E-Mail-Adresse
              </label>
              <Input
                id="newsletter-email"
                type="email"
                required
                placeholder="ihre@email.de"
                className="bg-card"
              />
              <Button type="submit" variant="primary" size="md" aria-label="Newsletter abonnieren">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          )}
          <p className="text-xs leading-relaxed text-warm-500">
            {footer.newsletter.disclaimer}
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm text-warm-500 sm:flex-row">
          <p>{footer.legalLine}</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-ink">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-ink">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
