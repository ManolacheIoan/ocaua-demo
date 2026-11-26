import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site, TBD } from "@/content/site";
import { SITE_URL } from "@/lib";
import { CallBar, DemoBand, Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Reveal";

// next/font descarcă fonturile la build și le servește local, de pe același domeniu.
const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], style: ["normal", "italic"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + "/"),
  title: { default: `${site.nume} – Tecuci`, template: `%s | ${site.numeScurt}, Tecuci` },
  description: site.descriere,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: site.nume,
    title: `${site.nume} – Tecuci`,
    description: site.descriere,
    url: "./",
    images: [{ url: "og.jpg", width: 1200, height: 630, alt: `${site.nume}, Tecuci` }],
  },
  twitter: { card: "summary_large_image", title: `${site.nume} – Tecuci`, description: site.descriere, images: ["og.jpg"] },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = { themeColor: "#3a2419" };

const a = site.adresa;
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "LodgingBusiness"],
  name: site.nume,
  url: SITE_URL + "/",
  telephone: site.telefon.tel,
  foundingDate: String(site.anInfiintare),
  servesCuisine: "Românească",
  address: {
    "@type": "PostalAddress",
    streetAddress: a.strada,
    addressLocality: a.localitate,
    addressRegion: "Galați",
    ...(a.codPostal !== TBD ? { postalCode: a.codPostal } : {}),
    addressCountry: a.tara,
  },
  hasMap: site.google.mapsUrl,
  image: SITE_URL + "/og.jpg",
  areaServed: "Tecuci, județul Galați",
  acceptsReservations: true,
  ...(site.facebook.url.startsWith("http") ? { sameAs: [site.facebook.url] } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <DemoBand />
        <Header />
        <main id="continut">{children}</main>
        <Footer />
        <CallBar />
        <RevealObserver />
      </body>
    </html>
  );
}
