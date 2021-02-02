import React from "react";
import "./dish-cover.css";

export function DishCover(){
  return (
    <React.Fragment>
      <div className="DishCoverContainer">
        <div className="imgContainer">
          <img src = "https://picsum.photos/150" alt="a pic"/>
        </div>
      </div>
    </React.Fragment>
  );
}
