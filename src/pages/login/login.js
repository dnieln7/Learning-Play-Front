import "./login.css";

import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {login} from "../../services/UserDataService";


export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("ESTUDIANTE");

    function handleLogin() {
        let auth = {
                email: email,
                password: password,
                role: role === "Maestro" ? "TEACHER" : "STUDENT"
        };

        login(auth).then(response => console.log(response.data.result))
    }

    return (
        <div className={"root-container"}>
            <Image className="img-custom" src={"https://img.icons8.com/material-rounded/100/000000/user-location.png"}/>
            <div className={"form-container"}>
                <Form>
                    <Form.Label className={"form-title mb-4"}>Inicar sesión</Form.Label>

                    <Form.Group>
                        <Form.Control onChange={({target}) => setEmail(target.value)} type="email"
                                      placeholder="Correo electrónico"/>
                        <Form.Text className="text-muted">
                            Nunca compartiremos tu correo con terceros.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control onChange={({target}) => setPassword(target.value)} type="password"
                                      placeholder="Contraseña"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Soy un</Form.Label>
                        <Form.Control as="select" custom onChange={({target}) => setRole(target.value)}>
                            <option>Estudiante</option>
                            <option>Maestro</option>
                        </Form.Control>
                    </Form.Group>

                    <Button className={"login-button"} type="button" onClick={handleLogin} block>Iniciar sesión</Button>
                    <Button className={"sign-up-button"} type="button" href={"/sign-up"} block>Registrarme</Button>
                    <Button className={"forgot-button"} type="button" block>Olvidé mi contraseña</Button>
                </Form>
            </div>
        </div>
    );
};
