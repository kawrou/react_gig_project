import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import Gig from "./src/components/Gig"; 

describe("Can render Gig component correctly", () => {
    test("Renders text elements correctly", () => {
        render(<Gig 
            bandName="Red Hot Chili Peppers"
            eventDescription="Some description"
            dateTime="July 21 - 4:30 PM"
            location="Tottenham Stadium"
        />)
        expect(screen.getByText("Red Hot Chili Peppers")).toBeInTheDocument(); 
        expect(screen.getByText("Some description")).toBeInTheDocument();
        expect(screen.getByText("July 21 - 4:30 PM")).toBeInTheDocument();
        expect(screen.getByText("Tottenham Stadium")).toBeInTheDocument();
    })
    test("Renders image element correctly", () =>{
        render(<Gig 
            imageUrl="assets/red_hot_chili_peppers.jpg"
            altText="Red Hot Chili Peppers band photo" 
        />)
        expect(screen.getByAltText("Red Hot Chili Peppers band photo")).toBeInTheDocument(); 
    })
}); 