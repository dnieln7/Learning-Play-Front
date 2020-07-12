import "./content-card.css";
import React from "react";
import Card from "react-bootstrap/Card";

export default class ContentCard extends React.Component {
    render() {
        const {
            img,
            title,
            subtitle,
            path
        } = this.props.content;

        return (
            <Card className={"m-2 pt-2 custom-card text-dark"} onClick={path}>
                <Card.Img src={img}/>
                <Card.Body>
                    <Card.Title className={"text-center"}>{title}</Card.Title>
                    <Card.Subtitle className={"text-center"}>{subtitle}</Card.Subtitle>
                </Card.Body>
            </Card>
        );
    }
}
