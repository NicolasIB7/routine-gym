import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Paginate.module.css";

const Paginate = (props) => {
  const {
    ejercicios,
    excercisePerPage,
    currentPage,
    paginado,
    previousExcercises,
    nextExcercises,
  } = props;

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(ejercicios / excercisePerPage); i++) {
    pageNumber.push(i);
  }

  const range = 5;
  const startIndex = Math.max(currentPage - range, 0);
  const endIndex = Math.min(currentPage + range, pageNumber.length - 1);
  const visiblePages = pageNumber.slice(startIndex, endIndex + 1);

  return (
    <nav>
      <ul className={style.ul}>
        {currentPage > 1 && (
          <button onClick={() => previousExcercises()} className={style.button}>
            🢀
          </button>
        )}

        {visiblePages.map((number) => (
          <button
            key={number}
            onClick={() => paginado(number)}
            className={currentPage === number ? style.b : style.button}>
            {number}
          </button>
        ))}

        {currentPage < pageNumber.length && (
          <button
            onClick={() => nextExcercises(pageNumber.length)}
            className={style.button}>
            🢂
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Paginate;
