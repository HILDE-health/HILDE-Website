import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum – HILDE" };

/* TODO: Pflichtangaben nach § 5 DDG / § 18 MStV vervollständigen
   (Registereintrag, USt-IdNr., vertretungsberechtigte Person) und
   rechtlich prüfen lassen. */
export default function ImpressumPage() {
  return (
    <>
      <h1 className="font-display text-3xl text-ink">Impressum</h1>
      <h2 className="font-display text-xl text-ink">Angaben gemäß § 5 DDG</h2>
      <p className="text-warm-600">
        HILDE Health GmbH
        <br />
        Musterstraße 1, 10115 Berlin
      </p>
      <h2 className="font-display text-xl text-ink">Kontakt</h2>
      <p className="text-warm-600">
        E-Mail: kontakt@hilde-health.de
        <br />
        Telefon: +49 (0)30 123 456 78
      </p>
    </>
  );
}
