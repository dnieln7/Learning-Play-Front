import "./post-view.css";

import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useLocation} from "react-router-dom";
import {getFormById} from "../../services/FromsTeacherDataService";
import {getPostById} from "../../services/PostDataService";

export const PostView = () => {
    const location = useLocation();
    const path = location.pathname.split("/");

    const [post, setPost] = useState({teacher: {}});

    useEffect(() => {
        getPostById(path[path.length - 1]).then(response => {
            setPost(response.data);
        });
    }, [post.id]);

    return (
        <div className="post-creator-container mt-5">
            <div className="w-75 align-self-center mb-2">
                <h1 className="text-center text-light">{post.title}</h1>
                <h5 className="text-light">Publicado por: {post.teacher.name}</h5>
                <h6 className="text-light">Fecha de
                    publicación: {new Date(post.date).toLocaleString().substring(0, 9)}</h6>
            </div>

            <Form className="text-light w-75 align-self-center">
                <Form.Group>
                    <Form.Label>Contenido</Form.Label>
                    <Form.Control as="textarea" rows="10" disabled value={post.body}/>
                </Form.Group>
            </Form>
        </div>
    );
};
