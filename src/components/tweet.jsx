import { Link } from "react-router-dom"
import Verified from "../images/Verified.png"
import TweetActions from "./tweetActions/TweetActions"
import UserContext from "../context/UserContext";

// item, Tweetavatar, authorName, authortag, imagebg, content, date, reply, repost, like


export default function Tweet({ item }) {
   
    
    return (
        <div className="tweet">
            <Link to={`/${item.id}`}>
                <img src={"src/images/" + item.imageavatar} className="tweet-avatar" />
            </Link>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <Link to={`/${item.id}`}>
                            <h3 className="tweet-title-author">{item.authorName}</h3>
                        </Link>
                        <img src={Verified} />
                        <Link to={`/${item.id}`}>
                            <span className="tweet-title-details">{item.authortag}</span>
                        </Link>
                        <span className="tweet-title-details">.</span>
                        <span className="tweet-title-details">{item.date}</span>
                    </div>
                    <div className="tweet-text">{item.content}</div>
                    <div className="tweet-image">
                        {item.imagebg && <img src={"src/images/" + item.imagebg} />
                        }
                    </div>
                </div>

                <TweetActions item={item} />
                          
                </div>
        </div>
    )
}