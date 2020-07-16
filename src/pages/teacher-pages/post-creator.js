import "../pages-styles.css";

import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {postPost} from "../../services/PostDataService";
import Alert from "react-bootstrap/Alert";

export const PostCreator = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    const [showError, setShowError] = useState(false);
    const [title, setTitle] = useState("Publicación de " + user.name);
    const [body, setBody] = useState("");

    function savePost() {

        if (body !== "") {
            const post = {
                teacher: {
                    id: user.id
                },
                title: title,
                body: body,
                date: new Date(),
            };

            postPost(post)
                .then(response => console.log(response.data))
                .catch(error => console.log(error));
        } else {
            setShowError(true);
        }
    }

    return (
        <div className="make-column justify-content-center align-items-center mt-5">
            {
                showError
                    ?
                    <Alert variant="danger" className="w-75 mb-2 text-center"
                           onClose={() => setShowError(false)}
                           dismissible>
                        <Alert.Heading>Error!</Alert.Heading>
                        <p>El contenido está vacio</p>
                    </Alert>
                    : <h1 className="text-center text-light mb-2 font-title">Publicar nuevo contenido</h1>
            }
            <Form className="text-light w-75">
                <Form.Group>
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder={title} onChange={({target}) => setTitle(target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contenido</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={({target}) => setBody(target.value)}/>
                </Form.Group>
                <Form.Row className="justify-content-center">
                    <Button className="w-50 secondary-button-filled" type="button" block onClick={savePost}>
                        Guardar
                    </Button>
                </Form.Row>
            </Form>
        </div>
    );
};
