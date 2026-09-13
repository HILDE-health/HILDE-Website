import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* ── Fonts ──────────────────────────────────────────────────────
 * Headlines: Helvetica Neue Bold – Systemschrift, kein Web-Font-
 *            Ladevorgang. Fallback-Stack in tailwind.config.ts
 *            (fontFamily.display) → Helvetica / Arial.
 * Body:      Inter (self-hosted über next/font).
 * ────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hilde – Smartes Hydrations-Monitoring für die Pflege",
  description:
    "Hilde entwickelt ein smartes Hydrations-Monitoring für pflegebedürftige und ältere Menschen – zuverlässig, unaufdringlich und alltagstauglich.",
  openGraph: {
    title: "Hilde – Smartes Hydrations-Monitoring für die Pflege",
    description:
      "Zuverlässige Flüssigkeitsüberwachung für pflegebedürftige und ältere Menschen.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {/* Ohne JavaScript: Scroll-Animationen deaktivieren, damit
            alle Inhalte sichtbar bleiben (Barrierefreiheit). */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {/* Skip-Link für Tastatur- und Screenreader-Nutzer:innen */}
        <a href="#inhalt" className="sr-only sr-focusable">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
