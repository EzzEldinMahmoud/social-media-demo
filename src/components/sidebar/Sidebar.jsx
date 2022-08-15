import './sidebar.css'
import {RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,} from '@mui/icons-material'
  import {Users} from '../../dummydata'
  import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Avater from '../avatar/Avatar';
export default function Sidebar() {
  return (
    <div className='sidebar'><div className="sidebarwrapper">
      <ul className="sidebarlist">
        
      <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
      </ul>
      <button className='sidebarButton'>Show More</button>
      <hr className='sidebarHr'/>
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
    
      </div></div>
  )
}
