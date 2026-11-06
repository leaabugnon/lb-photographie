import Link from "next/link";
import Reveal from "@/components/Reveal";
import GalerieBanner from "@/components/GalerieBanner";

type Tile = { src: string; label: string; cat: string; flex: number; wide?: boolean; alt: string };

// Mosaïque éditoriale : chaque ligne a sa propre répartition des largeurs.
const rows: Tile[][] = [
  [
    { src: "/photos/evenement-csio-3.webp", label: "Sports équestres", cat: "Sports équestres", flex: 7, wide: true, alt: "Cavalière en concours de saut d'obstacles" },
    { src: "/photos/equestre-contrejour.webp", label: "Chevaux", cat: "Chevaux", flex: 5, alt: "Cavalière et cheval au coucher du soleil" },
  ],
  [
    { src: "/photos/equestre-cabre.webp", label: "Chevaux", cat: "Chevaux", flex: 4, alt: "Cheval cabré et cavalière" },
    { src: "/photos/animalier-berger.webp", label: "Animalier", cat: "Animalier", flex: 4, alt: "Berger en action" },
    { src: "/photos/sport-football.webp", label: "Sport", cat: "Sport", flex: 4, alt: "Match de football" },
  ],
  [
    { src: "/photos/equestre-foret.webp", label: "Chevaux", cat: "Chevaux", flex: 4, alt: "Cheval blanc en forêt" },
    { src: "/photos/evenement-csio-podium.webp", label: "Sports équestres", cat: "Sports équestres", flex: 8, wide: true, alt: "Tour d'honneur après une victoire" },
  ],
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-img" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <div>
            <p className="eyebrow" style={{ color: "rgba(247,244,239,0.75)", marginBottom: "1.2rem" }}>Entreprises · Équestre · Événements</p>
            <h1 className="display">Photographie<br /><em>& vidéographie</em></h1>
          </div>
          <Link href="/services" className="btn on-dark">Voir les prestations</Link>
        </div>
        <div className="scroll-cue" aria-hidden="true" />
      </section>

      {/* Intro */}
      <GalerieBanner />

      <section className="intro">
        <Reveal>
          <p className="lead">
            Photographe et vidéaste en Suisse, je crée des images pour les entreprises, les particuliers et les cavaliers.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p className="side">
            Contenu pour votre communication, shootings, concours et séances d&rsquo;entraînement : chaque projet est différent, et tout se fait sur demande.
          </p>
          <Link href="/about" className="btn-ghost">Qui suis-je ?</Link>
        </Reveal>
      </section>

      {/* Mosaïque de photos */}
      <section className="mosaic">
        {rows.map((row, i) => (
          <Reveal key={i}>
            <div className="mosaic-row">
              {row.map(t => (
                <Link
                  key={t.src}
                  href={`/portfolio/?cat=${encodeURIComponent(t.cat)}`}
                  className={`mosaic-item${t.wide ? " wide" : ""}`}
                  style={{ flex: t.flex }}
                >
                  <img src={t.src} alt={t.alt} loading="lazy" />
                  <span>{t.label}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        ))}
      </section>
      <div className="mosaic-foot">
        <Link href="/portfolio" className="btn-ghost">Voir tout le portfolio</Link>
      </div>

      {/* Appel final */}
      <section className="closing">
        <div className="closing-img" style={{ backgroundImage: "url('/photos/cours-cross-2.webp')" }} />
        <div className="closing-copy">
          <p className="eyebrow" style={{ color: "rgba(247,244,239,0.55)" }}>Prestations</p>
          <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Entreprises, particuliers,<br /><em>cavaliers.</em>
          </h2>
          <p>Contenu pour votre communication, shooting, cours ou concours : photos, vidéo ou les deux. Dites-moi ce que vous avez en tête, je vous réponds avec une proposition adaptée.</p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/services" className="btn on-dark">Découvrir</Link>
            <Link href="/contact" className="btn-ghost" style={{ color: "var(--ivory)" }}>Me contacter</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
