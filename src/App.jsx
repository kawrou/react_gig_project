import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import React, { useState } from "react";
import Gig from "./components/Gig";
import gigData from "./components/GigData"

// USING PROPS
const App = () => {
  return (
    <>
      {console.log(gigData)}
      {gigData.map((gig) => (
        <Gig
          id = {gig.id}
          bandName = {gig.bandName}
          imageUrl = {gig.imageUrl}
          altText = {gig.altText}
          eventDescription = {gig.eventDescription}
          location = {gig.location}
        />
      ))}; 
    </>
  );
};

export default App;
