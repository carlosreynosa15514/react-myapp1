import Item from "../Item/Item";
import Flex from "../Flex/Flex";

export default function ItemList() {

  //* Se crea el array de los items para hacer el componente Item mas dinamico
  const products = 
    [
        {
            "key": 1,
            "id": 1,
            "titulo": "960",
            "precio": 3853,
            "descripcion": "Volvo",
            "img": "http://dummyimage.com/250x250.png/cc0000/ffffff",
            "stock": 0
        },
        {
            "key": 2,
            "id": 2,
            "titulo": "GT",
            "precio": 5980,
            "descripcion": "Ford",
            "img": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
            "stock": 9
        },
        {
            "key": 3,
            "id": 3,
            "titulo": "645",
            "precio": 4016,
            "descripcion": "BMW",
            "img": "http://dummyimage.com/250x250.png/cc0000/ffffff",
            "stock": 11
        },
        {
            "key": 4,
            "id": 4,
            "titulo": "Corolla",
            "precio": 1901,
            "descripcion": "Toyota",
            "img": "http://dummyimage.com/250x250.png/cc0000/ffffff",
            "stock": 11
        }, {
            "key": 5,
            "id": 5,
            "titulo": "Coupe GT",
            "precio": 5657,
            "descripcion": "Audi",
            "img": "http://dummyimage.com/250x250.png/ff4444/ffffff",
            "stock": 0
        }, {
            "key": 6,
            "id": 6,
            "titulo": "Mirage",
            "precio": 4139,
            "descripcion": "Mitsubishi",
            "img": "http://dummyimage.com/250x250.png/ff4444/ffffff",
            "stock": 11
        }, {
            "key": 7,
            "id": 7,
            "titulo": "Bronco II",
            "precio": 3949,
            "descripcion": "Ford",
            "img": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
            "stock": 12
        }, {
            "key": 8,
            "id": 8,
            "titulo": "G37",
            "precio": 5441,
            "descripcion": "Infiniti",
            "img": "http://dummyimage.com/250x250.png/cc0000/ffffff",
            "stock": 12
        }, {
            "key": 9,
            "id": 9,
            "titulo": "Crown Victoria",
            "precio": 2987,
            "descripcion": "Ford",
            "img": "http://dummyimage.com/250x250.png/ff4444/ffffff",
            "stock": 3
        }, {
            "key": 10,
            "id": 10,
            "titulo": "Firefly",
            "precio": 5230,
            "descripcion": "Pontiac",
            "img": "http://dummyimage.com/250x250.png/ff4444/ffffff",
            "stock": 8
        }, {
            "key": 11,
            "id": 11,
            "titulo": "Express 3500",
            "precio": 5784,
            "descripcion": "Chevrolet",
            "img": "http://dummyimage.com/250x250.png/cc0000/ffffff",
            "stock": 11
        }, {
            "key": 12,
            "id": 12,
            "titulo": "Dakota",
            "precio": 5585,
            "descripcion": "Dodge",
            "img": "http://dummyimage.com/250x250.png/dddddd/000000",
            "stock": 8
        }, {
            "key": 13,
            "id": 13,
            "titulo": "Civic",
            "precio": 2022,
            "descripcion": "Honda",
            "img": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
            "stock": 3
        }, {
            "key": 14,
            "id": 14,
            "titulo": "Colorado",
            "precio": 5669,
            "descripcion": "Chevrolet",
            "img": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
            "stock": 3
        }, {
            "key": 15,
            "id": 15,
            "titulo": "Galant",
            "precio": 2304,
            "descripcion": "Mitsubishi",
            "img": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
            "stock": 5
        }
    ]


  return (
    <div>
      <Flex>
      {/* USANDO .MAP */}
        {/* Se va a pasar un array de componentes Item creado con map desde el array de productos */}
        {/** Aqui se usa MAP **********************/}
        {products.map( (product) => {
          return (
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
        } )}
      </Flex> 
    </div>    
  );
}

