"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 3rem",
        zIndex: 100,
        background: scrolled ? "rgba(247,244,239,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>
        <Link href="/" style={{
          fontFamily: "var(--font-display)",
          fontSize: "17px",
          letterSpacing: "0.04em",
          color: "var(--text)",
          fontWeight: 400,
        }}>LB Photographie</Link>

        {/* Desktop links */}
        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="desk-nav">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} style={{
                fontSize: "13px",
                letterSpacing: "0.06em",
                color: active ? "var(--text)" : "var(--text-mid)",
                fontWeight: active ? 500 : 300,
                borderBottom: active ? "1px solid var(--text)" : "1px solid transparent",
                paddingBottom: "2px",
                transition: "color 0.2s",
              }}>{label}</Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "none" }} className="mob-btn" aria-label="Menu">
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: "block", width: "20px", height: "1px",
                background: "var(--text)",
                transition: "all 0.3s",
                transform: menuOpen ? (i===0?"rotate(45deg) translate(4px,4px)":i===2?"rotate(-45deg) translate(4px,-4px)":"scaleX(0)") : "none",
              }} />
            ))}
          </div>
        </button>
      </header>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "var(--ivory)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2.5rem" }} onClick={() => setMenuOpen(false)}>
          <Link href="/" style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--text)", fontWeight: 400 }}>Accueil</Link>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: pathname===href?"var(--text)":"var(--text-mid)", fontWeight: 400 }}>{label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .mob-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
