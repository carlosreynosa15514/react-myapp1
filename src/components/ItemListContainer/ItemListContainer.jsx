//* React Imports
import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";

//* Components Imports

import productos from "../Data/Data";
import ItemList from "../ItemList/ItemList";


//*********************** Mock async Service ********************************* */

export function getItems() {
  
  //* Esta funcion retorna una promesa
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({productos});
      }
    )
  }, 10000)

  return promesa
} /** Fin de la funcion getItemList */
//*************************************************************************** */


//*********************** Funcionalidad Local App ********************************* */


//**** Funcion principal de ItemListContainer */
export default function ItemListContainer() {
  const [products, setProducts] = useState([]); //* Para guardar lo que responde la promesa
  console.log("Renderizando ...........")

  useEffect(()=>{
    getItems()
      .then((respuesta) => {
        console.log("Promesa Cumplida ", respuesta);
        setProducts(respuesta)
        console.log("Aqui products ", products)
        }
      );
    },[])

  return (
    <div>
      <ItemList product={productos}/>
    </div>    
  );
}

//*************************************************************************** */
