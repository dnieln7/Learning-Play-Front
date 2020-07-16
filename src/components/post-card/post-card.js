import "./post-card.css"
import "../../pages/pages-styles.css"

import post from "../../assets/images/post.png";

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
                <Card.Img className="p-4" src={post}/>
                <Card.Body>
                    <Card.Title className="text-center font-title card-font-title">{title}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}
