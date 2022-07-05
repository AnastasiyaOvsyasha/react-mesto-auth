import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  function errorApi(err) {
    console.log(`Ошибка: ${err}`);
  }

  useEffect(() => {
    api
      .getDataUser()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        errorApi(err);
      });

    api
      .getInitialCardsData()
      .then((Cards) => {
       setCards(Cards);
      })
      .catch((err) => {
        errorApi(err);
      });
  }, [])

  return (
    <main className="container">
      <section className="profile">
        <img
          className="profile__avatar"
          src={userAvatar}
          alt="Обновленный аватар пользователя"
        />
        <button
          className="profile__avatar-edit-button"
          aria-label="кнопка для обновления аватара"
          onClick={onEditAvatar}
        />
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            aria-label="редактировать профиль"
            type="button"
            onClick={onEditProfile}
          />
          <p className="profile__researcher">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          aria-label="добавить фотографии"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="photos">
        <ul className="photos__list">
          {cards.map(card => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
