import "./pages-styles.css";

import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {getPost} from "../services/PostDataService";
import {PostCard} from "../components/post-card/post-card";

export const PublishedPostList = () => {
    const [posts, setPosts] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getPost().then(response => setPosts(response.data))
    }, [posts.length]);

    return (
        <div className="p-4">
            <div className="mb-4 text-light text-center">
                <h1 className="font-title">Contenidos publicados</h1>
            </div>
            <div className="make-column align-items-center">
                <div className="post-container">
                    {
                        posts.map((post, index) =>
                            <PostCard key={index}
                                      content={{
                                          title: post.title,
                                          goPostDetail: () => history.push("/post/published/" + post.id)
                                      }}/>)
                    }
                </div>
            </div>
        </div>
    );
};
