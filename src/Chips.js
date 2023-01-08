import React from "react";
import useIncrement from "./hooks/useIncrement";

const Chips = () => {
    const [num, incrementNum] = useIncrement(0);

    return (
        <div>
            <h1>Chips</h1>
            <p>Bags Eaten: {num}</p>
            <button onClick={incrementNum}>NOM NOM NOM</button>
            <br></br>
            <a href="/">Go Back</a>
        </div>
    )
    
}

export default Chips;