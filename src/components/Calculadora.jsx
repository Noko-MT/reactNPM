import React, { useState } from "react";
import { suma, resta, multiplicacion, division } from "nk_calculator";

const Calculadora = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    return (
        <div>
            <h1 className="text-center">Calculadora</h1>
            <input placeholder="Digite el numero A" type="number" onChange={(e) => setA(e.target.value)} />
            <br />
            <input placeholder="Digite el numero B" type="number" onChange={(e) => setB(e.target.value)} />
            <br />
            <button onClick={() => alert(suma(a, b))}>Sumar</button>
            <button onClick={() => alert(resta(a, b))}>Restar</button>
            <button onClick={() => alert(multiplicacion(a, b))}>Multiplicar</button >
            <button onClick={() => alert(division(a, b))}>Dividir</button>
        </div>
    )
};

export default Calculadora;