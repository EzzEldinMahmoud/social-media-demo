import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './home.css'
import Topbar from '../../components/topbar/Topbar'
export default function Home() {
  return (
    <><Topbar />
   <div className="homecontainer">
   <Sidebar />
   <Feed/>
   <Rightbar/>
   </div> </>
  )
}
