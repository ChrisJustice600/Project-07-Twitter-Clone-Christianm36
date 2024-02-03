import React, { useContext } from "react";
import SideBar from "../../components/sideBar";
import SideNav from "../../components/sideNav";
import { Link } from "react-router-dom";
import Return from "../../components/return";

import MonProfile from "../../iconprofile/mon-profile.jpg";
import { IoCalendarOutline } from "react-icons/io5";
import UserContext from "../../context/UserContext";



function ProfileDetails() {
  const { data } = useContext(UserContext)

  const profileData = data.currentUser[0].author
  console.log(profileData);
  return (
    <>
      <div>
        <div className="author-profile">
          <Return linkValue='/home' />
          <div className="author-name">
            <div className="name">{profileData.name}</div>
            <div className="author-post-number">{profileData.post}0 Post</div>
          </div>
        </div>
        <div className="banner-profile">
          <div className="image-profile">
            <Link to="/home">
              <img src={"src/iconprofile/" + profileData.avatar} />
            </Link>
          </div>
        </div>
        <div className="edit-profile">
          <div></div>
          <span>Editer profile</span>
        </div>
        <div className="profile-informations">
          <div className="info-name">
            <div className="name">{profileData.name}</div>
            <div className="tag">{profileData.tag}</div>
          </div>
          <div className="date-joined">
            <span>
              <IoCalendarOutline />
            </span>
            <div className="date">Joined December 2023</div>
          </div>
          <div className="section-follow-profile">
            <div className="following">
              <span>{profileData.following}</span>Following
            </div>
            <div className="follower">
              <span>{profileData.follower}</span>Follower
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

export default function Profile() {
  return (
    <>
      <SideNav />
      <main className="timeline">
        <ProfileDetails />
      </main>
      <SideBar />
    </>
  );
}
