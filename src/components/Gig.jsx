import React, { useState } from "react";
import "./Gig.css";
import HeartButton from "./HeartButton";
// USING PROPS
const Gig = (props) => {

    
    const [heartState, setHeartState] = useState(false);
    
    return (
        <div className="gig-info">
        <h3 className="band-name">{props.bandName}</h3>
        <img src={props.imageUrl} alt={props.altText} className="band-image" />
        <p className="event-description">{props.eventDescription}</p>
        <p className="event-date-time">{props.dateTime}</p>
        <p className="event-location">{props.location}</p>
        <HeartButton heartState={heartState} setHeartState={setHeartState}/>
        </div>
    );
};

export default Gig;
