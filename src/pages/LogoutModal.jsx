import React from 'react';

export default function LogoutModal({ open, onClose, onConfirm }) {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Выйти?</h2>
        <p>Вы действительно хотите выйти из аккаунта?</p>
        <button onClick={onConfirm}>Выйти</button>
        <button onClick={onClose}>Отмена</button>
      </div>
    </div>
  );
}
