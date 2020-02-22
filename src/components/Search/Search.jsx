import React from "react";
import { ReactComponent as Magnifier } from "./search.svg";
import { ReactComponent as Times } from "./times.svg";
import "./Search.css";

const Search = props => {
  return (
    <form
      onSubmit={props.getRecipes || props.getIngredients}
      className="search"
    >
      <Magnifier className="search-icon" />
      <input
        type="text"
        name="searchInput"
        placeholder="Search ...."
        className="search-input"
      />
      <Times className="times-icon" />
    </form>
  );
};

export default Search;
