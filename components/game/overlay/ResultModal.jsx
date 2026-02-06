import Modal from "../../common/Modal";
import Button from "../../common/Button";

export default function ResultModal({ result, onNext }) {
  return (
    <Modal title={result.correct ? "✅ Correct!" : "❌ Incorrect"} onClose={onNext}>
      {!result.correct ? (
        <div style={{ fontWeight: 800, marginBottom: 8 }}>
          Correct answer: {result.correctChoiceId.toUpperCase()}
        </div>
      ) : null}

      <div style={{ color: "#333" }}>{result.explanation}</div>

      <div style={{ marginTop: 14 }}>
        <Button onClick={onNext}>Next</Button>
      </div>
    </Modal>
  );
}
