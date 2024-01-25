import React , {useState} from "react";
import gigData from "./GigData";
import Gig from "./Gig";


const GigList = () => {
    return (
            
        <>
        {gigData.map((gig) => (
            <Gig
            key={gig.id}
            bandName={gig.bandName}
            imageUrl={gig.imageUrl}
            altText={gig.altText}
            eventDescription={gig.eventDescription}
            location={gig.location}
            favourite={gig.favourite}
            />
        ))};
        </>
    );
};

export default GigList;
