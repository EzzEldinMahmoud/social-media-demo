import "./share.css"
import * as React from 'react';

import Box from '@mui/joy/Box';

import { InputBase } from '@mui/material';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Button from '@mui/material/Button';
import Post from "../Post/Post";

export default function Share() {

   

  return (
    <>
    <div className="sharewrapper">
<div className="sharetop">
    <Box
    
      sx={{
       
        py: 2,
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        flexWrap: 'wrap',width:'100%'
      }}
 >    <img src="assets/person/1.jpeg" alt="" className="sharetopimage" />

     
      <InputBase  placeholder="Type in here…"   sx={{
    width: '70%'
    
  }}  />
 
    </Box>
    <hr className="hrtop"/>
    <div className="postclickables">
<div className="firstclick">
    <PermMediaIcon className="photosvideoicon"/>
    Photos or video
</div>
<div className="firstclick">
    <LabelIcon className="tagicon"/>
    Tag</div>
<div className="firstclick">
    <LocationOnIcon className="locationicon"/>
  Location
</div>
<div className="firstclick">
    <EmojiEmotionsIcon className="feelingsicon"/>
    Feelings
</div>
<div className="firstclick">
<Button variant="contained" className="buttonshare">Share</Button>
 
</div>
    </div>
    </div>
<div className="sharebottum"></div>
    </div>
    
   
  
      
      </>
  );
}
