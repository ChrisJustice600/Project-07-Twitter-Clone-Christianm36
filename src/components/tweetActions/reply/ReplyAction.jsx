import React from 'react'

export default function ReplyAction({ Reply, reply }) {
    return (
        <div>
            <img src={Reply} />
            <span>{reply}</span>
        </div>
    )
}
