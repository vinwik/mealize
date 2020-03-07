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
    //GET RECIPE FROM SESSION STORAGE
    if (localStorage.getItem(id) != null) {
      const json = localStorage.getItem(id);
      const recipe = JSON.parse(json);
      this.setState({ recipe });
    } else if (sessionStorage.getItem(id) != null) {
      const json = sessionStorage.getItem(id);
      const recipe = JSON.parse(json);
      this.setState({ recipe });
    } else {
      //FETCH RECIPE IF NOT IN SESSION STORAGE
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);

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
        const recipe = this.state.recipe;
        const favourites = this.state.favourites;
        let jsonrec = JSON.parse(localStorage.getItem(id));
        let json = JSON.parse(localStorage.getItem(id));
        // if (json != null && jsonrec != null) {
        //   json.push(favourites);
        //   jsonrec.push(recipe);
        // }
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
    localStorage.setItem(id, JSON.stringify(recipe));

    this.setState(() => {
      return { favourites, recipe };
    });
  };

  getIngredient = name => {
    const ingredient = this.state.recipe.extendedIngredients.find(
      ingredient => ingredient.name === name
    );
    return ingredient;
  };

  addToCart = name => {
    let ingredients = [...this.state.recipe.extendedIngredients];
    const index = ingredients.indexOf(this.getIngredient(name));
    const ingredient = ingredients[index];
    ingredient.inCart = true;
    console.log(ingredient.inCart);
    this.setState(
      () => {
        return {
          ingredients,
          cart: [...this.state.cart, ingredient],
          recipe: this.state.recipe
        };
      },
      () => {
        const cart = this.state.cart;
        const recipe = this.state.recipe;
        const recipeId = this.state.recipe.id;
        console.log(recipeId);

        const json = JSON.parse(localStorage.getItem("cart"));
        const jsonrec = JSON.parse(localStorage.getItem(recipeId));
        console.log(jsonrec);

        // if (json != null && jsonrec != null) {
        //   json.push(cart);
        //   jsonrec.push(recipe);
        //   console.log(jsonrec);
        // }
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem(recipeId, JSON.stringify(recipe));
        console.log(recipe);
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

  // setIngredients = () => {
  //   const cart = JSON.stringify(this.state.cart);
  //   localStorage.setItem("cart", cart);
  // };

  removeFromCart = name => {
    let cart = [...this.state.cart];
    const recipe = this.state.recipe;
    const recipeId = this.state.recipe.id;
    let ingredients = [...this.state.recipe.extendedIngredients];

    cart = cart.filter(item => item.name !== name);
    const index = ingredients.indexOf(this.getIngredient(name));
    const ingredient = ingredients[index];
    ingredient.inCart = false;
    console.log(ingredient.inCart);

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem(recipeId, JSON.stringify(recipe));

    this.setState(() => {
      return { cart, recipe };
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
