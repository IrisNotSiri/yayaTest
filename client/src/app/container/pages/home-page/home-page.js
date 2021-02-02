import React, { useEffect, useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import "./home-page.css";
import { BrowsePage } from "./browse-page/browse-page";
import yayaLogo from "./yaya_app.png";
import brandName from "./brand_name.png"
import Image from "react-bootstrap/Image";

const messages = {
  en:{
    address: "Address:2589 Pembina Hwy, Unit 90",
    info: "Inside Sugar Marmalade",
    navButton: "Navigate",
    phoneNum: "Phone:(204) 306-7333",
    callButton: "Dial Now",
    hours: "Hours: 10AM - 8PM"
  },
  cs:{
    address: "地址:2589 Pembina Hwy, Unit 90",
    info: "糖记店内自取",
    navButton: "开始导航",
    phoneNum: "电话:(204) 306-7333",
    callButton: "现在拨打",
    hours: "营业时间: 10AM - 8PM"
  }
}

export function HomePage(){
  const [language,setLanguage] = useState('cs');
  const toggleLanguage=()=>{
    if(language == 'ch'){
      setLanguage('en');
    }else{
      setLanguage('cs');
    }
  }
  // useEffect(()=>{
  //   toggleLanguage();
  // });
  return (
    <React.Fragment>
      <div className="HomePageContainer">
        <div><Image className= "brandLogo" src={yayaLogo} rounded /></div>
        <div className="basicInfoContainer">
          <Image className= "brandName" src={brandName} rounded />
          <div className="basicInfo">
            <IntlProvider locale={language} messages={messages[language]}>
              <span className="textVerticalCenter" >
                <FormattedMessage id="address" value={{language}}/>
              </span>
            </IntlProvider>
          </div>
          <div className="basicInfo">
            <IntlProvider locale={language} messages={messages[language]}>
              <span className="paddingButton" >
                <FormattedMessage id="info" value={{language}}/>
              </span>
              <a href="http://maps.apple.com/?address=320,Harry+Walker+Pkwy+N+#9,Newmarket,Ontario" className="googleMapsButton">
                <FormattedMessage id="navButton" value={{language}}/>
              </a>
            </IntlProvider>
          </div>
          <div className="basicInfo">
            <IntlProvider locale={language} messages={messages[language]}>
              <span className="paddingButton" >
                <FormattedMessage id="phoneNum" value={{language}}/>
              </span>
              <a href="tel:1 204 306 7333" className="googleMapsButton">
                <FormattedMessage id="callButton" value={{language}}/>
              </a>
            </IntlProvider>
          </div>
          <div className="basicInfo">
            <IntlProvider locale={language} messages={messages[language]}>
              <span className="textVerticalCenter" >
                <FormattedMessage id="hours" value={{language}}/>
              </span>
            </IntlProvider>
          </div>
        </div>
      </div>
      <div><BrowsePage/></div>
    </React.Fragment>
  );
}
