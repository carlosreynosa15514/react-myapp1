import logo from './logo.svg';
import './App.css';
import Saludo from "./components/Saludo";

import Boton1 from "./components/Boton1"

//! Atributo class es className
//! Todo esta dentro de un div
//! El componente es una funcion que retorna el codigo html y js
//! Las variables pueden usar valores de otras variables src={variable} importadas
//! Las etiquetas de html se tienen que cerrar con la barra /

function App() {

  //* Ejemplo para pasar un valor al html
  //* Dentro del HTML en codigo Js se escribe entre {}
  function getUserName(){
    return "Mark Jasper";
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Este es un H1 creado desde index.js
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo/>
        <Boton1/>
        <div> Usuario:  <u> {getUserName()} </u> </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
