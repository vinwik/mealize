import React, { useEffect, useContext } from "react";
import { ReactComponent as Close } from "../assets/times.svg";

import { RecipeContext } from "../RecipeContext";
import { Link } from "react-router-dom";
import Header from "./Header";

const Favourites = () => {
  const context = useContext(RecipeContext);

  useEffect(() => {
    context.parseFavourites();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(context);
  return (
    <div className="favourites">
      <Header title="Favourites" />
      <div className="cards">
        {context.favourites.map(favourite => {
          console.log(context.favourites);
          const id = favourite.id;
          return (
            <div
              key={id}
              className="card"
              style={{ backgroundImage: `url(${favourite.image})` }}
            >
              <button onClick={() => context.removeFromFavourites(id)}>
                <Close className="close-icon" />
              </button>
              <Link
                to={{
                  pathname: `/recipe/${favourite.id}`,
                  state: { recipe: favourite.id }
                }}
              >
                <div className="content">
                  <h3 className="title">
                    {favourite.title.length < 30
                      ? `${favourite.title}`
                      : `${favourite.title.substring(0, 25)}...`}
                  </h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
