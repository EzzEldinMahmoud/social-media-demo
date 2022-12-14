import React from 'react'
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/joy/Box';
import TextField from '@mui/joy/TextField';
export default function Post({post}) {
    const [like,Setlike] = useState(post.like)
    const [isliked,setisliked] = useState(false);
    function likehandler(){
        Setlike(isliked ? like -1:like +1)
        setisliked(!isliked)
    }
  return (
     <Card sx={{ maxWidth: '100%' ,marginBottom:3}}>
    <CardHeader
        avatar={    <img src={post.photo} alt="" className="sharetopimage" />
      }
        action={<IconButton aria-label="settings">
            <MoreVertIcon />
        </IconButton>}
        title="Jane Doe"
        subheader={post.date} />
        <CardContent>
        <Typography variant="body1" color="text.primary">
           {post?.desc}
        </Typography>
    </CardContent>
    <CardMedia
        component="img"
        height="194"
        image={post?.photo}
        alt="Paella dish" />
    
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={likehandler  }  sx={{
                color:isliked ? 'red':''
            }}/>
            {like}
        </IconButton>
        <IconButton aria-label="share">
            <ShareIcon />
        </IconButton>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'start',width: '100%'  }}>

<TextField  placeholder="Comment here..." fullWidth  variant="plain"
 />
</Box>          
    </CardActions>

</Card>
  )
}
