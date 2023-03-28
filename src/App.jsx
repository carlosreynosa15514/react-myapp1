import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// * Componentes
import Saludo from "./components/Saludo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';

function App() {

    return (
        <div>
            <Saludo text = "Bienvenido a Tienda de Construccion"/>
            

            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route
                        path="/"
                        element = {<ItemListContainer/>}
                    />

                    <Route
                        path="/detalle/:id"
                        element = {<ItemDetailContainer/>}
                    />

                    <Route
                        path = "/category/:categoryid"
                        element = {<ItemListContainer/>}
                    />

                    <Route
                        path = "*"
                        element = {<h2> 🤬 Error 404 Enlace no Encontrado 🤬</h2>}
                    />


                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
