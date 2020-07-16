import "./pages-styles.css";

import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import {useLocation} from "react-router-dom";
import {getPostById} from "../services/PostDataService";

export const PublishedPostView = () => {
    const location = useLocation();
    const path = location.pathname.split("/");

    const [post, setPost] = useState({teacher: {}});

    useEffect(() => {
        getPostById(path[path.length - 1]).then(response => {
            setPost(response.data);
        });
    }, [post.id]);

    return (
        <div className="make-column justify-content-center align-items-center mt-5">
            <div className="w-75 mb-2 text-light text-center">
                <h1 className="font-title">{post.title}</h1>
                <h5 className="font-subtitle text-left">Publicado por: {post.teacher.name}</h5>
                <h6 className="font-subtitle text-left">
                    Fecha de publicación: {new Date(post.date).toLocaleString().substring(0, 9)}
                </h6>
            </div>

            <Form className="text-light w-75 align-self-center">
                <Form.Group>
                    <Form.Control as="textarea" rows="10" disabled value={post.body}/>
                </Form.Group>
            </Form>
        </div>
    );
};
