import Verified from "../images/Verified.png"
import TweetActions from "./tweetActions/TweetActions"



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
                
{                <TweetActions  reply={reply} repost={repost} like={like}/>
}            </div>
        </div>
    )
}