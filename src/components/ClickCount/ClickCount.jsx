import {useState} from "react";

function ClickCount() {
    let [count, setCount] = useState(0)
    // 1
    function handleClick() {
        console.log("click")
        let nuevoValor = count + 1;
        setCount(nuevoValor)
        // alert("ahora el valor es:" + nuevoValor)
    }

    return (
        <div onClick={handleClick}
            style={
                {
                    border: "solid 1px white",
                    padding: "20px"
                }
        }>
            <span> {count} </span>
        </div>
    )
}

export default ClickCount;
