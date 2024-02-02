import Vector3 from "../../images/Group1.svg"
import ReplyAction from "./reply/ReplyAction"
import RepostAction from "./repost/RepostAction"
import LikeAction from "./like/LikeAction"
import ShareAction from "./share/ShareAction"
// import React, { useContext } from "react";
// import UserContext from "../../context/UserContext"

export default function TweetActions({ item }) {
    // const user = useContext(UserContext);
    // console.log(user);

    return (
        <>
            <div class="flex justify-center items-center gap-[3rem] text-gray-500 text-[1rem]">
                <div className="flex justify-center items-center gap-[6px]">
                    <ReplyAction reply={item.reply} />
                </div>
                <div className="flex justify-center items-center gap-[6px]">
                    <RepostAction repost={item.repost} />
                </div>
                <div className="flex justify-center items-center gap-[6px]">
                    <LikeAction item={item} />
                </div>
                <div className="flex justify-center items-center gap-[6px]">
                    <ShareAction />
                </div>
            </div>
        </>

    )
}