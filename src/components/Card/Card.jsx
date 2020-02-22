import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Like } from "./heart.svg";
import "./Card.css";

const Card = props => {
  return (
    <div className="cards">
      {props.recipes.map(recipe => {
        return (
          <div
            key={recipe.id}
            className="card"
            style={{
              backgroundImage: `url("https://spoonacular.com/recipeImages/${recipe.image}")`
            }}
          >
            <Link
              to={{
                pathname: `/recipe/${recipe.id}`,
                state: { recipe: recipe.id }
              }}
            >
              <div className="content">
                <Like className="like-icon" />
                <h2 className="recipe-title">
                  {recipe.title.length < 35
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 32)}...`}
                </h2>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
