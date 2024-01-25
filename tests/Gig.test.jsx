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

    // Move favourite button to own test as favourite button refactored to own component

    // test("Renders favourite button element correctly", () => {
    //     render(<Gig/>);
    //     expect(screen.getByRole("button")).toBeInTheDocument(); 
    // });
}); 

// Move favourite button to own test as favourite button refactored to own component

// describe("Tests for favourite button", () => {
//     test("Heart icon renders filled when user clicks on it", async () => {
//         render(<Gig />)

//         expect(screen.getByRole("button")).not.toHaveClass('heart-filled'); 
    
//         await userEvent.click(screen.getByRole("button")); 

//         expect(screen.getByRole("button")).toHaveClass('heart-filled'); 
//     });
//     test("Heart icon renders as empty heart when user clicks on it", async () => {
//         render(<Gig />)

//         await userEvent.click(screen.getByRole("button"))
//         expect(screen.getByRole("button")).toHaveClass('heart-filled');

//         await userEvent.click(screen.getByRole("button"))
//         expect(screen.getByRole("button")).not.toHaveClass('heart-filled')

//     })
// })