import axios from "axios";

const URL = "http://localhost:8080/forms/student";

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

export function putForm(id, form) {
    return axios.put(URL + "/" + id, form, {headers: HEADERS});
}

export function deleteForm(id) {
    return axios.delete(URL + "/" + id, {headers: HEADERS});
}
