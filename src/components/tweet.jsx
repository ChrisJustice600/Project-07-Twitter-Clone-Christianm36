import Verified from "../images/Verified.png"
import Reply from "../images/Reply.png"
import Repost from "../images/Vector.png"
import Like from "../images/Vector2.png"
import Vector3 from "../images/Group1.svg"
const user = useContext(UserContext);



export default function Tweet({ Tweetavatar, authorName, authortag, imagebg, content, date, reply, repost, like }) {
    return (
        <div className="tweet">
            <img src={"src/images/" + Tweetavatar} className="tweet-avatar" />
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <h3 className="tweet-title-author">{authorName}</h3>
                        <img src={Verified} />
                        <span className="tweet-title-details">{authortag}</span>
                        <span className="tweet-title-details">.</span>
                        <span className="tweet-title-details">{date}</span>
                    </div>
                    <div className="tweet-text">{content}</div>
                    <div className="tweet-image">
                        {imagebg && <img src={"src/images/" + imagebg} />
                        }
                    </div>
                </div>
                <div className="tweet-actions">
                    <div className="tweet-action">
                        <img src={Reply} />
                        <span>{reply}</span>
                    </div>
                    <div className="tweet-action">
                        <img src={Repost} />
                        <span>{repost}</span>
                    </div>
                    <div className="tweet-action">
                        <img src={Like} />
                        <span>{like}</span>
                    </div>
                    <div className="tweet-action">
                        <img src={Vector3} />
                    </div>
                </div>
            </div>
        </div>
    )
}