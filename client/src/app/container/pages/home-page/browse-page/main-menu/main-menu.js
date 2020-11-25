import React, { Component } from "react";
import "./main-menu.css";
import DishCover from "./dish-cover/dish-cover";
export default class MainMenu extends Component {
  state = {
    dishes: []
  };

  // componentDidMount() {
  //   this.getDishes();
  //   //console.log(this.state.restaurants);
  // }

  // getDishes() {
  //   fetch("http://localhost:3000/dishes")
  //     .then(results => results.json())
  //     .then(results => this.setState({ dishes: results }));
  // }

  render() {
    return (
      <React.Fragment>
        <main id="main-menu">
          <div id="nav-placeholder"></div>
          <section id="sweetNspicy">
            <h1>Section 1</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
          </section>
          <section id="spicyOnly">
            <h1>Section 2</h1>
            <p>Ratione nulla nam, ipsa dignissimos corrupti veniam nostrum, laudantium asperiores sequi numquam placeat velit voluptate in praesentium non labore unde incidunt laborum maxime quae magni.</p>
          </section>
          <section id="seaFood">
            <h1>Section 4</h1>
            <p>Aliquid aliquam magnam ducimus similique obcaecati, unde exercitationem laborum incidunt, quas in ipsum inventore nostrum? Blanditiis optio cumque earum iste odio! Alias sint accusamus repudiandae.</p>
          </section>
        </main>
      </React.Fragment>
    );
  }
}
