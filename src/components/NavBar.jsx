import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as File } from "../assets/file-alt.svg";
import { ReactComponent as Like } from "../assets/heart.svg";
import { ReactComponent as Cart } from "../assets/shopping-cart.svg";
import { ReactComponent as User } from "../assets/user.svg";

export class NavBar extends Component {
  render() {
    return (
      <Nav>
        <NavBtn>
          <Link to="/">
            <File />
          </Link>
        </NavBtn>
        <NavBtn>
          <Link>
            <Like />
          </Link>
        </NavBtn>
        <NavBtn>
          <Link to="/cart">
            <Cart />
          </Link>
        </NavBtn>
        <NavBtn>
          <Link>
            <User />
          </Link>
        </NavBtn>
      </Nav>
    );
  }
}

export default NavBar;

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 920px;
  background-color: #fff;
  min-height: 8vh;
  display: flex;
  align-item: center;
  justify-content: space-around;
`;

const NavBtn = styled.button`
  display: flex;
  align-item: center;
  svg {
    height: 2em;
  }
`;
