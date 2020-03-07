import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Recipe from "./components/Recipe";
import Favourites from "./components/Favourites";
import Cart from "./components/Cart";

import { RecipesProvider } from "./RecipesContext";
import { RecipeProvider } from "./RecipeContext";

function App() {
  return (
    <RecipesProvider>
      <RecipeProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/recipe" component={Recipe} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/cart" component={Cart} />
          </Switch>
          <NavBar />
        </BrowserRouter>
      </RecipeProvider>
    </RecipesProvider>
  );
}

export default App;
