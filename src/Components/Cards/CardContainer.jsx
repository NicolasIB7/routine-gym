import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import style from "./CardsContainer.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Paginate from "../Paginate/Paginate";
import {
  allExcercises,
  excercisesByName,
  favoriteExcercise,
  removeFavoriteExcercise,
  filterExcercise,
} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function CardContainer(props) {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");
  const ejercicios = useSelector((state) => state.allCharacter);
  //   const favoritos = useSelector(state => state.favorites);
  const [favoritos, setFavorite] = useState([]);

  const handleAddToFavorites = (id) => {
    dispatch(favoriteExcercise(id));
    setFavorite([...favoritos, id]);
  };
  const handleRemoveToFavorites = (id) => {
    dispatch(removeFavoriteExcercise(id));
    setFavorite(favoritos.filter((ejercicioId) => ejercicioId !== id));
  };

  useEffect(() => {
    dispatch(allExcercises());
  }, []);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(excercisesByName(searchInput));
  };

  //-----------------------------------paginado----------------------------//

  const [currentPage, setCurrentPage] = useState(1);
  const [excercisePerPage] = useState(36);
  const indexOfLastExcercise = currentPage * excercisePerPage;
  const indexOfFirstExcercise = indexOfLastExcercise - excercisePerPage;
  const currentExcercises = ejercicios.slice(
    indexOfFirstExcercise,
    indexOfLastExcercise
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousExcercises = () => {
    currentPage - 1 && paginado(currentPage - 1);
  };

  const nextExcercises = (i) => {
    currentPage !== i && paginado(currentPage + 1);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(filterExcercise(e.target.value));
  };

  return (
    <div>
      <SearchBar
        handleChange={handleChange}
        searchInput={searchInput}
        handleSubmit={handleSubmit}
        className={style.searchInput}
      />
      <div className={style.divFiltrados}>
        <p style={{ color: "white", fontSize: 18, marginLeft: "69%" }}>
          Filtre por parte del cuerpo:
        </p>
        <select
          name='FILTER'
          onChange={handleFilter}
          className={style.filtrados}
          placeholder='filter'>
          <option value='all'>Todos</option>
          {[...new Set(ejercicios.map((exercise) => exercise.bodyPart))].map(
            (bodyPart) => (
              <option key={bodyPart} value={bodyPart}>
                {bodyPart}
              </option>
            )
          )}
        </select>
      </div>

      <div className={style.container}>
        {currentExcercises && currentExcercises.length > 0 ? (
          currentExcercises.map((response) => (
            <Cards
              id={response.id}
              name={response.name}
              bodyPart={response.bodyPart}
              gifUrl={response.gifUrl}
              equipment={response.equipment}
              target={response.target}
              isFavorite={favoritos?.includes(response.id)}
              onAddToFavorites={handleAddToFavorites}
              onRemoveFromFavorites={handleRemoveToFavorites}
            />
          ))
        ) : (
          <div
            style={{
              color: "white",
              fontSize: 40,
              width: "fit-content",
              marginLeft: 60,
            }}>
            No se encontraron ejercicios relacionados con tu búsqueda.{" "}
          </div>
        )}
      </div>

      <div className={style.paginado}>
        <Paginate
          excercisePerPage={excercisePerPage}
          ejercicios={ejercicios.length}
          paginado={paginado}
          previousExcercises={previousExcercises}
          nextExcercises={nextExcercises}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default CardContainer;
