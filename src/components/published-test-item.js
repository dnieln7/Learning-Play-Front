import "../pages/pages-styles.css";

import test from "../assets/images/test.png";
import delete_img from "../assets/images/delete.png";
import detail from "../assets/images/detail.png";

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
                    <Card.Img src={test} className=" img-fluid w-auto" style={{height: "5rem"}}/>
                    <Col>
                        <p className="font-subtitle">{title}</p>
                        <p className="mb-0">{lesson}</p>
                    </Col>
                    <Image src={delete_img}
                           className="img-fluid w-auto mr-3 align-self-center cursor-pointer" style={{height: "2.5rem"}}
                           onClick={deleteItem}/>
                    <Image src={detail}
                           className="img-fluid w-auto align-self-center cursor-pointer mr-3" style={{height: "2.5rem"}}
                           onClick={viewItem}/>
                </Row>
            </ListGroup.Item>
        );
    }
}
