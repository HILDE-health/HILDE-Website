import type { Config } from "tailwindcss";

/**
 * ─────────────────────────────────────────────────────────────
 *  HILDE – Design Tokens
 *  Farben, Fonts, Radien und Schatten zentral anpassbar.
 *  Die eigentlichen Farbwerte liegen als CSS-Variablen in
 *  app/globals.css (Abschnitt ":root"). Hier nur die Bindung.
 * ─────────────────────────────────────────────────────────────
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Marken-Palette (Werte: app/globals.css)
        base: "hsl(var(--base) / <alpha-value>)", // warmes Off-White #FAF7F2
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)", // tiefes Petrol #1F5F5B
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)", // pastelliges Türkis #91D4CD
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          strong: "hsl(var(--accent-strong) / <alpha-value>)", // Akzent-Text auf hellem Grund
        },
        // Schriftfarbe für Headlines & Marken-Text: Honolulu Blue #0076B6
        ink: "hsl(var(--ink) / <alpha-value>)",
        // Warmgraue Neutraltöne
        warm: {
          50: "hsl(var(--warm-50) / <alpha-value>)",
          100: "hsl(var(--warm-100) / <alpha-value>)",
          200: "hsl(var(--warm-200) / <alpha-value>)",
          300: "hsl(var(--warm-300) / <alpha-value>)",
          400: "hsl(var(--warm-400) / <alpha-value>)",
          500: "hsl(var(--warm-500) / <alpha-value>)",
          600: "hsl(var(--warm-600) / <alpha-value>)",
          700: "hsl(var(--warm-700) / <alpha-value>)",
          800: "hsl(var(--warm-800) / <alpha-value>)",
          900: "hsl(var(--warm-900) / <alpha-value>)",
        },
        // shadcn/ui Aliasse
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
      },
      fontFamily: {
        // Headlines / Marken-Text: Helvetica Neue Bold (mit Fallbacks)
        display: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
        // Body: saubere Sans-Serif
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px hsl(var(--primary) / 0.08), 0 8px 24px -4px hsl(var(--primary) / 0.10)",
        "soft-lg":
          "0 4px 16px -4px hsl(var(--primary) / 0.10), 0 16px 48px -8px hsl(var(--primary) / 0.14)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
