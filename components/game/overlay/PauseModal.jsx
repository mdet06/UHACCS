import Modal from "../../common/Modal";
import Button from "../../common/Button";

export default function PauseModal({ timeLeft, onResume, onQuit }) {
  return (
    <Modal title="Paused" onClose={onResume}>
      <div style={{ color: "#333" }}>
        Time left: <b>{timeLeft}s</b>
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
        <Button onClick={onResume}>Resume</Button>
        <Button onClick={onQuit} variant="danger">
          Quit to Home
        </Button>
      </div>
    </Modal>
  );
}
