import "../pages-styles.css";

import React, {useEffect, useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {useHistory} from "react-router-dom";
import {getTest} from "../../services/FromsStudentDataService";
import {AnsweredTestItem} from "../../components/answered-test-item";

export const AnsweredTestList = () => {
    const [forms, setForms] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getTest().then(response => setForms(response.data));
    }, [forms.length]);

    return (
        <div className="p-4">
            <div className="mb-4 text-light text-center">
                <h1 className="font-title">Evaluaciones Contestadas</h1>
            </div>
            <ListGroup>
                {
                    forms.map((form, index) => <AnsweredTestItem key={index} content={{
                        title: form.title,
                        lesson: form.lesson,
                        teacher: form.student.name,
                        grade: form.grade,
                        gradeFun: () => history.push("/test/answered/" + form.id)
                    }}/>)
                }
            </ListGroup>
        </div>
    );
};
