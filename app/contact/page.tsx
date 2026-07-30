"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

// Adresse de réception des messages. Au tout premier envoi, FormSubmit
// t'enverra un email de confirmation à cette adresse : clique le lien une
// fois, et ensuite le formulaire fonctionne définitivement. Aucun compte.
const DESTINATION = "info@lb-photographie.ch";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    // Honeypot anti-spam : si ce champ caché est rempli, c'est un bot.
    const botField = e.currentTarget.elements.namedItem("_honey") as HTMLInputElement | null;
    if (botField && botField.value) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(DESTINATION)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          message: form.message,
          _replyto: form.email,
          _subject: form.sujet
            ? `Site LB Photographie — ${form.sujet}`
            : "Nouveau message depuis le site LB Photographie",
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await res.json();
      if (data.success === true || data.success === "true") {
        setStatus("sent");
        setForm({ nom: "", email: "", sujet: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Une erreur est survenue. Réessaie dans un instant.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Impossible d'envoyer le message. Vérifie ta connexion et réessaie.");
    }
  }

  const fieldStyle: React.CSSProperties = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--border)",
    color: "var(--text)",
    fontSize: "14px",
    fontFamily: "var(--font-body)",
    padding: "0.6rem 0",
    outline: "none",
    transition: "border-color 0.2s",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: "11px",
    color: "var(--text-light)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  };

  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ padding: "4rem 3rem 6rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", maxWidth: "1000px" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: "2rem" }}>Contact</h1>
          <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "3rem" }}>
            Pour toute demande de devis, collaboration ou renseignement. Réponse sous 24h.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[["Email", "info@lb-photographie.ch"], ["Instagram", "@lb_.photographie"], ["Localisation", "Suisse"]].map(([l, v]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <p style={{ fontSize: "11px", color: "var(--text-light)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{l}</p>
                <p style={{ fontSize: "14px", color: "var(--text-mid)" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          {status === "sent" ? (
            <div style={{ paddingTop: "2rem" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontStyle: "italic", marginBottom: "0.5rem" }}>Message envoyé.</p>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>Je vous réponds sous 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem", paddingTop: "0.5rem" }}>
              {/* Honeypot anti-spam — invisible pour les humains */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
                aria-hidden="true"
              />
              {[
                { key: "nom", label: "Nom", type: "text" },
                { key: "email", label: "Email", type: "email" },
                { key: "sujet", label: "Sujet", type: "text" },
              ].map(({ key, label, type }) => (
                <div key={key} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={labelStyle}>{label}</label>
                  <input type={type}
                    name={key}
                    required={key !== "sujet"}
                    value={form[key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    style={fieldStyle}
                    onFocus={e => (e.target.style.borderBottomColor = "var(--text)")}
                    onBlur={e => (e.target.style.borderBottomColor = "var(--border)")}
                  />
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={labelStyle}>Message</label>
                <textarea rows={5}
                  name="message"
                  required
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ ...fieldStyle, resize: "none" }}
                  onFocus={e => (e.target.style.borderBottomColor = "var(--text)")}
                  onBlur={e => (e.target.style.borderBottomColor = "var(--border)")}
                />
              </div>

              {status === "error" && (
                <p style={{ fontSize: "13px", color: "#B4472E", lineHeight: 1.6 }}>{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  alignSelf: "flex-start",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--ivory)",
                  background: "var(--text)",
                  border: "none",
                  padding: "0.8rem 2rem",
                  cursor: status === "sending" ? "default" : "pointer",
                  opacity: status === "sending" ? 0.6 : 1,
                  fontFamily: "var(--font-body)",
                  marginTop: "0.5rem",
                  transition: "opacity 0.2s",
                }}
              >
                {status === "sending" ? "Envoi…" : "Envoyer"}
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: '1fr 1fr'"] { grid-template-columns: 1fr !important; gap: 3rem !important; }
          div[style*="padding: 4rem 3rem"] { padding: 3rem 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
