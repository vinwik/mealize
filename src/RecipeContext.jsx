import React, { Component, createContext } from "react";

// import { RecipeConsumer } from "../RecipeContext";

export const RecipeContext = createContext();

const API_KEY = "a8a6c56864bd498da56e9de550c0a580";

class RecipeProvider extends Component {
  state = {
    recipe: {
      extendedIngredients: [],
      analyzedInstructions: {
        0: {
          steps: []
        }
      }
    },
    favourites: []
  };

  getRecipe = async id => {
    console.log(id);
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );

    const data = await response.json();
    this.setState({ recipe: data });
    console.log(data);
  };

  //   addToCart = id => {};

  render() {
    console.log(this);
    return (
      <RecipeContext.Provider
        value={{
          ...this.state,
          getRecipe: this.getRecipe
        }}
      >
        {this.props.children}
      </RecipeContext.Provider>
    );
  }
}

export default RecipeProvider;

const RecipeConsumer = RecipeContext.Consumer;

export { RecipeProvider, RecipeConsumer };
