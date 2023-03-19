
  //* Ejemplo para pasar un valor al html
  //* Dentro del HTML en codigo Js se escribe entre {}

function getUserName(props){
    return "Mark Jasper";
}

export default function GetUserName(props){
    return (
        <div> Usuario:  <u> {getUserName()} </u> </div>
    )
   }