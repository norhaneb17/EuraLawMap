export default function PreviewStyles() {
  const variants = [
    {
      name: "C1 — Ardoise & sauge",
      accent: "#5c7a6b",
      accentLight: "#edf3f0",
      accentBorder: "#c2d4cc",
      accentDark: "#2d4a3e",
      bg: "#f7f8f7",
      card: "#ffffff",
      ink: "#1e2620",
      muted: "#7a9188",
      palette: ["#1e2620","#2d4a3e","#5c7a6b","#c2d4cc","#f7f8f7"],
      paletteName: "Encre foncée · Forêt · Sauge · Menthe pâle · Brume",
      desc: "Fond blanc cassé verdâtre, accent vert sauge discret. Sérieux, reposant, nature.",
    },
    {
      name: "C2 — Granit & lavande",
      accent: "#7c6fa0",
      accentLight: "#f2f0f8",
      accentBorder: "#cec8e8",
      accentDark: "#3d3560",
      bg: "#f8f8fc",
      card: "#ffffff",
      ink: "#1e1c2e",
      muted: "#9b95b8",
      palette: ["#1e1c2e","#3d3560","#7c6fa0","#cec8e8","#f8f8fc"],
      paletteName: "Nuit · Prune · Lavande · Lilas pâle · Brume violette",
      desc: "Fond légèrement bleuté, accent lavande doux. Élégant, académique, distinct.",
    },
    {
      name: "C3 — Craie & ardoise",
      accent: "#4a6fa5",
      accentLight: "#eef2f8",
      accentBorder: "#bdd0e8",
      accentDark: "#1e3a5f",
      bg: "#f6f8fb",
      card: "#ffffff",
      ink: "#0f1f35",
      muted: "#7a96b8",
      palette: ["#0f1f35","#1e3a5f","#4a6fa5","#bdd0e8","#f6f8fb"],
      paletteName: "Marine · Nuit · Acier · Ciel pâle · Brume bleue",
      desc: "Fond blanc-bleu très léger, accent bleu acier mat. Sérieux sans être tech.",
    },
    {
      name: "C4 — Lin & rose poudré",
      accent: "#c0706a",
      accentLight: "#fdf2f1",
      accentBorder: "#eac8c5",
      accentDark: "#7a2f2a",
      bg: "#faf8f6",
      card: "#fffefb",
      ink: "#2a1a18",
      muted: "#b89490",
      palette: ["#2a1a18","#7a2f2a","#c0706a","#eac8c5","#faf8f6"],
      paletteName: "Brun doux · Bordeaux · Rose poudré · Pêche · Lin",
      desc: "Fond lin chaleureux, accent rose poudré discret. Doux, humain, pas marron.",
    },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#0f1118", minHeight: "100vh", padding: "2.5rem 2rem" }}>
      <h1 style={{ color: "#fff", textAlign: "center", marginBottom: "0.4rem", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Variantes — Papier numérique
      </h1>
      <p style={{ color: "#666", textAlign: "center", marginBottom: "3rem", fontSize: "0.8rem" }}>
        4 palettes alternatives, sans marron
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5rem", maxWidth: "1400px", margin: "0 auto" }}>
        {variants.map((v) => (
          <div key={v.name}>
            {/* Label */}
            <p style={{ color: "#f59e0b", fontWeight: 700, textTransform: "uppercase", fontSize: "0.65rem", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>
              {v.name}
            </p>
            <p style={{ color: "#555", fontSize: "0.65rem", marginBottom: "1rem", lineHeight: 1.5 }}>{v.desc}</p>

            {/* Hero */}
            <div style={{
              background: v.bg,
              border: `1px solid ${v.accentBorder}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1rem",
            }}>
              <p style={{ fontSize: "0.55rem", color: v.accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.6rem", fontWeight: 700 }}>
                Droit européen du numérique
              </p>
              <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "1.3rem", fontWeight: 700, color: v.ink, lineHeight: 1.3, marginBottom: "0.6rem" }}>
                Le droit européen<br />du numérique,{" "}
                <em style={{ color: v.accent, fontStyle: "italic" }}>simplifié</em>
              </h2>
              <p style={{ fontSize: "0.72rem", color: v.muted, lineHeight: 1.7, marginBottom: "1rem", borderLeft: `2px solid ${v.accentBorder}`, paddingLeft: "0.6rem" }}>
                DSA, DMA, AI Act, RGPD — des fiches pour maîtriser les textes européens.
              </p>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                <button style={{ background: v.accentDark, color: v.bg, border: "none", borderRadius: "6px", padding: "0.45rem 0.9rem", fontSize: "0.7rem", cursor: "pointer", fontWeight: 600 }}>
                  Explorer →
                </button>
                <button style={{ background: "transparent", color: v.accent, border: `1px solid ${v.accentBorder}`, borderRadius: "6px", padding: "0.45rem 0.9rem", fontSize: "0.7rem", cursor: "pointer" }}>
                  Fiches
                </button>
              </div>
            </div>

            {/* Card règlement */}
            <div style={{
              background: v.card,
              border: `1px solid ${v.accentBorder}`,
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "0.75rem",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                <span style={{ fontFamily: "monospace", fontWeight: 800, fontSize: "0.78rem", color: v.ink, background: v.accentLight, border: `1px solid ${v.accentBorder}`, padding: "2px 7px", borderRadius: "4px" }}>RGPD</span>
                <span style={{ fontSize: "0.6rem", color: v.accent, background: v.accentLight, border: `1px solid ${v.accentBorder}`, padding: "2px 7px", borderRadius: "4px" }}>Données</span>
              </div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", fontWeight: 700, color: v.ink, marginBottom: "0.2rem", lineHeight: 1.3 }}>
                Protection des données personnelles
              </h3>
              <p style={{ fontFamily: "monospace", fontSize: "0.58rem", color: v.muted, marginBottom: "0.6rem" }}>Règlement (UE) 2016/679</p>
              <div style={{ borderTop: `1px solid ${v.accentBorder}`, paddingTop: "0.6rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.6rem", color: v.accentDark, background: v.accentLight, padding: "2px 8px", borderRadius: "20px", border: `1px solid ${v.accentBorder}` }}>En vigueur</span>
                <span style={{ fontSize: "0.7rem", color: v.accent }}>→</span>
              </div>
            </div>

            {/* Navbar */}
            <div style={{ background: v.accentDark, borderRadius: "8px", padding: "0.6rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, color: v.bg, fontSize: "0.78rem" }}>
                EuraLex<span style={{ color: v.accent === "#4a6fa5" ? "#93c5fd" : v.accentBorder }}>Map</span>
              </span>
              <div style={{ display: "flex", gap: "1rem" }}>
                {["Règlements","Fiches","Glossaire"].map(l => (
                  <span key={l} style={{ color: v.accentBorder, fontSize: "0.65rem" }}>{l}</span>
                ))}
              </div>
            </div>

            {/* Palette */}
            <div style={{ display: "flex", gap: "0.35rem", marginTop: "0.5rem" }}>
              {v.palette.map(c => (
                <div key={c} title={c} style={{ width: 24, height: 24, borderRadius: 5, background: c, border: "1px solid rgba(255,255,255,0.08)", flexShrink: 0 }} />
              ))}
            </div>
            <p style={{ color: "#555", fontSize: "0.6rem", marginTop: "0.4rem", lineHeight: 1.5 }}>{v.paletteName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
