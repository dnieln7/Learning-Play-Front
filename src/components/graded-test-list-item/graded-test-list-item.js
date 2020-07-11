import "./graded-test-list-item.css";

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import test_completed from "../../assets/images/test_completed.png";
import test_failed from "../../assets/images/test_new.png";
import ListGroup from "react-bootstrap/ListGroup";

export class GradedTestListItem extends React.Component {
    render() {
        const {
            title,
            lesson,
            grade,
        } = this.props.content;

        return (
            <ListGroup.Item active className="bg-light my-1 border-0">
                <Row>
                    <Col as={Row}>
                        <Card.Img src={grade <= 5 ? test_failed : test_completed} className=" img-fluid w-auto"
                                  style={{height: "5rem"}}/>
                        <Col className="p-2">
                            <p className="text-dark">{title}</p>
                            <p className="text-dark mb-0">{lesson}</p>
                        </Col>
                        <Col sm={"1"}>
                            <p className="text-dark">{grade === 0 ? "Sin calificar" : grade <= 5 ? "Reprobado" : "Aprobado"}</p>
                        </Col>
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    }
}
