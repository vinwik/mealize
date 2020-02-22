import React from "react";
import { ReactComponent as Plus } from "./plus-square.svg";
import { ReactComponent as Minus } from "./minus-square.svg";
import "./Serving.css";

const Serving = props => {
  return (
    <div className="serving">
      <h3 className="title">Servings</h3>
      <div className="serving-counter">
        <Minus className="icon" />
        <p>{props.servings}</p>
        <Plus className="icon" />
      </div>
    </div>
  );
};

export default Serving;
