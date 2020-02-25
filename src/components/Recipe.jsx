import React, { Component } from "react";

import { RecipeContext } from "../RecipeContext";
import { RecipeConsumer } from "../RecipeContext";
import { Link } from "react-router-dom";

class Recipe extends Component {
  static contextType = RecipeContext;

  componentDidMount() {
    const id = this.props.location.state.recipe;
    this.context.getRecipe(id); //fires fetch in context
  }

  // addToLocalStorage() {
  //   const recipe = JSON.stringify();
  //   localStorage.setItem("recipe", recipe);
  // }

  render() {
    return (
      <RecipeConsumer>
        {value => {
          const recipe = value.recipe;
          return (
            <div>
              <button>
                <Link to="/">home</Link>
              </button>
              <button>add to favourites</button>
              <h1>{recipe.title}</h1>
              <h3>Servings : {recipe.servings}</h3>
              <h3>Preparation time : {recipe.readyInMinutes}</h3>
              <div>
                <h3>Ingredients</h3>
                {recipe.extendedIngredients.map(ingredient => {
                  // const id = ingredient.id;
                  return (
                    <div>
                      <span>{ingredient.amount}</span>
                      <span>{ingredient.unit}</span>
                      <span>{ingredient.name}</span>
                      <button>+</button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </RecipeConsumer>
    );
  }
}

export default Recipe;
