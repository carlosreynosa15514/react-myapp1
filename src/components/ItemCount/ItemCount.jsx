import React from 'react';
import {useState} from "react"
// import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

export default function ItemCount(props) {

    const [count, setCount] = useState(0);
    const limite = props.stock;

    // *********  Funciones externas al return principal

    // * Funcion que gestiona el boton incremento del componente ItemCount
    function handleSuma() {
        if (limite === 0) {
            alert("Lo sentimos no hay Existncia por el momento")
        }else if (count < limite) {
            let newCount = count + 1;
            setCount(newCount);
        } else {
            let newCount = count
            setCount(newCount);
        }
    }

    // * Funcion que gestiona el boton disminucion del componente ItemCount
    function handleResta() {
        if (count > 0) {
            let newCount = count - 1;
            setCount(newCount);
        } else {
            let newCount = count;
            setCount(newCount);
        }
    }

    // ******************* Funcion principal
    return (
        <div className='item-count'>
            <button onClick={handleResta}>-</button>
            <span> {count} </span>
            <button onClick={handleSuma}>+</button>
        </div>
    )
} // * Fin de la funcion principal

