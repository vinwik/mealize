import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { RecipesConsumer } from "../RecipesContext";

const CardList = () => {
  // const [state, setState] = useState({
  //   state: []
  // });

  // useEffect(() => {
  //   console.log("cdm");
  //   const json = localStorage.getItem("recipes");
  //   const recipes = JSON.parse(json);
  //   setState({ recipes });
  // }, []);

  return (
    <RecipesConsumer>
      {value => {
        return value.recipes.map(recipe => {
          return (
            <Card
              key={recipe.id}
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
                hello
              </Link>
            </Card>
          );
        });
      }}
    </RecipesConsumer>
  );
};

export default CardList;

const Card = styled.div`
  height: 70vh;
  width: 30vh;
  background: no-repeat center/cover;
  magin: 0 auto;
`;
