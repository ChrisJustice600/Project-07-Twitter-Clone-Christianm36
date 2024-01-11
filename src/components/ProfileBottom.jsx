import React from 'react';
import MonProfile from "../iconprofile/mon-profile.jpg";
import TrendMore from "../iconSide/trend-more.svg";


export default function ProfileBottom() {
    return (
        <div className='down'>
            <div className="follow-profile">
                <div className="left">
                    <img src={MonProfile} />
                    <div className="name-accompt-follow">
                        <div className="title">
                            <div className="name">Christian Mabeladi</div>
                        </div>
                        <div>@JusticeChrisM</div>
                    </div>
                </div>
                <img className='more' src={TrendMore} />
            </div>
        </div>
    )
}
