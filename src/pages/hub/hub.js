import "./hub.css"
import "../pages-styles.css"

import test_new from "../../assets/images/test_new.png"
import test_update from "../../assets/images/test_update.png"
import test_completed from "../../assets/images/test_completed.png"

import React from "react";
import HubCard from "../../components/hub-card/hub-card";
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
                <div className="mb-4 mt-4 text-center text-light">
                    <h1 className="font-title">Bienvenido {user.name}</h1>
                    <h2 className="font-subtitle">
                        Panel de {user.role === "STUDENT" ? "Estudiantes" : "Maestros"}
                    </h2>
                </div>
                {
                    user.role === "STUDENT"
                        ?
                        <div className="hub-container">
                            <div className="make-row">
                                <HubCard content={
                                    {
                                        img: test_completed,
                                        title: "Evaluaciones",
                                        subtitle: "Vizualiza las evaluaciones publicadas",
                                        path: () => history.push("/test/available")
                                    }}/>
                                <HubCard content={
                                    {
                                        img: test_completed,
                                        title: "Mis evaluaciones",
                                        subtitle: "Revisa tus resultados",
                                        path: () => history.push("/test/graded")
                                    }}/>
                            </div>
                            <div className="make-row">
                                <HubCard content={
                                    {
                                        img: "https://img.icons8.com/fluent/200/000000/book.png",
                                        title: "Publicaciones",
                                        subtitle: "Consulta los contenidos públicados",
                                        path: () => history.push("/post/published")
                                    }}/>
                            </div>
                        </div>
                        :
                        <div className="hub-container">
                            <div className="make-row">
                                <HubCard content={
                                    {
                                        img: test_new,
                                        title: "Nueva evaluación",
                                        subtitle: "Crea una nueva evaluación",
                                        path: () => history.push("/test/creator")
                                    }}/>
                                <HubCard content={
                                    {
                                        img: test_update,
                                        title: "Evaluaciones",
                                        subtitle: "Vizualiza las evaluaciones creadas",
                                        path: () => history.push("/test/published")
                                    }}/>
                            </div>
                            <div className="make-row">
                                <HubCard content={
                                    {
                                        img: test_completed,
                                        title: "Evaluaciones contestadas",
                                        subtitle: "Califica a tus estudiantes",
                                        path: () => history.push("/test/answered")
                                    }}/>
                                <HubCard content={
                                    {
                                        img: "https://img.icons8.com/fluent/200/000000/book.png",
                                        title: "Nuevo contenido",
                                        subtitle: "Publica un nuevo contenido",
                                        path: () => history.push("/post/creator")
                                    }}/>
                            </div>
                            <div className="make-row">
                                <HubCard content={
                                    {
                                        img: "https://img.icons8.com/fluent/200/000000/book.png",
                                        title: "Publicaciones",
                                        subtitle: "Consulta los contenidos públicados",
                                        path: () => history.push("/post/published")
                                    }}/>
                            </div>
                        </div>
                }
            </div>
        );
    }
};
