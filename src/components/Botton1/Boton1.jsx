import "./Boton1.css";
import {useState, useEffects} from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

//* Funciones externas a la funcion del componente

//* Funcion del Componente
export default function Boton1(props) {
    //* Variables externas al return
 
    //* Funcion principal
    return (
        <button onClick={ItemDetailContainer} className="btn">{props.text}</button>
    );
}



