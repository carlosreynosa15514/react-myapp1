//* React Imports
import { useState, useEffect } from "react";

//* Components Imports

import ItemList from "../ItemList/ItemList";
import productos from "../Data/Data";

//*********************** Mock async Service ********************************* */

function getSingleItem() {
  const promesa = new Promise((resolve, reject)=>{

    setTimeout(
      ()=>{
        resolve(productos[0])
      }, 2000)
  })
  return promesa

}

//**************************************************************************** */

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getSingleItem().then((respuesta) => {
      console.log("Promesa Cumplida ", respuesta);
      setProduct(respuesta);
      console.log("Aqui products ", product);
    });
  }, []);

  return (
    /** return <ItemDetail ..../> */
    <div>
        
        <h3>Titulo: {product.titulo}</h3>
        <h3>Category: {product.category}</h3>
        <p>Precio: ${product.precio}</p>
    </div>
  )
  
}
