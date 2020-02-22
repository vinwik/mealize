import React from "react";
import { ReactComponent as Like } from "./heart.svg";
import "./Card.css";

const Card = props => {
  return (
    <div className="card">
      {/* {props.recipes.map(recipe => {
        return (
          <div
            key={recipe.id}
            className="card"
            style={{
              backgroundImage: `url("https://spoonacular.com/recipeImages/${recipe.image}")`
            }}
          > */}
      <div className="content">
        <Like className="like-icon" />
        <h2 className="recipe-title">helo</h2>
      </div>
      {/* </div>
        );
      })} */}
    </div>
  );
};

export default Card;
