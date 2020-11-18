import React, { Component } from "react";
import "./browse-page.css";
import MainMenu from "./main-menu/main-menu";

export default class BrowsePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="BrowsePageContainer">
          <MainMenu />
        </div>
      </React.Fragment>
    );
  }
}
