import React, { Component } from "react";
import "./browse-nav-bar.css";
export default class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id = "navbar" className="NavBarContainer">
          <nav className="menu-nav">
            <ul className="nav__list">
              <li className="nav__list-item">
                <a href="#sweetNspicy" className="nav-link nav__link">甜辣黑鸭</a>
              </li>
              <li className="nav__list-item">
                <a id="spicyOnlyTag" href="#spicyOnly" className="nav-link nav__link">麻辣黑鸭</a>
              </li>
              <li className="nav__list-item">
                <a href="#seaFood" className="nav-link nav__link">乱捞小海鲜</a>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
