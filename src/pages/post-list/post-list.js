import "./post-list.css"

import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {getPost} from "../../services/PostDataService";
import Row from "react-bootstrap/Row";
import {PostCard} from "../../components/post-card/post-card";

export const PostList = () => {
    const [posts, setPosts] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getPost().then(response => setPosts(response.data))
    }, [posts.length]);

    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-light text-center">Contenidos publicados</h1>
            </div>
            <Row className="text-center justify-content-center text-light" sm={"12"}>
                {
                    posts.map((post, index) => <PostCard key={index} content={{
                        title: post.title,
                        goPostDetail: () => history.push("/posts/view/" + post.id)
                    }}/>)
                }
            </Row>
        </div>
    );
};
