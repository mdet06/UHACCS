import Modal from "../../common/Modal";
import Button from "../../common/Button";

export default function QuestionModal({ question, onPickAnswer, onClose }) {
  return (
    <Modal title="Answer Question" onClose={onClose}>
      <div style={{ fontSize: 18, fontWeight: 800 }}>{question.prompt}</div>

      <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
        {question.choices.map((c) => (
          <Button key={c.id} onClick={() => onPickAnswer(c.id)} variant="secondary" style={{ textAlign: "left" }}>
            <span style={{ marginRight: 8, fontWeight: 900 }}>{c.id.toUpperCase()}.</span>
            {c.text}
          </Button>
        ))}
      </div>

      <div style={{ marginTop: 14 }}>
        <Button onClick={onClose} variant="secondary">
          Exit
        </Button>
      </div>
    </Modal>
  );
}
