import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import CardList from "./CardList";

import { RecipesConsumer } from "../RecipesContext";

class Main extends Component {
  render() {
    return (
      <RecipesConsumer>
        {value => {
          return (
            <div className="main">
              <Header title="mealize" />
              <Search searchTitle="Search Recipe..." />
              <CardList className="cards" />
            </div>
          );
        }}
      </RecipesConsumer>
    );
  }
}

export default Main;
