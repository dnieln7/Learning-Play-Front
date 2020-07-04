import "./content-card.css";
import React from "react";
import Card from "react-bootstrap/Card";

export default class ContentCard extends React.Component {
    render() {
        const {
            img,
            title,
            subtitle,
            body,
            foot,
            path
        } = this.props.content;

        return (
            <Card bg={"light"} className={"m-2 pt-2"} onClick={path}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title className={"text-center"}>{title}</Card.Title>
                    <Card.Subtitle className={"text-center"}>{subtitle}</Card.Subtitle>
                    {/*                    <Card.Text>{body}</Card.Text>
                    <Card.Footer>${foot}</Card.Footer>*/}
                </Card.Body>
            </Card>
        );
    }
}
