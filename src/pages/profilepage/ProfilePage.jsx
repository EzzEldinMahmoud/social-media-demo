import './profilepage.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

import Topbar from '../../components/topbar/Topbar'
export default function ProfilePage() {
  return (
    <div className='profilewrapper'> <>
    
    <Topbar />
   <div className="profile">
   <Sidebar />
   <div className="profileright">
    <div className="profilerighttop">
        <div className="profilepage"> 
        <img src="assets/post/3.jpeg" alt=""  className='profilecover'/>
        <img src="assets/person/3.jpeg" alt=""  className='profileuserimage'/></div>
       
<div className="profileinfo">
    <h4 className="ProfileInfoName">Jane Doe</h4>
    <h4 className="ProfileInfoDesc">here is desc</h4>

</div>
    </div>
    <div className="profilerightbottom"> <Feed/>
   <Rightbar profile/></div>
   </div>
   
   </div> </></div>
  )
}
