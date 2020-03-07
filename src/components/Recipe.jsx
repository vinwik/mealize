import React, { Component } from "react";

import { RecipeContext } from "../RecipeContext";
import { RecipeConsumer } from "../RecipeContext";

import { Link } from "react-router-dom";

import { ReactComponent as Angle } from "../assets/angle-left.svg";
import { ReactComponent as Like } from "../assets/heart.svg";
import { ReactComponent as Plus } from "../assets/plus-square.svg";

class Recipe extends Component {
  static contextType = RecipeContext;

  componentDidMount() {
    const id = this.props.location.state.recipe;
    this.context.getRecipe(id); //fires fetch in RecipeContext
    this.context.parseIngredients(); //fires fetch in RecipeContext
    this.context.parseFavourites(); //fires fetch in RecipeContext
    console.log(this.context);
  }

  componentDidUpdate() {
    // this.context.setFavourites();
    // this.context.setIngredients();
  }

  getIngredientList = ingredients => {
    if (!ingredients.length) {
      return ingredients;
    }

    const list = [];

    ingredients.forEach(ingredient => {
      const duplicate = list.find(l => l.id === ingredient.id);
      if (!duplicate) {
        list.push(ingredient);
      }
    });

    return list;
  };

  render() {
    return (
      <RecipeConsumer>
        {value => {
          console.log(value.cart);

          const recipe = value.recipe;
          const ingredients = this.getIngredientList(
            recipe.extendedIngredients
          );
          const steps = value.recipe.steps;
          const id = recipe.id;
          const cart = value.cart;
          return (
            <div className="recipe">
              <div
                className="showcase"
                style={{ backgroundImage: `url(${recipe.image})` }}
              >
                <div className="content">
                  <div className="btn-wrapper">
                    <button>
                      <Link to="/">
                        <Angle className="previous-icon" />
                      </Link>
                    </button>
                    <button
                      onClick={() => {
                        value.addToFavourites(id);
                      }}
                      disabled={recipe.inFavourite ? true : false}
                    >
                      <Like className="like-icon" />
                    </button>
                  </div>
                  <h2 className="title">{recipe.title}</h2>
                </div>
              </div>
              <div className="preparation">
                <div className="servings">
                  <h3>Servings</h3>
                  <h4>{recipe.servings}</h4>
                </div>
                <div className="time">
                  <h3>Preparation time</h3>
                  <h4>{recipe.readyInMinutes + " min"}</h4>
                </div>
              </div>
              <div className="ingredients">
                <h3>Ingredients</h3>
                {ingredients.map(ingredient => {
                  const name = ingredient.name;
                  return (
                    <div className="ingredient" key={name}>
                      <div>
                        <span>{ingredient.amount + " "}</span>
                        <span>{ingredient.measures.us.unitShort + " "}</span>
                        <span>
                          <strong>{ingredient.name}</strong>
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          value.addToCart(name);
                        }}
                        disabled={ingredient.inCart ? true : false}
                      >
                        <Plus />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="instructions">
                <h3>Instructions</h3>
                <ol>
                  {steps.map(step => {
                    return <li key={step.number}>{step.step}</li>;
                  })}
                </ol>
              </div>
            </div>
          );
        }}
      </RecipeConsumer>
    );
  }
}

export default Recipe;
