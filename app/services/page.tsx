import Link from "next/link";

const services = [
  {
    title: "Équestre",
    price: "Sur devis",
    desc: "Photos et vidéos de chevaux, cavaliers, écuries et compétitions."
  },
  {
    title: "Sport & événementiel",
    price: "Sur devis",
    desc: "Couverture photo et vidéo d'événements sportifs, manifestations et compétitions."
  },
  {
    title: "Entreprises & marques",
    price: "Sur devis",
    desc: "Création de contenu visuel pour la communication, les réseaux sociaux et le marketing."
  },
  {
    title: "Vidéo",
    price: "Sur devis",
    desc: "Reels, vidéos promotionnelles, interviews et reportages."
  }
];

export default function Services() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ padding: "4rem 3rem 6rem", maxWidth: "900px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, marginBottom: "4rem" }}>Services & tarifs</h1>
        <div>
          {services.map((s, i) => (
            <div key={s.title} style={{
              borderTop: "1px solid var(--border)",
              padding: "2.5rem 0",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "4rem",
              alignItems: "start",
            }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, marginBottom: "0.75rem" }}>{s.title}</h2>
                <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: 1.8, maxWidth: "480px" }}>{s.desc}</p>
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--text-mid)", whiteSpace: "nowrap", paddingTop: "4px" }}>{s.price}</p>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--text-mid)", fontStyle: "italic" }}>Un projet spécifique ? Parlons-en.</p>
            <Link href="/contact" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ivory)", background: "var(--text)", padding: "0.8rem 1.8rem", display: "inline-block" }}>Demander un devis</Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          div[style*="padding: 4rem 3rem"] { padding: 3rem 1.5rem !important; }
          div[style*="gridTemplateColumns: '1fr auto'"] { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
    </div>
  );
}
