import Item from "../Item/Item";
import Flex from "../Flex/Flex";
import  productos  from "../Data/Data";
import { useState , useEffect} from "react";
//*********************** Moch async Service ********************************* */

export function getItems() {
  //* Esta funcion retorna una promesa
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({productos});
      }
    )
  }, 3000)

  return promesa
} /** Fin de la funcion getItemList */
//*************************************************************************** */

//**** Funcion principal de ItemListContainer */
export default function ItemList() {
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
    },[products]
  )

  return (
    <div>
      <Flex>
        {/* usando array.map para iterar sobre la base de datos y mostrsr
        en Item cada informacion */}
        {productos.map((product) => (
          /** Aqui por cada item del map manfamos como prop cada valor  */
          <Item
            key = {product.id}
            titulo = {product.titulo}
            precio = {product.precio}
            descripcion = {product.descripcion}
            img = {product.img}
            stock = {product.stock}
          />
          )
        )}
      </Flex> 
    </div>    
  );
}

