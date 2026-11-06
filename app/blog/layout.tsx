import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Photographie équestre dans le Jura",
  description: "Conseils et coulisses d'une photographe et vidéaste équestre dans le Jura et le Jura bernois : concours, cours, matériel.",
  alternates: { canonical: "/blog/" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
