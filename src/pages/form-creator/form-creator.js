import "./form-creator.css"

import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {drawOpenQuestion, drawOptionsQuestion} from "./question-drawer";
import {OpenQuestionModal, OptionsQuestionModal} from "./questions-factory";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {postForm} from "../../services/FromsTeacherDataService";

export const FormCreator = () => {
    const [questions, setQuestions] = useState([]);
    const [modalOpenQuestion, setModalOpenQuestion] = useState(false);
    const [modalOptionQuestion, setModalOptionQuestion] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));

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
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    return (
        <div className="p-4">
            <div className={"form-container"}>
                <Form>
                    <Form.Group>
                        <Row>
                            <Col>
                                <FormControl placeholder={title} className="form-title text-center"
                                             onChange={({target}) => setTitle(target.value)}/>
                            </Col>
                            <Col>
                                <FormControl placeholder={lesson} className="form-title text-center"
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
                    <Button className={"login-button"} disabled={questions.length === 0} variant={"outline-light"}
                            onClick={saveForm} block>Guardar</Button>
                </Form>
            </div>

            <div className={"panel-container p-3 text-center"}>
                <p className={"panel-title"}>Agrega una pregunta</p>
                <Card className={"my-2 border-0 question-card"}>
                    <Card.Body>
                        <Card.Title>Abierta</Card.Title>
                        <Card.Subtitle>Pregunta y respuesta simple</Card.Subtitle>
                        <Button className={"card-button"} onClick={() => setModalOpenQuestion(true)}>Agregar</Button>
                    </Card.Body>
                </Card>
                <Card className={"my-2 border-0 question-card"}>
                    <Card.Body>
                        <Card.Title>Opciones</Card.Title>
                        <Card.Subtitle>Pregunta con N posibles respuestas</Card.Subtitle>
                        <Button className={"card-button"} onClick={() => setModalOptionQuestion(true)}>Agregar</Button>
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
