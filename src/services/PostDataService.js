import axios from "axios";

const URL = "http://localhost:8080/posts";

const HEADERS = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json"
};

export function getPost() {
    return axios.get(URL, {headers: HEADERS});
}

export function getPostById(id) {
    return axios.get(URL + "/" + id, {headers: HEADERS});
}

export function postPost(post) {
    return axios.post(URL, post, {headers: HEADERS});
}
