import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main/Main";
import Recipe from "./Recipe/Recipe";
import Cart from "./Cart/Cart";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/cart" component={Cart} />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </BrowserRouter>
);

export default Router;
