/**
 * ═══════════════════════════════════════════════════════════════
 *  HILDE – Zentraler Website-Content (Deutsch)
 * ───────────────────────────────────────────────────────────────
 *  Alle Texte der Website an einem Ort. Zum Anpassen einfach die
 *  Strings ersetzen – die Sektionen ziehen ihre Inhalte von hier.
 *  Kommentare (// …) markieren noch fiktive Daten wie Kontakt,
 *  Namen, Zitate oder Partner-Logos.
 * ═══════════════════════════════════════════════════════════════
 */

export const site = {
  name: "HILDE",
  claimShort: "Smartes Hydrations-Monitoring für die Pflege",
  email: "kontakt@hilde-health.de", // [PLATZHALTER]
  phone: "+49 (0)30 123 456 78", // [PLATZHALTER]
  phoneHref: "tel:+493012345678", // [PLATZHALTER]
  linkedin: "https://www.linkedin.com/company/hilde-health", // [PLATZHALTER]
  address: {
    line1: "Musterstraße 1", // [PLATZHALTER]
    line2: "10115 Berlin", // [PLATZHALTER]
  },
};

/* ── Navigation ────────────────────────────────────────────── */
export const nav = {
  links: [
    { label: "Produkt", href: "#produkt" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "News", href: "#news" },
    { label: "Team", href: "#team" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  // Login-Button oben rechts – führt zur HILDE-Web-App (öffnet in neuem Tab)
  cta: { label: "Einloggen", href: "https://hilde-app.web.app" },
};

/* ── 2. Hero ──────────────────────────────────────────────────
 * Drei Claim-Varianten zur Auswahl – aktive Variante unten in
 * `hero.claim` eintragen (Index 0–2) oder eigenen Text setzen. */
export const heroClaimVarianten = [
  "We make hydration measurable.",
  "Genug getrunken? HILDE weiß es.",
  "Sicherheit, die man trinken kann.",
];

export const hero = {
  claim: heroClaimVarianten[0],
  subline:
    "HILDE erkennt frühzeitig, wenn pflegebedürftige und ältere Menschen zu wenig trinken – zuverlässig und nahtlos im Pflegealltag.",
  primaryCta: { label: "Produkt entdecken", href: "#produkt" },
  secondaryCta: { label: "Demo vereinbaren", href: "#kontakt" },
  image: {
    src: "/photos/prototype-wireframe.png", // technische Zeichnung des Prototyps
    alt: "Technische Zeichnung des HILDE-Trinkgefäßes auf der smarten Basisstation",
    width: 556,
    height: 925,
  },
  trustBar: {
    label: "Gemeinsam mit Partnern, Einrichtungen und Förderern",
    logos: [
      "Pflege­einrichtung A", // [PLATZHALTER]
      "Klinik­verbund B", // [PLATZHALTER]
      "Forschungs­institut C", // [PLATZHALTER]
      "Förder­programm D", // [PLATZHALTER]
      "Kranken­kasse E", // [PLATZHALTER]
    ],
  },
};

/* ── 3. Was wir machen ────────────────────────────────────── */
export const whatWeDo = {
  eyebrow: "Was wir machen",
  title: "Ein System, das mitdenkt – ohne den Alltag zu stören",
  description:
    "HILDE verbindet unauffällige Sensorik mit einer klaren Übersicht für Pflegekräfte und Angehörige.",
  features: [
    {
      icon: "Cpu",
      title: "Hardware",
      text: "Unsere HILDE misst die Flüssigkeitsaufnahme kontinuierlich und zuverlässig.",
      image: "/images/was-wir-machen-1.svg",
    },
    {
      icon: "LayoutDashboard",
      title: "App & Dashboard",
      text: "Werte, Trends und Warnungen auf einen Blick – auf dem Smartphone oder im Stationsmonitor.",
      image: "/images/was-wir-machen-2.svg",
    },
    {
      icon: "HeartHandshake",
      title: "Integration in den Pflegealltag",
      text: "HILDE fügt sich in bestehende Abläufe und Dokumentationssysteme ein, statt zusätzliche Arbeit zu schaffen.",
      image: "/images/was-wir-machen-3.svg",
    },
  ],
  howItWorks: {
    title: "So funktioniert es",
    steps: [
      {
        title: "Einrichten",
        text: "Sensor anbringen, in der App koppeln, Bewohner:in zuordnen – in wenigen Minuten einsatzbereit.",
        image: "/images/schritt-1.svg",
      },
      {
        title: "Messen",
        text: "HILDE erfasst die Trinkmenge kontinuierlich und im Hintergrund, ganz ohne Zutun der Pflegekraft.",
        image: "/images/schritt-2.svg",
      },
      {
        title: "Reagieren",
        text: "Bei Auffälligkeiten meldet sich HILDE rechtzeitig – mit klarer Handlungsempfehlung.",
        image: "/images/schritt-3.svg",
      },
    ],
  },
};

/* ── 4. News & Projekte ────────────────────────────────────────
 * Aktuell nur ein echter Eintrag. Weitere News einfach als
 * zusätzliche Objekte in `items` ergänzen (gleiche Struktur). */
export const newsSection = {
  eyebrow: "News & Projekte",
  title: "Woran wir gerade arbeiten",
  items: [
    {
      category: "News",
      date: "2026-05-02",
      title: "Meet HILDE Health beim TUM Entrepreneurship Day",
      teaser:
        "Wir waren auf unserer ersten Messe beim TUM Entrepreneurship Day und konnten mit vielen Interessenten sprechen.",
      image: "/photos/tum-entrepreneurship-day.jpeg",
      href: "#news",
    },
  ],
};

/* ── 5. Team ───────────────────────────────────────────────────
 * Fotos sind echt (public/team). Rollen & Zitate sind noch
 * Platzhalter – bitte gegen die echten Angaben tauschen. */
export const team = {
  eyebrow: "Menschen hinter HILDE",
  title: "Ein Team aus Pflege, Technik und Produkt",
  description:
    "Wir verbinden Erfahrung aus der Pflegepraxis mit Produkt- und Ingenieur-Know-how.",
  members: [
    {
      name: "Jonas Jakob",
      role: "Technik & Hardware", // [PLATZHALTER: Rolle prüfen]
      quote: "„Die beste Technik ist die, die niemand bemerkt.“", // [PLATZHALTER]
      image: "/team/jonas-jakob.png",
      // Bildausschnitt weiter oben, damit der Kopf komplett sichtbar ist
      // (Standard ist "50% 50%" = zentriert).
      imagePosition: "50% 18%",
      linkedin: "#", // [PLATZHALTER: LinkedIn-URL]
    },
    {
      name: "Desiree Heine",
      role: "Business & Product", // [PLATZHALTER: Rolle prüfen]
      quote: "„Gute Pflege darf nicht an fehlender Information scheitern.“", // [PLATZHALTER]
      image: "/team/desiree-heine.jpg",
      linkedin: "#", // [PLATZHALTER: LinkedIn-URL]
    },
    {
      name: "Sophia Willmann",
      role: "Pflege & Partnerschaften", // [PLATZHALTER: Rolle prüfen]
      quote: "„Wir bauen HILDE mit den Menschen, die sie später nutzen.“", // [PLATZHALTER]
      image: "/team/sophia-willmann.jpg",
      linkedin: "#", // [PLATZHALTER: LinkedIn-URL]
    },
  ],
};

/* ── 6. Outreach / Kontakt ───────────────────────────────── */
export const contact = {
  eyebrow: "Kontakt",
  title: "Lassen Sie uns über bessere Versorgung sprechen",
  body: "Sie arbeiten in der Pflege? Sind Angehörige? Investor:in? Schreiben Sie uns – wir freuen uns über jede Perspektive und melden uns zeitnah zurück.",
  roles: [
    "Pflegekraft / Einrichtung",
    "Angehörige:r",
    "Ärztin / Arzt",
    "Investor:in",
    "Presse",
    "Sonstiges",
  ],
  privacyNote:
    "Ich habe die Datenschutzerklärung zur Kenntnis genommen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.",
  altChannels: {
    intro: "Oder direkt:",
  },
  image: {
    src: "/photos/trinken.jpg",
    alt: "Eine jüngere Hand reicht einer älteren Person eine Tasse",
    width: 730,
    height: 483,
  },
};

/* ── 7. Footer ───────────────────────────────────────────── */
export const footer = {
  tagline:
    "HILDE entwickelt smartes Hydrations-Monitoring für pflegebedürftige und ältere Menschen.",
  columns: [
    {
      title: "Über HILDE",
      links: [
        { label: "Was wir machen", href: "#produkt" },
        { label: "Über uns", href: "#ueber-uns" },
        { label: "Team", href: "#team" },
        { label: "News & Projekte", href: "#news" },
      ],
    },
    {
      title: "Produkt",
      links: [
        { label: "Sensor & Hardware", href: "#produkt" },
        { label: "App & Dashboard", href: "#produkt" },
        { label: "Für Einrichtungen", href: "#kontakt" },
        { label: "Demo anfragen", href: "#kontakt" },
      ],
    },
    {
      title: "Rechtliches",
      links: [
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
        { label: "AGB", href: "/agb" },
      ],
    },
  ],
  newsletter: {
    title: "Newsletter",
    text: "Updates zu Produkt, Projekten und Terminen – etwa alle acht Wochen, kein Spam.",
    disclaimer:
      "Mit der Anmeldung stimmen Sie dem Erhalt des Newsletters zu. Abmeldung jederzeit möglich.",
  },
  legalLine: `© ${new Date().getFullYear()} HILDE Health GmbH. Alle Rechte vorbehalten.`,
};
