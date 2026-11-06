"use client";
import { useEffect, useState } from "react";
import { galerie } from "@/lib/galerie";

// Affiche le bandeau seulement si la galerie est active et pas expirée.
// La date est vérifiée dans le navigateur : plus besoin de republier pour le retirer.
export default function GalerieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!galerie.actif || !galerie.lien || galerie.lien === "https://") return;
    if (galerie.jusquAu) {
      const fin = new Date(galerie.jusquAu + "T23:59:59");
      if (!isNaN(fin.getTime()) && new Date() > fin) return;
    }
    setVisible(true);
  }, []);

  if (!visible) return null;
  return (
    <section className="galerie-banner">
      <div>
        <p className="eyebrow leather">En ligne</p>
        <h2 className="display">{galerie.titre}</h2>
        <p className="galerie-text">{galerie.texte}</p>
      </div>
      <a className="btn" href={galerie.lien} target="_blank" rel="noopener noreferrer">{galerie.bouton}</a>
    </section>
  );
}
