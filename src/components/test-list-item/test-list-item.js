import "./test-list-item.css";

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import test_update from "../../assets/images/test_update.png";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

export class TestListItem extends React.Component {
    render() {
        const {
            title,
            lesson,
            teacher,
            deleteItem,
            viewItem
        } = this.props.content;

        return (
            <ListGroup.Item active className="bg-light my-1 border-0">
                <Row>
                    <Col as={Row}>
                        <Card.Img src={test_update} className=" img-fluid w-auto" style={{height: "5rem"}}/>
                        <Col className="p-2">
                            <p className="text-dark">{title}</p>
                            <p className="text-dark mb-0">{lesson}</p>
                        </Col>
                        <Col>
                            <p className="text-dark">{teacher}</p>
                        </Col>
                    </Col>
                    <Col sm={"1"} className="align-self-center">
                        <div className="make-row">
                            <Image src={"https://img.icons8.com/material-rounded/100/000000/delete.png"}
                                   className="img-button img-fluid w-auto mr-3 "
                                   onClick={deleteItem}/>
                            <Image src={"https://img.icons8.com/metro/100/000000/view-file.png"}
                                   className="img-button img-fluid w-auto "
                                   onClick={viewItem}/>
                        </div>
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    }
}
