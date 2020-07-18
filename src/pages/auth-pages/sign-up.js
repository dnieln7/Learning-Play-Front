import "../pages-styles.css"

import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import {signUp} from "../../services/UserDataService";
import {useHistory} from "react-router-dom";

export const SignUp = () => {

    const history = useHistory();

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
                if(response.data.code === 1){
                    history.push("/login")
                }
            });
        }

        setValidated(true);
    };

    return (
        <div className="make-column justify-content-center align-items-center pt-5">
            {
                show
                    ?
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Error!</Alert.Heading>
                        <p>Debes aceptar los terminos y condiciones</p>
                    </Alert>
                    : <div/>
            }
            <Form noValidate validated={validated} className="container-primary rounded text-center p-4 m-4">
                <Form.Label className="font-title mb-4">Crear mi cuenta</Form.Label>
                <Form.Row>
                    <Form.Group as={Col}>
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
                    <Form.Group as={Col}>
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
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
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
                    <Form.Group as={Col}>
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
                        <Form.Label className="font-subtitle">Soy un</Form.Label>
                        <Form.Control as="select" custom onChange={({target}) => setRole(target.value)}>
                            <option>Estudiante</option>
                            <option>Maestro</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group as={Col}>
                    <a className="secondary-button-text text-decoration-none" href={"https://www.google.com"}>
                        <input
                            required
                            type="checkbox"
                            onChange={({target}) => setTerms(target.checked)}
                        /> Acepto los terminos y condiciones
                    </a>
                </Form.Group>
                <Button type="button" onClick={handleSignUp} className="secondary-button-filled">Crear cuenta</Button>
            </Form>
        </div>
    );
};
