import SideBar from "../../components/sideBar";
import SideNav from "../../components/sideNav";
import { useParams } from "react-router-dom";
import Return from "../../components/return";

import { IoCalendarOutline } from "react-icons/io5";
import Tweet from "../../components/tweet";


import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function ProfilePostDetails() {



  const { userName } = useParams();
  const user = useContext(UserContext);
  // const Post = user.data.tweet.find((e) => e.authorName === authorName);
  // console.log(Post);
  const Post = user.data.tweets.filter((e) => e.userName === userName);
  const filterName = Post
  
  const postlength = Post.length

  return (
    <>
      <div>
        <div className="author-profile">
          <Return linkValue='/home' />
          <div className="author-name">
            <div className="name">{filterName[0].authorName}</div>
            <div className="author-post-number">{postlength} Post</div>
          </div>
        </div>
        <div className="banner-profile">
          <img src="" alt="" />
          <div className="image-profile">

            <img src={"src/images/" + filterName[0].imageavatar} />
          </div>
        </div>
        <div className="edit-profile">
          <div></div>
          <span>Editer profile</span>
        </div>
        <div className="profile-informations">
          <div className="info-name">
            <div className="name">{filterName[0].authorName}</div>
            <div className="tag">{filterName[0].authortag}</div>
            <div className="tag">{filterName[0].bio}</div>
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
          {Post.map((item, index) => {
            return (
              <Tweet key={index}
                item={item}
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
