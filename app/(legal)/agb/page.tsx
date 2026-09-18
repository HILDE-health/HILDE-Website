import type { Metadata } from "next";

export const metadata: Metadata = { title: "AGB – HILDE" };

/* TODO: Allgemeine Geschäftsbedingungen ergänzen und rechtlich prüfen lassen. */
export default function AgbPage() {
  return (
    <>
      <h1 className="font-display text-3xl text-ink">
        Allgemeine Geschäftsbedingungen
      </h1>
      <p className="text-warm-600">
        Die Allgemeinen Geschäftsbedingungen für die Nutzung von HILDE werden
        hier veröffentlicht, sobald das Produkt allgemein verfügbar ist. Bis
        dahin gelten die individuellen Vereinbarungen aus dem Pilotbetrieb.
      </p>
    </>
  );
}
