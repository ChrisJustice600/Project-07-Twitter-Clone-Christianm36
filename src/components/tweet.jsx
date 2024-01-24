import { Link } from "react-router-dom"
import Verified from "../images/Verified.png"
import TweetActions from "./tweetActions/TweetActions"

import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Tweet({ item }) {

    
console.log(item);
    return (
        <div className="tweet">

            <Link to={`/${item.userName}`}>
                <img src={"src/images/" + item.imageavatar} className="tweet-avatar" />
            </Link>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <Link to={`/${item.userName}`}>
                            <h3 className="tweet-title-author">{item.authorName}</h3>
                        </Link>
                        <img src={Verified} />
                        <Link to={`/${item.userName}`}>
                            <span className="tweet-title-details">{item.authortag}</span>
                        </Link>
                        <span className="tweet-title-details">.</span>
                        <span className="tweet-title-details">{item.date}</span>
                    </div>
                    <div className="tweet-text">{item.content}</div>
                    <div className="tweet-image">
                        {item.imagebg && <img src={"src/images/" + item.imagebg} />
                        }
                    </div>
                </div>

                <TweetActions item={item} />

            </div>
        </div>
    )
}