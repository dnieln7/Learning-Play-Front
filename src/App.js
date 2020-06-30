import './App.css';

import React from 'react';
import Container from "react-bootstrap/Container";
import NavBar from "./components/navbar/nav-bar";
import {Home} from "./pages/home/home";
import {Login} from "./pages/login/login";
import {SignUp} from "./pages/sign-up/sign-up";

const Switch = require("react-router-dom").Switch;
const Redirect = require("react-router-dom").Redirect;
const Route = require("react-router-dom").Route;

function App() {
    return (
        <div className="app">
            <NavBar/>
            <div>
                <Switch>
                    <Redirect from={"/"} to={"/home"} exact/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/sign-up" exact component={SignUp}/>
                    <Route path="/home" exact component={Home}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
