import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Previous } from "./angle-left.svg";
import { ReactComponent as Like } from "./heart.svg";
import "./Showcase.css";

const Showcase = props => {
  return (
    <div
      className="showcase"
      key={props.recipe.id}
      style={{
        backgroundImage: `url(${props.recipe.image})`
      }}
    >
      <div className="content">
        <div className="icon-wrapper">
          <button className="btn">
            <Link
              to={{
                pathname: "/"
              }}
            >
              <Previous className="previous-icon" />
            </Link>
          </button>
          <button className="btn">
            <Like className="like-icon" />
          </button>
        </div>
        <h2 className="recipe-title">{props.recipe.title}</h2>
      </div>
    </div>
  );
};

export default Showcase;
