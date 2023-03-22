import {Link} from "react-router-dom";

export default function Navbar(){

    return (

        <nav>
            <ul>
                <li>
                    <Link to = "/">Inicio</Link>
                </li>
                <li>
                    <Link to = "/detalle">Detalle</Link>
                </li>
                <li>
                    <Link to = "/prueba">Prueba 404</Link>
                </li>
                <li>
                    <Link to = "https:/www.coderhouse.com">Coder Web</Link>
                </li>
                <div>
                    🛒
                    <span className="cartWidgey_count">10</span>
                </div>
            </ul>
        </nav>

    )
}