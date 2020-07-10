import axios from "axios";

const URL = "http://localhost:8080/users";

const HEADERS = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json"
};

export function get() {
    return axios.get(URL, {headers: HEADERS});
}

export function getUserById(id) {
    return axios.get(URL + "/" + id, {headers: HEADERS});
}

export function login(auth) {
    return axios.post(URL + "/login", auth, {headers: HEADERS});
}

export function signUp(user) {
    return axios.post(URL + "/sign-up", user, {headers: HEADERS});
}
