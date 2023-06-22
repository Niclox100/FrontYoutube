import React, { useContext } from 'react'
import { YtContext } from '../YtContext'
import "./styles/NavBarItem.css"

const NavBarItem = ({icon, text}) => {

  const { extendedNavBar } = useContext(YtContext)
    
  return (
    <div className={`navBarItem-tab ${!extendedNavBar && "shortened"}`} tabIndex="0">
      {icon}
      <p className={`navBarItem-text ${!extendedNavBar && "shortened"}`}>{text}</p>
    </div>
  )
}

export { NavBarItem }
