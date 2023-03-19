import logo from './logo.svg';
import './App.css';

// * Componentes
import Saludo from "./components/Saludo";
import Boton1 from "./components/Botton1/Boton1";
import GetUserName from "./components/GetUserName";
import Item from "./components/Item";
import Flex from './components/Flex/Flex';

// ! Atributo class es className
// ! Todo esta dentro de un div
// ! El componente es una funcion que retorna el codigo html y js
// ! Las variables pueden usar valores de otras variables src={variable} importadas
// ! Las etiquetas de html se tienen que cerrar con la barra /

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Saludo text="Hola Coder House desde Saludo Componente"/>
                <Boton1 text="Ver Categorias"/>
                <Boton1 disabled={true}/> {/* Tambien se puede pasar un componente con 2 tags, será un children
        y se recibe como prop.children en el componente  */}
                <Boton1>
                    Y soy un Children
                </Boton1>
                <br/>

                <Flex>
                    <Item titulo="Playera Negra"
                        precio={1000}
                        descripcion="Playera Negra de Algodon"
                        img="/image/logo192.png"/>
                    <Item titulo="Pantalon Azul"
                        precio={5600}
                        descripcion="Pantalon de Mezclilla"
                        img="https://img.freepik.com/foto-gratis/modelo-camiseta-negra-aislada-vista-frontal_125540-1073.jpg?w=740&t=st=1679253605~exp=1679254205~hmac=9edaf6ddaf4ef638223b66a166eb60222fe6a2c42f9a02d42ecbdc8f40d25a82"/>
                    <Item titulo="Camisa Manga Larga"
                        precio={3600}
                        descripcion="Camisa de Vestir Seda"
                        img = "https://img.freepik.com/foto-gratis/hombre-negocios-alegre-disfrutando-exito_1262-16166.jpg?w=740&t=st=1679256752~exp=1679257352~hmac=a245ef8bc7562b97d0ab4012c1dc32c0881efebd358d335c8690e6a9f7044811"
                    />
                </Flex>

            </header>
        </div>
    );
}

export default App;
