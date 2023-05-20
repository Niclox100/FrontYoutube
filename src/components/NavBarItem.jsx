import React from 'react'
import "./styles/NavBarItem.css"

const NavBarItem = ({icon, text}) => {
    return (
      <div className="navBarItem-tab" tabIndex="0">
        {icon}
        <p className="navBarItem-text">{text}</p>
      </div>
  )
}

export { NavBarItem }
