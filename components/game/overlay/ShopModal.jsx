import Modal from "../../common/Modal";
import Button from "../../common/Button";
import { ITEMS } from "../../../game/data/items";

export default function ShopModal({ coins, onBuy, onClose }) {
  return (
    <Modal title="Marketplace" onClose={onClose}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: 900 }}>🪙 Coins: {coins}</div>
        <Button onClick={onClose} variant="secondary">
          Exit
        </Button>
      </div>

      <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
        {ITEMS.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 12,
              display: "flex",
              justifyContent: "space-between",
              gap: 10,
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: 900 }}>{item.name}</div>
              <div style={{ color: "#444" }}>{item.description}</div>
              <div style={{ marginTop: 6, fontWeight: 800 }}>Cost: {item.cost}</div>
            </div>

            <Button
              onClick={() => onBuy(item.id)}
              variant={coins >= item.cost ? "primary" : "secondary"}
            >
              Buy
            </Button>
          </div>
        ))}
      </div>
    </Modal>
  );
}
