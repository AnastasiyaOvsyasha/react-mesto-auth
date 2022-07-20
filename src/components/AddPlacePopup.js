import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameInput = useRef("");
  const linkInput = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      title: nameInput.current.value,
      link: linkInput.current.value,
    });
  }

  useEffect(() => {
    nameInput.current.value = "";
    linkInput.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input"
        id="photo-name"
        data-input="add-photo-name-input"
        type="text"
        name="form__input_type_title"
        ref={nameInput}
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
      />
      <span
        className="form__input-error"
        data-input="add-photo-name-input-error"
        id="photo-name-error"
        role="status"
        aria-live="polite"
      ></span>
      <input
        className="form__input"
        data-input="add-photo-link-input"
        type="url"
        name="form__input_type_link"
        ref={linkInput}
        id="photo-link"
        placeholder="Ссылка на картинку"
        required
      />
      <span
        className="form__input-error"
        data-input="add-photo-link-input-error"
        id="photo-link-error"
        role="status"
        aria-live="polite"
      ></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;