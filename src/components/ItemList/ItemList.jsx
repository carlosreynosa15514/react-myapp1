import Flex from "../Flex/Flex";
import productos from "../Data/Data";
import Item from "../Item/Item";

export default function Itemlist(props) {
  return (
    <Flex>
      {/* usando array.map para iterar sobre la base de datos y mostrsr
            en Item cada informacion */}
      {productos.map((product) => (
        /** Aqui por cada item del map manfamos como prop cada valor  */
        <Item
          key={product.id}
          id={product.id}
          titulo={product.titulo}
          category={product.category}
          precio={product.precio}
          stock={product.stock}
          img={product.img}
        />
      ))}
    </Flex>
  );
}
