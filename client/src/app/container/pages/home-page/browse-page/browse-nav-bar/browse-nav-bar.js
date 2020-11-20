import React, { Component } from "react";
import "./browse-nav-bar.css";
export default class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id = "navbar" className="NavBarContainer">
          <div className="title" >
            <span>Navbar</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
