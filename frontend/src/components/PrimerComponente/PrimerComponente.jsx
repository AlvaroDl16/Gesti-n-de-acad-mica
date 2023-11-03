import React from "react";
import {useState} from "react";

const PrimerComponente = () => {

    const [count, SetCount] = useState(0);
    const incrementar = () => {
        SetCount(count + 1);
    }
    const decrementar = () => {
        SetCount(count - 1);
    }
    return (
        <div>
            <h1>primer componente</h1>
            <h3>{count}</h3>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}

export default PrimerComponente;