import React, { Component, createContext } from "react";

// import { RecipeConsumer } from "../RecipeContext";

export const RecipeContext = createContext();

const API_KEY = "a8a6c56864bd498da56e9de550c0a580";

class RecipeProvider extends Component {
  state = {
    recipe: {
      extendedIngredients: [],
      steps: []
    },
    favourites: [],
    cart: []
  };

  //Fired by Recipe.jsx
  getRecipe = async id => {
    //GET RECIPE FROM LOCAL STORAGE
    if (localStorage.getItem(id) != null) {
      const json = localStorage.getItem(id);
      const recipe = JSON.parse(json);
      this.setState({ recipe });
    } //GET RECIPE FROM SESSION STORAGE
    else if (sessionStorage.getItem(id) != null) {
      const json = sessionStorage.getItem(id);
      const recipe = JSON.parse(json);
      this.setState({ recipe });
    } else {
      //FETCH RECIPE IF NOT IN SESSION STORAGE
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      const data = await response.json();

      const transformedData = {
        ...data,
        steps: data.analyzedInstructions.length
          ? data.analyzedInstructions[0].steps
          : []
      };

      this.setState({ recipe: transformedData });

      //SET RECIPE TO SESSION STORAGE
      const recipe = JSON.stringify(this.state.recipe);
      sessionStorage.setItem(data.id, recipe);
    }
  };

  addToFavourites = id => {
    let favourites = this.state.recipe;
    favourites.inFavourite = true;
    this.setState(
      () => {
        return {
          favourites: [...this.state.favourites, favourites],
          recipe: this.state.recipe
        };
      },
      () => {
        const favourites = this.state.favourites;
        const recipe = this.state.recipe;

        localStorage.setItem("favourites", JSON.stringify(favourites));
        localStorage.setItem(id, JSON.stringify(recipe));
      }
    );
  };

  parseFavourites = () => {
    const json = localStorage.getItem("favourites");
    if (json != null) {
      const favourites = JSON.parse(json);
      this.setState({ favourites });
    }
  };

  removeFromFavourites = id => {
    let favourites = [...this.state.favourites];
    const recipe = this.state.recipe;
    recipe.inFavourite = false;

    favourites = favourites.filter(item => item.id !== id);

    localStorage.setItem("favourites", JSON.stringify(favourites));
    localStorage.removeItem(id);

    this.setState(() => {
      return { favourites, recipe };
    });
  };

  getIngredient = id => {
    const ingredient = this.state.recipe.extendedIngredients.find(
      ingredient => ingredient.id === id
    );
    return ingredient;
  };

  addToCart = id => {
    let ingredients = [...this.state.recipe.extendedIngredients];
    const index = ingredients.indexOf(this.getIngredient(id));
    const ingredient = ingredients[index];

    this.setState(
      () => {
        return {
          ingredients,
          cart: [...this.state.cart, ingredient]
        };
      },
      () => {
        const cart = this.state.cart;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    );
  };

  parseIngredients = () => {
    const json = localStorage.getItem("cart");
    if (json != null) {
      const cart = JSON.parse(json);
      this.setState({ cart });
    }
  };

  removeFromCart = id => {
    let cart = [...this.state.cart];
    cart = cart.filter(item => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));

    this.setState(() => {
      return { cart };
    });
  };

  render() {
    return (
      <RecipeContext.Provider
        value={{
          ...this.state,
          getRecipe: this.getRecipe,
          addToFavourites: this.addToFavourites,
          setFavourites: this.setFavourites,
          parseFavourites: this.parseFavourites,
          removeFromFavourites: this.removeFromFavourites,
          addToCart: this.addToCart,
          setIngredients: this.setIngredients,
          parseIngredients: this.parseIngredients,
          removeFromCart: this.removeFromCart
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
