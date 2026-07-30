"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ paddingTop: "64px" }}>

      {/* Hero — image plein écran */}
      <section style={{ position: "relative", height: "92vh", overflow: "hidden" }}>
        <div     style={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('/images/hero.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 50%, rgba(247,244,239,0.6) 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: "4rem", left: "3rem", right: "3rem",
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        }}>
          <div>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "var(--ivory)",
              letterSpacing: "-0.01em",
            }}>
              Photographie<br /><em>& vidéographie</em>
            </h1>
          </div>
          <Link href="/portfolio" style={{
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--ivory)",
            borderBottom: "1px solid rgba(247,244,239,0.6)",
            paddingBottom: "3px",
            whiteSpace: "nowrap",
          }}>Voir le portfolio</Link>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "6rem 3rem", maxWidth: "680px" }}>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
          fontWeight: 400,
          lineHeight: 1.5,
          color: "var(--text)",
          fontStyle: "italic",
        }}>
          Basée en Suisse, je créé du contenu digital avec mon Nikon Z9.
        </p>
      </section>

      {/* Grid de photos */}
      <section style={{ padding: "0 3rem 6rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
          {[
            { bg: "#c8c0b4", ratio: "3/4", label: "Équestre" },
            { bg: "#b8b0a4", ratio: "3/4", label: "Sport" },
            { bg: "#a8a09a", ratio: "3/4", label: "Animalier" },
            { bg: "#d0c8bc", ratio: "4/3", label: "Événement" },
            { bg: "#c0b8b0", ratio: "4/3", label: "Vidéo" },
            { bg: "#b0a8a2", ratio: "4/3", label: "Portrait" },
          ].map((p, i) => (
            <div key={i} style={{ position: "relative", overflow: "hidden" }}>
              <div style={{ background: p.bg, aspectRatio: p.ratio, width: "100%" }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "1rem",
                background: "linear-gradient(to top, rgba(26,24,20,0.5), transparent)",
                opacity: 0, transition: "opacity 0.3s",
              }} className="img-overlay">
                <p style={{ fontSize: "11px", color: "var(--ivory)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{p.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/portfolio" style={{
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-mid)",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "3px",
          }}>Portfolio complet</Link>
        </div>
      </section>

      {/* Services rapide */}
      <section style={{ padding: "6rem 3rem", borderTop: "1px solid var(--border)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem" }}>
        {[
          { title: "Compétitions", desc: "CSI, CDN, concours nationaux. Couverture complète, livraison rapide." },
          { title: "Portrait", desc: "Cheval & cavalier, en manège ou en extérieur. Séances sur mesure." },
          { title: "Contenu digital", desc: "Reels, photos pour réseaux sociaux, site web, presse." },
          { title: "Vidéo", desc: "Films courts, showreels, reportages. Montage professionnel." },
        ].map(s => (
          <div key={s.title}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, marginBottom: "0.75rem" }}>{s.title}</h3>
            <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: 1.7 }}>{s.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer CTA */}
      <section style={{ padding: "6rem 3rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 400, fontStyle: "italic" }}>
          Un projet en tête ?
        </p>
        <Link href="/contact" style={{
          fontSize: "12px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--ivory)",
          background: "var(--text)",
          padding: "0.9rem 2rem",
          display: "inline-block",
        }}>Me contacter</Link>
      </section>

      <footer style={{ padding: "2rem 3rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: "12px", color: "var(--text-light)" }}>© 2024 LB Photographie</p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="https://instagram.com/lb_.photographie" target="_blank" rel="noopener" style={{ fontSize: "12px", color: "var(--text-light)", letterSpacing: "0.05em" }}>Instagram</a>
        </div>
      </footer>

      <style>{`
        div:hover .img-overlay { opacity: 1 !important; }
        @media (max-width: 768px) {
          section { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
          div[style*="gridTemplateColumns: 'repeat(3"] { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
}
