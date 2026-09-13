"use client";

/* ════════════════════════════════════════════════════════════════
 *  SEKTION 1 · Navigation
 *  Sticky-Header, transparent über dem Hero → wird beim Scrollen
 *  weiß mit weichem Schatten. Mobile: Burger-Menü (Slide-down).
 *  Inhalte: lib/content.ts → `nav`
 * ════════════════════════════════════════════════════════════════ */

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { LogIn, Menu, X } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hintergrund umschalten, sobald ein Stück gescrollt wurde
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü bei ESC schließen + Body-Scroll sperren, solange offen
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-border/70 bg-base/90 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Hauptnavigation"
        className="container flex h-[4.5rem] items-center justify-between gap-4"
      >
        <Link
          href="#top"
          className="rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => setMenuOpen(false)}
        >
          <Logo />
        </Link>

        {/* Desktop-Menü */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-warm-700 transition-colors hover:bg-primary/5 hover:text-ink focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
            <Link
              href={nav.cta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogIn className="h-4 w-4" aria-hidden />
              {nav.cta.label}
            </Link>
          </Button>

          {/* Burger-Button (nur mobil/tablet) */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-primary/5 lg:hidden"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobiles Menü */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border/70 bg-base lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-lg font-medium text-warm-800 transition-colors hover:bg-primary/5 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Button asChild variant="accent" size="lg" className="w-full">
                  <Link
                    href={nav.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <LogIn className="h-4 w-4" aria-hidden />
                    {nav.cta.label}
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
