import { MotionProvider } from "@/components/motion-provider";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navigation";
import { News } from "@/components/sections/news";
import { SiteFooter } from "@/components/sections/site-footer";
import { Team } from "@/components/sections/team";
import { WhatWeDo } from "@/components/sections/what-we-do";

/**
 * ────────────────────────────────────────────────────────────────
 *  HILDE · One-Page-Website
 *  Sektionen liegen einzeln unter components/sections/ und lassen
 *  sich hier in der Reihenfolge tauschen oder entfernen.
 *   1. Navigation   2. Hero        3. Was wir machen
 *   4. News         5. Team        6. Kontakt          7. Footer
 * ────────────────────────────────────────────────────────────────
 */
export default function HomePage() {
  return (
    <MotionProvider>
      <Navigation />

      <main id="inhalt">
        <Hero />
        <WhatWeDo />
        <News />
        <Team />
        <Contact />
      </main>

      <SiteFooter />
    </MotionProvider>
  );
}
