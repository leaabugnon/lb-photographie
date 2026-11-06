"use client";
import Link from "next/link";
import { posts } from "./posts";

export default function Blog() {
  return (
    <div style={{ paddingTop: "72px" }}>
      <div style={{ padding: "4rem 3rem 6rem", maxWidth: "900px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, marginBottom: "4rem" }}>Notes &amp; réflexions</h1>
        {posts.map(post => (
          <article key={post.slug} style={{ borderTop: "1px solid var(--border)", padding: "3rem 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <Link href={`/blog/${post.slug}`} style={{ display: "block", overflow: "hidden" }}>
              <img src={post.cover} alt={post.title} loading="lazy" style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block" }} />
            </Link>
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
