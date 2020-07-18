import "./auth-pages-styles.css";
import "../pages-styles.css"

import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {login} from "../../services/UserDataService";
import {useHistory} from "react-router-dom";

export const Login = () => {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("ESTUDIANTE");

    function handleLogin() {
        let auth = {
            email: email,
            password: password,
            role: role === "Maestro" ? "TEACHER" : "STUDENT"
        };

        login(auth)
            .then(response => {
                if (response.data.code === 1) {
                    localStorage.setItem("user", JSON.stringify(response.data.result));
                    history.replace("/hub");
                    window.location.reload()
                }
            }).catch(error => alert(error));
    }

    if (localStorage.getItem("user") !== null) {
        history.replace("/hub");
    }

    return (
        <div className="make-column justify-content-center align-items-center">
            <Image className="login-icon"
                   src={"https://img.icons8.com/material-rounded/100/000000/user-location.png"}/>
            <Form className="container-primary rounded text-center p-4">
                <Form.Label className="font-title mb-4">Inicar sesión</Form.Label>

                <Form.Group>
                    <Form.Control onChange={({target}) => setEmail(target.value)} type="email"
                                  placeholder="Correo electrónico"/>
                    <Form.Text className="text-muted font-muted">
                        Nunca compartiremos tu correo con terceros.
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Control onChange={({target}) => setPassword(target.value)} type="password"
                                  placeholder="Contraseña"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="font-subtitle">Soy un</Form.Label>
                    <Form.Control as="select" custom onChange={({target}) => setRole(target.value)}>
                        <option>Estudiante</option>
                        <option>Maestro</option>
                    </Form.Control>
                </Form.Group>

                <Button className="secondary-button-filled" type="button" onClick={handleLogin} block>Iniciar
                    sesión</Button>
                <Button className="secondary-button-filled" type="button" href={"/sign-up"} block>Registrarme</Button>
                {/*<Button className="secondary-button-text" type="button" block>Olvidé mi contraseña</Button>*/}
            </Form>
        </div>
    );
};
