import React, { Component } from "react";
import "./dish-detail-nav-bar.css";
export default class DishDetailNavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="DishDetailNavBarContainer">
          <div className="detailHeader">
            <span>{this.props.restName}</span>
          </div>
          <div className = "">

          </div>
        </div>
      </React.Fragment>
    );
  }
}
