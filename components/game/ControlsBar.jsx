import Button from "../common/Button";

export default function ControlsBar({ onAnswerQuestion, onMarketplace, onPause }) {
  return (
    <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
      <Button onClick={onAnswerQuestion}>Answer Question</Button>
      <Button onClick={onMarketplace} variant="secondary">
        Marketplace
      </Button>
      <Button onClick={onPause} variant="secondary">
        Pause / Quit
      </Button>
    </div>
  );
}
