import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lb-photographie.ch"),
  title: {
    default: "LB Photographie — Photographie & vidéographie",
    template: "%s — LB Photographie",
  },
  description: "Photographe et vidéaste en Suisse : contenu pour entreprises, shootings pour particuliers, cours, entraînements et concours équestres. Léa Bugnon — LB Photographie.",
  openGraph: {
    type: "website",
    locale: "fr_CH",
    siteName: "LB Photographie",
    title: "LB Photographie — Photographie & vidéographie",
    description: "Entreprises, particuliers, cavaliers : photo et vidéo sur mesure en Suisse.",
    images: [{ url: "/photos/hero.webp", width: 2400, height: 1600 }],
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LB Photographie",
  url: "https://lb-photographie.ch",
  description: "Photographe et vidéaste : entreprises, particuliers, cours, entraînements et concours équestres.",
  image: "https://lb-photographie.ch/photos/hero.webp",
  email: "info@lb-photographie.ch",
  founder: { "@type": "Person", name: "Léa Bugnon" },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Jura" },
    { "@type": "AdministrativeArea", name: "Jura bernois" },
    { "@type": "Country", name: "Suisse" },
  ],
  knowsAbout: ["Photographie équestre", "Vidéographie", "Photographie d'entreprise", "Photographie animalière"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
