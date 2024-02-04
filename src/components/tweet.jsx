import { Link } from "react-router-dom"
import Verified from "../images/Verified.png"
import TweetActions from "./tweetActions/TweetActions"



export default function Tweet({ item }) {
    return (
        <div class="flex justify-start items-start gap-[20px] p-[1rem] border-b border-solid border-[#2F3336]">

            <Link to={`/${item.author.username}`}>
                <div className="tweetavatar">
                    <img src={"src/images/" + item.author.avatar} className="tweetavatar flex-shrink-0 flex-grow-0 w-70" />
                </div>
            </Link>
            <div class="flex flex-col items-start justify-start gap-[20px] w-full">
                <div class="flex flex-col gap-[0.5rem]">
                    <div class="flex justify-start items-start gap-[10px] text-[1rem]">
                        <Link to={`/${item.author.username}`}>
                            <h3 className="text-[1rem]">{item.author.name}</h3>
                        </Link>
                        <img src={Verified} />
                        <Link to={`/${item.author.username}`}>
                            <span className="text-[#6E767D]">{item.author.tag}</span>
                        </Link>
                        <span className="text-[#6E767D]">.</span>
                        <span className="text-[#6E767D]">{item.date}</span>
                    </div>
                    <div className="text-[#D9D9D9]">{item.content}</div>
                    <div className="w-full">
                        {item.imagebg && <img class="max-w-full h-auto rounded-[50px] border border-solid border-[#2F3336]" src={"src/images/" + item.imagebg} />
                        }
                    </div>
                </div>

                <TweetActions item={item} />

            </div>
        </div>
    )
}