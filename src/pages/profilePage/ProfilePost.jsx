


// profile
import React from "react";
import SideBar from "../../components/sideBar";
import SideNav from "../../components/sideNav";
import { Link, useParams } from "react-router-dom";
import Return from "../../components/return";
import data from "../../data.json"

import MonProfile from "../../iconprofile/mon-profile.jpg";
import { IoCalendarOutline } from "react-icons/io5";


function ProfilePostDetails() {
  const { id } = useParams();


  const Post = data.tweet.find((e) => e.id === id);

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
            <Link to="/home">
              <img src={Post.imageavatar} />
            </Link>
          </div>
        </div>
        <div className="edit-profile">
          <div></div>
          <span>Editer profile</span>
        </div>
        <div className="profile-informations">
          <div className="info-name">
            <div className="name">Christian mabeladi</div>
            <div className="tag">@JusticeChrisM</div>
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
