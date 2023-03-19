import logo from './logo.svg';
import './App.css';

//* Componentes
import Saludo from "./components/Saludo";
import Boton1 from "./components/Botton1/Boton1";
import GetUserName from "./components/GetUserName";

//! Atributo class es className
//! Todo esta dentro de un div
//! El componente es una funcion que retorna el codigo html y js
//! Las variables pueden usar valores de otras variables src={variable} importadas
//! Las etiquetas de html se tienen que cerrar con la barra /

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Saludo numero = {1854} text="Hola Coder House desde Saludo Componente"/>
        <Boton1  text="Ver Categorias" />
        <Boton1 disabled={true} />
        {/* Tambien se puede pasar un componente con 2 tags, será un children
        y se recibe como prop.children en el componente  */}
        <Boton1> Y soy un Children </Boton1>
      </header>
    </div>
  );
}

export default App;
