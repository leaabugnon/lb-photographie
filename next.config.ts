import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Génère un site 100% statique dans le dossier "out/" au build.
  // Parfait pour l'hébergement Netlify : aucun serveur Next requis.
  output: "export",

  // Requis en mode export si un jour tu utilises <Image> de next/image.
  // (Tes photos passent par Cloudinary, donc ça reste sans effet aujourd'hui.)
  images: { unoptimized: true },

  // URLs propres avec slash final (/about/) → plus robuste sur hébergement statique.
  trailingSlash: true,
};

export default nextConfig;
