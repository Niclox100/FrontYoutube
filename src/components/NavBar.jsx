import React, {useContext} from "react";
import "./styles/NavBar.css"
import { NavBarMain } from "./NavBarMain";
import { NavBarSuscriptions } from "./NavBarSuscriptions";
import { NavBarExplore } from "./NavBarExplore";
import { YtContext } from "../YtContext";



const NavBar = () => {
  const { extendedNavBar, setExtendedNavBar } = useContext(YtContext)
  
  let timeOut;

  let setNavBarStatus = () => {
    
    let screenWidth = window.innerWidth;

      if (timeOut) {
        clearTimeout(timeOut);
      }

    timeOut = setTimeout(()=> {
      if(screenWidth < 1310){
        setExtendedNavBar(false)
      } else {
        setExtendedNavBar(true)
      }
    }, 50);

  }

  window.addEventListener("resize", setNavBarStatus)
  return (
    <div className={`navbar-container ${!extendedNavBar && "shortened"}`}>
      <NavBarMain/>
      {extendedNavBar && (
        <>
          <NavBarSuscriptions/>
          <NavBarExplore/>
        </>
      )}
    </div>
  )
}

export { NavBar }
