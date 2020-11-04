import React, { Component } from "react";
import DishDetailNavBar from "./dish-detail-nav-bar/dish-detail-nav-bar";
import DishDetailContent from "./dish-detail-content/dish-detail-content";
import "./dish-detail.css";
export default class DishDetail extends Component {
  state = {
    dishdetails: []
  };

  componentDidMount() {
    this.getDishDetails();
  }

  getDishDetails() {
    fetch(`http://localhost:3000/dishdetails/${this.props.dishId}`)
      .then(results => results.json())
      .then(results => this.setState({ dishdetails: results }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="DishDetailContainer">
          <DishDetailNavBar
            restName={this.state.dishdetails.restaurantName}
          ></DishDetailNavBar>
          <DishDetailContent value={this.state.dishdetails}></DishDetailContent>
        </div>
      </React.Fragment>
    );
  }
}
