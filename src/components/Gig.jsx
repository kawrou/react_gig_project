import React, { useState } from "react";
import "./Gig.css";

// const Gig = () => {
//     return (
//         <div id = "gig-component" className = 'gig-info'>
//             <h3 id="band-name">Red Hot Chili Peppers</h3>
//             <img src= "assets/red_hot_chili_peppers.jpg" id = "band-image" alt = "Red Hot Chili Peppers"></img>
//             <p id ="event-description">
//                 The Red Hot Chili Peppers are heading to north London to rock out Tottenham's London Stadium.
//                 One of only two UK shows, you don't want to miss this rare chance to see the Chili Peppers IRL.
//             </p>
//             <p id ="date-time">July 21 - 4:30</p>
//             <p id = "location">Tottenham Stadium</p>
//         </div>
//     );
// };

// USING PROPS
const Gig = (props) => {
    const [heartState, setHeartState] = useState(false);

    const toggleHeart = () => {
        setHeartState(!heartState);
    };

    return (
        <div className="gig-info">
        <h3 className="band-name">{props.bandName}</h3>
        <img src={props.imageUrl} alt={props.altText} className="band-image" />
        <p className="event-description">{props.eventDescription}</p>
        <p className="event-date-time">{props.dateTime}</p>
        <p className="event-location">{props.location}</p>
        <button
            className={heartState ? "heart-filled" : ""}
            aria-label="favourite button"
            onClick={toggleHeart}
        >
            ♡
        </button>
        </div>
    );
};

export default Gig;
