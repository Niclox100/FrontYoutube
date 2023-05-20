import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import { Avatar } from "@mui/material";
import "./styles/Header.css"

const Header = () => {
  return(
   <div className="header-main">
      <div className="header-main_left">
         <MenuIcon className="header-icon"/>
         <div className={"header-logoContainer"}>
            <img src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-3-3.png" alt="" className="header-image"/>
         </div>
      </div>
      <div className="header-searcher">
         <input type="text" className="header-input" placeholder="Buscar"/>
         <MicIcon/>
      </div>
      <div className="header-main_right">
        <VideocamOutlinedIcon className="header-icon"/>
        <NotificationAddOutlinedIcon className="header-icon"/>
        <Avatar src="public/anyaaa.png" sx={{ width: 30, height: 30 }} className="header-icon"/>
      </div>
   </div>
  );
}

export { Header };