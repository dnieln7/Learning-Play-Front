import "../pages/pages-styles.css";

import test_update from "../assets/images/test_update.png";

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

export class PublishedTestItem extends React.Component {
    render() {
        const {
            title,
            lesson,
            teacher,
            deleteItem,
            viewItem
        } = this.props.content;

        return (
            <ListGroup.Item active className="my-1 border-0 bg-light text-dark rounded">
                <Row>
                    <Card.Img src={test_update} className=" img-fluid w-auto" style={{height: "5rem"}}/>
                    <Col>
                        <p className="font-subtitle">{title}</p>
                        <p className="mb-0">{lesson}</p>
                    </Col>
                    <Image src={"https://img.icons8.com/material-rounded/100/000000/delete.png"}
                           className="img-fluid w-auto mr-3 align-self-center cursor-pointer" style={{height: "2.5rem"}}
                           onClick={deleteItem}/>
                    <Image src={"https://img.icons8.com/metro/100/000000/view-file.png"}
                           className="img-fluid w-auto align-self-center cursor-pointer" style={{height: "2.5rem"}}
                           onClick={viewItem}/>
                </Row>
            </ListGroup.Item>
        );
    }
}
