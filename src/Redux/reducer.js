import {
  GET_ALL,
  GET_BY_NAME,
  FAVORITES,
  REMOVE_FAVORITE_EXCERCISE,
  FILTER
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacter: [],
  copia:[],

};

function reducer(state = initialState, action) {
  if (action.type === GET_ALL) {
    return { ...state, allCharacter: action.payload, copia:action.payload };
  }
  if (action.type === GET_BY_NAME) {
    return { ...state, allCharacter: action.payload };
  }
  if (action.type === FAVORITES) {
    console.log("favorites before:", state.myFavorites);
    return { ...state, myFavorites: [...state.myFavorites, action.payload] };
  }

  if (action.type === REMOVE_FAVORITE_EXCERCISE)
    return {
      ...state,
      myFavorites: state.myFavorites.filter(
        (ejercicioId) => ejercicioId !== action.payload
      ),
    };

    if(action.type===FILTER){
      const ejercicios=state.copia;
      const filterEjercicios = action.payload==="all"? ejercicios: ejercicios.filter(item=>item.bodyPart===action.payload)
      return{...state,allCharacter:filterEjercicios}
    }
  else return { ...state };
}
export default reducer;
