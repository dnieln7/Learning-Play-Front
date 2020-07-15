import "../pages/pages-styles.css";

import test_completed from "../assets/images/test_completed.png";
import test_failed from "../assets/images/test_new.png";

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export class GradedTestItem extends React.Component {
    render() {
        const {
            title,
            lesson,
            grade,
            date,
        } = this.props.content;

        return (
            <ListGroup.Item active className="bg-light my-1 border-0 rounded">
                <Row className="text-dark">
                    <Card.Img src={grade <= 5 ? test_failed : test_completed} className="w-auto"
                              style={{height: "5rem"}}/>
                    <Col>
                        <p className="font-subtitle">{title}</p>
                        <p className="mb-0">{lesson}</p>
                    </Col>
                    <Col sm={""}>
                        <p>{new Date(date).toLocaleDateString()}</p>
                        <p className="mb-0">{grade === 0 ? "Sin calificar" : grade <= 5 ? "Reprobado" : "Aprobado"}</p>
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    }
}
