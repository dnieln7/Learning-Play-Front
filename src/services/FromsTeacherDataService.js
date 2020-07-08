import axios from "axios";

const URL = "http://localhost:8080/forms/teacher";
const HEADERS = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json"
};

export function getForms() {
    return axios.get(URL, {headers: HEADERS});
}

export function getFormById(id) {
    return axios.get(URL + "/" + id, {headers: HEADERS});
}

export function postForm(form) {
    return axios.post(URL, form, {headers: HEADERS});
}

export function deleteForm(id) {
    return axios.delete(URL + "/" + id, {headers: HEADERS});
}

export const object = [
    {
        type: "OPEN",
        title: "pregunta 1",
        answer: "Answer 1",
        options: []
    },
    {
        type: "OPTIONS",
        title: "Pregunta opciones 1",
        answer: "",
        options: [
            {
                title: "respuesta 1",
                correct: true
            },
            {
                title: "respuesta 2",
                correct: false
            }
        ]
    },
    {
        type: "OPEN",
        title: "Pregunta 2",
        answer: "Answer 1",
        options: []
    },
    {
        type: "OPTIONS",
        title: "Pregunta Opciones 2",
        answer: "",
        option: [
            {
                title: "Respuesta 3",
                correct: false
            },
            {
                title: "Respuesta 4",
                correct: true
            }
        ]
    }
];
