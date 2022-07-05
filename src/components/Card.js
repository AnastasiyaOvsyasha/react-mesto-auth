import React from 'react';

function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
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
          src={props.card.link}
          alt={`Фотография ${props.card.name}`}
          onClick={handleCardClick}
        />
        <div className="photos__box-info">
          <h2 className="photos__title">{props.card.name}</h2>
          <div>
            <button
              className="photos__like-button"
              aria-label="поставить лайк фото"
              type="button"
             />
            <p className="photos__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
      </li>
      </div>
  )
}

export default Card;
