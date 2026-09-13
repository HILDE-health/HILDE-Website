/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Die Platzhalter unter /public/images sind SVGs. Für echte
    // Fotos brauchst du das nicht – dann diese Zeilen entfernen.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Für externe Bild-CDNs (z. B. ein späteres Headless-CMS) hier
    // die Domains eintragen:
    // remotePatterns: [{ protocol: "https", hostname: "images.example.com" }],
  },
};

export default nextConfig;
