import React, { Component } from "react";
import "./home-page.css";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="HomePageContainer">
          <div className="addressInputContainer">
            <h1 className="titleHeading">
              Signature and Specials of Restaurants, Near You{" "}
            </h1>
            <div className="inputbuttonContainer">
              <input className="addressInput"></input>
            </div>
            <Link to="/browse-page">
              <button className="discoverButton">Yeah, Let's See</button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
