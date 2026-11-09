import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { SITE } from "@/lib/config";
import "./globals.css";

const titre = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-titre",
  display: "swap",
});

const texte = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-texte",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.nom} — ${SITE.promesse}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.nom} — ${SITE.promesse}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.nom,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.nom} — ${SITE.promesse}`,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F3D2E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
      <body>{children}</body>
    </html>
  );
}
