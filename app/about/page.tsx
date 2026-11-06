import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Léa Bugnon, photographe et vidéaste équestre basée en Suisse : concours, shootings privés et contenu pour écuries et entreprises.",
};

const references = ["Amazonia"];

export default function About() {
  return (
    <div style={{ paddingTop: "72px" }}>
      <div style={{ padding: "4rem 3rem 6rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", maxWidth: "1100px" }}>
        <div>
          <div style={{ aspectRatio: "3/4", backgroundImage: "url('/photos/a-propos.webp')", backgroundSize: "cover", backgroundPosition: "center", marginBottom: "1rem" }} />
          <p style={{ fontSize: "12px", color: "var(--text-light)", letterSpacing: "0.1em" }}>Léa Bugnon — LB Photographie</p>
        </div>
        <div style={{ paddingTop: "2rem" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: "3rem" }}>
            À propos
          </h1>
<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
  <p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: 1.8 }}>
    Passionnée par le monde équestre depuis de nombreuses années, je suis photographe et vidéaste basée en Suisse. Mon objectif est de capturer des images authentiques qui mettent en valeur la relation entre le cavalier et son cheval, l&rsquo;émotion d&rsquo;un instant ou l&rsquo;intensité d&rsquo;une compétition.
  </p>

  <p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: 1.8 }}>
    Je réalise des reportages lors de concours, des shootings privés ainsi que du contenu photo et vidéo pour les écuries, les entreprises et les marques. Chaque projet est différent et j&rsquo;accorde une attention particulière aux détails afin de créer des images qui vous ressemblent.
  </p>

<p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: 1.8 }}>
  Je travaille également régulièrement sur des concours hippiques avec photoprod.ch.
</p>
<p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: 1.8 }}>
  Bien que je sois spécialisée dans la photographie équestre, j&rsquo;adore aussi capturer des images de sport, d&rsquo;animaux et de portraits. Mon équipement principal est un Nikon Z9, qui me permet de saisir les moments les plus rapides avec une grande précision.
</p>
</div>
        </div>
      </div>
      <section style={{ padding: "0 var(--gutter) 6rem", maxWidth: "1100px" }}>
        <p className="eyebrow leather" style={{ marginBottom: "1.2rem" }}>Ils m&rsquo;ont fait confiance</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem 2.5rem", borderTop: "1px solid var(--border)", paddingTop: "1.8rem" }}>
          {references.map(r => (
            <p key={r} className="display" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>{r}</p>
          ))}
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: '1fr 1fr'"] { grid-template-columns: 1fr !important; gap: 2rem !important; }
          div[style*="padding: 4rem 3rem"] { padding: 3rem 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
