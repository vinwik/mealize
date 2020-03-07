import React, { useEffect, useContext } from "react";
// import styled from "styled-components";
import { ReactComponent as Like } from "../assets/heart.svg";

import { Link } from "react-router-dom";
import { RecipesConsumer } from "../RecipesContext";
import { RecipeContext } from "../RecipeContext";
import { RecipeConsumer } from "../RecipeContext";

const CardList = () => {
  const context = useContext(RecipeContext);

  // useEffect(() => {
  //   context.parseFavourites();
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const favBtn = favourite.recipe;

  return (
    <div className="cards">
      <RecipesConsumer>
        {value => {
          return value.recipes.map(recipe => {
            return (
              <div
                key={recipe.id}
                style={{
                  backgroundImage: `url("https://spoonacular.com/recipeImages/${recipe.image}")`
                }}
                className="card"
              >
                <Link
                  to={{
                    pathname: `/recipe/${recipe.id}`,
                    state: { recipe: recipe.id }
                  }}
                >
                  <div className="content">
                    <Like className="like-icon" />
                    <h2 className="title">
                      {recipe.title.length < 30
                        ? `${recipe.title}`
                        : `${recipe.title.substring(0, 25)}...`}
                    </h2>
                  </div>
                </Link>
              </div>
            );
          });
        }}
      </RecipesConsumer>
    </div>
  );
};

export default CardList;

// const Card = styled.div`
//   height: 70vh;
//   width: 30vh;
//   background: no-repeat center/cover;
//   magin: 0 auto;
// `;
