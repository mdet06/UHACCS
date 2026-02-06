import Button from "../components/common/Button";

export default function HomeScreen({ onNewGame, onTutorial }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1 style={{ marginBottom: 6 }}>Empire vs Jedi (PvZ-style Learning Game)</h1>
      <p style={{ marginTop: 0, color: "#444" }}>
        Pick a subject, answer questions, earn coins, and buy power-ups.
      </p>

      <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
        <Button onClick={onNewGame}>New Game</Button>
        <Button onClick={onTutorial} variant="secondary">
          Tutorial
        </Button>
      </div>
    </div>
  );
}
