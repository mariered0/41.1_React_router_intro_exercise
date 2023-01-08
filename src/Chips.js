import React from "react";
import { Link } from "react-router-dom";
import useIncrement from "./hooks/useIncrement";
import './Chips.css'

const Chips = () => {
    const [num, incrementNum] = useIncrement(0);

    return (
        <div className="Chips">
            <h1>Chips</h1>
            <p>Pieces Eaten: {num}</p>
            <button onClick={incrementNum}>NOM NOM NOM</button>
            <br></br>
            <Link to="/">Go Back</Link>
        </div>
    )
    
}

export default Chips;