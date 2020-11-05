import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import Pages from "./container/pages/pages";


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {apiResponse:""}
  }
  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }
  componentWillMount(){
    this.callAPI();
  }
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="AppContainer">
          <Pages />
        </div>
        <p>{this.state.apiResponse}</p>
      </BrowserRouter>
    );
  }
}
