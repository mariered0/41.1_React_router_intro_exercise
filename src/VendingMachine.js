import React, { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";

const VendingMachine = () => {
    return (
        <>
        <h1>Hello, I am a Vending Machine. What would you like to eat?</h1>
        <Navbar />
        </>
    )
}

export default VendingMachine;