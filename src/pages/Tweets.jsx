import Tweet from "./tweet";
import data from "../data.json"



export default function Tweets(){
    return(
        <div className="tweets">
            {/* <Tweet Tweetavatar={Tweetavatarcnn} authorName="CNN" authortag="@CNN"/>
            <Tweet Tweetavatar={Tweetavatarnewyork} authorName="The New York Times" authortag="@nytimes"/> */}
            {data.tweet.map((item, index) => {
                return (
                    <Tweet key = {index} 
                Tweetavatar={item.imageavatar} 
                authorName={item.authorName}
                authortag={item.authortag} 
                content={item.content}
                date={item.date}
                imagebg={item.imagebg}
                />
                )
            } )}
        </div>

    )
}