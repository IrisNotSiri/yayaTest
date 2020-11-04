import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import "./pages.css";
import HomePage from "./home-page/home-page";
import BrowsePage from "./browse-page/browse-page";
import DishDetail from "./dish-detail/dish-detail";

export default class Pages extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="PagesContainer">
          <Route path="/" exact component={HomePage} />
          <Route path="/browse-page" exact component={BrowsePage} />
          <Route
            path="/dish-detail/:dishId"
            render={({ match }) => <DishDetail dishId={match.params.dishId} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}
