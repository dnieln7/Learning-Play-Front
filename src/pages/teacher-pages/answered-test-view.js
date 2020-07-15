import "../pages-styles.css";

import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useLocation} from 'react-router-dom'
import {drawOpenQuestionGradable, drawOptionsQuestionGradable} from "../teacher-pages/test-creator/question-drawer";
import Button from "react-bootstrap/Button";
import {getFormById, putForm} from "../../services/FromsStudentDataService";

export const AnsweredTestView = () => {
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
        <div className="p-4 text-left text-light">
            <Form>
                <Form.Group>
                    <Row>
                        <Col className="text-light text-center">
                            <p className="font-title">{form.title}</p>
                            <p className="font-subtitle">{form.lesson}</p>
                        </Col>
                    </Row>
                </Form.Group>
                <div>
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
                            <Form.Control type="number" placeholder={"Calificación"} value={form.grade}
                                          onChange={({target}) => setGrade(parseFloat(target.value))}/>
                        </Col>
                        <Col>
                            <Form.Control as="textarea" rows="3" placeholder={"Comentarios"} value={form.comments}
                                          onChange={({target}) => setComments(target.value)}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Button className="secondary-button-filled" onClick={saveForm} block>Guardar</Button>
            </Form>
        </div>
    );
};
