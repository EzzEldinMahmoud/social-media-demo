import "./topbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function Topbar() {
  return (
    <div className="topbarContainer">

      <div className="topbarLeft">
        <Link to="/" className="linktohomepage"><span className="Logo" >
  Freesocial
</span></Link>

      </div>
      <div className="topbarCenter">
        <div className="Searchbar">
        <SearchOutlinedIcon className="searchicon"/>
        <input placeholder="Search for friend, post or video..." className="searchinput" />
        </div>
        </div>
        <div className="topbarRight">
        <div className="TopbarLinks">
          <span className="topbarlink">Home</span>
          <span className="topbarlink">Timeline</span>
          <span className="topbarlink"></span>
        </div>
        <div className="topbaricons">
<div  className='topbariconitem'><PersonIcon/>
<span className="topbariconbadge">1</span>
</div>
        </div>
        <div className="topbaricons">
<div  className='topbariconitem'><ChatIcon/>
<span className="topbariconbadge">1</span>
</div>
        </div>
        <div className="topbaricons">
<div  className='topbariconitem'><NotificationsIcon/>
<span className="topbariconbadge">1</span>
</div>
        </div>
        <a href="/profilepage"> <img src="/assets/person/1.jpeg" alt="" className="topbarimage" /></a>
       
        </div>
    </div>
  )
}
