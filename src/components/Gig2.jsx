import React, { useState } from "react";
import "./Gig.css";

const Gig2 = ((props) => {
    // console.log("Gig2" + props.isFavourite)

  return (
    <div className="gig-info">
      <h3 className="band-name">{props.bandName}</h3>
      <img src={props.imageUrl} alt={props.altText} className="band-image" />
      <p className="event-description">{props.eventDescription}</p>
      <p className="event-date-time">{props.dateTime}</p>
      <p className="event-location">{props.location}</p>
      <button
        className={props.isFavourite ? "heart-filled" : ""}
        aria-label="favourite button"
        onClick={props.onClick}
      >
        ♡
      </button>
    </div>
  );
});

export default Gig2;
