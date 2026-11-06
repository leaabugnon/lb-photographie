import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="display" style={{ fontSize: "1.5rem", color: "var(--text)", marginBottom: "0.8rem" }}>
          LB Photographie
        </p>
        <p style={{ lineHeight: 1.8, maxWidth: "320px" }}>
          Photographie et vidéographie sur mesure : entreprises, particuliers, cavaliers.
        </p>
      </div>
      <div>
        <h4>Navigation</h4>
        <Link href="/services">Prestations</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">À propos</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="mailto:info@lb-photographie.ch">info@lb-photographie.ch</a>
        <a href="https://instagram.com/lb_.photographie" target="_blank" rel="noopener">Instagram @lb_.photographie</a>
        <Link href="/contact">Formulaire de contact</Link>
      </div>
      <p className="legal">© {new Date().getFullYear()} LB Photographie — Suisse</p>
    </footer>
  );
}
