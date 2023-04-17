import React from "react";
import style from "./Cards.module.css";

function Cards(props) {
  const handleFavoriteClick = () => {
    if (props.isFavorite) {
      props.onRemoveFromFavorites(props.id);
    } else {
      props.onAddToFavorites(props.id);
    }
  };

  return (
    <div className={style.container}>
      <h3>{props.name}</h3>
      <img src={props.gifUrl} alt='ejercicio' />
      <p>Body part: {props.bodyPart}</p>
      <p>Equipment: {props.equipment}</p>
      <button onClick={handleFavoriteClick}>
        {props.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default Cards;
