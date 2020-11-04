import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import Pages from "./container/pages/pages";

export default class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="AppContainer">
          <Pages />
        </div>
      </BrowserRouter>
    );
  }
}
