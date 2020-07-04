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
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/hub">Hub</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
