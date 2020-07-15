import "./post-card.css"
import "../../pages/pages-styles.css"

import React from "react";
import Card from "react-bootstrap/Card";

export class PostCard extends React.Component {
    render() {
        const {
            title,
            goPostDetail,
        } = this.props.content;

        return (
            <Card className="cursor-pointer container-light card-container" onClick={goPostDetail}>
                <Card.Img src={"https://img.icons8.com/fluent/200/000000/book.png"}/>
                <Card.Body>
                    <Card.Title className="text-center font-title card-font-title">{title}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}
