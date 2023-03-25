import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

//* Esta funcion despliega cada Card

export default function Item(props) {
    const [fav, setFav] = useState(false);
    const [color, setColor] = useState("white");
    const [classNameFavorite, setClasNameFavorite] = useState("item-card-favicon")


    console.log("Soy Favorito? ", fav);

    function handleFavorite() {
        if (fav === true){
            setFav(false);
            setColor("red");
            setClasNameFavorite("item-card-favicon favorite")
        }else {
            setFav(true);
            setColor("white");
            setClasNameFavorite("item-card-favicon")
        }
    }
  
    return (
        //* Card de cada Item
        <div className="item-card">
        
            { /*Boton de Favorito de la Card ***********************************/}
            <button onClick={handleFavorite}
                className={classNameFavorite}
                style={{color}}
            >
                ♥
            </button>

            { /*Titulo de la Card **********************************************/}
            <h3 className="item-card-header">{props.titulo}</h3>
            
            { /*Imagen de la Card ********************************/}
            <img src={props.img} className="item-card-img" alt="Imagen"></img>

            { /*Precio y Descripcion de la Card ********************************/}
            <div className="item-card-detail">
                <h4>{props.precio}</h4>
                <small>{props.descripcion}</small>
            </div>

            { /*Botones de Suma-Resta al carrito de la Card ********************/}
            <ItemCount className="item-count" stock={props.stock}/>
        </div>
    );
}
