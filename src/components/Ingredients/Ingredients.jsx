import React from "react";
import { ReactComponent as Plus } from "./plus-square.svg";
import "./Ingredients.css";

const Ingredients = props => {
  return (
    <div className="ingredients">
      <h3 className="ingredients-title">Ingredients</h3>
      {props.ingredients.map(ingredient => {
        return (
          <div key={ingredient.id} className="content">
            <div className="quantity">
              <p className="amount">{ingredient.amount}</p>
              <p
                className={
                  ingredient.measures.us.unitShort.length > 0 ? "unit" : null
                } //Avoids double margin if no unit
              >
                {ingredient.measures.us.unitShort}
              </p>
            </div>
            <p className="name">{ingredient.name}</p>
            <button>
              <Plus className="icon" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Ingredients;
