import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";

const Detail = () => {
    const { chatId, user, isCurrentBlocked, isReceiverBlocked, changeBlock } = useChatStore();
    const { currentUser } = useUserStore();

    const handleBlock = async () => {
        if (!user) return;

        const userDocRef = doc(db, "users", currentUser.id);

        try {
            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id)
            });
            changeBlock();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="Detail">
            <div className="user">
                <img src={user?.avatar || "./avatar.png"} alt="" />
                <h2>{user?.username}</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" className="icon" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img
                                    src="https://cdn0-production-images-kly.akamaized.net/ZhERxuerZT4oxLuh1rX9_bqhTu8=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/46843/original/totoro-130629c.jpg"
                                    alt=""
                                />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img
                                    src="https://cdn0-production-images-kly.akamaized.net/ZhERxuerZT4oxLuh1rX9_bqhTu8=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/46843/original/totoro-130629c.jpg"
                                    alt=""
                                />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img
                                    src="https://cdn0-production-images-kly.akamaized.net/ZhERxuerZT4oxLuh1rX9_bqhTu8=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/46843/original/totoro-130629c.jpg"
                                    alt=""
                                />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img
                                    src="https://cdn0-production-images-kly.akamaized.net/ZhERxuerZT4oxLuh1rX9_bqhTu8=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/46843/original/totoro-130629c.jpg"
                                    alt=""
                                />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button onClick={handleBlock}>
                    {isCurrentBlocked
                        ? "You are Blocked!"
                        : isReceiverBlocked
                        ? "User Blocked"
                        : "Block User"}
                </button>
            </div>
        </div>
    );
};

export default Detail;
