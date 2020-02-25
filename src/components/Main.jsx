import React, { Component } from "react";
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
              <Search searchTitle="Search Recipe..." />
              <CardList />
            </div>
          );
        }}
      </RecipesConsumer>
    );
  }
}

export default Main;
