import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutz – HILDE" };

/* TODO: Vollständige Datenschutzerklärung nach DSGVO ergänzen und
   rechtlich prüfen lassen (Kontaktformular, Newsletter, Hosting,
   eingesetzte Dienste, Betroffenenrechte). */
export default function DatenschutzPage() {
  return (
    <>
      <h1 className="font-display text-3xl text-ink">Datenschutzerklärung</h1>
      <p className="text-warm-600">
        Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten
        Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen
        (DSGVO, BDSG).
      </p>
      <h2 className="font-display text-xl text-ink">Verantwortlich</h2>
      <p className="text-warm-600">
        HILDE Health GmbH, Musterstraße 1, 10115 Berlin,
        kontakt@hilde-health.de
      </p>
      <h2 className="font-display text-xl text-ink">Kontaktaufnahme</h2>
      <p className="text-warm-600">
        Wenn Sie uns über das Formular oder per E-Mail kontaktieren, verarbeiten
        wir Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen. Diese Daten geben wir nicht ohne Ihre Einwilligung
        weiter.
      </p>
      <h2 className="font-display text-xl text-ink">Ihre Rechte</h2>
      <p className="text-warm-600">
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie ein
        Beschwerderecht bei einer Aufsichtsbehörde.
      </p>
    </>
  );
}
