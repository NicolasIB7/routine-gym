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
      <h3 className={style.name}>{props.name}</h3>
      <img src={props.gifUrl} alt='ejercicio' className={style.imagenes} />
      <p className={style.p}>Body part: {props.bodyPart}</p>
      <p className={style.p}>Equipment: {props.equipment}</p>
      <button onClick={handleFavoriteClick} className={style.delete}>
        {props.isFavorite ? "Remove" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default Cards;
