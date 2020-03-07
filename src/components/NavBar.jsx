import React, { Component } from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as File } from "../assets/file-alt.svg";
import { ReactComponent as Like } from "../assets/heart.svg";
import { ReactComponent as Cart } from "../assets/shopping-cart.svg";
import { ReactComponent as User } from "../assets/user.svg";

export class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <button className="nav-btn">
          <Link to="/">
            <File className="nav-icon" />
          </Link>
        </button>
        <button className="nav-btn">
          <Link to="/favourites">
            <Like className="nav-icon" />
          </Link>
        </button>
        <button className="nav-btn">
          <Link to="/cart">
            <Cart className="nav-icon" />
          </Link>
        </button>
        <button className="nav-btn">
          <Link to="#">
            <User className="nav-icon" />
          </Link>
        </button>
      </nav>
    );
  }
}

export default NavBar;

// const Nav = styled.nav`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   max-width: 920px;
//   background-color: #fff;
//   min-height: 8vh;
//   display: flex;
//   align-item: center;
//   justify-content: space-around;
// `;

// const button = styled.button`
//   display: flex;
//   align-item: center;
//   svg {
//     height: 2em;
//   }
// `;
