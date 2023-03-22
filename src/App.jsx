import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// * Componentes
import Saludo from "./components/Saludo";
import ItemList from "./components/ItemList/ItemList";

function App() {

    return (
        <div>
            <Saludo text = "Bienvenido a Tienda de Construccion"/>
            <ItemList/>
        </div>
    );
}

export default App;
