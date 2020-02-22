import React, { Component } from "react";
import Showcase from "../../components/Showcase/Showcase";
import Serving from "../../components/Serving/Serving";
import Time from "../../components/Time/Time";
import Ingredients from "../../components/Ingredients/Ingredients";
import Preparation from "../../components/Preparation/Preparation";
import AddToCart from "../../components/AddToCart/AddToCart";
import "./Recipe.css";

const API_KEY = "a8a6c56864bd498da56e9de550c0a580";

class Recipe extends Component {
  state = {
    recipe: {
      extendedIngredients: [],
      analyzedInstructions: {
        0: {
          steps: []
        }
      }
      // .steps
    }
  };

  componentDidMount = async () => {
    const id = this.props.location.state.recipe;

    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );

    const data = await response.json();
    this.setState({ recipe: data });
    console.log(this.state);
  };

  render() {
    const recipe = this.state.recipe;

    return (
      <section className="recipe">
        <Showcase recipe={recipe} />
        <div className="details">
          <Serving servings={recipe.servings} />
          <Time time={recipe.cookingMinutes} />
        </div>
        <Ingredients ingredients={recipe.extendedIngredients} />
        {recipe.analyzedInstructions.length !== 0 && (
          <Preparation preparation={recipe.analyzedInstructions[0]} />
        )}
        <AddToCart />
      </section>
    );
  }
}

export default Recipe;
