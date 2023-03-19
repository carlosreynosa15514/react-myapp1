import "./Boton1.css"

export function handleClick(){
    alert("Clickeaste");
  }

export default function Boton1(props) {
    return (
        <button disabled={props.disabled} className="btn" onClick={handleClick} >
            {props.text || "Sin Texto"} 
            {props.children}
        </button>
    );
}



