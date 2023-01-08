import React from "react";
import useIncrement from "./hooks/useIncrement";
import './Chocolate.css';

const Chocolate = () => {
    const [num, incrementNum] = useIncrement(0);

    return (
        <div className="Chocolate">
            <h1>Chocolate</h1>
            <p>Pieces Eaten: {num}</p>
            <button onClick={incrementNum}>NOM NOM NOM</button>
            <br></br>
            <a href="/">Go Back</a>
        </div>

    )
    
}

export default Chocolate;