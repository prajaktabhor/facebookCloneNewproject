import Feed from "../../Component/Feed/Feed"
import Rightbar from "../../Component/Rightbar/Rightbar"
import Sidebar from "../../Component/Sidebar/Sidebar"
import Topbar from "../../Component/Topbar/Topbar"
import './profile.css'
export default function Profile() {
  return (
    <> <Topbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src="src/assets/post/10.jpg"
              alt=""
            />
            <img
              className="profileUserImg"
              src="src/assets/person/1.jpg"
              alt=""
            />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">Mine</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <Rightbar profile/>
        </div>
      </div>
    </div>
  </>
);
}



