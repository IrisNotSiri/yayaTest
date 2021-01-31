import React, { useState, useEffect } from "react";
import "./main-menu.css";
import { DishCover } from "./dish-cover/dish-cover";

export function MainMenu(){
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/menu")
      .then(results => results.json())
      .then(results => setMenu(results));
  });

  return (
    <React.Fragment>
      <main id="main-menu">
        <div id="nav-placeholder"></div>
        <section className="removePaddingMargin" id="sweetSpicy">
          <div className="whiteSpace"></div>
          {menu.map((dish, index) => {
            if(dish.category === "sweetSpicy"){
              return <DishCover key={index} value={dish} id={index} />;
            }
          })}
        </section>
        <section className="removePaddingMargin" id="spicy">
          <div className="whiteSpace"></div>
          {menu.map((dish, index) => {
            if(dish.category === "spicy"){
              return <DishCover key={index} value={dish} id={index} />;
            }
          })}
        </section>
        <section className="removePaddingMargin" id="seafood">
          <div className="whiteSpace"></div>
          {menu.map((dish, index) => {
            if(dish.category === "seafood"){
              return <DishCover key={index} value={dish} id={index} />;
            }
          })}
        </section>
      </main>
    </React.Fragment>
  );
}
