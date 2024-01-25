import React, { useState } from "react";
import "./Gig.css";
import HeartButton from "./HeartButton";
// USING PROPS
const Gig = ({
  id,
  bandName,
  imageUrl,
  altText,
  eventDescription,
  dateTime,
  location,
  favourite,
  gigList,
  setGigList,
}) => {
//   console.log(favourite);
  return (
    <div className="gig-info">
      <h3 className="band-name">{bandName}</h3>
      <img src={imageUrl} alt={altText} className="band-image" />
      <p className="event-description">{eventDescription}</p>
      <p className="event-date-time">{dateTime}</p>
      <p className="event-location">{location}</p>
      <HeartButton
        id={id}
        favourite={favourite}
        gigList={gigList}
        setGigList={setGigList}
      />
    </div>
  );
};

export default Gig;
