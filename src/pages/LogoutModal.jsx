// пример: src/pages/LogoutModal.jsx
import React from "react";
import Modal from "../components/Modal/Modal";

export default function LogoutModal({ open, onClose, onConfirm }) {
  if (!open) return null;
  return (
    <Modal onClose={onClose}>
      <div style={{ padding: 16, minWidth: 260 }}>
        <h2>Выйти?</h2>
        <p>Вы действительно хотите выйти из аккаунта?</p>
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button onClick={onClose}>Отмена</button>
          <button onClick={onConfirm}>Выйти</button>
        </div>
      </div>
    </Modal>
  );
}
