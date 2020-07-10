import "./available-test-list-item.css";

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import test_update from "../../assets/images/test_update.png";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

export class AvailableTestListItem extends React.Component {
    render() {
        const {
            title,
            lesson,
            teacher,
            take,
        } = this.props.content;

        return (
            <ListGroup.Item active className="bg-light my-1 border-0" action onClick={take}>
                <Row>
                    <Col as={Row}>
                        <Card.Img src={test_update} className=" img-fluid w-auto" style={{height: "5rem"}}/>
                        <Col className="p-2">
                            <p className="text-dark">{title}</p>
                            <p className="text-dark mb-0">{lesson}</p>
                        </Col>
                        <Col sm={"1"}>
                            <p className="text-dark">{teacher}</p>
                        </Col>
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    }
}
