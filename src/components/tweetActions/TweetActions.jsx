import Repost from "../../images/Vector.png"
import Like from "../../images/Vector2.png"
import Vector3 from "../../images/Group1.svg"
import ReplyAction from "./reply/ReplyAction"


export default function TweetActions({ reply, repost, like }) {
    return (
        <>
            <div className="tweet-actions">
                <div className="tweet-action">
                    <ReplyAction reply={reply}/>
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
        </>
    )
}