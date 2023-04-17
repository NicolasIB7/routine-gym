// import React, { useEffect, useState } from "react";
// import Cards from "../Cards/Cards"

// function Favorites(props) {

//   console.log(props.favoriteExercises)

//     return (
//         <div>
//             <h2>Favorite Cards</h2>
//             {/* <div>
//                 {favoriteEjercicios?.map((ejercicio) => (
//                     <Cards
//                         key={ejercicio.id}
//                         id={ejercicio.id}
//                         name={ejercicio.name}
//                         bodyPart={ejercicio.bodyPart}
//                         gifUrl={ejercicio.gifUrl}
//                       equipment={ejercicio.equipment}
//                       target={ejercicio.target}
//                       />
//                 ))}
//                 </div> */}
//                 </div>
//                 )
//                 }

// export default Favorites;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import { removeFavoriteExcercise } from "../../Redux/actions";

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
      <div>
        {favoriteExercises?.map((ejercicio) => (
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
        ))}
      </div>
    </div>
  );
}

export default Favorites;
