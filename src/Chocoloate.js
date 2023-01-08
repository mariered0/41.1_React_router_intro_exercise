import React from "react";
import useIncrement from "./hooks/useIncrement";

const Chocolate = () => {
    const [num, incrementNum] = useIncrement(0);

    return (
        <div>
            <h1>Chocolate</h1>
            <p>Pieces Eaten: {num}</p>
            <button onClick={incrementNum}>NOM NOM NOM</button>
            <br></br>
            <a href="/">Go Back</a>
        </div>

    )
    
}

export default Chocolate;