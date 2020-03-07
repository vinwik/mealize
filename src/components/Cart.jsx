import React, { useEffect } from "react";
import { RecipeContext } from "../RecipeContext";
import { useContext } from "react";
import { ReactComponent as Minus } from "../assets/minus-square.svg";
import Header from "./Header";

const Cart = () => {
  const context = useContext(RecipeContext);

  useEffect(() => {
    context.parseIngredients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cart">
      <Header title="Cart" />
      {context.cart.map(ingredient => {
        const name = ingredient.name;
        return (
          <div className="ingredient" key={name}>
            <div className="content">
              <div className="img">
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                />
              </div>
              <h3 className="name">{ingredient.name}</h3>
            </div>
            <button onClick={() => context.removeFromCart(name)}>
              <Minus />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
