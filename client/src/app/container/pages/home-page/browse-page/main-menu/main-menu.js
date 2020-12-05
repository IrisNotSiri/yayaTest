import React, { Component } from "react";
import "./main-menu.css";
import DishCover from "./dish-cover/dish-cover";
import { get } from "jquery";
export default class MainMenu extends Component {
  state = {
    menu: []
  };

  componentDidMount() {
    this.getDishes();
    console.log("beginning");
    console.log(this.state.menu);
  }

  getDishes() {
    fetch("http://localhost:3000/menu")
      .then(results => results.json())
      .then(results => this.setState({ menu: results }))
      .then(()=>{console.log(this.state.menu);})
    // window.setTimeout(()=>{
    //   console.log("after 1s");
    //   console.log(this.state.menu);
    // }, 1000);
  }

  render() {
    return (
      <React.Fragment>
         
        <main id="main-menu">
          <div id="nav-placeholder"></div>
          
          <section id="sweetSpicy">
            {this.state.menu.map((dish, index) => {
              if(dish.category == "sweetSpicy"){
                return <DishCover key={index} value={dish} id={index} />;
              }
            })}
          </section>
          <section id="spicy">
            {this.state.menu.map((dish, index) => {
              if(dish.category == "spicy"){
                return <DishCover key={index} value={dish} id={index} />;
              }
            })}
          </section>
          <section id="seafood">
            {this.state.menu.map((dish, index) => {
              if(dish.category == "seafood"){
                return <DishCover key={index} value={dish} id={index} />;
              }
            })}
          </section>
        </main>
      </React.Fragment>
    );
  }
}
