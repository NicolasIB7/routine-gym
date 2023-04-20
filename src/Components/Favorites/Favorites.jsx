

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import { removeFavoriteExcercise } from "../../Redux/actions";
import style from "./Favorites.module.css"

function Favorites(props) {
  const favoriteIds = useSelector((state) => state.myFavorites);
  const allExercises = useSelector((state) => state.allCharacter);

  const dispatch = useDispatch();

  const favoriteExercises = allExercises?.filter((exercise) =>
    favoriteIds.includes(exercise.id)
  );

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFavoriteExcercise(id));
  };

  return (
    <div>
      <h2>Favorite Cards</h2>
      <div className={style.container}>
        {favoriteExercises.length>0 ?  (favoriteExercises?.map((ejercicio) => (
          <Cards
            key={ejercicio.id}
            id={ejercicio.id}
            name={ejercicio.name}
            bodyPart={ejercicio.bodyPart}
            gifUrl={ejercicio.gifUrl}
            equipment={ejercicio.equipment}
            target={ejercicio.target}
            isFavorite={true}
            onRemoveFromFavorites={handleRemoveFromFavorites}
          />
        )))
          :

          (<div style={{color:"white", fontSize:30,width:"fit-content", marginLeft:60}}>No tienes ejercicos favoritos</div>)
        
        }


      </div>
    </div>
  );
}

export default Favorites;
