import React from "react";
// import styled from "styled-components";

import { ReactComponent as Magnifier } from "../assets/search.svg";
import { ReactComponent as Times } from "../assets/times.svg";
import { RecipesConsumer } from "../RecipesContext";

const Search = props => {
  // const click = () => {
  //   consol
  // }
  return (
    <RecipesConsumer>
      {value => {
        return (
          <form onSubmit={value.getSearch} className="search">
            <Magnifier className="search-icon" />
            <input
              type="text"
              name="searchInput"
              placeholder={props.searchTitle}
              className="search-input"
            />
            <Times className="times-icon" />
          </form>
        );
      }}
    </RecipesConsumer>
  );
};

export default Search;

// const SearchBar = styled.form`
//   background-color: #fff;
//   width: 90%;
//   border-radius: 25px;
//   padding: 0 15px;
//   display: flex;
//   align-items: center;
//   margin: 0 auto;

//   .search-input {
//     width: 100%;
//     padding: 0.5em;
//   }

//   svg {
//     height: 1em;
//   }
// `;
