
import { BASE_URL } from "../utils/constants";


export function checkResponse(response) {
    return response.ok ? response.json() : Promise.reject("Error!!!");
}

export function request(endpoint, options) {
    return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse)
}
