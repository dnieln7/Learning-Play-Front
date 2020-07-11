import "./test-grade-view.css";

import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useLocation} from 'react-router-dom'
import {drawOpenQuestionGradable, drawOptionsQuestionGradable} from "../form-creator/question-drawer";
import Button from "react-bootstrap/Button";
import {getFormById, putForm} from "../../services/FromsStudentDataService";

export const TestGradeView = () => {
    const location = useLocation();
    const path = location.pathname.split("/");

    const [form, setForm] = useState({student: {}, content: []});
    const [grade, setGrade] = useState(0.0);
    const [comments, setComments] = useState("");

    useEffect(() => {
        getFormById(path[path.length - 1]).then(response => {
            let f = response.data;

            f.content = JSON.parse(f.content);

            setForm(f);
        });
    }, [form.id]);

    function saveForm() {

        if (grade <= 10 || grade >= 5) {
            let studentForm = {
                id: form.id,
                title: form.title,
                lesson: form.lesson,
                student: form.student,
                grade: grade,
                date: form.date,
                comments: comments,
                content: JSON.stringify(form.content)
            };

            putForm(studentForm.id, studentForm)
                .then(response => console.log(response.data))
                .catch(error => console.log(error));
        }
    }

    return (
        <div className={"grade-test-container p-4"}>
            <Form>
                <Form.Group>
                    <Row>
                        <Col>
                            <p className="grade-test-title text-center">{form.title}</p>
                            <p className="grade-test-subtitle text-center">{form.lesson}</p>
                        </Col>
                    </Row>
                </Form.Group>
                <div className={"text-left"}>
                    {
                        form.content.map((question, index) => {
                            switch (question.type) {
                                case "OPEN":
                                    return drawOpenQuestionGradable(index, question);
                                case "OPTIONS":
                                    return drawOptionsQuestionGradable(index, question);
                                default:
                                    throw new Error("No suitable method found");
                            }
                        })
                    }
                </div>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Calificación</Form.Label>
                                <Form.Control style={{background: "var(--light)", color: "var(--dark)"}} type="number"
                                              onChange={({target}) => setGrade(parseFloat(target.value))}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Comentarios</Form.Label>
                                <Form.Control as="textarea" rows="3"
                                              onChange={({target}) => setComments(target.value)}/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form.Group>
                <Button className={"login-button"} variant={"outline-light"} onClick={saveForm} block>Guardar</Button>
            </Form>
        </div>
    );
};
