"use client";
import Link from "next/link";

const posts = [
  { slug: "csio-st-gallen-2024", date: "12 juin 2024", cat: "Équestre", title: "CSIO St-Gallen : dans les coulisses", excerpt: "Trois jours au cœur du CSIO. Les chevaux, les cavaliers, et ce que la foule ne voit pas.", bg: "#c8c0b4" },
  { slug: "nikon-z9-equestre", date: "3 mai 2024", cat: "Technique", title: "Pourquoi le Nikon Z9 pour la photo équestre", excerpt: "AF prédictif sur animaux, rafale 20 fps silencieuse — un an de retours terrain.", bg: "#b8b0a6" },
  { slug: "reseaux-photo-suisse", date: "18 avril 2024", cat: "Métier", title: "Construire sa clientèle de photographe équestre en Suisse", excerpt: "Les circuits équestres, les bonnes pratiques pour décrocher ses premiers mandats.", bg: "#bab2a8" },
  { slug: "wildlife-jura", date: "2 mars 2024", cat: "Animalier", title: "Affût photographique dans le Jura bernois", excerpt: "Lynx, cerfs, renards — une saison à apprivoiser la lumière dorée de l'automne jurassien.", bg: "#a8a49e" },
];

export default function Blog() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ padding: "4rem 3rem 6rem", maxWidth: "900px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, marginBottom: "4rem" }}>Notes & réflexions</h1>
        {posts.map(post => (
          <article key={post.slug} style={{ borderTop: "1px solid var(--border)", padding: "3rem 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div style={{ aspectRatio: "3/2", background: post.bg }} />
            <div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.25rem" }}>
                <p style={{ fontSize: "11px", color: "var(--text-light)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{post.cat}</p>
                <span style={{ color: "var(--border)" }}>·</span>
                <p style={{ fontSize: "12px", color: "var(--text-light)" }}>{post.date}</p>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, lineHeight: 1.3, marginBottom: "1rem", transition: "color 0.2s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-mid)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                >{post.title}</h2>
              </Link>
              <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "1.5rem" }}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-mid)", borderBottom: "1px solid var(--border)", paddingBottom: "2px" }}>Lire</Link>
            </div>
          </article>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          article { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          div[style*="padding: 4rem 3rem"] { padding: 3rem 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
