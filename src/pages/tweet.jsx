import Verified from "../images/Verified.png"   
import Reply from "../images/Reply.png"  
import Vector from "../images/Vector.png"  
import Vector2 from "../images/Vector2.png"  
import Vector3 from "../images/Vector3.png"  



export default function Tweet({Tweetavatar, authorName,authortag, imagebg, content, date}){
    return(
            <div className="tweet">
                <img src={"src/images/"+Tweetavatar} className="tweet-avatar"/>
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
                        <img src={"src/images/"+imagebg} className="tweet-image"/>
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
    )
}