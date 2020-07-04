import "./nav-bar.css";

import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import brand from "../../assets/images/brand.png";
import Image from "react-bootstrap/Image";

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand={"md"} variant={"light"} className={"custom-nav"}>
                <Navbar.Brand href={"/"}>
                    <Image src={brand} className="d-inline-block align-top navbar-brand-logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menu"/>
                <Navbar.Collapse id="menu">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Inicio</Nav.Link>
                        <Nav.Link href="/hub">Panel</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Iniciar sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
