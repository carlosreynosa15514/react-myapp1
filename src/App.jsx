import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// * Componentes
import Saludo from "./components/Saludo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

    return (
        <div>
            <Saludo text = "Bienvenido a Tienda de Construccion"/>
            <ItemListContainer/>
        </div>
    );
}

export default App;
