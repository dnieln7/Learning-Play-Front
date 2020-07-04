import "./sign-up.css";

import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import {signUp} from "../../services/UserDataService";

export const SignUp = () => {

    const [validated, setValidated] = useState(false);
    const [terms, setTerms] = useState(false);
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("ESTUDIANTE");

    const handleSignUp = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (!terms) {
            setShow(true);
        } else {
            let user = {
                name: name,
                lastName: lastName,
                email: email,
                password: password,
                role: role === "Maestro" ? "TEACHER" : "STUDENT"
            };

            signUp(user).then(response => {
                console.log(response.data);
            });
        }

        setValidated(true);
    };

    return (
        <div className={"root-container"}>
            {
                show
                    ?
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Error!</Alert.Heading>
                        <p>Debes aceptar los terminos y condiciones</p>
                    </Alert>
                    : <div/>
            }
            <Form noValidate validated={validated} onSubmit={handleSignUp} className={"form-container"}>
                <Form.Label className={"form-title mb-4"}>Crear mi cuenta</Form.Label>
                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            onChange={({target}) => setName(target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tu nombre.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="validationCustom02">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            onChange={({target}) => setLastName(target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tus apellidos.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustomUsername">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                aria-describedby="inputGroupPrepend"
                                required
                                onChange={({target}) => setEmail(target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Porfavor ingresa un correo electrónico válido.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} controlId="validationCustom03">
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa una contraseña.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Soy un</Form.Label>
                        <Form.Control as="select" custom onChange={({target}) => setRole(target.value)}>
                            <option>Estudiante</option>
                            <option>Maestro</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group as={Col}>
                    <a className={"form-link"} href={"https://www.google.com"}>
                        <input
                            required
                            type="checkbox"
                            onChange={({target}) => setTerms(target.checked)}
                        /> Acepto los terminos y condiciones
                    </a>
                </Form.Group>
                <Button type="submit" className={"sign-up-button"}>Crear cuenta</Button>
            </Form>
        </div>
    );
};
