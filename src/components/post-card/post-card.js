import "./post-card.css"
import "../../pages/pages-styles.css"

import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export class PostCard extends React.Component {
    render() {
        const {
            title,
            goPostDetail,
        } = this.props.content;

        return (
            <Card className="container-light post-card" onClick={goPostDetail}>
                <Card.Img variant="top" src={"https://img.icons8.com/fluent/200/000000/book.png"}/>
                <Card.Body as={Col}>
                    <Card.Title className="font">{title}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}
