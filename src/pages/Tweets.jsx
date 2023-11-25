import Tweet from "./tweet";
import data from "../data.json"



export default function Tweets(){
    return(
        <div className="tweets">
            {data.tweet.map((item, index) => {
                return (
                    <Tweet key = {index} 
                Tweetavatar={item.imageavatar} 
                authorName={item.authorName}
                authortag={item.authortag} 
                content={item.content}
                date={item.date}
                imagebg={item.imagebg}
                action1={item.action1}
                action2={item.action2}
                action3={item.action3}
                />
                )
            } )}
        </div>

    )
}