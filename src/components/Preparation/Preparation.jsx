import React from "react";
import "./Preparation.css";

const Preparation = props => {
  return (
    <div className="preparation">
      <div className="content">
        <h3 className="preparation-title">Preparation</h3>
        <ol className="preparation-steps">
          {props.preparation.steps.map(step => {
            return <li key={step.number}>{step.step}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Preparation;
