export default function GameHUD({ theme, level, coins, timeLeft, paused }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        borderRadius: 14,
        border: "1px solid #ddd",
        background: "#fff",
      }}
    >
      <div style={{ display: "grid", gap: 2 }}>
        <div style={{ fontWeight: 900 }}>Theme: {theme}</div>
        <div style={{ color: "#555" }}>Level: {level}</div>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div style={{ fontWeight: 900 }}>🪙 {coins}</div>
        <div style={{ fontWeight: 900 }}>⏱️ {timeLeft}s</div>
        {paused ? <div style={{ fontWeight: 900, color: "#b00020" }}>PAUSED</div> : null}
      </div>
    </div>
  );
}
