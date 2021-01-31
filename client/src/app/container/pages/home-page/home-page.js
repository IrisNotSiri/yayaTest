import React, { useState } from "react";
import "./home-page.css";
import { BrowsePage } from "./browse-page/browse-page";
import yayaLogo from "./yaya_app.png";
import brandName from "./brand_name.png"
import Image from "react-bootstrap/Image";

export function HomePage(){

  // en:{
  //   address: "Address:2589 Pembina Hwy, Unit 90"
  // },
  // ch:{
  //   address: "地址:2589 Pembina Hwy, Unit 90"
  // }

  return (
    <React.Fragment>
      <div className="HomePageContainer">
        <div><Image className= "brandLogo" src={yayaLogo} rounded /></div>
        <div className="basicInfoContainer">
          <Image className= "brandName" src={brandName} rounded />
          <div className="basicInfo">
            <span className="textVerticalCenter">
              地址:2589 Pembina Hwy, Unit 90 
            </span>
          </div>
          <div className="basicInfo">
            <span className="paddingButton">糖记店内自取</span>
            <a href="http://maps.apple.com/?address=320,Harry+Walker+Pkwy+N+#9,Newmarket,Ontario" className="googleMapsButton">开始导航</a>
          </div>
          <div className="basicInfo">
            <span className="paddingButton">
              电话:(204) 306-7333
            </span>
            <a href="tel:1 204 306 7333" className="googleMapsButton">现在拨打</a>
          </div>
          <div className="basicInfo">
            <span className="textVerticalCenter">
              营业时间: 10AM - 8PM
            </span>
          </div>
        </div>
      </div>
      <div><BrowsePage/></div>
    </React.Fragment>
  );
}
