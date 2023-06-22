import { Grid } from '@mui/material'

import "./styles/Videos.css"

import React, { useContext, useEffect } from 'react'
import AnyaAvatar from '../assets/AnyaAvatar';
import { YtContext } from '../YtContext'

const Videos = () => {

  const { extendedNavBar } = useContext(YtContext)
  
  return (
   <div className={`videos-container ${!extendedNavBar && "extended"}`}>
      {Array.from({ length: 16 }).map((_, i) => (
          <div className="video-container">
            <div className="video">
              <img className="video__image" src="https://i.ytimg.com/vi/IH8WBsMk9yM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDg-y3bI-_72XWf6pc-epz79xZchw" alt="" />
              <div className="video__duration">12:23</div>
            </div>
            <div className="video__details">
              <AnyaAvatar/>
              <div className="video__description">
                <p className="video__title">Titulo</p>
                <p className="video__channel">AnyaChannel</p>
                <p className="video__views">100k visitas ° hace 3 dias</p>
              </div>
            </div>
          </div>
      ))}
  </div>
 );
}


export { Videos }











































//         <video src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" controls />

/*
container: {
   display: "flex",
   flexDirection: "column",aa
   height: "100vh",
   marginLeft:"220px",
   marginTop:"60px",
   width: "calc(100vw - 220px)",
 },
*/

