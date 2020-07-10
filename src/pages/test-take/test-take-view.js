import "./test-take-view.css";

import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useLocation} from 'react-router-dom'
import {getFormById} from "../../services/FromsTeacherDataService";
import {drawOpenQuestionEditable, drawOptionsQuestionEditable} from "../form-creator/question-drawer";
import Button from "react-bootstrap/Button";
import {postForm} from "../../services/FromsStudentDataService";

export const TestTakeView = () => {
    const location = useLocation();
    const path = location.pathname.split("/");
    const user = JSON.parse(localStorage.getItem("user"));

    const [form, setForm] = useState({teacher: {}, questions: []});

    useEffect(() => {
        getFormById(path[path.length - 1]).then(response => {
            let f = response.data;

            f.questions = JSON.parse(f.questions);

            setForm(f);
        });
    }, [form.id]);

    function saveForm() {

        let studentForm = {
            title: form.title,
            lesson: form.lesson,
            student: {
                id: user.id
            },
            grade: 0,
            date: new Date(),
            comments: "",
            content: JSON.stringify(form.questions)
        };

        postForm(studentForm)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    return (
        <div className={"take-test-container p-4"}>
            <Form>
                <Form.Group>
                    <Row>
                        <Col>
                            <p className="take-test-title text-center">{form.title}</p>
                            <p className="take-test-subtitle text-center">{form.lesson}</p>
                        </Col>
                    </Row>
                </Form.Group>
                <div className={"text-left"}>
                    {
                        form.questions.map((question, index) => {
                            switch (question.type) {
                                case "OPEN":
                                    return drawOpenQuestionEditable(index, question, (value) => question.answer = value);
                                case "OPTIONS":
                                    return drawOptionsQuestionEditable(index, question);
                                default:
                                    throw new Error("No suitable method found");
                            }
                        })
                    }
                </div>
                <Button className={"login-button"} variant={"outline-light"} onClick={saveForm} block>Guardar</Button>
            </Form>
        </div>
    );
};
