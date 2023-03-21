// import {useState} from "react";
import './App.css';

// * Componentes
import Saludo from "./components/Saludo";
import Boton1 from "./components/Botton1/Boton1";
// import GetUserName from "./components/GetUserName";
// import Item from "./components/Item";
// import Flex from './components/Flex/Flex';
// import ClickCount from './components/ClickCount/ClickCount';
// import ItemCount from "./components/ItemCount/ItemCount";
import ItemList from "./components/ItemList/ItemList";
import NavbarBootstrap from './components/NavbarBootstrap/NavbarBootstrap';

// ! Atributo class es className
// ! Todo esta dentro de un div
// ! El componente es una funcion que retorna el codigo html y js
// ! Las variables pueden usar valores de otras variables src={variable} importadas
// ! Las etiquetas de html se tienen que cerrar con la barra /

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <NavbarBootstrap/>

                <Saludo text="Hola Coder House desde Saludo Componente"/>
                <Boton1 text="Ver Categorias"></Boton1>
                <br/>

                <ItemList/>

            </header>
        </div>
    );
}

export default App;
