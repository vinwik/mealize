import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import Nav from "../../components/Nav/Nav";
import "./Main.css";

const API_KEY = "a8a6c56864bd498da56e9de550c0a580";

class Main extends Component {
  state = {
    recipes: []
  };

  getRecipes = async e => {
    const searchInput = e.target.elements.searchInput.value;
    e.preventDefault();

    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${searchInput}&instructionsRequired=true`
    );

    const data = await response.json();
    this.setState({ recipes: data.results });
    console.log(this.state);
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <main className="main">
        <Header className="header" />
        <Search getRecipes={this.getRecipes} className="search" />
        <Card recipes={this.state.recipes} className="cards" />
        <Nav className="nav" />
      </main>
    );
  }
}

export default Main;
