import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./Nav/Nav";
import Main from "./Main/Main";
import Recipe from "./Recipe/Recipe";
import Favourite from "./Favourite/Favourite";
import Cart from "./Cart/Cart";
import Default from "./Default";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/recipe" component={Recipe} />
          <Route path="/favourite" component={Favourite} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <NavBar />
      </React.Fragment>
    );
  }
}

export default App;
