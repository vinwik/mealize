import React from "react";
import "./Time.css";

const Time = props => {
  return (
    <div className="time">
      <h3 className="title">Cooking time</h3>
      <p>{props.time} min</p>
    </div>
  );
};

export default Time;
