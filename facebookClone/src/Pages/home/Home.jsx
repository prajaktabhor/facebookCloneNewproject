import Feed from "../../Component/Feed/Feed"
import Sidebar from "../../Component/Sidebar/Sidebar"
import Topbar from "../../Component/Topbar/Topbar"
import Rightbar from "../../Component/Rightbar/Rightbar"
import './home.css'

const Home = () => {
  return (
<>
<Topbar/>
<div className="homeContainer">
<Sidebar/>
<Feed/>
<Rightbar/>

</div>
</>
  )
}
export default Home




