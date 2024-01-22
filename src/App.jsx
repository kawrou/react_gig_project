import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import React from "react";
import Gig from "./components/Gig";

// function App() {
//   return
//     <Gig />;
// }


// USING PROPS
const App = () => {
  return (
    <>
      <Gig
        bandName="Red Hot Chili Peppers"
        imageUrl="assets/red_hot_chili_peppers.jpg"
        altText="Red Hot Chili Peppers band photo"
        eventDescription="The Red Hot Chili Peppers are heading to north London to rock out Tottenham's London Stadium. 
        One of only two UK shows, you don't want to miss this rare chance to see the Chili Peppers IRL."
        dateTime="July 21 - 4:30 PM"
        location="Tottenham Stadium"
      />
      <Gig
        bandName="Radiohead"
        altText="Radiohead band photo"
        imageUrl="assets/radiohead.jpg"
        eventDescription="Experience an unforgettable night with Radiohead, 
        the groundbreaking alternative rock band that has redefined the music landscape. 
        Join us for an immersive journey into their iconic soundscapes and thought-provoking lyrics at the mesmerizing open-air venue."
        dateTime="August 15 - 7:00 PM"
        location="Enigma Park Amphitheater"
      />
    </>
  );
};

export default App;
