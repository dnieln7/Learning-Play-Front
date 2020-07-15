import "../pages/pages-styles.css";

import test_update from "../assets/images/test_update.png";

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export class AvailableTestItem extends React.Component {
    render() {
        const {
            title,
            lesson,
            teacher,
            take,
        } = this.props.content;

        return (
            <ListGroup.Item active className="bg-light my-1 border-0 rounded" action onClick={take}>
                <Row className="text-dark">
                    <Card.Img src={test_update} className="w-auto" style={{height: "5rem"}}/>
                    <Col>
                        <p className="font-subtitle">{title}</p>
                        <p className="mb-0">{lesson}</p>
                    </Col>
                    <Col sm={""}>
                        <p>{teacher}</p>
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    }
}
