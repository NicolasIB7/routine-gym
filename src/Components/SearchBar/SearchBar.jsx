import React from "react";

function SearchBar(props) {
  return (
    <form>
      <input
        type='search'
        onChange={props.handleChange}
        value={props.searchInput}
      />
      <button type='submit' onClick={props.handleSubmit}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
