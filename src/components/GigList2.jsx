import React, { useState } from "react";
import gigData from "./GigData";
import Gig2 from "./Gig2";

const GigList2 = () => {
  const [gigList, setGigList] = useState(gigData);

  const clickFavourite = (id) => {
    setGigList((prevGigList) =>
      prevGigList
        .map((gig) =>
          gig.id === id ? { ...gig, favourite: !gig.favourite } : gig
        )
        .slice()
        .sort((a, b) => {
          return a.favourite === b.favourite ? 0 : a.favourite ? -1 : 1;
        })
    );
  };

  return (
    <>
      {gigList.map((gig) => (
        <Gig2
          key={gig.id}
          id={gig.id}
          bandName={gig.bandName}
          imageUrl={gig.imageUrl}
          altText={gig.altText}
          eventDescription={gig.eventDescription}
          dateTime={gig.dateTime}
          location={gig.location}
          isFavourite={gig.favourite}
          onClick={() => clickFavourite(gig.id)}
        />
      ))}
    </>
  );
};

export default GigList2;
