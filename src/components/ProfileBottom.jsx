import React from 'react';
import MonProfile from "../iconprofile/mon-profile.jpg";
import TrendMore from "../iconSide/trend-more.svg";
import { Link } from "react-router-dom";


export default function ProfileBottom() {
    return (
        <>
            <div className='down'>

                <Link to="/profile" >
            
                    <div className="profile-bottom">
                        <div className="left">
                            <img src={MonProfile} />
                            <div className="name-accompt">
                                <div className="title">
                                    <div className="name">Christian Mabeladi</div>
                                </div>
                                <div>@JusticeChrisM</div>
                            </div>
                        </div>
                        <img className='more' src={TrendMore} />
                    </div>
                </Link>

            </div>
        </>

    )
}
