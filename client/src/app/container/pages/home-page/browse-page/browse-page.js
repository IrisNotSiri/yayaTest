import React, { useState, useEffect } from "react";
import "./browse-page.css";
import { MainMenu } from "./main-menu/main-menu";
import { NavBar } from "./browse-nav-bar/browse-nav-bar";
import $ from "jquery";
export function BrowsePage(){
  const [mainNavLinks, setMainNavLinks] = useState([]);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      let mainNavLinks = document.querySelectorAll("nav ul li a");
      let mainSections = document.querySelectorAll("main section");

      let lastId;
      let cur = [];

      window.addEventListener("scroll", event => {
        
        let windowHeight =  window.innerHeight;
        let fromTop = window.scrollY - windowHeight;
        mainNavLinks.forEach(link => {
          let section = document.querySelector(link.hash);
          //console.log(section);
          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add("current");
          } else {
            link.classList.remove("current");
          }
        });
      });
        
      if(window.pageYOffset > window.screen.height){
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.top = "0";
        document.getElementById("nav-placeholder").style.height = "34px";
      }else{
        document.getElementById("navbar").style.position = "static";
        document.getElementById("navbar").style.top = "100vh";
        document.getElementById("nav-placeholder").style.height = "0";
      };
    });

  });

  return (
    <React.Fragment>
      <div className="BrowsePageContainer">
        <NavBar id="navbar"/>
        <MainMenu />
      </div>
    </React.Fragment>
  );
  
}

