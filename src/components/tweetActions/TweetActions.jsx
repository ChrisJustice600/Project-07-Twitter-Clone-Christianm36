import Vector3 from "../../images/Group1.svg"
import ReplyAction from "./reply/ReplyAction"
import RepostAction from "./repost/RepostAction"
import LikeAction from "./like/LikeAction"
import ShareAction from "./share/ShareAction"


export default function TweetActions({ reply, repost, like }) {
    return (
        <>
            <div className="tweet-actions">
                <div className="tweet-action">
                    <ReplyAction reply={reply} />
                </div>
                <div className="tweet-action">
                    <RepostAction repost={repost} />
                </div>
                <div className="tweet-action">
                    <LikeAction like={like} />
                </div>
                <div className="tweet-action">
                    <ShareAction />
                </div>
            </div>
        </>
    )
}