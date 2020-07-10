import "./test-list.css";

import React, {useEffect, useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {deleteForm, getForms} from "../../services/FromsTeacherDataService";
import {TestListItem} from "../../components/test-list-item/test-list-item";
import {useHistory} from "react-router-dom";

export const TestList = () => {
    const [forms, setForms] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getForms().then(response => setForms(response.data));
    }, [forms.length]);

    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-light text-center">Evaluaciones Realizadas</h1>
            </div>
            <ListGroup>
                {
                    forms.map((form, index) => <TestListItem key={index} content={{
                        title: form.title,
                        lesson: form.lesson,
                        teacher: form.teacher.name,
                        deleteItem: () => deleteForm(form.id).then(response => {
                            console.log(response.data);
                            if (response.data.success === 1) {
                                forms.splice(index, 1);
                                window.location.reload();
                            }
                        }),
                        viewItem: () => history.push("/form/" + form.id)
                    }}/>)
                }
            </ListGroup>
        </div>
    );
};
