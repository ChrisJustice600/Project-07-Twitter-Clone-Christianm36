import Tweetavatar from "../images/tweet-profile-photo.png"
import Verified from "../images/Verified.png"   
import Reply from "../images/Reply.png"  
import Vector from "../images/Vector.png"  
import Vector2 from "../images/Vector2.png"  
import Vector3 from "../images/Vector3.png"  



export default function Tweets(){
    return(
        <div className="tweets">
            <div className="tweet">
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
                    <div className="tweet-text">President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.</div>
                    <div className="tweet-image"></div>
                </div>
                <div className="tweet-actions">
                    <div className="tweet-action">
                        <img src={Reply}/>
                        <span>19</span>
                    </div>
                    <div className="tweet-action">
                        <img src={Vector}/>
                        <span>144</span>
                    </div>
                    <div className="tweet-action">
                        <img src={Vector2}/>
                        <span>184</span>
                    </div>
                    <div className="tweet-action">
                        <img src={Vector3}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}