import "./hub-card.css";
import "../../pages/pages-styles.css"

import React from "react";
import Card from "react-bootstrap/Card";

export default class HubCard extends React.Component {
    render() {
        const {
            img,
            title,
            subtitle,
            path
        } = this.props.content;

        return (
            <Card className="m-2 pt-2 cursor-pointer container-light card-container" onClick={path}>
                <Card.Img src={img}/>
                <Card.Body>
                    <Card.Title className="text-center font-title card-font-title">{title}</Card.Title>
                    <Card.Subtitle className="text-center font-subtitle card-font-subtitle">{subtitle}</Card.Subtitle>
                </Card.Body>
            </Card>
        );
    }
}
