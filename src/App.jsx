import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import React, { useState } from "react";
import GigList from "./components/GigList";
import GigList2 from "./components/GigList2";

// USING PROPS
const App = () => {
  return (
    <>
      <GigList2 />
    </>
  );
};

export default App;
