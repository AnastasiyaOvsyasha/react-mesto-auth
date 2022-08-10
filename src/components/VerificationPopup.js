import React from "react";
import PopupWithForm from "./PopupWithForm";

function VerificationPopup({ isOpen, onClose, onDelete, card }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onDelete(card);
  }
  return (
    <PopupWithForm
      name="verification"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Да"
      onSubmit={handleSubmit}
    />
  );
}

export default VerificationPopup;
