import React from "react";
import "./styles/NavBar.css"

import { Divider } from "@mui/material";
import { NavBarMain } from "./NavBarMain";
import { NavBarSuscriptions } from "./NavBarSuscriptions";
import { NavBarExplore } from "./NavBarExplore";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <NavBarMain/>
      <Divider/>
      <NavBarSuscriptions/>
      <NavBarExplore/>
    </div>
  )
}

export { NavBar }
