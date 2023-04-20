import React from "react";
import style from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <form className={style.search}>
      <input
        type='search'
        onChange={props.handleChange}
        value={props.searchInput}
        className={style.input}
        placeholder='ejercicio...'
      />
      <button
        type='submit'
        onClick={props.handleSubmit}
        className={style.botonSearch}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
