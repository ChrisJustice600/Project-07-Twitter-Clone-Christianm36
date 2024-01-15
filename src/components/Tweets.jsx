import Tweet from "./tweet";
import data from "../data.json"
import { Link } from "react-router-dom";




export default function Tweets() {

    return (
        <div className="tweets">
            {data.tweet.map((item, index) => {
                return (
                    <Link to={`/${item.id}`} >
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
                    </Link>

                )
            })}
        </div>

    )
}