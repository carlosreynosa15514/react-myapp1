import "./Boton1.css";
import {useState, useEffects} from "react";

//* Funciones externas a la funcion del componente

//* Funcion del Componente
export default function Boton1(props) {
    //* Variables externas al return
    let [color, setColor] = useState("black");

    //* Funcionaes externas al return
    function changeColor(){
        alert("Clickeaste");
        if (color === "black"){
            setColor("blue")
        }else{
            setColor("black")
        }
    }

    //* Funcion principal
    return (
        <button onClick={changeColor} style={ {backgroundColor: color} }   disabled={props.disabled} className="btn">
            {props.text || "Sin Texto"} 
            {props.children}
        </button>
    );
}



