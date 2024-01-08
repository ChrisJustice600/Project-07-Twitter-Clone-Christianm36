import Tweet from "./tweet";
import data from "../data.json"




export default function Tweets() {
    return (
        <div className="tweets">
            {data.tweet.map((item, index) => {
                return (
                    <Tweet key={index}
                        Tweetavatar={item.imageavatar}
                        authorName={item.authorName}
                        authortag={item.authortag}
                        content={item.content}
                        date={item.date}
                        imagebg={item.imagebg}
                        reply={item.reply}
                        repost={item.repost}
                        like={item.like}
                    />
                )
            })}
        </div>

    )
}