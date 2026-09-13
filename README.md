# Hilde – One-Page-Website

Moderne, seriöse Landingpage für das Health-Tech-Startup **Hilde** –
smartes Hydrations-Monitoring für pflegebedürftige und ältere Menschen.

Aufbau, Feel und Interaktivität sind an eine Produkt-Landingpage angelehnt,
aber auf einen professionellen Pflegekontext übertragen: vertrauensvoll,
warm, dynamisch – nicht verspielt.

---

## Tech-Stack

| Bereich        | Einsatz                                             |
| -------------- | -------------------------------------------------- |
| Framework      | Next.js 14 (App Router) + TypeScript               |
| Styling        | Tailwind CSS + CSS-Variablen für die Farb-Tokens   |
| Animation      | Framer Motion (Scroll-Reveals, Parallax, Hover)    |
| Icons          | lucide-react (+ eigenes LinkedIn-SVG)              |
| UI-Bausteine   | shadcn/ui-Stil: Button, Card, Input, Textarea, Label, Checkbox, Select, Badge |
| Barrierefreiheit | semantisches HTML, Skip-Link, sichtbarer Fokus, `prefers-reduced-motion`, große Touch-Flächen, `lang="de"` |

---

## Setup

Voraussetzung: **Node.js ≥ 18** und npm.

```bash
npm install
npm run dev        # Entwicklung → http://localhost:3000
npm run build      # Produktions-Build
npm run start      # Produktions-Server (nach build)
npm run lint       # ESLint
```

> **Wichtig:** `next dev` und `next build` nicht gleichzeitig laufen lassen –
> beide schreiben in `.next/`. Bei komischen Fehlern hilft `rm -rf .next`.

---

## Projektstruktur

```
app/
  layout.tsx            Font (Inter, Body), Metadaten, Skip-Link
  page.tsx              Setzt die Sektionen in Reihenfolge zusammen
  globals.css           ← FARBEN & Basis-Stile (siehe unten)
  (legal)/              Platzhalter-Seiten: Impressum, Datenschutz, AGB

components/
  sections/             Eine Datei pro Seiten-Abschnitt
    navigation.tsx      1 · Sticky-Nav (transparent → weiß beim Scrollen)
    hero.tsx            2 · Hero mit Claim, CTAs, Float-Bild, Trust-Bar
    what-we-do.tsx      3 · Feature-Cards + "So funktioniert es" (3 Schritte)
    news.tsx            4 · Filter-Tabs + Feature-Story + kleine Cards
    team.tsx            5 · Team-Grid mit Hover-Skalierung + Social-Icons
    contact.tsx         6 · Ansprache + Formular (Rolle-Dropdown, DSGVO)
    site-footer.tsx     7 · 4 Spalten + Newsletter + Copyright
  ui/                   shadcn/ui-Basiskomponenten (an Palette angepasst)
  logo.tsx              Wortmarke „Hilde" (Platzhalter – gegen echtes Logo tauschen)
  reveal.tsx            Wrapper für „beim Scrollen einblenden"
  section-heading.tsx   Einheitlicher Kicker + Headline + Text
  media-frame.tsx       Optionaler Bild-Rahmen mit Platzhalter-Tag
  motion-provider.tsx   Globale Framer-Motion-Config (reduzierte Bewegung)

lib/
  content.ts            ← ALLE TEXTE der Seite (Platzhalter, auf Deutsch)
  animations.ts         Zentrale Animations-Presets (Dauer, Easing, Stagger)
  utils.ts              cn()-Helper

public/
  team/                 Echte Team-Fotos (Desiree, Jonas, Sophia)
  photos/               prototype-wireframe.png (Hero), trinken.jpg (Kontakt)
  images/               Generierte SVG-Platzhalter für die übrigen Bilder

scripts/
  generate-placeholders.mjs   Erzeugt die SVG-Platzhalter neu
```

---

## Was wo anpassen?

### 1. Farben

Alle Farbwerte liegen als HSL-CSS-Variablen in **`app/globals.css`** im
`:root`-Block:

```css
--base:          38 44% 96%;   /* Off-White        #FAF7F2 */
--primary:      202 98% 24%;   /* Blau (Flächen)   #014F7B */
--ink:          201 100% 36%;  /* Blau (Headlines) #0076B6 */
--accent:       174 44% 70%;   /* Pastell-Türkis   #91D4CD  (CTAs, Kicker) */
--accent-strong:183 46% 29%;   /* Türkis-Text auf hellem Grund */
--warm-50 … --warm-900         /* warmgraue Neutraltöne */
```

Format ist `H S% L%` (ohne Klammern), damit Tailwind Transparenzen wie
`bg-primary/10` erzeugen kann. Nach dem Ändern nichts weiter nötig –
`tailwind.config.ts` referenziert nur diese Variablen.

Radius (Rundung) ebenfalls dort: `--radius: 1rem;`

### 2. Schriften

- **Überschriften:** Helvetica Neue Bold (Systemschrift, kein Web-Font-Load).
  Fallback-Stack in **`tailwind.config.ts`** → `theme.extend.fontFamily.display`
  (`"Helvetica Neue"` → Helvetica → Arial). Genutzt über die Klasse `font-display`
  bzw. automatisch für `h1`–`h4` (siehe `app/globals.css`, `@layer base`).
- **Fließtext:** `Inter`, self-hosted über `next/font/google` in **`app/layout.tsx`**.

Zum Wechseln der Headline-Schrift einfach den `display`-Stack in
`tailwind.config.ts` anpassen (ggf. einen Web-Font in `layout.tsx` laden und
per CSS-Variable einsetzen).

### 3. Texte

Komplett in **`lib/content.ts`**. Jeder Abschnitt hat ein eigenes Objekt
(`hero`, `whatWeDo`, `newsSection`, `team`, `contact`, `footer` …).
Mit `[PLATZHALTER]` markierte Stellen müssen noch mit echten Inhalten
gefüllt werden (Zahlen, Zitate, Rollen, Links, Rechtstexte).

**Hero-Claim:** In `heroClaimVarianten` stehen drei Vorschläge, `hero.claim`
wählt aktuell den ersten. Einfach Index tauschen oder eigenen Text setzen:

1. „Hydration, die Leben schützt.“ *(aktiv)*
2. „Genug getrunken? Hilde weiß es.“
3. „Sicherheit, die man trinken kann.“

### 4. Bilder

Echte Bilder liegen unter `public/team/` und `public/photos/`.
Die restlichen Bildstellen nutzen generierte SVG-Platzhalter aus
`public/images/` – Pfade stehen jeweils in `lib/content.ts`.

Zum Ersetzen: echte Datei in `public/` ablegen und den `src`-Pfad (sowie
ggf. `width`/`height`) in `lib/content.ts` anpassen. Für Bilder von einem
externen CDN die Domain in `next.config.mjs` unter `images.remotePatterns`
eintragen. Wenn keine SVG-Platzhalter mehr verwendet werden, kann in
`next.config.mjs` der `dangerouslyAllowSVG`-Block entfernt werden.

Platzhalter neu generieren (z. B. nach Größenänderung):

```bash
node scripts/generate-placeholders.mjs
```

### 5. Animationen

Timing, Easing und Stagger-Abstände zentral in **`lib/animations.ts`**.
`prefers-reduced-motion` wird global respektiert (siehe
`components/motion-provider.tsx` und `app/globals.css`).

### 6. Navigation & Sektionen

Reihenfolge und Sichtbarkeit der Abschnitte in **`app/page.tsx`**.
Menüpunkte und der CTA-Button in `lib/content.ts` → `nav`.
Die Anker (`#produkt`, `#news`, `#team`, `#ueber-uns`, `#kontakt`) sind
als `id` an den jeweiligen `<section>` gesetzt.

---

## Noch offen (bewusst als Platzhalter)

- **Formular-Zustellung:** Kontakt- und Newsletter-Formular zeigen aktuell
  nur einen Erfolgs-Zustand (Demo-Modus). Für den Live-Betrieb an ein
  Backend oder einen Formdienst anbinden – Stellen sind in
  `components/sections/contact.tsx` und `site-footer.tsx` kommentiert.
- **Rechtstexte:** `app/(legal)/…` enthält nur Gerüste. Impressum,
  Datenschutzerklärung und AGB müssen ergänzt und juristisch geprüft werden.
- **Team-Rollen & Zitate:** Fotos sind echt, Rollen/Zitate/LinkedIn-Links
  in `lib/content.ts` sind Platzhalter.
- **Logo:** `components/logo.tsx` ist ein Schriftzug-Platzhalter.
- **SEO/OG:** `app/layout.tsx` hat Basis-Metadaten; ein echtes OG-Bild
  (`public/images/og-image.svg` → durch JPG/PNG ersetzen) einbinden.
