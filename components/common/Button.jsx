export default function Button({ children, onClick, variant = "primary", style }) {
  const base = {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid #ddd",
    cursor: "pointer",
    fontWeight: 700,
  };

  const variants = {
    primary: { background: "#111", color: "#fff", borderColor: "#111" },
    secondary: { background: "#fff", color: "#111" },
    danger: { background: "#b00020", color: "#fff", borderColor: "#b00020" },
  };

  return (
    <button onClick={onClick} style={{ ...base, ...variants[variant], ...style }}>
      {children}
    </button>
  );
}
