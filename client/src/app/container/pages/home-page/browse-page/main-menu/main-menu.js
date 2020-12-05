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
          <section id="sweetNspicy">
            {this.state.menu.map((dish, index) => {
            //  console.log(dish);
            return <DishCover key={index} value={dish} id={index} />;
            })}
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
