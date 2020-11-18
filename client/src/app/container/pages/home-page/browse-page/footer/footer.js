import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="FooterContainer">
          <div className="footerMessage">
            <span>More Restaurants Are Joining Soon</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
