import React, {useEffect, useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {getForms} from "../../services/FromsTeacherDataService";
import {useHistory} from "react-router-dom";
import {AvailableTestListItem} from "../../components/available-test-list-item/available-test-list-item";

export const AvailableTestList = () => {
    const [forms, setForms] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getForms().then(response => setForms(response.data));
    }, [forms.length]);

    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-light text-center">Evaluaciones Disponibles</h1>
            </div>
            <ListGroup>
                {
                    forms.map((form, index) => <AvailableTestListItem key={index} content={{
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
