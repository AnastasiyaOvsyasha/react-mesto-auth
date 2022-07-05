import { useState } from "react";
import "../index.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App({ isOpen }) {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input"
          data-input="edit-profile-name-input"
          id="profile-name"
          type="text"
          name="form__input_type_text"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
        />
        <span
          className="form__input-error"
          data-input="edit-profile-name-input-error"
          id="profile-name-error"
        ></span>
        <input
          className="form__input"
          data-input="edit-profile-about-input"
          id="profile-about"
          type="text"
          name="form__input_type_about"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
        />
        <span
          className="form__input-error"
          data-input="edit-profile-about-input-error"
          id="profile-about-error"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        buttonText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input"
          id="photo-name"
          data-input="add-photo-name-input"
          type="text"
          name="form__input_type_title"
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

      <PopupWithForm
        name="type_avatar"
        buttonText="Сохранить"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input"
          name="form__input_update_avatar"
          type="url"
          id="avatar-link"
          data-input="avatar-link-input"
          aria-label="ссылка"
          placeholder="Ссылка на обновление аватара профиля"
          required
        />
        <span
          className="form__input-error"
          data-input="avatar-link-input-error"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        name=""
        title="Вы уверены?"
        submit="Да"
        isOpen={isOpen}
      ></PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
