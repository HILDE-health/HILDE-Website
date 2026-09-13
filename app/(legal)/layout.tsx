import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Logo } from "@/components/logo";

/** Schlichtes Layout für die Rechtstexte (Platzhalter-Seiten). */
export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-base">
      <header className="border-b border-border">
        <div className="container flex h-[4.5rem] items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-warm-600 hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </header>
      <main className="container py-16">
        <article className="mx-auto flex max-w-2xl flex-col gap-4">
          {children}
        </article>
      </main>
    </div>
  );
}
