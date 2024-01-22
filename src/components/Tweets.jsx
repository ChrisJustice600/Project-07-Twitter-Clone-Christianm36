import Tweet from "./tweet";
// import data from "../data.json"
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import React, { useContext } from "react";



export default function Tweets() {
    const user = useContext(UserContext);
    // console.log(user);

    return (
        <div className="tweets">
            {user.data.tweet.map((item, index) => {
                return (
                    <Tweet key={index}
                        item={item}

                    />
                )
            })}
        </div>

    )
}