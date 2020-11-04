import React, { Component } from "react";
import "./browse-page.css";
import NavBar from "./browse-nav-bar/browse-nav-bar";
import MainMenu from "./main-menu/main-menu";
import Footer from "./footer/footer";

export default class BrowsePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="BrowsePageContainer">
          <NavBar />
          <MainMenu />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
