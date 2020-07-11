import "./graded-test-list.css";

import React, {useEffect, useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {useHistory} from "react-router-dom";
import {getForms} from "../../services/FromsStudentDataService";
import {CompletedTestListItem} from "../../components/completed-test-list-item/completed-test-list-item";
import {GradedTestListItem} from "../../components/graded-test-list-item/graded-test-list-item";

export const GradedTestList = () => {
    const [forms, setForms] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getForms().then(response => setForms(response.data));
    }, [forms.length]);

    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-light text-center">Evaluaciones Calificadas</h1>
            </div>
            <ListGroup>
                {
                    forms.map((form, index) => <GradedTestListItem key={index} content={{
                        title: form.title,
                        lesson: form.lesson,
                        grade: form.grade
                    }}/>)
                }
            </ListGroup>
        </div>
    );
};
