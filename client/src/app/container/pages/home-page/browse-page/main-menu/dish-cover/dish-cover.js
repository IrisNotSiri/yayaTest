import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dish-cover.css";

export default class DishCover extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="DishCoverContainer">
          <div className="imgContainer">
            {/* <img
              className="dishPic"
              src={require("../../../../../assets/" + this.props.value.img)}
              alt="a pic"
            /> */}
            <img src = "https://picsum.photos/100" alt="a pic"/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
