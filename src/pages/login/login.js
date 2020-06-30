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
                role: role === "MAESTRO" ? "TEACHER" : "STUDENT"
        };

        login(auth).then(response => console.log(response.data.result))
    }

    return (
        <div className={"root-container"}>
            <Image className="img-custom" src={"https://img.icons8.com/material-rounded/100/000000/user-location.png"}/>
            <div className={"form-container"}>
                <Form>
                    <Form.Label className={"form-title mb-4"}>Login</Form.Label>

                    <Form.Group>
                        <Form.Control onChange={({target}) => setEmail(target.value)} type="email"
                                      placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control onChange={({target}) => setPassword(target.value)} type="password"
                                      placeholder="Password"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Please choose your role</Form.Label>
                        <Form.Control as="select" custom onChange={({target}) => setRole(target.value)}>
                            <option>ESTUDIANTE</option>
                            <option>MAESTRO</option>
                        </Form.Control>
                    </Form.Group>

                    <Button className={"login-button"} type="button" onClick={handleLogin} block>Login</Button>
                    <Button className={"sign-up-button"} type="button" href={"/sign-up"} block>Sign Up</Button>
                    <Button className={"forgot-button"} type="button" block>Forgot Password</Button>
                </Form>
            </div>
        </div>
    );
};
