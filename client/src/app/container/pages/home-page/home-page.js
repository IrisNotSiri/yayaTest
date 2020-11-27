import React, { Component, createRef } from "react";
import "./home-page.css";
import { Link } from "react-router-dom";
import BrowsePage from "./browse-page/browse-page";
import yayaLogo from "./yaya_app.png";
import brandName from "./brand_name.png"
import downArrow from "./up_arrow.webp";
import Image from 'react-bootstrap/Image'

export default class HomePage extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.stateRef = createRef();
  }

  handleScrollToStats = () => {
    window.scrollTo({
      top: 820,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="HomePageContainer">
          <div><Image className= "brandLogo" src={yayaLogo} rounded /></div>
          
          <div className="basicInfoContainer">
            <Image className= "brandName" src={brandName} rounded />
            <div className="basicInfo">
              Addr: Pembina Hwy
            </div>
            <div className="basicInfo">
              Hours: 10AM - 8PM
            </div>

            <div className="basicInfo">
              Phone Num:
            </div>
            <div>
            <Image className= "downArrow" src={downArrow} onClick = {this.handleScrollToStats} rounded />
            </div>
          </div>
        </div>
        <div ref={this.stateRef}><BrowsePage/></div>
        
      </React.Fragment>
    );
  }
}
