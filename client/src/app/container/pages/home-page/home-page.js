import React, { Component, createRef } from "react";
import "./home-page.css";
import { Link } from "react-router-dom";
import BrowsePage from "./browse-page/browse-page";
import yayaLogo from "./yaya_app.png";
import brandName from "./brand_name.png"
import downArrow from "./up_arrow.webp";
import Image from "react-bootstrap/Image";

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
              Addr: Pembina Hwy...
              <a href="http://maps.google.com/maps?q=320+Harry+Walker+Pkwy+N+#9,+Newmarket,+ON+L3Y7B4">Google Maps</a> 
              <a href="http://maps.apple.com/?address=320,Harry+Walker+Pkwy+N+#9,Newmarket,Ontario">Apple Maps</a> 
            </div>
            <div className="basicInfo">
              Hours: 10AM - 8PM
            </div>

            <div className="basicInfo">
              Phone Num:<a href="tel:1 416 887 5025">Iris number</a>
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
