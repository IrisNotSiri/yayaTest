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
          <section id="sweetNspicy" className = "menu-section">
            甜辣
          </section>
          <section id="spicyOnly"className = "menu-section">
            麻辣
          </section>
          <section id="seaFood" className = "menu-section">
            小海鲜
          </section>
        
          {this.state.dishes.map((dish, index) => {
            return <DishCover key={index} value={dish} id={index} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}
