import React, {useEffect, useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {useHistory} from "react-router-dom";
import {getTest} from "../../services/FromsStudentDataService";
import {GradedTestItem} from "../../components/graded-test-item";

export const GradedTestList = () => {
    const [forms, setForms] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getTest().then(response => setForms(response.data));
    }, [forms.length]);

    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-light text-center">Evaluaciones Calificadas</h1>
            </div>
            <ListGroup>
                {
                    forms.map((form, index) => <GradedTestItem key={index} content={{
                        title: form.title,
                        lesson: form.lesson,
                        grade: form.grade,
                        date: form.date
                    }}/>)
                }
            </ListGroup>
        </div>
    );
};
