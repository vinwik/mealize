import React from "react";
import { ReactComponent as Cart } from "./shopping-cart.svg";
import "./AddToCart.css";

const AddToCart = () => {
  return (
    <div className="addtocart">
      <button className="addtocart-btn">
        <Cart className="icon" />
        <p>Add ingredients to shopping cart</p>
        <p className="ingredient-amount">(1)</p>
      </button>
    </div>
  );
};

export default AddToCart;
