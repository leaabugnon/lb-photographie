import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Réserver une séance, un concours ou demander un devis : écrivez-moi, je réponds sous 24 h.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
