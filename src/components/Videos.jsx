import { Grid } from '@mui/material'
import { Avatar } from "@mui/material";

import "./styles/Videos.css"

import React from 'react'

const Videos = () => {
  return (
   <div className="videos-container">
    <Grid container spacing={2}>
      {Array.from({ length: 16 }).map((_, i) => (
        <Grid item xs={12} sm={4} md={3} key={i}>
          <div className="video-container">
            <div className="video">
              <img className="video__image" src="https://i.ytimg.com/vi/IH8WBsMk9yM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDg-y3bI-_72XWf6pc-epz79xZchw" alt="" />
              <div className="video__duration">12:23</div>
            </div>
            <div className="video__details">
              <Avatar src="public/anyaaa.png" sx={{ width: 30, height: 30 }} className="video__avatar"/>
              <div className="video__description">
                <p className="video__title">Titulo</p>
                <p className="video__channel">AnyaChannel</p>
                <p className="video__views">100k visitas ° hace 3 dias</p>
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
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