import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "Photo et vidéo sur mesure : contenu et interviews pour entreprises et marques, shootings pour particuliers, cours et entraînements équestres, concours. Devis sur demande.",
};

const packs = [
  { name: "Photos", note: "Environ 20 photos, ou un peu plus." },
  { name: "Vidéo", note: "Une vidéo montée d'environ 50 secondes." },
  { name: "Photos + vidéo", note: "La vidéo d'environ 50 secondes et 10 à 15 photos." },
];

const concours = [
  { name: "Photos", note: "Vos parcours en images." },
  { name: "Vidéo", note: "Votre parcours filmé." },
];

const steps = [
  { n: "1", title: "Vous me contactez", text: "Votre projet, la date, le lieu : quelques lignes suffisent." },
  { n: "2", title: "Je vous réponds", text: "Sous 24 h, avec une proposition et un devis adaptés à votre projet." },
  { n: "3", title: "Je viens, vous recevez vos images", text: "Photos et/ou vidéo, livrées une fois la séance terminée." },
];

export default function Prestations() {
  return (
    <div style={{ paddingTop: "72px" }}>
      <div className="page-wrap">
        <div className="page-head">
          <p className="eyebrow leather">Prestations</p>
          <h1 className="display">Des images pour vos projets, <em>à votre mesure.</em></h1>
          <p>Entreprises, particuliers, cavaliers : on commence par un message, et je vous réponds avec une proposition adaptée.</p>
        </div>

        {/* 01 — Entreprises & marques */}
        <section id="entreprises" className="offer">
          <Reveal>
            <h2 className="display">Entreprises & marques</h2>
            <p className="text">
              Je crée du contenu photo et vidéo selon vos besoins, interviews comprises, pour vos différents canaux : réseaux sociaux, site web, communication.
            </p>
            <p className="text">Tout se fait sur demande.</p>
            <div style={{ marginTop: "2.2rem" }}>
            <Link href="/contact?type=entreprise" className="btn">Me contacter</Link>
            </div>
          </Reveal>
          <Reveal className="offer-img landscape" delay={120}>
            <img src="/photos/amazonia-marque.webp" alt="Shooting avec les produits amazonia" loading="lazy" />
          </Reveal>
        </section>

        {/* 02 — Particuliers */}
        <section id="particuliers" className="offer reverse">
          <Reveal>
            <h2 className="display">Shootings pour particuliers</h2>
            <p className="text">
              Une séance photo, vidéo ou les deux, avec votre cheval ou sans. Dites-moi ce que vous imaginez, le lieu, le style : on construit la séance ensemble.
            </p>
            <div style={{ display: "flex", gap: "1.8rem", alignItems: "center", flexWrap: "wrap", marginTop: "2rem" }}>
              <Link href="/contact?type=particulier" className="btn">Me contacter</Link>
              <Link href="/portfolio" className="btn-ghost">Voir des exemples</Link>
            </div>
          </Reveal>
          <Reveal className="offer-img" delay={120}>
            <img src="/photos/equestre-contrejour.webp" alt="Cavalière et cheval au coucher du soleil" loading="lazy" />
          </Reveal>
        </section>

        {/* Cavaliers */}
        <div className="section-title">
          <p className="eyebrow leather">Pour les cavaliers</p>
          <h2 className="display">Cours, entraînements <em>et concours</em></h2>
          <p>Que vous prépariez un parcours ou que vous veniez de le courir, je garde une trace du moment.</p>
        </div>
        <div className="duo">
          <Reveal>
            <div id="cours" className="duo-card">
              <img src="/photos/cours-cross-1.webp" alt="Cheval et cavalier lors d'un cours de cross" loading="lazy" />
              <h3>Cours & entraînements</h3>
              <p className="text">
                Les exercices se répètent : je peux faire des photos <em>et</em> de la vidéo pendant la même séance, sans que vous ayez à choisir.
              </p>
              <div className="packs">
                {packs.map(p => (
                  <div key={p.name} className="pack">
                    <p className="pack-name">{p.name}</p>
                    <p className="pack-note">{p.note}</p>
                  </div>
                ))}
              </div>
              <p className="card-note">
                Clubs et sociétés de cavalerie : je viens sur place et chaque cavalier peut choisir son pack.
              </p>
              <div className="card-action">
                <Link href="/contact?type=cours" className="btn">Me contacter</Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div id="concours" className="duo-card">
              <img src="/photos/evenement-csio-3.webp" alt="Cavalière en concours de saut d'obstacles" loading="lazy" />
              <h3>Concours équestres</h3>
              <p className="text">
                Un parcours n&rsquo;a lieu qu&rsquo;une fois : on choisit ensemble ce qui compte le plus pour vous, en photo ou en vidéo, selon les possibilités sur place.
              </p>
              <div className="packs">
                {concours.map(c => (
                  <div key={c.name} className="pack">
                    <p className="pack-name">{c.name}</p>
                    <p className="pack-note">{c.note}</p>
                  </div>
                ))}
              </div>
              <p className="card-note">Vous participez à un concours ? Contactez-moi directement : je vous dis ce qui est possible, notamment pour la vidéo.</p>
              <div className="card-action">
                <Link href="/contact?type=concours" className="btn">Me contacter</Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Déroulé */}
        <Reveal>
          <div className="steps">
            {steps.map(s => (
              <div key={s.n} className="step">
                <p className="step-n">{s.n}</p>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="cta-band">
          <p className="display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>Un projet en tête ? <em>Parlons-en.</em></p>
          <Link href="/contact" className="btn">Me contacter</Link>
        </div>
      </div>
    </div>
  );
}
