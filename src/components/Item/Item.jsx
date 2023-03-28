import { useState } from "react";
import {Link} from "react-router-dom"

import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Boton1 from "../Botton1/Boton1";

import "./Item.css";

//* Esta funcion despliega cada Card

export default function Item(props) {
 
    return (
        //* Card de cada Item
        <div className="item-card">
        
            { /*Titulo de la Card **********************************************/}
            <h3 className="item-card-header">{props.titulo}</h3>
            
            { /*Imagen de la Card ********************************/}
            <img src={props.img} className="item-card-img" alt="Imagen"></img>

            { /*Precio y Descripcion de la Card ********************************/}
            <div className="item-card-detail">
                <h4>{props.precio}</h4>
                <small>{props.descripcion}</small>
            </div>

            <Link to={`/detalle/${props.id}`}>
                <Boton1 text="Ver Detalle"/>
            </Link>

            
            {/* Boton para Ver Detalles
            <button onClick={<ItemDetailContainer/>}>Ver Detalle</button> */}

            { /*Botones de Suma-Resta al carrito de la Card ********************/}
            <ItemCount className="item-count" stock={props.stock}/>
        </div>
    );
}
