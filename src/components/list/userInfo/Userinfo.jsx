import "./userInfo.css"
import { useUserStore } from "../../../lib/userStore"
import { auth } from "../../../lib/firebase"

const Userinfo = () =>{

    const {currentUser} = useUserStore()

    return (
        <div className="userInfo">
            <div className="user">
                <img src= {currentUser.avatar || "./avatar.png"} alt=""/>
                <h2>{currentUser.username}</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./edit.png" alt="" />
                <button className="logout-button" onClick={() => auth.signOut()}>
                <img src="./logout.png" alt="" className="logout-icon" />
                </button>

            </div>
        </div>
    )
}

export default Userinfo