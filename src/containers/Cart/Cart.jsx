import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
// import Ingredients from "../../components/Ingredients/Ingredients";
import "./Cart.css";

const API_KEY = "a8a6c56864bd498da56e9de550c0a580";

class Cart extends Component {
  state = {
    ingredients: []
  };

  getIngredients = async e => {
    const searchInput = e.target.elements.searchInput.value;
    e.preventDefault();

    const response = await fetch(
      `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${API_KEY}&query=${searchInput}&number=5&metaInformation=true`
      // `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${searchInput}`
    );

    const data = await response.json();
    console.log(data);
    this.setState({ ingredients: data.results });
    // console.log(this .state);
  };

  // componentDidMount = () => {
  //   const json = localStorage.getItem("recipes");
  //   const recipes = JSON.parse(json);
  //   this.setState({ recipes });
  // };

  // componentDidUpdate = () => {
  //   const recipes = JSON.stringify(this.state.recipes);
  //   localStorage.setItem("recipes", recipes);
  // };

  render() {
    return (
      <main className="main">
        <Header className="header" />
        <Search getIngredients={this.getIngredients} className="search" />
        {/* <Ingredients /> */}
      </main>
    );
  }
}

export default Cart;
