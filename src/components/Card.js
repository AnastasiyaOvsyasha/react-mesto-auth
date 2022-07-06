import React from "react";

function Card({ src, title, likes, onCardClick }) {
  function handleCardClick() {
    onCardClick({ src, title });
  }

  return (
    <div className="template" id="template-photos">
      <li className="photos__card">
        <button
          className="photos__delete-button"
          aria-label="удалить фотографию"
          type="button"
        />
        <img
          className="photos__image"
          src={src}
          alt={title}
          onClick={handleCardClick}
        />
        <div className="photos__box-info">
          <h2 className="photos__title">{title}</h2>
          <div>
            <button
              className="photos__like-button"
              aria-label="поставить лайк фото"
              type="button"
            />
            <p className="photos__like-counter">{likes}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;
