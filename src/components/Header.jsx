import React from "react";
import "../assets/Phenomena-Regular.woff";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="brand">{title}</h1>
    </header>
  );
};

export default Header;
