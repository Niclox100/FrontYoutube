import React from 'react'
import "./styles/NavBarSuscriptionsItem.css"

const NavBarSuscriptionsItem = ({avatar, name, icon}) => {
   return (
      <div className="navBarSuscriptionsItem-container">
         {avatar}
         <span>{name}</span>
         {icon}
      </div>
  )
}

export { NavBarSuscriptionsItem }
