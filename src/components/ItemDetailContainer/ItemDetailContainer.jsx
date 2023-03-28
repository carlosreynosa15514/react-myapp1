//* React Imports
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

//* Components Imports

import ItemList from "../ItemList/ItemList";
import productos from "../Data/Data";

//*********************** Mock async Service ********************************* */

function getSingleItem(idURL) {
  const promesa = new Promise((resolve, reject)=>{

    setTimeout(
      ()=>{
        const encontrado = productos.find(
          item => {
            return (item.id === Number(idURL))
          }
        )
        resolve(encontrado);
      }, 2000);
  })
  return promesa

}

//**************************************************************************** */

export default function ItemDetailContainer(props) {
  const [product, setProduct] = useState([]);
  let {id} = useParams();
  console.log("El id es ", id);

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
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
