import "./nav-bar.css";

import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import brand from "../../assets/images/brand.png";
import Image from "react-bootstrap/Image";

export default class NavBar extends React.Component {
    render() {
        const user = JSON.parse(localStorage.getItem("user"));

        return (
            <Navbar collapseOnSelect expand={"md"} variant={"light"} className={"custom-nav"}>
                <Navbar.Brand href={"/"}>
                    <Image src={brand} className="d-inline-block align-top brand-logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menu"/>
                <Navbar.Collapse id="menu">
                    <Nav className="mr-auto">
                        {
                            user === null
                                ? <div/>
                                : <Nav.Link href="/hub">Panel</Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        {
                            user === null
                                ? <Nav.Link href="/login">Iniciar sesión</Nav.Link>
                                : <Nav.Link onClick={() => {
                                    localStorage.removeItem("user");
                                    window.location.reload();
                                }}>Cerrar sesión</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
