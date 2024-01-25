import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import React, { useState } from "react";
import GigList from "./components/GigList";

// USING PROPS
const App = () => {
  return (
    <>
      <GigList />
    </>
  );
};

export default App;
