import React, {useEffect, useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {getForms} from "../../services/FromsTeacherDataService";
import {useHistory} from "react-router-dom";
import {AvailableTestItem} from "../../components/available-test-item";
import {getTest} from "../../services/FromsStudentDataService";

export const AvailableTestList = () => {
    const [forms, setForms] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getForms().then(responseForms => {
            getTest().then(responseTest => {
                let testTitles = [];
                responseTest.data.forEach(test => testTitles.push(test.title));
                setForms(responseForms.data.filter(form => !testTitles.includes(form.title)));
            });
        });
    }, [forms.length]);

    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-light text-center">Evaluaciones Disponibles</h1>
            </div>
            <ListGroup>
                {
                    forms.map((form, index) => <AvailableTestItem key={index} content={{
                        title: form.title,
                        lesson: form.lesson,
                        teacher: form.teacher.name,
                        take: () => history.push("/test/available/" + form.id)
                    }}/>)
                }
            </ListGroup>
        </div>
    );
};
