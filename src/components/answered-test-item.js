import "../pages/pages-styles.css";

import test from "../assets/images/test.png";
import graded_test_success from "../assets/images/graded_test_success.png";
import graded_test_fail from "../assets/images/graded_test_fail.png";

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export class AnsweredTestItem extends React.Component {
    render() {
        const {
            title,
            lesson,
            teacher,
            grade,
            gradeFun
        } = this.props.content;

        return (
            <ListGroup.Item active className="bg-light my-1 border-0 rounded" action onClick={gradeFun}>
                <Row className="text-dark">
                    <Card.Img src={grade === 0 ? test : grade <= 5 ? graded_test_fail : graded_test_success} className="w-auto" style={{height: "5rem"}}/>
                    <Col>
                        <p className="font-subtitle">{title}</p>
                        <p className="mb-0">{lesson}</p>
                    </Col>
                    <Col sm={""}>
                        <p>{teacher}</p>
                        <p className="mb-0">{grade === 0 ? "Sin calificar" : grade <= 5 ? "Reprobado" : "Aprobado"}</p>
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    }
}
