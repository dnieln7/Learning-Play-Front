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
        if (user.role === "STUDENT") {
            return (
                <div>
                    <div className="title">
                        <h1 className={"text-light text-center"}>Bienvenido {user.name}</h1>
                        <h2 className={"text-light text-center"}>Panel de estudiantes</h2>
                    </div>
                    <div className={"deck-container"}>
                        <ContentCard content={
                            {
                                img: test_completed,
                                title: "Evaluaciones",
                                subtitle: "Vizualiza las evaluaciones publicadas",
                                path: () => history.push("/available-forms/list")
                            }}/>
                        <ContentCard content={
                            {
                                img: test_completed,
                                title: "Mis evaluaciones",
                                subtitle: "Revisa tus resultados",
                                path: () => history.push("/graded-forms/list")
                            }}/>
                        <ContentCard content={
                            {
                                img: "https://img.icons8.com/fluent/200/000000/book.png",
                                title: "Publicaciones",
                                subtitle: "Consulta los contenidos públicados",
                                path: () => history.push("/posts/list")
                            }}/>
                    </div>
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
                                path: () => history.push("/forms/list")
                            }}/>
                        <ContentCard content={
                            {
                                img: test_completed,
                                title: "Evaluaciones contestadas",
                                subtitle: "Califica a tus estudiantes",
                                path: () => history.push("/completed-forms/list")
                            }}/>
                        <ContentCard content={
                            {
                                img: "https://img.icons8.com/fluent/200/000000/book.png",
                                title: "Nuevo contenido",
                                subtitle: "Publica un nuevo contenido",
                                path: () => history.push("/posts/create")
                            }}/>
                        <ContentCard content={
                            {
                                img: "https://img.icons8.com/fluent/200/000000/book.png",
                                title: "Publicaciones",
                                subtitle: "Consulta los contenidos públicados",
                                path: () => history.push("/posts/list")
                            }}/>
                    </div>
                </div>
            );
        }
    }
};
