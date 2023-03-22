import Boton1 from "./Botton1/Boton1"


export default function Saludo(props) {
  return ( 
    <h2> {props.text}
      {/* <Boton1 text = "Ver mas" /> */}
      {props.numero}
    </h2>
)
}
