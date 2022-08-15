import Box from '@mui/joy/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './rightbar.css'
import FriendList from '../friendlist/FriendList';
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
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
      </div>
    </div>
  )
}
