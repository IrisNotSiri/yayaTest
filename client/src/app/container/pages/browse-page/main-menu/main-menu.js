import React, { Component } from "react";
import "./main-menu.css";
import DishCover from "./dish-cover/dish-cover";
export default class MainMenu extends Component {
  state = {
    dishes: []
  };

  componentDidMount() {
    this.getDishes();
    //console.log(this.state.restaurants);
  }

  getDishes() {
    fetch("http://localhost:3000/dishes")
      .then(results => results.json())
      .then(results => this.setState({ dishes: results }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="MainMenuContainer">
          {this.state.dishes.map((dish, index) => {
            return <DishCover key={index} value={dish} id={index} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}
