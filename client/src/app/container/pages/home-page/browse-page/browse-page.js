import React, { Component } from "react";
import "./browse-page.css";
import MainMenu from "./main-menu/main-menu";
import NavBar from "./browse-nav-bar/browse-nav-bar";

export default class BrowsePage extends Component {
  state = {};
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  };


  handleScroll(){
    console.log(window.pageYOffset);
    if(window.pageYOffset > window.screen.height){
      document.getElementById("navbar").style.position = "fixed";
      document.getElementById("navbar").style.top = "0";

    }else{
      document.getElementById("navbar").style.position = "static";
      document.getElementById("navbar").style.top = "100vh";
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="BrowsePageContainer">
          <NavBar id="navbar"/>
          <MainMenu />
        </div>
      </React.Fragment>
    );
  }
}
