import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as File } from "./file-alt.svg";
import { ReactComponent as Like } from "./heart.svg";
import { ReactComponent as Cart } from "./shopping-cart.svg";
import { ReactComponent as User } from "./user.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <button className="nav-btn">
        <Link to={"/"}>
          <File className="nav-icon" />
        </Link>
      </button>
      <button className="nav-btn">
        <Link>
          <Like className="nav-icon" />
        </Link>
      </button>
      <button className="nav-btn">
        <Link to={"/cart"}>
          <Cart className="nav-icon" />
        </Link>
      </button>
      <button className="nav-btn">
        <Link>
          <User className="nav-icon" />
        </Link>
      </button>
    </nav>
  );
};

export default Nav;
