import React, { useEffect, useState } from "react";
import gigData from "./GigData";
import Gig from "./Gig";

const GigList = () => {
  const [gigList, setGigList] = useState(gigData);

  //   useEffect(() => { }, []); // dependency array - When gigData changes, fire the function declared in 1st param

//   useEffect(() => {
//     let sortedGigList = gigList.slice().sort((a, b) => {
//       return a.favourite === b.favourite ? 0 : a.favourite ? -1 : 1;
//     });
//     setGigList(sortedGigList);
//   }, [gigData]);

  return (
    <>
      {gigList.map(
        ({
          id,
          bandName,
          imageUrl,
          altText,
          eventDescription,
          dateTime,
          location,
          favourite,
        }) => (
          <Gig
            key={id}
            id={id}
            bandName={bandName}
            imageUrl={imageUrl}
            altText={altText}
            eventDescription={eventDescription}
            dateTime={dateTime}
            location={location}
            favourite={favourite}
            gigList={gigList}
            setGigList={setGigList}
          />
        )
      )}
    </>
  );
};

export default GigList;
