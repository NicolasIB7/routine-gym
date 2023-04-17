
export const GET_ALL = "GET_ALL";
export const GET_BY_NAME = "GET_BY_NAME";
export const FAVORITES = "FAVORITES";
export const REMOVE_FAVORITE_EXCERCISE = "REMOVE_FAVORITE_EXCERCISE";

export function allExcercises() {
  return async function (dispatch) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6cfd7e4a79msh305f0e3e31a84acp147bd0jsn1047fca9c9a1",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises",
      options
    );
    const data = await response.json();
    dispatch({ type: GET_ALL, payload: data });
  };
}

export function excercisesByName(name) {
  return async function (dispatch) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6cfd7e4a79msh305f0e3e31a84acp147bd0jsn1047fca9c9a1",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/name/${name}`,
      options
    );
    const data = await response.json();
    dispatch({ type: GET_BY_NAME, payload: data });
  };
}

export function favoriteExcercise(id) {
  return { type: FAVORITES, payload: id };
}

export const removeFavoriteExcercise = (id) => {
  return {
    type: REMOVE_FAVORITE_EXCERCISE,
    payload: id,
  };
};


