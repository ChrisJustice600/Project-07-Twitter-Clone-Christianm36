import Tweetavatar from "../images/tweet-profile-photo.png"
import Verified from "../images/Verified.png"

export default function Tweetpage(){
    return(
        <>
            <img src={Tweetavatar} className="tweet-avatar"/>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <h3 className="tweet-title-author">CNN</h3>
                        <img src={Verified} />
                        <span className="tweet-title-details">@CNN</span>
                        <span className="tweet-title-details">.</span>
                        <span className="tweet-title-details">7min</span>
                    </div>
                    <div className="tweet-text"></div>
                    <div className="tweet-image"></div>
                </div>
                <div className="tweet-actions">

                </div>
            </div>
        </>
    )
}