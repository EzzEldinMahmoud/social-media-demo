import Box from '@mui/joy/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './rightbar.css'
import FriendList from '../friendlist/FriendList';
import { Users } from '../../dummydata';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return(<>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'start',width: '100%'  }} className='box'>
<img src="assets/gift.png" alt=""  className='imagegift'/>
<Typography ><span style={{fontWeight: 'bold'}}>Pola Foster </span>and <span style={{fontWeight: 'bold'}}>3 other friends </span> have 
  birthday today.
</Typography>
        </Box>
        <Card sx={{ maxWidth: '100%' ,display:'flex'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image="assets/ad.png"
          alt="green iguana"
          
        />
      
      </CardActionArea>
    </Card>
    <br/>
    <FriendList></FriendList>
    </>)
  }
  const ProfileRightbar=()=>{
    return(
      <>
      <h4 className='rightbartitle'>User information</h4>
      <div className="rightbarinfo">
        <div className="rightbarinfoitem">
          <span className="rightbarinfokey">City: </span>
          <span className="rightbarinfoValue">New York</span>

        </div>
        <div className="rightbarinfoitem">
          <span className="rightbarinfokey">From: </span>
          <span className="rightbarinfoValue">Cairo</span>

        </div>
        <div className="rightbarinfoitem">
          <span className="rightbarinfokey">Relationship: </span>
          <span className="rightbarinfoValue">Single</span>

        </div>

      </div>
      <h4 className='rightbartitle'>User Friends</h4>
      <div className="rightbarfollowings">
        <div className="rightbarfollowings">
        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper',margin:'0' ,padding:"0" , alignContent:"start"}}>
    
    
    {Users.map(User=>(<ListItem sx={{margin:'1',padding:"5px"}} >
      <ListItemAvatar className='listitemavatar' >
      <Avatar src={User.profilePicture}/>      </ListItemAvatar>
      <ListItemText
        primary={User.username}
        className='listitemtext'
      />
    </ListItem>))}
   
    
    
  </List>
        </div>
      </div>
      
      </>
    )
  }
  const currentPath = window.location.pathname;
  console.log(currentPath);
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
       
          
         {
          currentPath ==='/profilepage' ? <ProfileRightbar/>:<HomeRightbar/>
         }
       
        
    
      </div>
    </div>
  )
}
