import Tweet from "./tweet";
// import Tweetavatarcnn from "../images/tweet-profile-photo.png"
// import Tweetavatarnewyork from "../images/Profile-Photo-new-york.png"
import data from "../data.json"



export default function Tweets(){
    return(
        <div className="tweets">
            {/* <Tweet Tweetavatar={Tweetavatarcnn} authorName="CNN" authortag="@CNN"/>
            <Tweet Tweetavatar={Tweetavatarnewyork} authorName="The New York Times" authortag="@nytimes"/> */}
            {data?.tweet?.map((item, index) => (
                
                <Tweet key = {index} 
                Tweetavatar={item.imageavatar} 
                authorName={item.authorName} 
                authortag={item.authortag} imagebg={item.imagebg}/>
            ))}
        </div>
    )
}