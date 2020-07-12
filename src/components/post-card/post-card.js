import "./post-card.css"
import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class PostCard extends React.Component {
    render() {
        const {
            title,
            goPostDetail,
        } = this.props.content;

        return (
            <Card className="post-card" as={Col} sm={"4"}>
                <Card.Img variant="top" src={"https://img.icons8.com/fluent/200/000000/book.png"}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button variant="outline-light" onClick={goPostDetail}>Consultar</Button>
                </Card.Body>
            </Card>
        );
    }
}
