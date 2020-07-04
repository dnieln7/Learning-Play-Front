import "./hub.css";
import test_new from "../../assets/images/test_new.png"
import test_update from "../../assets/images/test_update.png"
import test_completed from "../../assets/images/test_completed.png"

import React from "react";
import ContentCard from "../../components/content-card/content-card";
import {useHistory} from "react-router-dom";


export const Hub = () => {
    const history = useHistory();

    return (
        <div>
            <div className="title">
                <h1 className={"text-light text-center"}>Welcome</h1>
                <h2 className={"text-light text-center"}>Teacher Hub</h2>
            </div>
            <div className={"deck-container"}>
                <ContentCard content={
                    {
                        img: test_new,
                        title: "New Test",
                        subtitle: "Create a new test",
                        path: () => history.push("/forms/creator")
                    }}/>
                <ContentCard content={
                    {
                        img: test_update,
                        title: "Created tests",
                        subtitle: "Update your test",
                        path: () => history.push("/forms/view")
                    }}/>
                <ContentCard content={
                    {
                        img: test_completed,
                        title: "Answered tests",
                        subtitle: "Grade your students tests",
                        path: () => history.push("/forms/view")
                    }}/>
            </div>
        </div>
    );
};
