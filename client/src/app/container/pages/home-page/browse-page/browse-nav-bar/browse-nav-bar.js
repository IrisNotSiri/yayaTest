import React, { Component } from "react";
import "./browse-nav-bar.css";
export default class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id = "navbar" className="NavBarContainer">
          <nav className="menu-nav">
            <ul className="nav__list">
              <li className="nav__list-item">
                <a href="#sweetNspicy" className="nav-link nav__link">甜辣黑鸭</a>
              </li>
              <li className="nav__list-item">
                <a id="spicyOnlyTag" href="#spicyOnly" className="nav-link nav__link">麻辣黑鸭</a>
              </li>
              <li className="nav__list-item">
                <a href="#seaFood" className="nav-link nav__link">乱捞小海鲜</a>
              </li>
            </ul>
          </nav>
        </div>

        <main>
          <section id="sweetNspicy">
            <h1>Section 1</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
          </section>
          <section id="spicyOnly">
            <h1>Section 2</h1>
            <p>Ratione nulla nam, ipsa dignissimos corrupti veniam nostrum, laudantium asperiores sequi numquam placeat velit voluptate in praesentium non labore unde incidunt laborum maxime quae magni.</p>
          </section>
          <section id="seaFood">
            <h1>Section 4</h1>
            <p>Aliquid aliquam magnam ducimus similique obcaecati, unde exercitationem laborum incidunt, quas in ipsum inventore nostrum? Blanditiis optio cumque earum iste odio! Alias sint accusamus repudiandae.</p>
          </section>
        </main>
      </React.Fragment>
    );
  }
}
