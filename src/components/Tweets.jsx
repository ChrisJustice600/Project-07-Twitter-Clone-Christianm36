import Tweet from "./tweet";
import UserContext from "../context/UserContext";
import React, { useContext } from "react";

export default function Tweets() {
    const { data } = useContext(UserContext);
    // console.log(user);

    return (
        <>
            {data.tweets.map((item, index) => {
                return (
                    <Tweet key={index}
                        item={item}
                    />
                )
            })}
        </>

    )
}