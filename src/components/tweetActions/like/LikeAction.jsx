import React, { useState } from 'react'

import("./style.css")
import { useContext } from "react";
import UserContext from '../../../context/UserContext';





export default function LikeAction({ item }) {

    // const [isClicked, setIsClicked] = useState(false)

    const { data, setData } = useContext(UserContext);

    // Cloner le tableau des tweets du contexte
    const updatedData = [...data.tweets];

    // Trouver l'index du tweet à mettre à jour dans le tableau cloné
    const tweetIndex = updatedData.findIndex((tweet) => tweet.id === item.id);

    const handleButtonClick = () => {

        // Mettre à jour le nombre de likes dans le tableau cloné
        updatedData[tweetIndex].like = !updatedData[tweetIndex].islike ? parseInt(item.like) + 1 : parseInt(item.like) - 1;
        updatedData[tweetIndex].islike = !updatedData[tweetIndex].islike
        // Mettre à jour le contexte avec le nouveau tableau de tweets
        setData({ ...data, tweets: updatedData });
    }

console.log(item.islike);



    return (
        <div className={`like custom-fill ${updatedData[tweetIndex].islike ? 'clicked' : ''}`} onClick={handleButtonClick} >

            <span className='like-custom all'>
                {updatedData[tweetIndex].islike ? (
                    <svg className='svg-fill' width="40" height="40" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_211_1661)">
                            <path d="M9.49895 19C13.3967 17.2256 16.2176 14.1965 17.7392 11.1294C19.2374 8.07497 19.4481 5.0332 18.1138 3.20814C16.9082 1.57318 15.3397 0.952155 13.7478 1.00285C12.156 1.05355 10.6109 1.80132 9.49895 2.85326C8.38698 1.80132 6.84194 1.05355 5.25007 1.00285C3.6582 0.952155 2.08975 1.57318 0.884141 3.20814C-0.450218 5.0332 -0.23953 8.07497 1.28211 11.1294C2.78033 14.1965 5.60122 17.2256 9.49895 19Z" fill="#FF0000" />
                        </g>
                        <defs>
                            <clipPath id="clip0_211_1661">
                                <rect width="20.1" height="18.91" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                ) : (
                    <svg width="40" height="40" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18.5317H9.98833C7.83583 18.4917 1.625 12.88 1.625 7.56499C1.625 5.01166 3.72917 2.76999 6.1275 2.76999C8.03583 2.76999 9.31917 4.08666 9.99917 5.04499C10.6775 4.08832 11.9608 2.76999 13.87 2.76999C16.27 2.76999 18.3733 5.01166 18.3733 7.56582C18.3733 12.8792 12.1617 18.4908 10.0092 18.53H10V18.5317ZM6.12833 4.02082C4.395 4.02082 2.87583 5.67749 2.87583 7.56666C2.87583 12.35 8.7375 17.23 10.0008 17.2817C11.2658 17.23 17.1258 12.3508 17.1258 7.56666C17.1258 5.67749 15.6067 4.02082 13.8733 4.02082C11.7667 4.02082 10.59 6.46749 10.58 6.49166C10.3883 6.95999 9.61667 6.95999 9.42417 6.49166C9.4125 6.46666 8.23667 4.02082 6.12917 4.02082H6.12833Z" fill="#6E767D" />
                    </svg>
                )}
            </span>
            <span className={`${updatedData[tweetIndex].islike ? 'color' : ''}`}>{item.like}</span>
        </div>
    )
}
