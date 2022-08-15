import Post from '../Post/Post'
import Share from '../ShareComponents/share'
import './Feeds.css'
import {Posts} from '../../dummydata'
export default function Feed() {
  return (
    <div
     className='feeds'>
      <div className="feedwrapper">

        <Share/>
        {Posts.map(p=>(
<Post  key={p.id} post={p}></Post>
        ))}
        
      </div>
     </div>
  )
}
