import Item from "../Item/Item";
import Flex from "../Flex/Flex";

export default function ItemList() {
  return (
    <Flex>

      <Item
        titulo="Playera Negra"
        precio={1000}
        descripcion="Playera Negra de Algodon"
        img="/image/logo192.png"
        stock={0}
      />

      <Item
        titulo="Pantalon Azul"
        precio={5600}
        descripcion="Pantalon de Mezclilla"
        img = "https:/img.freepik.com/foto-gratis/hombre-vista-frontal-caminando-al-aire-libre_23-2148703216.jpg?w=360&t=st=1679318246~exp=1679318846~hmac=53f386d5c30ef78ab0620c715a52529518e9ecb7dd5ede5e04684e49542aec3b"
        stock = {4}
      />

      <Item
        titulo="Camisa Manga Larga"
        precio={3600}
        descripcion="Camisa de Vestir Seda"
        img = "https://img.freepik.com/foto-gratis/retrato-hombre-joven-feliz-camisa-azul-aislado-blanco_186202-7889.jpg?w=360&t=st=1679318354~exp=1679318954~hmac=9889a7821ab4d48eea34b57ccde381b565fdd98a2849cd994a8ccff493a32601"
        stock = {3}
      />

    </Flex>
  );
}
