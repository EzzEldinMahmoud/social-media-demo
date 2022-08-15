import './friendlist.css'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Avater from '../avatar/Avatar';
import {Users} from '../../dummydata'
export default function FriendList() {
  return (
    <div className='friendlistwrapper'>  
    <List sx={{ width: '100%', maxWidth: '100%',margin:'0' ,padding:"0" , alignContent:"start"}}>
    
    <Typography sx={{fontSize:"16px", fontWeight:"bold"}}> Online Friends</Typography>
    {Users.map(User=>(<ListItem sx={{margin:'1',padding:"5px"}} >
      <ListItemAvatar className='listitemavatar' >
      <Avater imagesource={User.profilePicture}/>      </ListItemAvatar>
      <ListItemText
        primary={User.username}
        className='listitemtext'
      />
    </ListItem>))}
   
    
    
  </List></div>
  )
}
