

export function handleClick(){
    alert("Clickeaste");
  }

 //* Usando CSS
export const styleBoton1 = {
    backgroundColor: "green",
    padding: "10px",
    color: "White",
    width: "200px",
    height: "50px",
    borderRadius: "10px" 
}


export default function Boton1() {
    return (
        <button onClick={handleClick} style={styleBoton1}> Click me </button>
    );
}



