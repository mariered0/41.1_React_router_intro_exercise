import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar">
          <NavLink exact to="/soda">Soda</NavLink>
   
          <NavLink exact to="/chips">Chips</NavLink>

          <NavLink exact to="/chocolate">Chocolate</NavLink>
        </nav>
    )
}

export default Navbar;