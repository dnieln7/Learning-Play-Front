import "../pages-styles.css";

import React, {useEffect, useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {deleteForm, getForms} from "../../services/FromsTeacherDataService";
import {PublishedTestItem} from "../../components/published-test-item";
import {useHistory} from "react-router-dom";

export const PublishedTestList = () => {
    const [forms, setForms] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getForms().then(response => setForms(response.data));
    }, [forms.length]);

    return (
        <div className="p-4">
            <div className="mb-4 text-light text-center">
                <h1 className="font-title">Evaluaciones Creadas</h1>
            </div>
            <ListGroup>
                {
                    forms.map((form, index) => <PublishedTestItem key={index} content={{
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
                        viewItem: () => history.push("/test/published/" + form.id)
                    }}/>)
                }
            </ListGroup>
        </div>
    );
};
