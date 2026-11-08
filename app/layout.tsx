import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lb-photographie.ch"),
  title: {
    default: "Léa Bugnon — Photographe & vidéaste | LB Photographie",
    template: "%s — LB Photographie",
  },
  description: "Léa Bugnon, photographe et vidéaste en Suisse (LB Photographie) : entreprises et marques, équestre, sport, animaux et événements.",
  openGraph: {
    type: "website",
    locale: "fr_CH",
    siteName: "LB Photographie",
    title: "Léa Bugnon — Photographe & vidéaste | LB Photographie",
    description: "Photographe et vidéaste en Suisse : entreprises, équestre, sport, animaux et événements.",
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
    { "@type": "AdministrativeArea", name: "Suisse romande" },
    { "@type": "Country", name: "Suisse" },
  ],
  sameAs: ["https://www.instagram.com/lb_.photographie/"],
  knowsAbout: ["Photographie équestre", "Vidéographie", "Photographie d'entreprise", "Photographie animalière", "Photographie de sport", "Photographie d'événement"],
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Léa Bugnon",
  jobTitle: "Photographe et vidéaste",
  url: "https://lb-photographie.ch",
  worksFor: { "@type": "ProfessionalService", name: "LB Photographie", url: "https://lb-photographie.ch" },
  sameAs: ["https://www.instagram.com/lb_.photographie/"],
  knowsAbout: ["Photographie équestre", "Vidéographie", "Photographie d'entreprise", "Photographie animalière", "Photographie de sport", "Photographie d'événement"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
