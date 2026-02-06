import Button from "../components/common/Button";

export default function TutorialScreen({ onBack }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>Tutorial</h1>
      <ul>
        <li>Press <b>Answer Question</b> to get coins.</li>
        <li>Use coins in the <b>Marketplace</b> for power-ups.</li>
        <li>Try to finish the level before time runs out.</li>
      </ul>

      <Button onClick={onBack} variant="secondary">
        Back
      </Button>
    </div>
  );
}
