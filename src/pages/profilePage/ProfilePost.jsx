


// profile
import React from "react";
import SideBar from "../../components/sideBar";
import SideNav from "../../components/sideNav";
import { Link, useParams } from "react-router-dom";
import Return from "../../components/return";
import data from "../../data.json"

import { IoCalendarOutline } from "react-icons/io5";
import Tweet from "../../components/tweet";


function ProfilePostDetails() {
  const { id } = useParams();


  const Post = data.tweet.find((e) => e.id === id);
console.log(Post);
  // const allAuthorNames = data.tweet.map(tweet => tweet.authorName);
// console.log(allAuthorNames);


  // console.log(tweetsByAuthor);



// on filtre dans data tous les post par rapport à Post.authorName

  // Filtrer tous les tweets par rapport à l'auteur actuel
  const tweetsByAuthor = data.tweet.filter(
    (tweet) => tweet.authorName === Post.authorName
  );
  console.log(tweetsByAuthor);

  return (
    <>
      <div>
        <div className="author-profile">
          <Return linkValue='/home' />
          <div className="author-name">
            <div className="name">{Post.authorName}</div>
            <div className="author-post-number">0 Post</div>
          </div>
        </div>
        <div className="banner-profile">
          <img src="" alt="" />
          <div className="image-profile">

            <img src={"src/images/" + Post.imageavatar} />
          </div>
        </div>
        <div className="edit-profile">
          <div></div>
          <span>Editer profile</span>
        </div>
        <div className="profile-informations">
          <div className="info-name">
            <div className="name">{Post.authorName}</div>
            <div className="tag">{Post.authortag}</div>
            <div className="tag">{Post.bio}</div>
          </div>
          <div className="date-joined">
            <span>
              <IoCalendarOutline />
            </span>
            <div className="date">Joined December 2023</div>
          </div>
          <div className="section-follow-profile">
            <div className="following">
              <span>5</span>Following
            </div>
            <div className="follower">
              <span>2</span>Follower
            </div>
          </div>
        </div>
        <div className="choice-section-profile">
          <div>
            <span>Posts</span>
          </div>
          <div>
            <span>Peplies</span>
          </div>
          <div>
            <span>Highlights</span>
          </div>
          <div>
            <span>Media</span>
          </div>
          <div>
            <span>Likes</span>
          </div>
        </div>

        <div className="tweets">
            {tweetsByAuthor.map((item, index) => {
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
                            item={item.id}
                        />

                )
            })}
        </div>
      </div>
    </>
  );
}


export default function ProfilePost() {
  return (
    <>
      <SideNav />
      <main className="timeline">
        <ProfilePostDetails />
      </main>
      <SideBar />
    </>
  )
}
