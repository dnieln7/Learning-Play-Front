import "./completed-test-list.css";
import "../pages-styles.css";

import React, {useEffect, useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {useHistory} from "react-router-dom";
import {getForms} from "../../services/FromsStudentDataService";
import {CompletedTestListItem} from "../../components/completed-test-list-item/completed-test-list-item";

export const CompletedTestList = () => {
    const [forms, setForms] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getForms().then(response => setForms(response.data));
    }, [forms.length]);

    return (
        <div className="p-4">
            <div className="mb-4 text-light text-center">
                <h1 className="font-title">Evaluaciones Contestadas</h1>
            </div>
            <ListGroup>
                {
                    forms.map((form, index) => <CompletedTestListItem key={index} content={{
                        title: form.title,
                        lesson: form.lesson,
                        teacher: form.student.name,
                        grade: form.grade,
                        gradeFun: () => history.push("/completed-forms/grade/" + form.id)
                    }}/>)
                }
            </ListGroup>
        </div>
    );
};
