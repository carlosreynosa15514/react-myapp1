import { Children } from "react";

export default function Flex(props){
    return (
        <div style={{display:"flex"}} >
            {props.children}
        </div>
    )
}