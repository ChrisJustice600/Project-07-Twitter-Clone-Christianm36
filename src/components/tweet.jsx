import { Link } from "react-router-dom"
import Verified from "../images/Verified.png"
import TweetActions from "./tweetActions/TweetActions"



export default function Tweet({ item, Tweetavatar, authorName, authortag, imagebg, content, date, reply, repost, like }) {
    return (
        <div className="tweet">
            <Link to={`/${item}`}>
                <img src={"src/images/" + Tweetavatar} className="tweet-avatar" />
            </Link>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <Link to={`/${item}`}>
                            <h3 className="tweet-title-author">{authorName}</h3>
                        </Link>
                        <img src={Verified} />
                        <Link to={`/${item}`}>
                            <span className="tweet-title-details">{authortag}</span>
                        </Link>
                        <span className="tweet-title-details">.</span>
                        <span className="tweet-title-details">{date}</span>
                    </div>
                    <div className="tweet-text">{content}</div>
                    <div className="tweet-image">
                        {imagebg && <img src={"src/images/" + imagebg} />
                        }
                    </div>
                </div>

                {<TweetActions reply={reply} repost={repost} like={like} />
                }            </div>
        </div>
    )
}