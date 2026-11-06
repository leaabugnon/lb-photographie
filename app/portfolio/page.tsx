"use client";
import { useState, useEffect, useRef } from "react";

const categories = ["Tout", "Chevaux", "Sports équestres", "Sport", "Animalier", "Architecture", "Portrait", "Vidéo"];

// Anciens liens (ex. /portfolio/?cat=Événement) : on les redirige vers la nouvelle catégorie.
const oldNames: Record<string, string> = {
  "Événement": "Sports équestres",
  "Concours": "Sports équestres",
  "Cours": "Sports équestres",
  "Équestre": "Chevaux",
};

const photos = [
  { id: 1, cat: "Chevaux", title: "En forêt", ratio: "3/4", src: "/photos/equestre-foret.webp" },
  { id: 2, cat: "Chevaux", title: "Lumière du soir", ratio: "3/4", src: "/photos/equestre-crepuscule.webp" },
  { id: 3, cat: "Chevaux", title: "Portrait équin", ratio: "3/4", src: "/photos/equestre-portrait.webp" },
  { id: 4, cat: "Chevaux", title: "Sous-bois", ratio: "3/4", src: "/photos/equestre-sous-bois.webp" },
  { id: 5, cat: "Chevaux", title: "Cabré", ratio: "3/4", src: "/photos/equestre-cabre.webp" },
  { id: 6, cat: "Chevaux", title: "Saut d'obstacle", ratio: "16/9", src: "/photos/equestre-saut.webp" },
  { id: 7, cat: "Chevaux", title: "Cheval & automobile", ratio: "3/4", src: "/photos/equestre-automobile.webp" },
  { id: 8, cat: "Chevaux", title: "Contre-jour", ratio: "3/4", src: "/photos/equestre-contrejour.webp" },
  { id: 9, cat: "Sports équestres", title: "Concours hippique", ratio: "16/9", src: "/photos/evenement-concours.webp" },
  { id: 10, cat: "Sports équestres", title: "CSIO St-Gall", ratio: "16/9", src: "/photos/evenement-csio-3.webp" },
  { id: 11, cat: "Sports équestres", title: "CSIO St-Gall", ratio: "4/3", src: "/photos/evenement-csio-4.webp" },
  { id: 12, cat: "Sports équestres", title: "CSIO St-Gall — victoire", ratio: "16/9", src: "/photos/evenement-csio-podium.webp" },
  { id: 13, cat: "Sports équestres", title: "Départ groupé", ratio: "16/9", src: "/photos/evenement-course.webp" },
  { id: 14, cat: "Sports équestres", title: "CSIO St-Gall", ratio: "16/9", src: "/photos/evenement-csio-2.webp" },
  { id: 15, cat: "Sports équestres", title: "Concours hippique", ratio: "16/9", src: "/photos/evenement-concours-2.webp" },
  { id: 16, cat: "Sports équestres", title: "Conférence de presse", ratio: "16/9", src: "/photos/evenement-presse.webp" },
  { id: 17, cat: "Sports équestres", title: "CHI de Genève", ratio: "3/4", src: "/photos/evenement-chi-geneve.webp" },
  { id: 18, cat: "Animalier", title: "Berger en action", ratio: "16/9", src: "/photos/animalier-berger.webp" },
  { id: 19, cat: "Animalier", title: "Complicité", ratio: "16/9", src: "/photos/animalier-complicite.webp" },
  { id: 20, cat: "Animalier", title: "Rencontre", ratio: "16/9", src: "/photos/animalier-rencontre.webp" },
  { id: 21, cat: "Animalier", title: "Éducation canine", ratio: "16/9", src: "/photos/animalier-education.webp" },
  { id: 22, cat: "Sport", title: "Football", ratio: "3/4", src: "/photos/sport-football.webp" },
  { id: 23, cat: "Sport", title: "Patinage artistique", ratio: "3/4", src: "/photos/sport-patinage.webp" },
  { id: 24, cat: "Sport", title: "VTT", ratio: "3/4", src: "/photos/sport-vtt.webp" },
  { id: 25, cat: "Sport", title: "VTT — saut", ratio: "16/9", src: "/photos/sport-vtt-2.webp" },
  { id: 26, cat: "Sport", title: "Football", ratio: "3/4", src: "/photos/sport-football-2.webp" },
  { id: 27, cat: "Sport", title: "Football", ratio: "3/4", src: "/photos/sport-football-3.webp" },
  { id: 28, cat: "Sport", title: "Patinage artistique", ratio: "3/4", src: "/photos/sport-patinage-2.webp" },
  { id: 29, cat: "Sport", title: "Patinage artistique", ratio: "16/9", src: "/photos/sport-patinage-3.webp" },
  { id: 30, cat: "Sport", title: "VTT", ratio: "16/9", src: "/photos/sport-vtt-3.webp" },
  { id: 31, cat: "Portrait", title: "Portrait", ratio: "3/4", src: "/photos/portrait-1.webp" },
  { id: 32, cat: "Portrait", title: "Reflet", ratio: "3/4", src: "/photos/portrait-2.webp" },
  { id: 33, cat: "Portrait", title: "En hiver", ratio: "3/4", src: "/photos/portrait-3.webp" },
  { id: 34, cat: "Portrait", title: "Portrait", ratio: "3/4", src: "/photos/portrait-4.webp" },
  { id: 35, cat: "Portrait", title: "Portrait", ratio: "3/4", src: "/photos/portrait-5.webp" },
  { id: 36, cat: "Portrait", title: "Portrait", ratio: "3/4", src: "/photos/portrait-6.webp" },
  { id: 38, cat: "Sports équestres", title: "Concentration", ratio: "2/3", src: "/photos/cours-cross-2.webp" },
  { id: 37, cat: "Sports équestres", title: "Passage d'eau", ratio: "3/2", src: "/photos/cours-cross-1.webp" },
  { id: 39, cat: "Sports équestres", title: "Banquette", ratio: "3/2", src: "/photos/cours-cross-3.webp" },
  { id: 40, cat: "Sports équestres", title: "Tronc au bord de l'eau", ratio: "3/2", src: "/photos/cours-cross-4.webp" },
  { id: 41, cat: "Sport", title: "Volleyball", ratio: "9/16", src: "/photos/sport-volley-1.webp" },
  { id: 42, cat: "Sport", title: "Volleyball", ratio: "3/2", src: "/photos/sport-volley-2.webp" },
  { id: 43, cat: "Sport", title: "Hockey sur glace", ratio: "3/2", src: "/photos/sport-hockey.webp" },
  { id: 44, cat: "Animalier", title: "Compétition IGP", ratio: "3/2", src: "/photos/animalier-igp.webp" },
  { id: 45, cat: "Animalier", title: "Jeux de meute", ratio: "3/2", src: "/photos/animalier-animaux-1.webp" },
  { id: 46, cat: "Animalier", title: "Perroquets", ratio: "3/2", src: "/photos/animalier-animaux-2.webp" },
  { id: 47, cat: "Animalier", title: "Au repos", ratio: "3/2", src: "/photos/animalier-animaux-3.webp" },
  { id: 48, cat: "Animalier", title: "Chat dans le feuillage", ratio: "2/3", src: "/photos/animalier-animaux-4.webp" },
  { id: 49, cat: "Animalier", title: "Après le jeu", ratio: "3/2", src: "/photos/animalier-animaux-5.webp" },
  { id: 50, cat: "Animalier", title: "Prêt à jouer", ratio: "3/2", src: "/photos/animalier-animaux-6.webp" },
  { id: 51, cat: "Architecture", title: "Chambre", ratio: "3/2", src: "/photos/architecture-1.webp" },
  { id: 52, cat: "Architecture", title: "Chambre avec vue", ratio: "3/2", src: "/photos/architecture-2.webp" },
  { id: 53, cat: "Architecture", title: "Salon", ratio: "3/2", src: "/photos/architecture-3.webp" },
];

// Vidéos hébergées sur le site (fichiers dans public/videos/).
// Pour en ajouter : compresse le MP4, mets-le dans public/videos/, ajoute une ligne ici
// (poster = image affichée avant la lecture, ratio = "9/16" vertical ou "16/9" horizontal).
const videos: { src: string; poster: string; title?: string; ratio: string }[] = [
  { src: "/videos/jeudi.mp4", poster: "/videos/jeudi-poster.webp", ratio: "9/16" },
  { src: "/videos/cross.mp4", poster: "/videos/cross-poster.webp", ratio: "9/16" },
];

// Anciens reels Instagram, mis de côté (la galerie ci-dessus les remplace).
// Pour les réactiver, remets les liens dans ce tableau.
const instaReels: string[] = [
  // "https://www.instagram.com/reel/DS5pUj6jfBf/",
  // "https://www.instagram.com/reel/DSPBzMZjc-V/",
  // "https://www.instagram.com/reel/DY1NQ2RNWQt/",
];

export default function Portfolio() {
  const [active, setActive] = useState("Tout");
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const filtered = active === "Tout" ? photos : photos.filter(p => p.cat === active);
  const lightbox = lbIndex !== null ? filtered[lbIndex] : null;
  const go = (d: number) => setLbIndex(i => (i === null || filtered.length === 0 ? i : (i + d + filtered.length) % filtered.length));

  // Lit la catégorie depuis l'URL (ex : /portfolio/?cat=Sport) au chargement.
  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get("cat");
    const p = raw ? (oldNames[raw] ?? raw) : null;
    if (p && categories.includes(p)) setActive(p);
  }, []);

  // Lightbox au clavier : Échap pour fermer, flèches pour changer de photo.
  useEffect(() => {
    if (lbIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLbIndex(null);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lbIndex, filtered.length]);

  // Précharge les photos voisines pour un passage instantané.
  useEffect(() => {
    if (lbIndex === null || filtered.length === 0) return;
    [1, -1].forEach(d => { const n = filtered[(lbIndex + d + filtered.length) % filtered.length]; if (n) { const im = new Image(); im.src = n.src; } });
  }, [lbIndex, filtered]);

  // Charge et déclenche le rendu des reels Instagram quand la catégorie Vidéo est active.
  useEffect(() => {
    if (active !== "Vidéo" || instaReels.length === 0) return;
    const w = window as unknown as { instgrm?: { Embeds: { process: () => void } } };
    const render = () => w.instgrm?.Embeds?.process();
    if (w.instgrm) { render(); return; }
    const id = "instagram-embed-js";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      script.onload = render;
      document.body.appendChild(script);
    } else {
      const t = setInterval(() => { if (w.instgrm) { render(); clearInterval(t); } }, 300);
      setTimeout(() => clearInterval(t), 6000);
    }
  }, [active]);


  return (
    <div style={{ paddingTop: "72px" }}>
      <div style={{ padding: "4rem 3rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", borderBottom: "1px solid var(--border)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400 }}>Portfolio</h1>
        <div style={{ display: "flex", gap: "0", flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              fontSize: "12px", letterSpacing: "0.1em",
              color: active===cat ? "var(--text)" : "var(--text-light)",
              background: "none", border: "none",
              borderBottom: active===cat ? "1px solid var(--text)" : "1px solid transparent",
              padding: "0.5rem 1rem", cursor: "pointer",
              fontFamily: "var(--font-body)", fontWeight: active===cat ? 500 : 300,
              transition: "color 0.2s",
            }}>{cat}</button>
          ))}
        </div>
      </div>

      {active === "Vidéo" ? (
        videos.length > 0 ? (
          <div style={{ padding: "2.5rem var(--gutter) 6rem", display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
            {videos.map(v => (
              <figure key={v.src} style={{ width: "100%", maxWidth: v.ratio === "9/16" ? "380px" : "820px", margin: 0 }}>
                <video
                  src={v.src}
                  poster={v.poster}
                  controls
                  playsInline
                  preload="none"
                  style={{ width: "100%", aspectRatio: v.ratio, background: "var(--text)", display: "block", objectFit: "cover" }}
                />
                {v.title && <figcaption style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", marginTop: "0.8rem" }}>{v.title}</figcaption>}
              </figure>
            ))}
          </div>
        ) : instaReels.length === 0 ? (
          <div style={{ padding: "6rem 3rem", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontStyle: "italic", marginBottom: "0.75rem" }}>Bientôt en ligne.</p>
            <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: 1.7, maxWidth: "440px", margin: "0 auto" }}>
              Mes reels et showreels arrivent prochainement dans cette section.
            </p>
          </div>
        ) : (
          <div style={{ padding: "2.5rem 3rem 6rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
            {instaReels.map((url, i) => (
              <blockquote key={i} className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14"
                style={{ background: "#FFF", border: 0, margin: 0, maxWidth: "340px", width: "100%", minWidth: "300px", boxShadow: "none" }} />
            ))}
          </div>
        )
      ) : (
        <div style={{ padding: "2rem 3rem 6rem", columns: "3 220px", columnGap: "6px", lineHeight: 0 }}>
          {filtered.map(photo => (
            <div key={photo.id} onClick={() => setLbIndex(filtered.indexOf(photo))} style={{ display: "inline-block", width: "100%", marginBottom: "6px", position: "relative", overflow: "hidden", cursor: "pointer", breakInside: "avoid" }}
              onMouseEnter={e => { const o = e.currentTarget.querySelector(".ov") as HTMLElement; if(o) o.style.opacity="1"; }}
              onMouseLeave={e => { const o = e.currentTarget.querySelector(".ov") as HTMLElement; if(o) o.style.opacity="0"; }}>
              <img src={photo.src} alt={photo.title} loading="lazy" style={{ width: "100%", aspectRatio: photo.ratio, objectFit: "cover", display: "block" }} />
              <div className="ov" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,24,20,0.55), rgba(26,24,20,0.05) 45%, transparent)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "1.25rem", opacity: 0, transition: "opacity 0.35s" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--ivory)", fontWeight: 400, lineHeight: 1.2 }}>{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {lightbox && (
        <div onClick={() => setLbIndex(null)}
          onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={e => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          }}
          style={{
          position: "fixed", inset: 0, zIndex: 200, background: "rgba(26,24,20,0.92)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          padding: "3rem 2rem", cursor: "zoom-out",
        }}>
          <button onClick={e => { e.stopPropagation(); setLbIndex(null); }} aria-label="Fermer" style={{
            position: "absolute", top: "1.5rem", right: "2rem", background: "none", border: "none",
            color: "var(--ivory)", fontSize: "2rem", lineHeight: 1, cursor: "pointer", fontWeight: 300, zIndex: 2,
          }}>×</button>
          {filtered.length > 1 && (
            <>
              <button className="lb-arrow lb-prev" onClick={e => { e.stopPropagation(); go(-1); }} aria-label="Photo précédente">‹</button>
              <button className="lb-arrow lb-next" onClick={e => { e.stopPropagation(); go(1); }} aria-label="Photo suivante">›</button>
            </>
          )}
          <img src={lightbox.src} alt={lightbox.title} onClick={e => e.stopPropagation()} style={{
            maxWidth: "92vw", maxHeight: "78vh", objectFit: "contain", display: "block", cursor: "default",
          }} />
          <div style={{ textAlign: "center", marginTop: "1.25rem", cursor: "default" }} onClick={e => e.stopPropagation()}>
            <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "rgba(247,244,239,0.6)", textTransform: "uppercase", marginBottom: "4px" }}>{lightbox.cat}{lbIndex !== null ? ` · ${lbIndex + 1} / ${filtered.length}` : ""}</p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--ivory)" }}>{lightbox.title}</p>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          div[style*="padding: 2rem 3rem 6rem"] { columns: 2 !important; padding: 1.5rem !important; }
          div[style*="padding: 4rem 3rem"] { padding: 3rem 1.5rem 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
