import Tweetavatar from "../images/tweet-profile-photo.png"

export default function Tweetpage(){
    return(
        <>
            <img src={Tweetavatar} className="tweet-avatar"/>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        
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