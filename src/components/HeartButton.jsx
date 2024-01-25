import React, { useState } from "react";
import "./Gig.css";

const HeartButton = ({ id, favourite, setGigList, gigList }) => {
  //   console.log(`Props in HeartButton: ${favourite}`);

  const toggleHeart = () => {
    let sortedGigList = gigList.map((gig) => {
      if (gig.id === id) {
        return { ...gig, favourite: !favourite };
      }
      return gig;
    })
      .slice().sort((a, b) => {
        return a.favourite === b.favourite ? 0 : a.favourite ? -1 : 1;
      });
    // console.log(sortedGigList);
    setGigList(sortedGigList);
  };

  return (
    <button
      className={favourite ? "heart-filled" : ""}
      aria-label="favourite button"
      onClick={toggleHeart}
    >
      ♡
    </button>
  );
};

export default HeartButton;
