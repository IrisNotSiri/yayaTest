import React  from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import "./pages.css";
import { HomePage } from "./home-page/home-page";
import DishDetail from "./dish-detail/dish-detail";

export function Pages(){
  return (
    <BrowserRouter>
      <div className="PagesContainer">
        <Route path="/" exact component={HomePage} />
        <Route
          path="/dish-detail/:dishId"
          render={({ match }) => <DishDetail dishId={match.params.dishId} />}
        />
      </div>
    </BrowserRouter>
  );
}
