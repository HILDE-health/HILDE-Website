/**
 * Erzeugt lokale SVG-Platzhalterbilder unter /public/images.
 * Aufruf:  node scripts/generate-placeholders.mjs
 *
 * Ersetze die Dateien später einfach durch echte Fotos gleichen
 * Namens (z. B. hero-produkt.jpg) und passe die Endung im Code an.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");
mkdirSync(outDir, { recursive: true });

// Marken-Farben (siehe app/globals.css)
const PETROL = "#014F7B"; // Marken-Blau (früher Petrol)
const CORAL = "#91D4CD"; // Akzent: pastelliges Türkis (früher Coral)
const OFFWHITE = "#FAF7F2";
const WARM = "#EAE3D9";

const svg = (w, h, label, { bg = OFFWHITE, fg = PETROL, accent = CORAL } = {}) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bg}"/>
      <stop offset="1" stop-color="${WARM}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect x="16" y="16" width="${w - 32}" height="${h - 32}" rx="24" fill="none" stroke="${fg}" stroke-opacity="0.25" stroke-width="2" stroke-dasharray="10 8"/>
  <circle cx="${w / 2}" cy="${h / 2 - 18}" r="34" fill="${accent}" fill-opacity="0.18"/>
  <circle cx="${w / 2}" cy="${h / 2 - 18}" r="16" fill="${accent}" fill-opacity="0.55"/>
  <text x="50%" y="${h / 2 + 40}" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.max(14, Math.round(w / 28))}" fill="${fg}" fill-opacity="0.75">${label}</text>
  <text x="50%" y="${h / 2 + 40 + Math.round(w / 26)}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.max(11, Math.round(w / 46))}" fill="${fg}" fill-opacity="0.45">Platzhalter · ${w}×${h}</text>
</svg>`;

const files = [
  ["hero-produkt.svg", 1200, 1400, "Produkt-Rendering"],
  ["was-wir-machen-1.svg", 800, 600, "Sensor / Hardware"],
  ["was-wir-machen-2.svg", 800, 600, "App / Dashboard"],
  ["was-wir-machen-3.svg", 800, 600, "Pflegealltag"],
  ["schritt-1.svg", 900, 700, "Schritt 1 – Einrichten"],
  ["schritt-2.svg", 900, 700, "Schritt 2 – Messen"],
  ["schritt-3.svg", 900, 700, "Schritt 3 – Reagieren"],
  ["news-feature.svg", 1200, 800, "Feature-Story"],
  ["news-1.svg", 600, 400, "News-Bild 1"],
  ["news-2.svg", 600, 400, "News-Bild 2"],
  ["news-3.svg", 600, 400, "News-Bild 3"],
  ["team-1.svg", 600, 720, "Teamfoto 1"],
  ["team-2.svg", 600, 720, "Teamfoto 2"],
  ["team-3.svg", 600, 720, "Teamfoto 3"],
  ["team-4.svg", 600, 720, "Teamfoto 4"],
  ["kontakt.svg", 1000, 1000, "Menschen in der Pflege"],
  ["og-image.svg", 1200, 630, "Hilde – Hydrations-Monitoring"],
];

for (const [name, w, h, label] of files) {
  writeFileSync(join(outDir, name), svg(w, h, label));
  console.log("✓", name);
}
console.log(`\n${files.length} Platzhalter unter public/images erzeugt.`);
