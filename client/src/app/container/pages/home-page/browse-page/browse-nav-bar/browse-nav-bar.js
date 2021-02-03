import React, {useState, useEffect} from "react";
import "./browse-nav-bar.css";
import { IntlProvider, FormattedMessage } from "react-intl";
export function NavBar({lan}){
  const messages = {
    en:{
      sweetnspicy: "sweet&spicy",
      spicy: "spicy",
      others: "others",
    },
    cs:{
      sweetnspicy: "甜辣黑鸭",
      spicy: "麻辣黑鸭",
      others: "小海鲜",
    }
  }
  const [language,setLanguage] = useState(lan);
  useEffect(()=>{
    setLanguage(lan);
  });
  return (
    <React.Fragment>
      <div id = "navbar" className="NavBarContainer">
        <nav className="menu-nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <IntlProvider locale={language} messages={messages[language]}>
                <a href="#sweetSpicy" className="nav-link nav__link">
                  <FormattedMessage id="sweetnspicy" value={{language}}/>
                </a>
              </IntlProvider>
            </li>
            <li className="nav__list-item">
              <IntlProvider locale={language} messages={messages[language]}>
                <a href="#spicy" className="nav-link nav__link">
                  <FormattedMessage id="spicy" value={{language}}/>
                </a>
              </IntlProvider>
            </li>
            <li className="nav__list-item">
              <IntlProvider locale={language} messages={messages[language]}>
                <a href="#seafood" className="nav-link nav__link">
                  <FormattedMessage id="others" value={{language}}/>
                </a>
              </IntlProvider>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}
