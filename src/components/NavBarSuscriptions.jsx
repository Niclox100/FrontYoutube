import React from 'react'
import "./styles/NavBarSuscriptions.css"
import { Avatar, Divider } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { NavBarSuscriptionsItem } from './NavBarSuscriptionsItem'

const NavBarSuscriptions = () => {
  return (
    <>
        <p style={{fontSize: "1.1rem", fontWeight:"300"}}>Suscripciones</p>
        <NavBarSuscriptionsItem 
          avatar={<Avatar src="https://www.mundodeportivo.com/alfabeta/hero/2022/08/cara-anya.jpeg?width=768&aspect_ratio=16:9&format=nowebp" sx={{ width: 25, height: 25 }} className="navBarSuscriptions-avatar"/>}
          name="Anya"
          icon={<FiberManualRecordIcon sx={{ width: 7, height: 7 }} className="navBarSuscriptions-icon" color='primary'/>}
        />
        <NavBarSuscriptionsItem 
          avatar={<Avatar src="https://www.mundodeportivo.com/alfabeta/hero/2022/08/cara-anya.jpeg?width=768&aspect_ratio=16:9&format=nowebp" sx={{ width: 25, height: 25 }} className="navBarSuscriptions-avatar"/>}
          name="Anya"
          icon={<FiberManualRecordIcon sx={{ width: 7, height: 7 }} className="navBarSuscriptions-icon" color='primary'/>}
        />
        <NavBarSuscriptionsItem 
          avatar={<Avatar src="https://www.mundodeportivo.com/alfabeta/hero/2022/08/cara-anya.jpeg?width=768&aspect_ratio=16:9&format=nowebp" sx={{ width: 25, height: 25 }} className="navBarSuscriptions-avatar"/>}
          name="Anya"
          icon={<FiberManualRecordIcon sx={{ width: 7, height: 7 }} className="navBarSuscriptions-icon" color='primary'/>}
        />
         <NavBarSuscriptionsItem 
          avatar={<Avatar src="https://www.mundodeportivo.com/alfabeta/hero/2022/08/cara-anya.jpeg?width=768&aspect_ratio=16:9&format=nowebp" sx={{ width: 25, height: 25 }} className="navBarSuscriptions-avatar"/>}
          name="Anya"
          icon={<FiberManualRecordIcon sx={{ width: 7, height: 7 }} className="navBarSuscriptions-icon" color='primary'/>}
        />
        <Divider/>
    </>
  )
}

export { NavBarSuscriptions }

