import "./test-creator.css";
import "../../pages-styles.css";

import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {drawOpenQuestion, drawOptionsQuestion} from "./question-drawer";
import {OpenQuestionModal, OptionsQuestionModal} from "./questions-factory";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {postForm} from "../../../services/FromsTeacherDataService";
import {useHistory} from "react-router-dom";

export const TestCreator = () => {
    const [questions, setQuestions] = useState([]);
    const [modalOpenQuestion, setModalOpenQuestion] = useState(false);
    const [modalOptionQuestion, setModalOptionQuestion] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const history = useHistory();

    const [title, setTitle] = useState("Formulario de " + user.name);
    const [lesson, setLesson] = useState("Lección de " + user.name);

    const formTeacher = {
        title: title,
        lesson: lesson,
        teacher: {
            id: user.id
        },
        questions: JSON.stringify(questions),
    };

    function pushQuestion(question) {
        setQuestions([...questions, question]);
    }

    function saveForm() {
        postForm(formTeacher)
            .then(response => {
                if (response.data.id !== undefined) {
                    history.replace("/hub");
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="p-4">
            <div className={"form-container"}>
                <Form>
                    <Form.Group>
                        <Row>
                            <Col>
                                <FormControl placeholder={title}
                                             className="container-dark border-0 text-center font-title"
                                             onChange={({target}) => setTitle(target.value)}/>
                            </Col>
                            <Col>
                                <FormControl placeholder={lesson}
                                             className="container-dark border-0 text-center font-title"
                                             onChange={({target}) => setLesson(target.value)}/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <div className={"text-left"}>
                        {
                            questions.map((question, index) => {
                                switch (question.type) {
                                    case "OPEN":
                                        return drawOpenQuestion(question, index);
                                    case "OPTIONS":
                                        return drawOptionsQuestion(question, index);
                                    default:
                                        throw new Error("No suitable method found");
                                }
                            })
                        }
                    </div>
                    <Button className="secondary-button-filled" disabled={questions.length === 0} onClick={saveForm}
                            block>Guardar</Button>
                </Form>
            </div>

            <div className="panel-container p-4 rounded text-center">
                <p className="font-title">Agrega una pregunta</p>
                <Card className={"my-2 border-0 container-dark"}>
                    <Card.Body>
                        <Card.Title className="font-subtitle">Abierta</Card.Title>
                        <Card.Subtitle>Pregunta y respuesta simple</Card.Subtitle>
                        <Button className="primary-button-text"
                                onClick={() => setModalOpenQuestion(true)}>Agregar</Button>
                    </Card.Body>
                </Card>
                <Card className={"my-2 border-0 container-dark"}>
                    <Card.Body>
                        <Card.Title className="font-subtitle">Opciones</Card.Title>
                        <Card.Subtitle>Pregunta con N posibles respuestas</Card.Subtitle>
                        <Button className="primary-button-text"
                                onClick={() => setModalOptionQuestion(true)}>Agregar</Button>
                    </Card.Body>
                </Card>
            </div>
            <OpenQuestionModal show={modalOpenQuestion} onHide={() => setModalOpenQuestion(false)}
                               pushQuestion={pushQuestion}/>
            <OptionsQuestionModal show={modalOptionQuestion} onHide={() => setModalOptionQuestion(false)}
                                  pushQuestion={pushQuestion}/>
        </div>
    );
};
