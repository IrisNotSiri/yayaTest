import React, { Component } from "react";
import "./dish-detail-content.css";
export default class DishDetailContent extends Component {
  render() {
    const picName = this.props.value.restPicOut;
    if (picName) {
      return (
        <React.Fragment>
          <div className="DishDetailContentContainer">
            <div className="restaurantOutside">
              <img
                className="restPicOut"
                src={require("../../../../assets/" + picName)}
                alt="a pic"
              />
            </div>
            <div className="restaurantInside"> </div>
            <div className="dishDetail"> </div>
          </div>
        </React.Fragment>
      );
    }
    return <React.Fragment></React.Fragment>;
  }
}
