import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Notification from "./components/notif/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "./lib/userStore";
import { auth } from "./lib/firebase";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const {currentUser, isLoading, fetchUserInfo} = useUserStore()
  const { chatId } = useChatStore()


  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      fetchUserInfo(user?.uid)
    })
    
    return () => {
      unSub();
    };
  },[fetchUserInfo]);

  if (isLoading) return <div className="Loading"> Loading..</div>

  return (
    <div className='container'>
      {currentUser ? (
        <>
          <List/>
          {chatId && <Chat/>}
        </>
      ) : (
        <Login/>
      )}
      <Notification/>
    </div>
  )
}

export default App