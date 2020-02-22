import React, { Component } from "react";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import Nav from "../../components/Nav/Nav";
import "./Main.css";

const API_KEY = "8663ae15aeec4e68a07aada6c1bbb61c";

class Main extends Component {
  // state = {
  //   recipes: []
  // };

  // getRecipe = async e => {
  //   const searchInput = e.target.elements.searchInput.value;
  //   e.preventDefault();

  //   const response = await fetch(
  //     `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${searchInput}`
  //   );

  //   const data = await response.json();
  //   this.setState({ recipes: data.results });
  //   console.log(this.state);
  // };

  render() {
    return (
      <main className="main">
        {/* <Search getRecipe={this.getRecipe} /> */}
        {/* <Card recipes={this.state.recipes} className="cards" /> */}

        <Card className="cards" />
        <Card />
        <Nav />
      </main>
    );
  }
}

export default Main;
