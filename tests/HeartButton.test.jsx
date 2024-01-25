import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import HeartButton from "./src/components/HeartButton"; 

describe("Test favourite button render", () => {
    test("Renders favourite button element correctly", () => {
        render(<Gig/>);
        expect(screen.getByRole("button")).toBeInTheDocument(); 
    });
}); 

describe("Tests for favourite button", () => {
    test("Heart icon renders filled when user clicks on it", async () => {
        render(<Gig />)

        expect(screen.getByRole("button")).not.toHaveClass('heart-filled'); 
    
        await userEvent.click(screen.getByRole("button")); 

        expect(screen.getByRole("button")).toHaveClass('heart-filled'); 
    });
    test("Heart icon renders as empty heart when user clicks on it", async () => {
        render(<Gig />)

        await userEvent.click(screen.getByRole("button"))
        expect(screen.getByRole("button")).toHaveClass('heart-filled');

        await userEvent.click(screen.getByRole("button"))
        expect(screen.getByRole("button")).not.toHaveClass('heart-filled')
    })
})