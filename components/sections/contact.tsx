"use client";

/* ════════════════════════════════════════════════════════════════
 *  SEKTION 6 · Outreach / Kontakt
 *  Links: emotionale Ansprache + Foto + alternative Kontaktwege.
 *  Rechts: Formular (Name, E-Mail, Rolle-Dropdown, Nachricht)
 *          mit DSGVO-Checkbox.
 *  Inhalte: lib/content.ts → `contact`, `site`
 *  HINWEIS: Der Submit ist ein Platzhalter (keine echte Zustellung).
 *  Für den Live-Betrieb an ein Backend / einen Formdienst anbinden.
 * ════════════════════════════════════════════════════════════════ */

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { LinkedInIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contact, site } from "@/lib/content";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [role, setRole] = useState("");
  const [privacy, setPrivacy] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // [PLATZHALTER] Hier an Backend/Formdienst anbinden.
    setSent(true);
  }

  return (
    <section id="kontakt" className="scroll-mt-24 bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ── Linke Spalte: Ansprache ─────────────────────────── */}
        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden />
              {contact.eyebrow}
            </span>
            <h2 className="text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
              {contact.title}
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-primary-foreground/80">
              {contact.body}
            </p>
          </Reveal>

          <Reveal className="overflow-hidden rounded-3xl border border-white/10 shadow-soft-lg">
            <Image
              src={contact.image.src}
              alt={contact.image.alt}
              width={contact.image.width}
              height={contact.image.height}
              className="aspect-[3/2] w-full object-cover"
            />
          </Reveal>

          <Reveal className="flex flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-wide text-primary-foreground/60">
              {contact.altChannels.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition-colors hover:bg-white/10"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {site.phone}
              </a>
              <a
                href={site.linkedin}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition-colors hover:bg-white/10"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        {/* ── Rechte Spalte: Formular ─────────────────────────── */}
        <Reveal className="rounded-3xl bg-base p-6 text-foreground shadow-soft-lg sm:p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 py-12 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-ink">
                <Mail className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="font-display text-2xl text-ink">Vielen Dank!</h3>
              <p className="max-w-sm text-warm-600">
                Ihre Nachricht ist angekommen (Demo-Modus – noch keine echte
                Zustellung). Wir melden uns zeitnah zurück.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" autoComplete="name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="role">Ich bin …</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger id="role" aria-label="Rolle auswählen">
                    <SelectValue placeholder="Bitte auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {contact.roles.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Worum geht es?"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={privacy}
                  onCheckedChange={(v) => setPrivacy(v === true)}
                  required
                  className="mt-0.5"
                />
                <Label
                  htmlFor="privacy"
                  className="text-sm font-normal leading-relaxed text-warm-600"
                >
                  {contact.privacyNote}
                </Label>
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={!privacy}
                className="w-full"
              >
                Nachricht senden
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
