"use client";
import { useState } from "react";

const categories = ["Tout", "Équestre", "Sport", "Animalier", "Événement", "Vidéo"];

const photos = [
  { id:1, cat:"Équestre", title:"CSI Basel 2024", ratio:"3/4", bg:"#c8c0b4" },
  { id:2, cat:"Animalier", title:"Renard roux — aube", ratio:"4/3", bg:"#b8b0a6" },
  { id:3, cat:"Équestre", title:"Dressage CDN Berne", ratio:"1/1", bg:"#d0c8bc" },
  { id:4, cat:"Sport", title:"Trail — Jura bernois", ratio:"4/3", bg:"#a8a09a" },
  { id:5, cat:"Équestre", title:"Portrait — Lusitanien", ratio:"3/4", bg:"#c0b8ae" },
  { id:6, cat:"Événement", title:"CSIO St-Gallen", ratio:"4/3", bg:"#b0a8a0" },
  { id:7, cat:"Vidéo", title:"Showreel équestre", ratio:"16/9", bg:"#c8c0b8" },
  { id:8, cat:"Animalier", title:"Lynx — Parc jurassien", ratio:"3/4", bg:"#b8b2aa" },
  { id:9, cat:"Sport", title:"Polo — Lausanne", ratio:"4/3", bg:"#a0988e" },
  { id:10, cat:"Équestre", title:"Endurance — Alpes", ratio:"3/4", bg:"#ccc4b8" },
  { id:11, cat:"Événement", title:"Gala équestre Lausanne", ratio:"4/3", bg:"#bab2a8" },
  { id:12, cat:"Animalier", title:"Aigles — Oberland", ratio:"16/9", bg:"#b0a8a2" },
];

export default function Portfolio() {
  const [active, setActive] = useState("Tout");
  const filtered = active === "Tout" ? photos : photos.filter(p => p.cat === active);

  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ padding: "4rem 3rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", borderBottom: "1px solid var(--border)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400 }}>Portfolio</h1>
        <div style={{ display: "flex", gap: "0" }}>
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

      <div style={{ padding: "2rem 3rem 6rem", columns: "3 220px", columnGap: "6px", lineHeight: 0 }}>
        {filtered.map(photo => (
          <div key={photo.id} style={{ display: "inline-block", width: "100%", marginBottom: "6px", position: "relative", overflow: "hidden", cursor: "pointer", breakInside: "avoid" }}
            onMouseEnter={e => { const o = e.currentTarget.querySelector(".ov") as HTMLElement; if(o) o.style.opacity="1"; }}
            onMouseLeave={e => { const o = e.currentTarget.querySelector(".ov") as HTMLElement; if(o) o.style.opacity="0"; }}>
            <div style={{ background: photo.bg, aspectRatio: photo.ratio, width: "100%" }} />
            <div className="ov" style={{ position: "absolute", inset: 0, background: "rgba(26,24,20,0.45)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "1.25rem", opacity: 0, transition: "opacity 0.35s" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "rgba(247,244,239,0.7)", textTransform: "uppercase", marginBottom: "4px" }}>{photo.cat}</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--ivory)", fontWeight: 400 }}>{photo.title}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="padding: 2rem 3rem 6rem"] { columns: 2 !important; padding: 1.5rem !important; }
          div[style*="padding: 4rem 3rem"] { padding: 3rem 1.5rem 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
