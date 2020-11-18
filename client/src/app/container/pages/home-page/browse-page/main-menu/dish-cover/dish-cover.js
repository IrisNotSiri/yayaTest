import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dish-cover.css";

export default class DishCover extends Component {
  render() {
    var innerBoxShadow = {
      boxShadow: "inset 0px -125px 125px -100px black"
    };
    return (
      <p>1</p>
      // <React.Fragment>
      //   <div className="DishCoverContainer">
      //     <Link to={`/dish-detail/${this.props.value.id}`}>
      //       <div className="imgContainer" style={innerBoxShadow}>
      //         <img
      //           className="dishPic"
      //           src={require("../../../../../assets/" + this.props.value.pic)}
      //           alt="a pic"
      //         />
      //         <div className="text-top-right">
      //           {this.props.value.restaurant.distance}m
      //         </div>
      //         <div className="text-bottom-left">{this.props.value.name}</div>
      //         {/* <div className="text-bottom-right-up">
      //           {this.props.value.originalPrice}
      //         </div> */}
      //         <div className="text-bottom-right-down">
      //           <span>{this.props.value.price}</span>
      //         </div>
      //       </div>
      //     </Link>
      //   </div>
      // </React.Fragment>
    );
  }
}
