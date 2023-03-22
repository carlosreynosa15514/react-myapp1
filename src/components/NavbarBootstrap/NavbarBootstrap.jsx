import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";


export default function NavbarBootstrap(props) {

    return(
        <Navbar bg = "primary" variant = "dark" >
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to = "/" >Home</Link>
                    <Link to ="/prueba">Features</Link>
                </Nav>
            </Container>
        </Navbar>
    )
};