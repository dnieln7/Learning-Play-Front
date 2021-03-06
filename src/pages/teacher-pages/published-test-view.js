import "../pages-styles.css";

import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useLocation} from 'react-router-dom'
import {getFormById} from "../../services/FromsTeacherDataService";
import {drawOpenQuestion, drawOptionsQuestion} from "../teacher-pages/test-creator/question-drawer";

export const PublishedTestView = () => {
    const location = useLocation();
    const path = location.pathname.split("/");

    const [form, setForm] = useState({teacher: {}, questions: []});

    useEffect(() => {
        getFormById(path[path.length - 1]).then(response => {
            let f = response.data;

            f.questions = JSON.parse(f.questions);

            setForm(f);
        });
    }, [form.id]);

    function setTitle(title) {
        form.title = title;
    }

    function setLesson(lesson) {
        form.lesson = lesson;
    }

    function updateForm() {
        console.log(form);
    }

    return (
        <div className={"test-container p-4"}>
            <Form>
                <Form.Group>
                    <Row>
                        <Col className="text-center text-light">
                            <p className="font-title">{form.title}</p>
                            <p className="font-subtitle">{form.lesson}</p>
                        </Col>
                    </Row>
                </Form.Group>
                <div className="text-left text-light">
                    {
                        form.questions.map((question, index) => {
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
            </Form>
        </div>
    );
};
