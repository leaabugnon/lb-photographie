"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/LogoMark";

const links = [
  { href: "/services", label: "Prestations" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "À propos" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Referme le menu mobile à chaque changement de page.
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Sur l'accueil, le menu est clair par-dessus la photo, puis devient sombre au défilement.
  const onHome = pathname === "/";
  const light = onHome && !scrolled && !menuOpen;
  const isActive = (href: string) => pathname === href || pathname === href + "/" || pathname.startsWith(href + "/");

  return (
    <>
      <header className={`site-header${scrolled || menuOpen ? " solid" : ""}${light ? " light" : ""}`}>
        <Link href="/" aria-label="Accueil — LB Photographie" style={{ display: "inline-flex", alignItems: "center", color: "inherit" }}>
          <LogoMark height={38} />
        </Link>

        <nav className="desk-nav">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={`nav-link${isActive(href) ? " active" : ""}`}>{label}</Link>
          ))}
          <Link href="/contact" className="nav-cta">Contact</Link>
        </nav>

        <button className="mob-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[0, 1].map(i => (
              <span key={i} style={{
                display: "block", width: "24px", height: "1px", background: "currentColor",
                transition: "transform 0.3s",
                transform: menuOpen ? (i === 0 ? "translateY(3.5px) rotate(45deg)" : "translateY(-3.5px) rotate(-45deg)") : "none",
              }} />
            ))}
          </div>
        </button>
      </header>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "var(--ivory)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 var(--gutter)", gap: "1.6rem" }}>
          {[{ href: "/", label: "Accueil" }, ...links, { href: "/contact", label: "Contact" }].map(({ href, label }) => (
            <Link key={href} href={href} className="display" style={{ fontSize: "2.2rem", color: (href === "/" ? pathname === "/" : isActive(href)) ? "var(--text)" : "var(--text-mid)" }}>{label}</Link>
          ))}
        </div>
      )}
    </>
  );
}
