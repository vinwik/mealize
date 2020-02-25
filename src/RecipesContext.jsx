import React, { Component, createContext } from "react";

export const RecipesContext = createContext();

const API_KEY = "a8a6c56864bd498da56e9de550c0a580";

class RecipesProvider extends Component {
  state = {
    recipes: []
  };

  getRecipes = async e => {
    const searchInput = e.target.elements.searchInput.value;
    e.preventDefault();

    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${searchInput}&instructionsRequired=true`
    );

    const data = await response.json();
    this.setState(() => {
      return { recipes: data.results };
    });
  };

  // componentDidUpdate = () => {
  //   const recipes = JSON.stringify(this.state.recipes);
  //   localStorage.setItem("recipes", recipes);
  // };

  render() {
    return (
      <RecipesContext.Provider
        value={{
          ...this.state,
          getSearch: this.getRecipes
        }}
      >
        {this.props.children}
      </RecipesContext.Provider>
    );
  }
}

const RecipesConsumer = RecipesContext.Consumer;

export { RecipesProvider, RecipesConsumer };
