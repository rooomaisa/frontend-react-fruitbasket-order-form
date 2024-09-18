import React from "react";
import Button from "./Button.jsx";

function Counters ({ fruitCount, setFruitCount}){
    return(
        <>
            <Button type="button" disabled={fruitCount === 0} onClick={() => setFruitCount(fruitCount - 1)}>
                -
            </Button>
            <p>{fruitCount}</p>
            <Button type="button" onClick={() => setFruitCount(fruitCount + 1)}>
                +
            </Button>
        </>
    );
}

export default Counters
