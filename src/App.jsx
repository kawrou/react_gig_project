import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import React from "react"; 
import Gig from "./Gig";


// function App() {
//   return 
//     <Gig />;
// }

const App = () => {
  return (
    <>
      {/* <Hello />
      <img src = {makersLogo} alt = "Makers logo" />  */}
      <Gig />
    </>
  );  
}; 


export default App;
