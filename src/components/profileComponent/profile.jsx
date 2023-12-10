import React from "react";
import ReturnIcon from "../../iconprofile/return.svg";
import MonProfile from "../../iconprofile/mon-profile.jpg";
import { IoCalendarOutline } from "react-icons/io5";

export default function Profile() {
  return (
    <div>
      <div className="author-profile">
        <img src={ReturnIcon} />
        <div className="author-name">
          <div className="name">Christian mabeladi</div>
          <div className="author-post-number">0 Post</div>
        </div>
      </div>
      <div className="banner-profile">
        <img src="" alt="" />
        <div className="image-profile">
          <img src={MonProfile} />
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
        <div className="choice-section-profile">
          <span>Posts</span>
          <span>Peplies</span>
          <span>Highlights</span>
          <span>Media</span>
          <span>Likes</span>
        </div>
      </div>
    </div>
  );
}
