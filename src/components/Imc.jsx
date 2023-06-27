import React, { useState } from "react";
import { calcularIMC, clasificarIMC } from 'nk_imc'; // Corregir libreria
//  import {calcularIMC, clasificarIMC} from 'jdqn_imc';

const Imc = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [genero, setGenero] = useState('M');
    const [clasificacion, setClasificacion] = useState('');

    const generarIMC = () => {
        const imc = calcularIMC(peso, altura);
        setClasificacion(clasificarIMC(imc, genero));
        console.log(clasificacion);
    };

    return (

        <div>
            <h1>IMC</h1>
            <input onChange={(e) => setPeso(e.target.value)} type="text" name="" id="" placeholder="Peso" />
            <br />
            <input onChange={(e) => setAltura(e.target.value)} type="text" name="" id="" placeholder="Altura" />
            <br />
            <select onChange={(e) => setGenero(e.target.value)} name="genero" id="genero">
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
            </select>
            <br />
            <button onClick={generarIMC}>Calcular</button>
            <p>{clasificacion}</p>
        </div>
    );

};

export default Imc;