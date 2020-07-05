import "./hub.css";
import test_new from "../../assets/images/test_new.png"
import test_update from "../../assets/images/test_update.png"
import test_completed from "../../assets/images/test_completed.png"

import React from "react";
import ContentCard from "../../components/content-card/content-card";
import {Link, useHistory} from "react-router-dom";


export const Hub = () => {
    const history = useHistory();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user === null) {
        return (
            <div>
                <p className="text-center text-danger title" style={{"font-size": "2rem"}}>Debes iniciar sesión</p>
                <p className="title text-center text-danger"><Link to={"/login"}>Ir a Login</Link></p>
            </div>
        );
    } else {
        return (
            <div>
                <div className="title">
                    <h1 className={"text-light text-center"}>Bienvenido {user.name}</h1>
                    <h2 className={"text-light text-center"}>Panel de maestros</h2>
                </div>
                <div className={"deck-container"}>
                    <ContentCard content={
                        {
                            img: test_new,
                            title: "Nueva evaluación",
                            subtitle: "Crea una nueva evaluación",
                            path: () => history.push("/forms/creator")
                        }}/>
                    <ContentCard content={
                        {
                            img: test_update,
                            title: "Evaluaciones",
                            subtitle: "Vizualiza las evaluaciones creadas",
                            path: () => history.push("/forms/view")
                        }}/>
                    <ContentCard content={
                        {
                            img: test_completed,
                            title: "Evaluaciones contestadas",
                            subtitle: "Califica a tus estudiantes",
                            path: () => history.push("/forms/view")
                        }}/>
                </div>
            </div>
        );
    }
};
