import React, { useState } from "react";
import "./Gig.css";
import HeartButton from "./HeartButton";
// USING PROPS
const Gig = (props) => {

    
    const [heartState, setHeartState] = useState(false);
    
    // Refactoring following code to seperate into own components
    // const toggleHeart = () => {
    //     setHeartState(!heartState);
    // };

    return (
        <div className="gig-info">
        <h3 className="band-name">{props.bandName}</h3>
        <img src={props.imageUrl} alt={props.altText} className="band-image" />
        <p className="event-description">{props.eventDescription}</p>
        <p className="event-date-time">{props.dateTime}</p>
        <p className="event-location">{props.location}</p>
        
        {/* Put this button in own component */}
        {/* <button
            className={heartState ? "heart-filled" : ""}
            aria-label="favourite button"
            onClick={toggleHeart}
        >
            ♡
        </button> */}

        {/* Above code to be refactored into the below component */}
        <HeartButton heartState={heartState} setHeartState={setHeartState}/>
        </div>
    );
};

export default Gig;
