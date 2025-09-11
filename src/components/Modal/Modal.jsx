import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = typeof document !== "undefined" ? document.getElementById("modal-root") : null;

export default function Modal({ children, onClose }) {
  useEffect(() => {
    console.log("Modal mounted");
    return () => console.log("Modal unmounted");
  }, []);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div style={overlayStyle} onMouseDown={onClose}>
      <div style={contentStyle} onMouseDown={(e) => e.stopPropagation()}>
        <button aria-label="Закрыть" onClick={onClose} style={closeBtnStyle}>×</button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};
const contentStyle = {
  background: "#fff",
  borderRadius: 8,
  padding: 20,
  maxWidth: "90%",
  maxHeight: "90%",
  overflow: "auto",
  position: "relative",
};
const closeBtnStyle = {
  position: "absolute",
  top: 8,
  right: 8,
  border: "none",
  background: "transparent",
  fontSize: 24,
  cursor: "pointer",
};
