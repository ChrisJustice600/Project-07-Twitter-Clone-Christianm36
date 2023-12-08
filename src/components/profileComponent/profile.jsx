import React from 'react'
import ReturnIcon from "../../iconprofile/return.svg"
import MonProfile from  "../../iconprofile/mon-profile.jpg"
export default function Profile() {
  return (
    <div>
      <div className="author-profile">
        <img src={ReturnIcon} />
        <div className='author-name'>
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
    </div>
  )
}
