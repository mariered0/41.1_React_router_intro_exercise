import React from "react";
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
            <a href="/">Go Back</a>
        </div>
    )
    
}

export default Chips;