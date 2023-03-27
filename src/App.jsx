import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// * Componentes
import Saludo from "./components/Saludo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

    return (
        <div>
            <Saludo text = "Bienvenido a Tienda de Construccion"/>
            {/* <ItemListContainer/> */}
            <ItemDetailContainer/>
        </div>
    );
}

export default App;
