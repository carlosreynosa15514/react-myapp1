import {Link} from "react-router-dom";

export default function Navbar(){

    return (

        <nav>
            <ul>
                <li>
                    <Link to = "/">Inicio</Link>
                </li>
                <li>
                    <Link to = "/detalle/:id">Detalle</Link>
                </li>
                <li>
                    <Link to = "/category/:categoryid">Categorias</Link>
                </li>
                <li>
                    <a href = "https:/www.coderhouse.com" target={"_blank"}>Coder Web</a>
                </li>
                <div>
                    🛒
                    <span className="cartWidgey_count">10</span>
                </div>
            </ul>
        </nav>

    )
}