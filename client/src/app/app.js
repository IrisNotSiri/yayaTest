import React, { Component } from "react";
import "./app.css";
import Pages from "./container/pages/pages";


export default class App extends Component {
  // constructor(props){
  //   super(props);
  // }

  state = {};
  render() {
    return (
      <div className="AppContainer">
        <Pages />
      </div>
    );
  }
}
