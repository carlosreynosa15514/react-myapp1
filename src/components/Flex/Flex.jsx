// import { Children } from "react";
import "./Flex.css"
export default function Flex(props){
    return (
        <div className="flex-container" style={{display:"flex"}} >
            {props.children}
        </div>
    )
}