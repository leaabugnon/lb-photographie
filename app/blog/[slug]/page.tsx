import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, url: `/blog/${post.slug}/`, images: [post.cover], publishedTime: post.dateISO, locale: "fr_CH" },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://lb-photographie.ch${post.cover}`,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    inLanguage: "fr-CH",
    author: { "@type": "Person", name: "Léa Bugnon" },
    publisher: { "@type": "Organization", name: "LB Photographie", url: "https://lb-photographie.ch" },
    mainEntityOfPage: `https://lb-photographie.ch/blog/${post.slug}/`,
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article style={{ padding: "4rem 3rem 6rem", maxWidth: "760px", margin: "0 auto" }}>
        <Link href="/blog" style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-mid)" }}>← Retour au blog</Link>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center", margin: "2.5rem 0 1.25rem" }}>
          <p style={{ fontSize: "11px", color: "var(--text-light)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{post.cat}</p>
          <span style={{ color: "var(--border)" }}>·</span>
          <p style={{ fontSize: "12px", color: "var(--text-light)" }}>{post.date}</p>
        </div>

        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.15, marginBottom: "2.5rem" }}>{post.title}</h1>

        <img src={post.cover} alt={post.title} style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block", marginBottom: "3rem" }} />

        <div>
          {post.body.map((block, i) => (
            <div key={i}>
              {block.h && (
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 400, lineHeight: 1.3, margin: "2.5rem 0 1rem" }}>{block.h}</h2>
              )}
              <p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: 1.85, marginBottom: "1.25rem" }}>{block.text}</p>
              {block.links && (
                <p style={{ marginBottom: "1.5rem" }}>
                  {block.links.map(l => (
                    <Link key={l.href} href={l.href} style={{ fontSize: "13px", color: "var(--leather)", borderBottom: "1px solid var(--leather)", paddingBottom: "1px", marginRight: "1.5rem" }}>{l.label} →</Link>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--border)", marginTop: "3rem", paddingTop: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontStyle: "italic", color: "var(--text-mid)" }}>Un projet en tête&nbsp;?</p>
          <Link href="/contact" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ivory)", background: "var(--text)", padding: "0.8rem 1.8rem", display: "inline-block" }}>Me contacter</Link>
        </div>
      </article>

      <style>{`
        @media (max-width: 768px) {
          article { padding: 3rem 1.5rem 4rem !important; }
        }
      `}</style>
    </div>
  );
}
