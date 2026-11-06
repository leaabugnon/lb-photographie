import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Photos et vidéos équestres, concours, sport, animalier et portraits. Sélection de travaux de LB Photographie.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
