import "../../pages-styles.css";

import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export function drawOpenQuestion(question, index) {
    return (
        <Form.Group key={index}>
            <Form.Label>{(index + 1) + ".- " + question.title}</Form.Label>
            <Form.Control className="container-light" type="text" placeholder={"Respuesta"} disabled/>
        </Form.Group>
    );
}

export function drawOpenQuestionEditable(index, question, setter) {
    return (
        <Form.Group key={index}>
            <Form.Label>{(index + 1) + ".- " + question.title}</Form.Label>
            <Form.Control className="container-light" type="text" placeholder={"Respuesta"}
                          onChange={({target}) => setter(target.value)}/>
        </Form.Group>
    );
}

export function drawOpenQuestionGradable(index, question) {
    return (
        <Form.Group key={index}>
            <Form.Label>{(index + 1) + ".- " + question.title}</Form.Label>
            <Form.Control className="container-light" type="text" value={question.answer} disabled/>
        </Form.Group>
    );
}

export function drawOptionsQuestion(question, index) {
    return (
        <Form.Group key={index}>
            <Form.Label>{(index + 1) + ".- " + question.title}</Form.Label>
            <Col sm>
                {
                    question.options.map((option, index) => {
                        return (
                            <Form.Check
                                key={index}
                                type={"radio"}
                                name={question.title + "_radios"}
                                label={option.title}
                                defaultChecked={option.correct}
                                disabled={!option.correct}
                            />
                        );
                    })
                }
            </Col>
        </Form.Group>
    );
}

export function drawOptionsQuestionEditable(index, question) {
    return (
        <Form.Group key={index}>
            <Form.Label>{(index + 1) + ".- " + question.title}</Form.Label>
            <Col sm>
                {
                    question.options.map((option, index) => {
                        return (
                            <Form.Check
                                key={index}
                                type={"radio"}
                                name={question.title + "_radios"}
                                label={option.title}
                                onChange={({target}) => {
                                    question.options.forEach(op => op.correct = !target);
                                    option.correct = target.checked;
                                }}
                            />
                        );
                    })
                }
            </Col>
        </Form.Group>
    );
}

export function drawOptionsQuestionGradable(index, question) {
    return (
        <Form.Group key={index}>
            <Form.Label>{(index + 1) + ".- " + question.title}</Form.Label>
            <Col sm>
                {
                    question.options.map((option, index) => {
                        return (
                            <Form.Check
                                key={index}
                                type={"radio"}
                                name={question.title + "_radios"}
                                label={option.title}
                                defaultChecked={option.correct}
                                disabled={!option.correct}
                            />
                        );
                    })
                }
            </Col>
        </Form.Group>
    );
}
