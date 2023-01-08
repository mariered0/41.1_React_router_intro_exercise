import VendingMachine from "./VendingMachine";
import React, { BrowserRouter, Route } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import Chocolate from "./Chocoloate";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>

        <Route exact path="/soda">
          <Soda />
        </Route>

        <Route exact path="/chips">
          <Chips />
        </Route>

        <Route exact path="/chocolate">
          <Chocolate />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
