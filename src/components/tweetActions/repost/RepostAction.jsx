import React from 'react'
import Repost from "../../images/Vector.png"

import("./style.css")

export default function RepostAction({ repost }) {
    return (
        <>
            <img src={Repost} />
            <span>{repost}</span>
        </>
    )
}
