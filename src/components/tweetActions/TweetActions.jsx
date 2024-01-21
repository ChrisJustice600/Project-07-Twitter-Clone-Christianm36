import Vector3 from "../../images/Group1.svg"
import ReplyAction from "./reply/ReplyAction"
import RepostAction from "./repost/RepostAction"
import LikeAction from "./like/LikeAction"
import ShareAction from "./share/ShareAction"
// import React, { useContext } from "react";
// import UserContext from "../../context/UserContext"

export default function TweetActions({item}) {
    // const user = useContext(UserContext);
    // console.log(user);

    return (
        <>
            <div className="tweet-actions">
                <div className="tweet-action">
                    <ReplyAction reply={item.reply} />
                </div>
                <div className="tweet-action">
                    <RepostAction repost={item.repost} />
                </div>
                <div className="tweet-action">
                    <LikeAction item={item} />
                </div>
                <div className="tweet-action">
                    <ShareAction />
                </div>
            </div>
        </>
        // <>
        //     {
        //         user.data.tweet.map((item, index) => {
        //             <div className="tweet-actions">
        //                 <div className="tweet-action">
        //                     <ReplyAction key={index} item={item} />
        //                 </div>
        //                 <div className="tweet-action">
        //                     <RepostAction key={index} item={item} />
        //                 </div>
        //                 <div className="tweet-action">
        //                     <LikeAction key={index} item={item} />
        //                 </div>
        //                 <div className="tweet-action">
        //                     <ShareAction />
        //                 </div>
        //             </div>
        //         })
        //     }
        // </>


    )
}