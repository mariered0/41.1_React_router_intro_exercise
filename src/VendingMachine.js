import React, { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <div className="VendingMachine-comment">
        <h1>Hello, I am a Vending Machine. What would you like to eat?</h1>
      </div>
      <Navbar />
    </div>
  );
};

export default VendingMachine;
