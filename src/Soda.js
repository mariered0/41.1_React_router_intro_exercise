import React from "react";
import { Link } from "react-router-dom";
import './Soda.css';

const Soda = () => {
    return (
        <div className="Soda">
        <h1>Soda</h1>
        <p>OMG Sugarrrrrr</p>
        <Link to="/">Go Back</Link>
        </div>
    )
    
}

export default Soda;