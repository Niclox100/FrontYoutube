import React, { useContext } from 'react'
import "./styles/NavBarMain.css"
import HomeIcon from '@mui/icons-material/Home';
import { NavBarItem } from "./NavBarItem";
import YouTubeIcon from '@mui/icons-material/YouTube';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Divider } from "@mui/material";
import { YtContext } from '../YtContext'

const NavBarMain = () => {

  const { extendedNavBar } = useContext(YtContext)
  return (
    <>
      <div className={`navBarMainContainer`}>
      <NavBarItem icon={<HomeIcon/>} text="Principal"/>
      <NavBarItem icon={<SlowMotionVideoIcon/>} text="Shorts"/>
      <NavBarItem icon={<SubscriptionsIcon/>} text="Suscripciones"/>
      <NavBarItem icon={<YouTubeIcon/>} text="Originals"/>
      <NavBarItem icon={<LibraryMusicIcon/>} text="Youtube Music"/>
      {!extendedNavBar && (
      <>
        <NavBarItem icon={<LibraryBooksIcon/>} text="Biblioteca"/>
        <NavBarItem icon={<DownloadOutlinedIcon/>} text="Descargas"/>
      </>
      )}
      {extendedNavBar && (
        <>
          <Divider/>
          <NavBarItem icon={<LibraryBooksIcon/>} text="Biblioteca"/>
          <NavBarItem icon={<HistoryIcon/>} text="Historial"/>
          <NavBarItem icon={<SlideshowIcon/>} text="Tus Videos"/>
          <NavBarItem icon={<WatchLaterOutlinedIcon/>} text="Ver mas tarde"/>
          <NavBarItem icon={<DownloadOutlinedIcon/>} text="Descargas"/>
          <NavBarItem icon={<KeyboardArrowDownOutlinedIcon/>} text="Mostrar mas"/>
          <Divider/>
        </>
      )}
      </div>
    </>
  )
}

export { NavBarMain }
