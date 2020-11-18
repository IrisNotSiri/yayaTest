import React, { Component } from "react";
import "./browse-nav-bar.css";
export default class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="NavBarContainer">
          <div className="title">
            <span>Foods Near Me</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
