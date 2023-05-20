import React from 'react'
import { NavBarItem } from "./NavBarItem";
import { Divider } from "@mui/material";
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const NavBarExplore = () => {
  return (
      <>
         <p style={{fontSize: "1.1rem", fontWeight:"300"}}>Explorar</p>
         <NavBarItem icon={<WhatshotOutlinedIcon/>} text="Tendencias"/>
         <NavBarItem icon={<MusicNoteOutlinedIcon/>} text="Música"/>
         <NavBarItem icon={<MovieOutlinedIcon/>} text="Peliculas"/>
         <NavBarItem icon={<SensorsOutlinedIcon/>} text="En vivo"/>
         <NavBarItem icon={<SportsEsportsOutlinedIcon/>} text="Videojuegos"/>
         <NavBarItem icon={<FeedOutlinedIcon/>} text="Noticias"/>
         <NavBarItem icon={<EmojiEventsOutlinedIcon/>} text="Deportes"/>
         <NavBarItem icon={<LightbulbOutlinedIcon/>} text="Aprendizaje"/>
         <Divider/>
      </>
      
   )
}

export { NavBarExplore }