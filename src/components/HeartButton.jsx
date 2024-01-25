import React, { useState } from "react";
import "./Gig.css";

const HeartButton = (props) => {
    console.log(`Props in HeartButton: ${props.heartState}`)

    const toggleHeart = () => {
        props.setHeartState(!props.heartState);
    };

    return (
        <button
            className={props.heartState ? "heart-filled" : ""}
            aria-label="favourite button"
            onClick={toggleHeart}
        >
            ♡
        </button>
    )
}

export default HeartButton;